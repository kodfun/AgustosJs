let num = 17;

// toString() metodu ile herhangi bir türü string'e çevirebiliriz
console.log(num.toString());

//       01234
let a = "erkan";

console.log(a.substring(2, 5)); // kan
console.log(a.substring(0, 3)); // erk
console.log(a.substring(2, 3)); // k

// r ve sonrası
console.log(a.substring(1)); // rkan

// string uzunluğu
console.log(a.length);

// 1. indeksteki karakter
console.log(a.substring(1, 2)); // r
console.log(a[1]); // r
console.log(a.at(1)); // r
console.log(a.charAt(1)); // r

// iki stringi birleştirme
let b = "çanak";
let c = "kale";
console.log(b + c); // string concatenation
console.log(`${b}${c}`);
console.log(b.concat(c));


console.log("ankara".replace("a", "@"));

// eski tarayıcılarda çalışmayabilir
console.log("ankara".replaceAll("a", "@"));

//       01234567890
let d = "ali ata bak";

// d stringi at stringini içerir mi
console.log(d.includes("at")); // true
console.log(d.includes("eşek")); // false

// d string'inde at kaçıncı indekste
console.log(d.indexOf("at")); // 4
console.log(d.indexOf("eşek")); // -1

// d string'inde a harfi kaçıncı indekstedir
console.log(d.indexOf("a")); // 0

// d string'inde son a harfi kaçıncı indekstedir
console.log(d.lastIndexOf("a")); // 9

let e = "12";

// string soluna dolgu yapma
console.log(e.padStart(5, "0")); // 00012

let f = "no";
console.log(f.padEnd(6, "-")); // no----

let g = "Iğdır'ın İlçeleri";
console.log(g.toUpperCase());
console.log(g.toLowerCase());
console.log(g.toLocaleUpperCase("tr"));
console.log(g.toLocaleLowerCase("tr"));

// her karakterin sayısal karşılığı vardır
let h = "ABA";
console.log(h.charCodeAt(0)); // 65
console.log(h.charCodeAt(1)); // 66

// sayının karakter karşılığı
console.log(String.fromCharCode(67)); // C

let i = "   \t\n   BARDAK   \n\t   ";

console.log("???" + i + "???");
console.log("???" + i.trimStart() + "???");
console.log("???" + i.trimEnd() + "???");
console.log("???" + i.trim() + "???");

let j = "Oley! ".repeat(3);
console.log(j);

//       0123              7654321
let k = "ben javascripti seviyorum";

// sondan 5. karakterden itibaren olanları al
console.log(k.slice(-5)); // yorum

console.log(k.slice(-5, -1)); // yoru

// slice substring'den  farklı olarak negatif değer verildiğinde sondan sayım yaparak indeksi bulur

// substring de ise negatif değer 0 olarak kabul edilir
