export const validateLine = (tmp) => {
  let arr = tmp.toString().split(' ');
  const reNumber = /[0-9]/;
  const reWord = /[A-Za-zА-Яа-я]/;
  if (arr.length == 4) {
    if (arr[0] == 1) {
      if (reWord.test(arr[1]) && reWord.test(arr[2]) && arr[1].length == arr[2].length) return true;
    }
    if (arr[0] == 2) {
      if (reWord.test(arr[1]) && reNumber.test(arr[2])) return true;
    }
    if (arr[0] == 3) {
      if (reWord.test(arr[1]) && reNumber.test(arr[2]) && arr[1].length == arr[2].length)
        return true;
    }
  }
  console.log(arr);
  return false;
};
