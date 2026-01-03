
// kullanıcı adını alıp o kişiyi kullanıcı adıyla selamlayan
// fonksiyonu yaz
// ANCAK kullanıcı adı 4 harften kısaysa -SELAMLAMA ÖNCESİNDE-
// fonksiyonu uyarı mesajı vererek terket

function selamla(kullanıcıAdi) {
    if (kullanıcıAdi.length < 4) {
        console.log("Kullanıcı adı en az 4 karakter olmalıdır!");
        return; // fonksiyondan çık
    }
    
    console.log("Merhaba " + kullanıcıAdi);
}

selamla("Hasan");
selamla("Ali");