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
}
