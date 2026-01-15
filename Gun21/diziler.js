let yas = 18;
let ad = "ali";

let adlar = ["ali", "can", "cem", "ece", "oya"];

let cl = console.log;

console.log(adlar);

// dizi uzunluğu
cl(adlar.length);

// ilk eleman
console.log(adlar[0]);

// son eleman
console.log(adlar[adlar.length - 1]);

// olmayan elemanın türü nedir: undefined
cl(adlar[100]);

// son elemana erişim (yöntem 2)
cl(adlar.at(-1));

// 2. indeksteki elemanı cemil yap
adlar[2] = "cemil";
cl(adlar.toString());

// dizileri stringe dönüştürme
// aralarına seçtiğin bir ayracı koyarak
// öğeleri birleştirip tek bir büyük string
// oluşturabilirsin

// Aralarına + koyarak tüm öğeleri birleştir
// ve tek bir string yap
let str = adlar.join("+");
cl(str);

// string'i diziyi çevirme
// string'i belirli ayraçlarından bölerek
// bir diziye dönüştürebiliriz
let cumle = "ali ata bak";
let kelimeler = cumle.split(" ");
cl(kelimeler);

let sepet = "muz,elma,ayva,kivi,üzüm";
let meyveler = sepet.split(",");
cl(meyveler);
