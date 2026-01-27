
// 1 milyondan başlayarak sayıları arttırarak yazdır
// 79'un katını bulunca son kez bu sayıyı yazdır ve dur

let i = 1000000;

while (true) {
    console.log(i);

    if (i % 79 == 0)
        break;

    i++;
}

