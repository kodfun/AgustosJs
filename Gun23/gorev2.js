const ayrac = () => console.log("---");


// A. 1'den 10'a sayıları yazdır
for (let i = 1; i <= 10; i++)
    console.log(i);

ayrac();

// B. 10'dan 1'e sayıları yazdır
for (let i = 10; i >= 1; i--)
    console.log(i);

ayrac();

// C. 1'den 20'ye ÇİFT sayıları yazdır
for (let i = 2; i <= 20; i += 2)
    console.log(i);

ayrac();

// D. 30'dan 0'a ÜÇÜN KATLARINI yazdır (0 hariç)
for (let i = 30; i > 0; i -= 3)
    console.log(i);

ayrac();