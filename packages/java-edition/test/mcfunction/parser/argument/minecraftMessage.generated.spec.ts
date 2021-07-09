// This file is generated by `_generate.ts`. Do not modify by hand.
import { showWhitespaceGlyph, testParser } from '@spyglassmc/core/test-out/utils'
import { describe, it } from 'mocha'
import snapshot from 'snap-shot-it'
import { argument } from '../../../../lib/mcfunction/parser'
import type { ArgumentTreeNode } from '../../../../lib/mcfunction/tree'
import { CommandArgumentTestSuites, meta } from './_suites'

describe('mcfunction argument minecraft:message', () => {
	for (const { content, properties } of CommandArgumentTestSuites['minecraft:message']!) {
		const treeNode: ArgumentTreeNode = {
			type: 'argument',
			parser: 'minecraft:message',
			properties,
		}
		for (const string of content) {
			it(`Parse "${showWhitespaceGlyph(string)}"${properties ? ` with ${JSON.stringify(properties)}` : ''}`, () => {
				snapshot(testParser(argument('test', treeNode)!, string, { project: { meta } }))
			})
		}
	}
})
