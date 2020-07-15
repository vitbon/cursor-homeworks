// оголошення та ініціалізація цін на товари 
const priceApple = 15.678,
      priceMango = 123.965,
      priceLemon = 90.2345;	  

// логіка 
let maxNumber = Math.max(priceApple, priceMango, priceLemon),
    minNumber = Math.min(priceApple, priceMango, priceLemon),
    totalSum = priceApple + priceMango + priceLemon,
    priceWithoutCopeeks = Math.floor(priceApple) + Math.floor(priceMango) + Math.floor(priceLemon),
    sumRound100 = Math.round(totalSum / 100) * 100,
    totalSumFloor = Math.floor(totalSum),
    isSumFloorEven = (Math.floor(totalSum) % 2) ? false : true,
    sumRest500 = Math.trunc((500-totalSum) * 100)/100,
    averageValue = totalSum / 3,
    discount = Math.trunc(Math.random() * 100),
    discountSum = Math.round(totalSum * discount) / 100,
    pureRevenue = Math.round(((totalSum / 2) - discountSum) * 100) / 100;
	
// Advanced Level
let consoleStr = webStr = "";

webStr = `Максимальне число: ${maxNumber}.\<br/\>
Мінімальне число: ${minNumber}.\<br/\>
Загальна сума: ${totalSum}.\<br/\>
Сума цілих чисел без копійок, що округлена в меншу сторону: ${priceWithoutCopeeks}.\<br/\>
Сума товарів, округлена до сотень: ${sumRound100}.\<br/\>
Сума товарів, округлена в меншу сторону: ${totalSumFloor}. Це булеве парне? ${isSumFloorEven}.\<br/\>
Здача від 500 грн. без округлення: ${sumRest500} грн.\<br/\>
Середнє значення ціни: ${averageValue.toFixed(2)} грн.\<br/\>
Ваша знижка складає ${discount}%, що є еквівалентом ${discountSum} грн.\<br/\>
Чистий прибуток: ${Math.round(totalSum / 2 * 100) / 100} - ${discountSum} = ${pureRevenue} грн.\<br/\>`;

consoleStr = webStr.split('<br/\>').join('');

// вивід на веб-сторінку та консоль
document.writeln(webStr);
console.log(consoleStr);