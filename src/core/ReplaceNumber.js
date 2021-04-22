import { replaceNumberFunc } from '../utils/encryption.js';
import SetText from './SetText.js';

export default class ReplaceNumber extends SetText {
  constructor() {
    super();
    this.replaceNumber;
    this.decodedText;
  }

  in(tmp) {
    const { replaceNumber, replaceText } = replaceNumberFunc(tmp);

    this.replaceNumber = replaceNumber.join('-');
    this.decodedText = replaceText;
  }

  out(writer) {
    super.out(writer);

    writer.writeLine(`ReplaceNumber: ${this.replaceNumber}, DecodedText: ${this.decodedText}`);
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
    writer.writeLine(` are ReplaceNumber and Shift`);
  }
  replaceMM(element, writer) {
    this.out(writer);
    element.out(writer);
    writer.writeLine(`are ReplaceNumber and Replacement`);
  }
  replaceNumberMM(element, writer) {
    this.out(writer);
    element.out(writer);
    writer.writeLine(`are ReplaceNumber and ReplaceNumber`);
  }
}
