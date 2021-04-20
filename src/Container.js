import FinText from './core/FinText.js';

export default class Container {
  constructor() {
    this.array = [];
  }

  in(reader) {
    while (!reader.fileEmpty()) {
      let tmp = reader.readLine();
      let setText = new FinText();
      setText.in(tmp, this.array);
    }
  }
  out(writer) {
    let c = this.array.length;

    writer.writeLine(`Container contains: ${c}, elements!`);

    if (c > 0)
      for (let i = 0; i < c; i++) {
        this.array[i].out(writer);
      }
  }
  outShift(writer, element) {
    let tmpArray = this.array.filter((item) => {
      if (Object.keys(item)[0] === element) {
        return true;
      }
    });
    let c = tmpArray.length;
    writer.writeLine(`Container contains: ${c}, ${element} elements!`);
    if (c > 0)
      for (let i = 0; i < c; i++) {
        tmpArray[i].out(writer);
      }
  }

  clear() {
    this.array = [];
  }
}
