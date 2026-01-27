
// zar 6 gelinceye kadar at

const zarAt = () => Math.floor(Math.random() * 6) + 1;


// ÇALIŞIR AMA KOD DÜZENİ AÇISINDAN HOŞ DEĞİL
// let zar = zarAt()
// for(;zar != 6;) {
//     console.log(zar);
//     zar = zarAt();
// }

for (let zar = zarAt(); zar != 6; zar = zarAt()) {
    console.log(zar);
}

console.log("VE 6 GELDİ..");