export default class SetText {
  constructor() {
    this.text;
  }

  setText(text) {
    this.text = text;
  }
  in() {}

  out(writer) {
    writer.write(`Text: ${this.text}, `);
  }
}
