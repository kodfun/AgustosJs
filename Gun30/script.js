const img = document.getElementById("picture");
const canvas = document.getElementById("canvas");

// gösterilecek resim dosyalarının adları
let imgs = [
    "animal.jpg", 
    "city.jpg", 
    "flower.jpg", 
    "lake.jpg", 
    "mountain.jpg"
];

// gösterilen resmin indeksi
let i = 0;

function goster(degisim = 0) {
    i += degisim;
    img.remove(); // animasyon için
    img.src = "img/" + imgs.at(i % 5);
    canvas.appendChild(img); // animasyon için
}

goster();