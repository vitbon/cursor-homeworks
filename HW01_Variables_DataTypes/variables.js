// оголошення та ініціалізація цін на товари 
const priceApple = 15.678;
const priceMango = 123.965;
const priceLemon = 90.2345;	  

// логіка 
const maxNumber = Math.max(priceApple, priceMango, priceLemon);
const minNumber = Math.min(priceApple, priceMango, priceLemon);
const totalSum = priceApple + priceMango + priceLemon;
const priceWithoutCopeeks = Math.floor(priceApple) + Math.floor(priceMango) + Math.floor(priceLemon);
const sumRound100 = Math.round(totalSum / 100) * 100;
const totalSumFloor = Math.floor(totalSum);
const isSumFloorEven = (Math.floor(totalSum) % 2) ? false : true;
const clientMoney = 500;
const sumRest = Math.trunc((clientMoney-totalSum) * 100)/100;
const averageValue = totalSum / 3;
const discount = Math.trunc(Math.random() * 100) + 1;
const discountSum = Math.round(totalSum * discount) / 100;
const pureRevenue = Math.round(((totalSum / 2) - discountSum) * 100) / 100;
	
// Advanced Level
let consoleStr = webStr = "";

webStr = `Максимальне число: ${maxNumber}.\<br/\>
Мінімальне число: ${minNumber}.\<br/\>
Загальна сума: ${totalSum} грн.\<br/\>
Сума цілих чисел без копійок, що округлена в меншу сторону: ${priceWithoutCopeeks} грн.\<br/\>
Сума товарів, округлена до сотень: ${sumRound100} грн.\<br/\>
Сума товарів, округлена в меншу сторону: ${totalSumFloor} грн. Це парне число? ${isSumFloorEven}.\<br/\>
Здача від 500 грн. без округлення: ${sumRest} грн.\<br/\>
Середнє значення ціни: ${averageValue.toFixed(2)} грн.\<br/\>
Ваша знижка складає ${discount}%, що є еквівалентом ${discountSum} грн.\<br/\>
Чистий прибуток: ${Math.round(totalSum / 2 * 100) / 100} - ${discountSum} = ${pureRevenue} грн.\<br/\>`;

consoleStr = webStr.split('\<br/\>').join('');

// вивід на веб-сторінку та консоль
document.writeln(webStr);
console.log(consoleStr);