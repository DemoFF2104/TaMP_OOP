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
    let len = this.setLengthText(this.text);

    writer.write(`Text: ${this.text}, Length: ${len}, `);
  }
}
