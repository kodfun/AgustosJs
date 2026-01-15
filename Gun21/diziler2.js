let c = console.log;
let dizi = [16, 19, 3, 8, 5, 11];
c(dizi);

// diziyi manipüle eden metotlar
// mutating methods

// pop: son elemanı hem alır hem siler
let patlayan = dizi.pop();
c(dizi, "=>", patlayan);

// shift: ilk elemanı alır ve siler
let alinan = dizi.shift();
c(dizi, "=>", alinan);

// sona eleman ekler ve yeni uzunluğu döndürür
let yeniUzunluk = dizi.push(99);
c(dizi, "=>", yeniUzunluk);

// başa ekle
dizi.unshift("-99");
c(dizi);

// belirli bir indeksteki elemanı silme
// 2. indekstekini sil
dizi.splice(2, 1);
// türkçesi: 2. indeksten başla 1 adet sil
c(dizi);

// 3ten başla kalanı sil
let silinenler = dizi.splice(3);
c("son hali", dizi);
c("silinenler", silinenler);

// 1. indekse 4 adet farklı sayı ekle
dizi.splice(1, 0, 4, 3, 2, 1);
c(dizi);

// 2. indeksten başla 3 adet sil
// aynı noktaya 777 sayısını ekle
dizi.splice(2, 3, 777);
c(dizi);

// ilk elemanla son elemanı değiştir
let gecici = dizi[0];
dizi[0] = dizi[dizi.length - 1];
dizi[dizi.length - 1] = gecici;
c(dizi);

// diziyi tersine çevir
dizi.reverse();
c(dizi);

// diziyi !!!alfabetik!!! sırala
dizi.sort();
c(dizi);
// DİKKAT: ARİTMETİK SIRALAMA DEĞİL

// ARİTMETİK SIRALAMA, SONRA AÇIKLANACAK
dizi.sort((a, b) => a - b);
c(dizi);

// tüm diziyi 0 larla doldur
dizi.fill(0);
c(dizi);

// 1. indeksten 4. indekse kadar
// 1'lerle doldur
dizi.fill(1, 1, 4); // 4. indeks hariç
c(dizi);

dizi = [1, 2, 3, 4, 5, 6];
c(dizi);

// ilk 2 elemanı 4. indeksten 6'ya kadar koy
// target, start, end
dizi.copyWithin(4, 0, 2);
c(dizi);