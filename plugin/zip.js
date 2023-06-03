/**
 * webpack plugin
 * @description zip dist
 * @class Zip
 */
const treeShaking = false;
class Zip {
  constructor(options) {
    this.options = options;
  }
  apply(compiler) {
    compiler.hooks.done.tap('Zip', () => {});
  }
}

export default Zip;
