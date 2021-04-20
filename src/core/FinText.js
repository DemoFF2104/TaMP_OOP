import Replacement from './Replacement.js';
import Shift from './Shift.js';
export default class inText {
  constructor() {}
  in(tmp, array) {
    switch (tmp[0]) {
      case '1':
        let replacement = new Replacement();
        replacement.in(tmp.toString().split(' '));
        replacement.setText(tmp.split(' ')[1].replace(/\r/g, ''));
        replacement.setName(tmp.split(' ')[3].replace(/\r/g, ''));
        array.push(replacement);
        break;
      case '2':
        let shift = new Shift();
        shift.in(tmp.toString().split(' '));

        shift.setText(tmp.split(' ')[1]);
        shift.setName(tmp.split(' ')[3].replace(/\r/g, ''));
        array.push(shift);
        break;
      default:
        return 0;
    }
  }
}
