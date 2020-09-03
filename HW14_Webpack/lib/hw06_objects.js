const calculateWordLetters = string => {
  const text = string.toLowerCase().split("");
  let finalStr = "";
  let result = {};
  text.forEach(item => {
    result[item] = result[item] ? result[item] + 1 : 1;
  });
  Object.entries(result).forEach(item => {
    finalStr += `${item}; `;
  });
  return finalStr;
};

export default calculateWordLetters;