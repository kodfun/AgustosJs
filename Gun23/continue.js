// 1'den 100'e sayıları yazdır (5in katları hariç)

// YÖNTEM 1
// for (let i = 1; i <= 100; i++) {
//     if (i % 5 != 0)
//         console.log(i);
// }

// YÖNTEM 2
for (let i = 1; i <= 100; i++) {
    if (i % 5 == 0)
        continue;

    console.log(i);
}