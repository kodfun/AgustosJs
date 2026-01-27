let parag = "";
parag = "Ben ölümlüyüm, ama adalet ölümsüzdür. Beni suçlayan bu mahkeme bir gün geçip gidecek, ama hakikat sonsuza dek kalacaktır. Sizler beni ölüme mahkum edebilirsiniz, ancak bilgeliği ve erdemi asla yok edemezsiniz. Ölüm korkusu bilgelik değildir, çünkü hiç kimse ölümün kötü mü yoksa iyi mi olduğunu bilmez.";

// kaç kere ö harfi vardır

// YÖNTEM 1: replace metodu ile
let parag2 = parag.replace(/[Öö]/g, "");
console.log(parag.length - parag2.length);

// YÖNTEM 2: replaceAll
let parag3 = parag.toLowerCase().replaceAll("ö", "");
console.log(parag.length - parag3.length);

// YÖNTEM 3: regex
let eslesme = parag.match(/[Öö]+/g);
console.log(eslesme.length);

// YÖNTEM 4: for döngüsü
let sayac = 0;
for (let i = 0; i < parag.length; i++) {
    let harf = parag[i]; // parag.at(i) ya da parag.charAt(i)
    
    if (harf == "ö" || harf == "Ö")
        sayac++;
}
console.log(sayac);

// YÖNTEM 5: for .. of döngüsü
let counter = 0;
for (const letter of parag) {
    if (letter.toLowerCase() == "ö")
        counter++;
}
console.log(counter)

// YÖNTEM 6: filter metodu
let dizi = parag.split("");
let dizi2 = dizi.filter(h => h  == "ö" || h == "Ö");
console.log(dizi2.length);

// YÖNTEM 7: forEach dizi metodu
let say = 0;
let arr = parag.split("");
arr.forEach((harf) => {
    if (harf == "ö" || harf == "Ö")
        say++;
});
console.log(say);

