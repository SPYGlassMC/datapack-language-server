/* istanbul ignore file */

import { COLLECTIONS as JsonCollections } from '@mcschema/core'
import { promises as fsp } from 'fs'
import path from 'path'
import { BlockDefinition } from '../types/BlockDefinition'
import { compileNamespaceSummary, NamespaceSummary, RawNamespaceSummary } from '../types/NamespaceSummary'
import { nbtdoc } from '../types/nbtdoc'
import { Registry } from '../types/Registry'
import { VersionInformation } from '../types/VersionInformation'
import { requestText, pathAccessible, readFile } from '../utils'

let faildTimes = 0
const MaxFaildTimes = 3

export type VanillaData = {
    BlockDefinition: BlockDefinition,
    Nbtdoc: nbtdoc.Root,
    Registry: Registry,
    NamespaceSummary: NamespaceSummary
}


export const FallbackBlockDefinition: BlockDefinition = require('./BlockDefinition.json') as BlockDefinition
export const FallbackRawNamespaceSummary: RawNamespaceSummary = require('./NamespaceSummary.json') as RawNamespaceSummary
export const RegistryNamespaceSummary: Partial<NamespaceSummary> = require('./RegistryNamespaceSummary.json') as Partial<NamespaceSummary>
export const FallbackNamespaceSummary: NamespaceSummary = compileNamespaceSummary(FallbackRawNamespaceSummary, RegistryNamespaceSummary)
export const FallbackNbtdoc: nbtdoc.Root = require('./Nbtdoc.json') as nbtdoc.Root
export const FallbackRegistry: Registry = require('./Registry.json') as Registry

export const FallbackVanillaData: VanillaData = {
    BlockDefinition: FallbackBlockDefinition,
    NamespaceSummary: FallbackNamespaceSummary,
    Nbtdoc: FallbackNbtdoc,
    Registry: FallbackRegistry
}

export const VanillaDataCache: {
    BlockDefinition: { [version: string]: BlockDefinition },
    NamespaceSummary: { [version: string]: NamespaceSummary },
    Nbtdoc: { [version: string]: nbtdoc.Root },
    Registry: { [version: string]: Registry }
} = {
    BlockDefinition: { '20w28a': FallbackBlockDefinition },
    NamespaceSummary: { '20w28a': FallbackNamespaceSummary },
    Nbtdoc: { '1.16.1': FallbackNbtdoc },
    Registry: { '20w28a': FallbackRegistry }
}

export type DataType = 'BlockDefinition' | 'NamespaceSummary' | 'Nbtdoc' | 'Registry'

export type DataSource = 'GitHub' | '码云'

function getUri(source: DataSource, maintainer: string, name: string, path: string) {
    if (source === 'GitHub') {
        return `https://raw.githubusercontent.com/${maintainer}/${name}/${path}`
    } else {
        return `https://gitee.com/SPGoding/${name}/raw/${path}`
    }
}

function getReportUri(type: DataType, source: DataSource, version: string, processedVersions: string[], isLatestSnapshot: boolean) {
    switch (type) {
        case 'BlockDefinition':
            if (processedVersions.includes(version)) {
                return getUri(source, 'Arcensoth', 'mcdata', `${isLatestSnapshot ? 'master' : version}/processed/reports/blocks/blocks.min.json`)
            } else {
                return getUri(source, 'Arcensoth', 'mcdata', `${version}/generated/reports/blocks.json`)
            }
        case 'NamespaceSummary':
            if (processedVersions.includes(version)) {
                return getUri(source, 'Arcensoth', 'mcdata', `${isLatestSnapshot ? 'master' : version}/processed/data/minecraft/minecraft.min.json`)
            } else {
                throw new Error(`No namespace summary for version ${version}.`)
            }
        case 'Nbtdoc':
            return getUri(source, 'Yurihaia', 'mc-nbtdoc', `${isLatestSnapshot ? 'generated' : `${version}-gen`}/build/generated.json`)
        case 'Registry':
        default:
            if (processedVersions.includes(version)) {
                return getUri(source, 'Arcensoth', 'mcdata', `${isLatestSnapshot ? 'master' : version}/processed/reports/registries/registries.min.json`)
            } else {
                return getUri(source, 'Arcensoth', 'mcdata', `${version}/generated/reports/registries.json`)
            }
    }
}

