

// bir fonksiyonu function keyword'ü ile tanımladığında
// fonksiyonun tanımlandığı scope içinde herhangi bir noktada
// (yani fonksiyonun üstünde dahi) çağrılabilir

// bakın üstünde ve çalışıyor
saatiYazdir();

function saatiYazdir() {
    console.log(new Date().toLocaleTimeString("tr"));
}


// eğer değişkende saklanıyorsa sadece tanımlandıktan sonra çağrılabilir
// yaz("Merhaba"); // Cannot access 'yaz' before initialization
const yaz = function(metin) { 
    console.log(metin); 
};
yaz("Merhaba")