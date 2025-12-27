// Task a 
function countLetter(harf, soz) {
  let count = 0;

  for (let i = 0; i < soz.length; i++) {
    if (soz[i] === harf) {
      count++;
    }
  }

  return count;
};

console.log(countLetter("m", "muhammadamin"));
console.log(countLetter("a", "abama"));
console.log(countLetter("k", "kalaka"));
// 
// console.log('Jeck Ma maslahatlari');
// const list = [
//     "yahshi talaba boling", // 0-20 
//      "togri boshlig tanlang va koproq hato qiling", // 20-30
//      "uzingizga ishlashingizni boshlang", // 30-40
//      "siz kuchli bolgan narsalarni qiling", // 40-50
//      "yoshlarga investitsiya qiling", //50-60
//      "endi dam oling, foydasi yoq endi", // 60>>
// ];
// function maslahatBering(a, callback) {
//  if (typeof a !== "number") callback ("insert a number", null);
//  else if (a <= 20) callback(null, list[0]); 
//  else if (a > 20 && a <= 30) callback(null, list[1]); 
//  else if (a > 30 && a <= 40) callback(null, list[2]); 
//  else if (a > 40 && a <= 50) callback(null, list[3]); 
//  else if (a < 50 && a <= 60) callback(null, list[4]);
//  else {
//     callback(null, list[5]);
//  } 
// }

// maslahatBering(31, (err, data) => {
//     if(err) console.log("ERROR:", err);
//     console.log('javob:', data);
// });