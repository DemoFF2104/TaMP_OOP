import fs from 'fs';

export default class Writer {
  constructor(path) {
    this.path = path;
    this.string = '';
  }

  writeLine(str) {
    this.string += str + '\n';
  }

  write(str) {
    this.string += str;
  }

  save() {
    fs.writeFile(this.path, this.string, (err) => {
      if (err) throw err;
    });
  }
}
