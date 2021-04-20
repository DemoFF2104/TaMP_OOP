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
  setLengthText(text) {
    return text.length;
  }

  out(writer) {
    let len = this.setLengthText(this.text);

    writer.write(`Text: ${this.text}, Length: ${len}, Owner: ${this.name}, `);
  }
}
