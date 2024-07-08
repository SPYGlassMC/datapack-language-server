import * as core from '@spyglassmc/core'
import type { CommandNode, CommandOptions, MacroNode, McfunctionNode } from '../node/index.js'
import type { RootTreeNode } from '../tree/index.js'
import type { ArgumentParserGetter } from './argument.js'
import { command } from './command.js'
import { macro } from './macro.js'

export interface McfunctionOptions {
	lineContinuation?: boolean
	macros?: boolean
	commandOptions?: CommandOptions
}

function mcfunction(
	commandTree: RootTreeNode,
	argument: ArgumentParserGetter,
	options: McfunctionOptions,
): core.Parser<McfunctionNode> {
	return (src, ctx) => {
		const ans: McfunctionNode = {
			type: 'mcfunction:entry',
			range: core.Range.create(src),
			children: [],
		}

		while (src.skipWhitespace().canReadInLine()) {
			let result: core.CommentNode | CommandNode | MacroNode
			if (src.peek() === '#') {
				result = comment(src, ctx) as core.CommentNode
			} else if (src.peek() === '$') {
				result = macro(options.macros ?? false)(src, ctx) as MacroNode
			} else {
				result = command(commandTree, argument, options.commandOptions)(src, ctx)
			}
			ans.children.push(result)
			src.nextLine()
		}

		ans.range.end = src.cursor

		return ans
	}
}

const comment = core.comment({ singleLinePrefixes: new Set(['#']) })

export const entry = (
	commandTree: RootTreeNode,
	argument: ArgumentParserGetter,
	options: McfunctionOptions = {},
) => {
	const parser = mcfunction(commandTree, argument, options)
	return options.lineContinuation ? core.concatOnTrailingBackslash(parser) : parser
}
