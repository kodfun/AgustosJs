console.log(Math.min(3, 1, 2)); // 1
console.log(Math.max(3, 1, 2)); // 3

console.log(Math.abs(-5)); // mutlak değeri 5

console.log(Math.sign(-5)); // işareti -1
console.log(Math.sign(5)); // işareti 1

console.log(Math.PI); // 3.14...


// TABAN FLOOR
console.log(Math.floor(3.99)); // 3
console.log(Math.floor(-3.12)); // -4

// TAVAN CEILING
console.log(Math.ceil(3.1)); // 4
console.log(Math.ceil(-3.9)); // -3

// KÜSURATI TIRAŞLAMAK TRUNCATE
console.log(Math.trunc(3.99)); // 3
console.log(Math.trunc(-3.33)); // -3

// YUVARLAMA ROUND
console.log(Math.round(3.1)); // 3
console.log(Math.round(3.5)); // 4
console.log(Math.round(3.9)); // 4
console.log(Math.round(-3.5)); // -3

// sin 90 derece 1'e eşittir
// ama programlamada dereceyle değil
// radyanla işlem yapılır
// 90 derece => PI / 2
console.log(Math.sin(Math.PI / 2));

// ondalıklı kısmının uzunluğunu belirleme
let p = 1.5;
console.log(p.toFixed(2));
console.log(Math.PI.toFixed(3));

let r = 2.119;
console.log(r.toFixed(2)); // 2.12

// KAREKÖK
console.log(Math.sqrt(9)); // 3

// KARESİ
console.log(4 * 4);
console.log(Math.pow(4, 2));
console.log(4 ** 2);

// KÜPÜ
console.log(Math.pow(3, 4)); // 81

// KÜP KÖK
console.log(Math.cbrt(27)); // 3,

// string den sayıya dönüşüm
let a = "3.5";
console.log(a + 1.5); // 3.51.5
console.log(Number(a) + 1.5); // 5
console.log(+a + 1.5); // 5
console.log(parseInt(a) + 1.5); // 4.5

// parseInt tam sayıya çevirir
let b = "2 metre boyum var";
console.log(parseInt(b)); // 2
console.log(Number(b)); // 2




