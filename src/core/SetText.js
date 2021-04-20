export default class SetText {
  constructor() {
    this.text;
    this.name;
  }

  setText(text) {
    this.text = text;
  }
  setName(name) {
    this.name = name;
  }
  in() {}

  out(writer) {
    writer.write(`Text: ${this.text}, Owner: ${this.name}, `);
  }
}
