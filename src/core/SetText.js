export default class SetText {
  constructor() {
    this.text;
  }

  setText(text) {
    this.text = text;
  }
  in() {}
  setLengthText(text) {
    return text.length;
  }
  out(writer) {
    writer.write(`Text: ${this.text}, `);
  }
}
