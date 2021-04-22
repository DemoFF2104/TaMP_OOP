import { shiftFunc } from '../utils/encryption.js';
import SetText from './SetText.js';
export default class Shift extends SetText {
  constructor() {
    super();
    this.shift;
    this.decodedText;
  }

  in(tmp) {
    const { shift, strEncoded } = shiftFunc(tmp);

    this.shift = shift;
    this.decodedText = strEncoded;
  }

  out(writer) {
    super.out(writer);
    writer.writeLine(`Shift: ${this.shift}, DecodedText: ${this.decodedText}`);
  }
  multiMethod(element, writer) {
    switch (Object.keys(element)[0]) {
      case 'shift':
        this.shiftMM(element, writer);
        break;
      case 'replacement':
        this.replaceMM(element, writer);
        break;
      case 'replaceNumber':
        this.replaceNumberMM(element, writer);
        break;
      default:
        return 0;
    }
  }
  shiftMM(element, writer) {
    this.out(writer);
    element.out(writer);
    writer.writeLine(` are Shift and Shift`);
  }
  replaceMM(element, writer) {
    this.out(writer);
    element.out(writer);
    writer.writeLine(`are Shift and Replacement`);
  }
  replaceNumberMM(element, writer) {
    this.out(writer);
    element.out(writer);
    writer.writeLine(`are Shift and ReplaceNumber`);
  }
}
