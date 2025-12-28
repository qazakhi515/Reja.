/* Masalani izohi
  A-TASK: 

Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni 
ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
MASALAN countLetter("e", "engineer") 3ni return qiladi.

masalani yechimi:  */

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

// 2     /////////////////// =======================================/////////////////////////
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

// maslahatBering(69, (err, data) => {
//     if(err) console.log("ERROR:", err);
//     console.log('javob:', data);
// });

// 3  ///////////////////////////======================== ASYNC ===================//////////////////////////

// console.log('Jeck Ma maslahatlari');
// const list = [
//     "yahshi talaba boling", // 0-20 
//      "togri boshlig tanlang va koproq hato qiling", // 20-30
//      "uzingizga ishlashingizni boshlang", // 30-40
//      "siz kuchli bolgan narsalarni qiling", // 40-50
//      "yoshlarga investitsiya qiling", //50-60
//      "endi dam oling, foydasi yoq endi", // 60>>
// ];
// async function maslahatBering(a) {
//  if (typeof a !== "number") throw new Error("insert a number", null);
//  else if (a <= 20) return  list[0]; 
//  else if (a > 20 && a <= 30) return list[1]; 
//  else if (a > 30 && a <= 40) return list[2]; 
//  else if (a > 40 && a <= 50) return list[3]; 
//  else if (a < 50 && a <= 60) return list[4];
//  else {
//     //return list[5];
//        return new Promise((resolve, reject) => {
//         setTimeout(() => {
//            resolve(list[5]);
//         }, 5000);
//        })

//    /* //setTimeout(function(){
//     //   return list[5];}, 5000); */
//  } 
// }

/* / console.log("passed here 0");
// maslahatBering(69).then(data => {
//    console.log("javob:", data);
// }).catch(err => {
//   console.log("ERROR:", err);
// });
// console.log("passed here 1");  */ 


/*asyc da sync ishga toliq tushgach node jss ishlay boshlaydi, setTimeout ishlama sa ham birdaniga sync ishlab tugagandan song asyc ishga tushadi
javobdan song yana biz boshqa yoshni soragimiz kelsa ishimiz yanada chigallashadi>>>>>> 아래 참고!!!!!

console.log("passed here 0");
maslahatBering(20)
 .then((data) => {
  maslahatBering(30)
   .then((data) => {
     maslahatBering(40)
       .then((data )=> {
        console.log('javob:', data);
         })
        .catch(err) => {
        console.log("ERROR:", err);
       }
        console.log("passed here 1");
         console.log("javob:", data);
      };
      .catch((err)=>  */ // ichiga qaarab kirib ketilaveradi.


      // async /await bn ishlash oson va qulay
      // async function run() {
      //   let javob = await maslahatBering(20);
      //   console.log(javob);
      //   javob = await maslahatBering(30);
      //   console.log(javob);
      //   javob = await maslahatBering(41);
      //   console.log(javob);
      // }
      // run();