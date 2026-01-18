let o = console.log;

let sayilar = [4, 11, 3, 8, 9, 1];

let ciftler = sayilar.filter(n => n % 2 == 0);

o(ciftler);


// dizideki sayıların toplamını bul

// reduce yöntemi
let toplam = sayilar.reduce(
    (birikim, siradaki) => birikim + siradaki
);

o(toplam);

// döngü yöntemini ileride işleyince göreceğiz!

// [4, 11, 3, 8, 9, 1]
// dizideki en büyük sayıyı bul
let enBuyuk = sayilar.reduce((max, x) => x > max ? x : max);
o(enBuyuk);
enBuyuk = sayilar.reduce((max, x) => Math.max(max, x));
o(enBuyuk);

// spread (saç/yay/dağıt operatörü ...) yöntemi
enBuyuk = Math.max(...sayilar);
o(enBuyuk);


// stringi reduce kullanarak tersine çevir
o(
    "erkan".split("").reduce((res, x) => x + res)
);