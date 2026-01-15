const c = console.log;
// NON-MUTATING METHODS
// DİZİDE DEĞİŞİKLİK YAPMAZ

// CONCAT: DİZİLERİ BİRLEŞTİR
let dizi1 = [1, 2, 3];
let dizi2 = ["a", "b", "c"];
let dizi3 = dizi1.concat(dizi2);

c(dizi1);
c(dizi2);
c(dizi3);

// SLICE DİZİDEN DİLİM AL
let gida = ["yağ", "sütlaç", "nutella", "baklava", "balık"];
let tatlilar = gida.slice(1, 4);
c(gida);
c(tatlilar);

// MAP: TÜM ÖĞELERİ BELİRLİ BİR FONKSİYONA TABİ
// TUTARAK DEĞİŞTİRİR VE YENİ DİZİYE KOYAR

function buyut(metin) {
    return metin.toUpperCase();
}

let dizi4 = tatlilar.map(buyut);
c(tatlilar);
c(dizi4);

let dizi5 = gida.map(s => s.length);
c(gida);
c(dizi5);

// sayıların karelerinin dizisi
c(dizi1);
let kareleri = dizi1.map(x => x * x);
c(kareleri);

let sehirler = ["Adana", "Adıyaman", "Afyonkarahisar", "Ağrı", "Amasya", "Ankara", "Antalya", "Artvin", "Aydın", "Balıkesir", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Edirne", "Elazığ", "Erzincan", "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkari", "Hatay", "Isparta", "Mersin", "İstanbul", "İzmir", "Kars", "Kastamonu", "Kayseri", "Kırklareli", "Kırşehir", "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "Kahramanmaraş", "Mardin", "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu", "Rize", "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Şanlıurfa", "Uşak", "Van", "Yozgat", "Zonguldak", "Aksaray", "Bayburt", "Karaman", "Kırıkkale", "Batman", "Şırnak", "Bartın", "Ardahan", "Iğdır", "Yalova", "Karabük", "Kilis", "Osmaniye", "Düzce"];

// 8 harfli şehirler
let dizi6 = sehirler.filter(s => s.length == 8);
c(dizi6);

// t ile başlayanlar
let dizi7 = sehirler.filter(x => x.startsWith("T"));
c(dizi7);