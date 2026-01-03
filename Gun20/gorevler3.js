// aldığı iki sayının ortalamasını döndüren fonksiyonu
// anonim olarak oluşturup bir değişkende sakla ve test et
// const ortalama = function(a, b) {
//     return (a + b) / 2;
// }

// console.log(ortalama(3, 4));

//               GİREN        ÇIKAN
const ortalama = (a, b) => (a + b) / 2;

console.log(ortalama(3, 4));

// girilen sayını küpünü hesaplayana fonksiyonu
// anonim bir arrow function olarak tanımla
// ve test et

const kupu = num => Math.pow(num, 3);

console.log(kupu(3));

// kupu fonksiyonun anonim olmayan klasik versiyonunu yaz
function kup(sayi) {
    return Math.pow(sayi, 3);
}

console.log(kup(10));