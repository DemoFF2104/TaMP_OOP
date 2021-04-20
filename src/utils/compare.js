import SetText from '../core/SetText.js';
export const compare = (setText, a, b) => {
  return setText.setLengthText(a) < setText.setLengthText(b);
};
