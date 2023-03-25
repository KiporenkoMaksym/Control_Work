const calculateEngravingPrice = function (message, pricePerWord) {
    let words =  message.split(" ");
    let totalPrice = 0;
    for (let i = 0; i < words.length; i += 1){
    totalPrice = (i + 1) * pricePerWord;
  }
  return totalPrice;
};
  console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10),);
  console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20),);
  console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),);
  console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),);