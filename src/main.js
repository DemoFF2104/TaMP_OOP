// let Container = require('./Container');
// let Reader = require('./Reader');
// let Writer = require('./Writer');
import Container from './Container.js';
import Reader from './Reader.js';
import Writer from './Writer.js';
function main() {
  console.log('Start');

  let writer = new Writer('out.txt');

  writer.writeLine('Start!');

  let container = new Container();
  let reader = new Reader('in.txt');

  container.in(reader);
  container.out(writer);
  container.multiMethod(writer);
  container.clear();
  container.out(writer);

  writer.writeLine('Stop!');

  console.log('Stop');

  writer.save();
}

main();
