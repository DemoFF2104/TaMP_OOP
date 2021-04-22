import { replaceFunc } from '../utils/encryption.js';
import SetText from './SetText.js';

export default class Replacement extends SetText {
  constructor() {
    super();
    this.replacement;
    this.decodedText;
  }

  in(tmp) {
    const { replacement, txt1 } = replaceFunc(tmp);

    this.replacement = replacement.join('-');
    this.decodedText = txt1.join('');
  }

  out(writer) {
    super.out(writer);

    writer.writeLine(`Replacement: ${this.replacement}, DecodedText: ${this.decodedText}`);
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
    writer.writeLine(` are Replacement and Shift`);
  }
  replaceMM(element, writer) {
    this.out(writer);
    element.out(writer);
    writer.writeLine(`are Replacement and Replacement`);
  }
  replaceNumberMM(element, writer) {
    this.out(writer);
    element.out(writer);
    writer.writeLine(`are Replacement and ReplaceNumber`);
  }
}
