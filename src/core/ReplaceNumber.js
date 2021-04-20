import { replaceNumberFunc } from '../utils/encryption.js';
import SetText from './SetText.js';

export default class ReplaceNumber extends SetText {
  constructor() {
    super();
    this.replacement;
    this.decodedText;
  }

  in(tmp) {
    const { replacement, replaceText } = replaceNumberFunc(tmp);

    this.replacement = replacement.join('-');
    this.decodedText = replaceText;
  }

  out(writer) {
    super.out(writer);

    writer.writeLine(`ReplaceNumber: ${this.replacement}, DecodedText: ${this.decodedText}`);
  }
}
