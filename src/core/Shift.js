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
}