async function getSingleVanillaData(type: DataType, source: DataSource, version: string, globalStoragePath: string | undefined, processedVersions: string[], latestSnapshot: string) {
    const cache = VanillaDataCache[type]
    if (!cache[version]) {
        if (faildTimes < MaxFaildTimes) {
            const versionPath = globalStoragePath ? path.join(globalStoragePath, version) : undefined
            const filePath = versionPath ? path.join(versionPath, `${type}.json`) : undefined
            try {
                if (filePath && await pathAccessible(filePath)) {
                    console.info(`[VanillaData: ${type} for ${version}] Loading from local file ${filePath}...`)
                    const json = JSON.parse(await readFile(filePath))
                    console.info(`[VanillaData: ${type} for ${version}] Loaded from local file.`)
                    cache[version] = json
                } else {
                    const isLatestSnapshot = version === latestSnapshot
                    const uri = getReportUri(type, source, version, processedVersions, isLatestSnapshot)
                    console.info(`[VanillaData: ${type} for ${version}] Fetching from ${source} ${uri}...`)
                    const str = await Promise.race([
                        requestText(uri),
                        new Promise<string>((_, reject) => {
                            setTimeout(() => { reject(new Error('Time out!')) }, 7_000)
                        })
                    ])
                    const json = JSON.parse(str)
                    console.info(`[VanillaData: ${type} for ${version}] Fetched from ${source}.`)
                    if (versionPath && filePath) {
                        await fsp.mkdir(versionPath, { recursive: true })
                        fsp.writeFile(filePath, JSON.stringify(json), { encoding: 'utf8' })
                        console.info(`[VanillaData: ${type} for ${version}] Saved at ${filePath}.`)
                    }
                    cache[version] = json
                }
                if (type === 'NamespaceSummary') {
                    cache[version] = compileNamespaceSummary(cache[version] as unknown as RawNamespaceSummary, RegistryNamespaceSummary)
                    console.info(`[VanillaData: ${type} for ${version}] Merged RegistryNamespaceSummary.json in.`)
                }
            } catch (e) {
                console.warn(`[VanillaData: ${type} for ${version}] ${e} (${++faildTimes}/${MaxFaildTimes})`)
                console.info(`[VanillaData: ${type} for ${version}] Used the fallback.`)
                return FallbackVanillaData[type]
            }
        } else {
            return FallbackVanillaData[type]
        }
    }
    return cache[version]
}

export async function getVanillaData(versionOrLiteral: string | null, source: DataSource, versionInformation: VersionInformation | undefined, globalStoragePath: string | undefined) {
    if (!versionInformation || !versionOrLiteral) {
        return FallbackVanillaData
    }
    const ans: VanillaData = { ...FallbackVanillaData }
    const types: DataType[] = ['BlockDefinition', 'NamespaceSummary', 'Nbtdoc', 'Registry']
    let version: string
    switch (versionOrLiteral.toLowerCase()) {
        case 'latest snapshot':
            version = versionInformation.latestSnapshot
            break
        case 'latest release':
            version = versionInformation.latestRelease
            break
        default:
            version = versionOrLiteral
            break
    }
    for (const type of types) {
        ans[type] = await getSingleVanillaData(
            type, source, version, globalStoragePath, versionInformation.processedVersions, versionInformation.latestSnapshot
        ) as any
    }
    for (const key in ans.Registry) {
        /* istanbul ignore else */
        if (Object.prototype.hasOwnProperty.call(ans.Registry, key)) {
            const reg = ans.Registry[key]
            JsonCollections.register(key.replace(/^minecraft:/, ''), Object.keys(reg.entries))
        }
    }
    return ans
}
