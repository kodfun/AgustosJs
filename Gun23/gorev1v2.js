
// GÖREV 1'İN FARKLI BİR YAZIM ŞEKLİ
function zarAt() {
    return Math.floor(Math.random() * 6) + 1;
}

let zar;

while ((zar = zarAt()) != 6) {
    console.log(zar);
}

console.log("TEBRİKLER! 6 GELDİ...");