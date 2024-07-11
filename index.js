import vfile from "to-vfile";

function toGatsbyRemarkPlugin(remarkPlugin) {
  return function ({ markdownAST, markdownNode }, options) {
    const file = vfile(markdownNode.fileAbsolutePath);

    return remarkPlugin(options)(markdownAST, file);
  };
}

export default toGatsbyRemarkPlugin;
