module.exports = function check(str, bracketsConfig) {
  let arrStr = str.split("");
  for (let i = 0; i < arrStr.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      let bracketsVar = bracketsConfig[j];
      if (
        arrStr.indexOf(bracketsVar[0]) != -1 &&
        arrStr[i] === bracketsVar[0] &&
        arrStr[i + 1] === bracketsVar[1]
      ) {
        arrStr.splice(i, 2);
        i = -1;
        break;
      }
    }
  }
  return arrStr.length === 0;
};
