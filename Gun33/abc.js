// EXTERNAL JAVASCRIPT FILE

// document.body.style = "background: lightskyblue";
$("body").css("background", "lightgray");


// SAF JS YÖNTEM 1:
// saf js ile body'nin içine h1 ekle: Hello World! [performans problemli!]
//document.body.innerHTML = "<h1>Hello World!</h1>" + document.body.innerHTML;

// SAF JS YÖNTEM 2:
// const h1 = document.createElement("h1");
// h1.textContent = "Merhaba Dünya!";
// document.body.prepend(h1);

// JQUERY YÖNTEM 1:
// $("body").prepend("<h1>Merhaba Türkiye!</h1>");

// JQUERY YÖNTEM 2:
const baslik = $("<h1/>").text("Hoşgeldiniz!");
$("body").prepend(baslik);