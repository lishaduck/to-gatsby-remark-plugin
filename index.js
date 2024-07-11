// @ts-check
import vfile from "to-vfile";

/**
 * @import { Plugin, Processor, Settings, Transformer } from "unified";
 */

/**
 * @template T
 * @typedef {(this: Processor<Settings>, { markdownAST, markdownNode }: {markdownAST: any; markdownNode: any; }, options: T) => any} GatsbyRemarkPlugin
 */

/**
 * @template T
 * @param {Plugin} remarkPlugin
 * @returns {GatsbyRemarkPlugin<T>}
 */
function toGatsbyRemarkPlugin(remarkPlugin) {
  return function ({ markdownAST, markdownNode }, /** @type {T} */ options) {
    const file = vfile(markdownNode.fileAbsolutePath);
    /** @type {Transformer | void} */
    const builtPlugin = remarkPlugin.call(this, options);

    if (builtPlugin instanceof Function) {
      return builtPlugin(markdownAST, file);
    }
  };
}

export default toGatsbyRemarkPlugin;
