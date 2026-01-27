// GÖREV: 6 GELİNCEYE KADAR ZAR AT

function zarAt() {
    return Math.floor(Math.random() * 6) + 1;
}

let zar = zarAt();

while (zar != 6) {
    console.log(zar);
    zar = zarAt();
}

console.log("ZAR 6 GELDİ!");