const archiver = require('archiver');
const chalk = require('chalk');
const path = require('path');
const fs = require('fs');

/**
 * webpack plugin
 * @description zip dist
 * @param {Object} options { target: 压缩目标文件夹目录, filename: 压缩文件生成压缩包名}
 * @class Zip
 */
class Zip {
  constructor(options) {
    this.options = Object.assign({ target: 'dist', filename: 'dist.zip' }, options);
  }
  apply(compiler) {
    compiler.hooks.done.tap('Zip', () => {
      const rootPath = process.cwd();
      const { target, filename } = this.options;
      // 压缩文件的目标路径
      const filePath = path.resolve(rootPath, target);
      // 压缩生成文件的路径
      const zipPath = path.resolve(rootPath, filename);
      const output = fs.createWriteStream(zipPath);
      const archive = archiver('zip', {
        zlib: { level: 9 },
      });
      archive.directory(filePath, false);
      archive.pipe(output);
      output.on('close', function () {
        // 删除目标文件夹
        fs.rmdirSync(filePath, { recursive: true });
        chalk.green('压缩完成');
      });
      archive.on('error', function (err) {
        chalk.red('压缩失败', err);
      });
      archive.finalize();
    });
  }
}

export default Zip;
