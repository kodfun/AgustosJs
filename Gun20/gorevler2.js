// ekrana yazı ya da tura yazdıran fonksiyon
// yöntem 1: if-else
// function yaziTuraYaz() {
//     if (Math.random() < 0.5)
//         console.log("YAZI");
//     else
//         console.log("TURA");
// }

// yöntem 2: ternary operator
function yaziTuraYaz() {
    console.log(Math.random() < .5 ? "YAZI" : "TURA");
}

yaziTuraYaz();

// aldığı stringin uzunluğunu ekrana yazdıran fonksiyon
function uzunlukYaz(str) {
    console.log(str.length);
}

uzunlukYaz("afyonkarahisarlılaştıramadıklarımızdan mıymışsınız?")

// aldığı 2 sayıdan büyük olanı döndüren fonksiyon
function buyuk(a, b) {
    return a > b ? a : b;
}

console.log("buyuk(3,4) => " + buyuk(3, 4));

// o anki tarihi "27.12.2024" formatında yazdıran fonksiyon
function tarihYaz() {
    console.log(new Date().toLocaleDateString("tr"));
}
tarihYaz();

// aldığı sayının karesini döndüren fonksiyonu yaz ve dene
function karesi(sayi) {
    let sonuc = sayi * sayi;
    return sonuc;
}

console.log("karesi(2) => " + karesi(2));