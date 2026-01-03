
let unlu = {
    ad: "Kıvanç",
    soyad: "Tatlıtuğ",
    dogumYili: 1983,
    tamAd: function() {
        return `${this.ad} ${this.soyad} (${this.dogumYili})`;
    }
};

console.log(unlu.tamAd());

unlu.ad = "Ersin";

console.log(unlu.tamAd());