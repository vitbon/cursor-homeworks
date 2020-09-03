function getRandomChinese(length) {
  const CHECKTIME = 1;
  const CHINA_MIN = 13290;
  const CHINA_MAX = 40917;
  let chinaStr = '';
  let diffDate;
  diffDate = Date.now();
  if (!(Number.isInteger(length) && length > 1 && length < 16)) return Promise.reject('Некоректне введення');
  let times = length;
  return new Promise((resolve, reject) => {
    chinaStr = '';
    const intID = setInterval(() => {
      let sign = +Date.now().toString().slice(-5);
      if (sign > CHINA_MAX) sign = sign % CHINA_MIN + CHINA_MIN;
      if (sign < CHINA_MIN) sign = sign + CHINA_MIN;
      chinaStr += String.fromCharCode(sign);
      if (--times <= 0) {
        clearInterval(intID);
        diffDate = Date.now() - diffDate;
        resolve(chinaStr);
      }
    }, CHECKTIME);
  });
}

export default getRandomChinese;
