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
}
