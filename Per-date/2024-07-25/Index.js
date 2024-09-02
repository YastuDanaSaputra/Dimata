/* -----------MEMBUAT SEGITIGA DENGAN ANGKA ANGKA--------- */
/* 
1. buat function dengan nama sesuka hati dengan parameter baris
2. deklarasikan angka dengan menggunakan let dan beri value nya 1
3. loop baris (i) berfungsi untuk mengatur jumlah baris yang dicetak
4. loop baris (j) berfungsi untuk mengatur jumlah angka yang akan dicetak pada baris (i)
*/
function buatSegitigaAngka(baris) {
  let angka = 1; // Inisialisasi angka mulai dari 1
  for (let i = 1; i <= baris; i++) {
    let segitiga = "";
    for (let j = 1; j <= i; j++) {
      // Tambahkan angka ke dalam segitiga, format dengan dua digit
      segitiga += angka.toString().padStart(2, "0") + " ";
      angka++; // Increment angka
    }
    console.log(segitiga.trim());
  }
}

// Contoh penggunaan
buatSegitigaAngka(5);

//-----------------------------------------------------------------------------------------//

/* -------------MEMBEDAKAN KELIPATAN---------- */
/* 
 1. buat function dengan nama kelipatanAngka dan isi parameter dengan N
 2. buat loop dengan for dan buat kondisi dimana bisa membuat angka 1-15 dengan mendeklarasikan variabel i
 3. buat kondisi menggunakan if dimana jika i jika di bagi dengan 3 dan hasilnya 0 dan jika i dibagi dengan 5 dan hasilnya 0 maka console log LIMA TIGA
 4. buat if lagi dengan kondisi jika i di bagi dengan 3 dan menghasilkan 0 maka console log TIGA
 5. buat if lagi sekali dengan kondisi jika i di bagi dengan 5 dan menghasilkan 0 maka console log LIMA
 6. tutup dengan else dan console log i nya (sisa angka yang tidak ada kelipatan 3 dan 5)
 7. masukan value function di luar function
*/

function kelipatanAngka(N) {
  for (let i = 1; i <= N; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(i, "tiga lima");
    } else if (i % 3 === 0) {
      console.log(i, "tiga");
    } else if (i % 5 === 0) {
      console.log(i, "lima");
    } else {
      console.log(i);
    }
  }
}

kelipatanAngka(15);

//---------------------------------------------------------------------------------------//

/* -------------------MEMBUAT PROGRAM PENGELOMPOKAN BERAT---------------*/
/* 
1. buat function dengan nama bodyMassIndex dengan parameter weight dan height
2. deklarasikan variabel BMI dengan rumus weight di bagi height di kali height
3. buat kondisi dimana jika BMI lebih kecil dari 18.5 maka akan menampilkan berat kurang
4. buat lagi 2 kondisi dimana jika BMI lebih besar atau sama dengan 18.5 dan jika lebih kecil atau sama dengan 24.9 maka tampilkan ideal
5. lakukan hal yang sama sampai semua golongan terbuat
6. lalu buat return di setiap golongan, supaya bisa ditampilkan nanti di console log
7. buat const hasil dan masukan function yang tadi dibuat beserta value yang mau dimasukan
8. lalu tampilkan hasil melalui console log
*/
function bodyMassIndex(weight, height) {
  const BMI = weight / (height * height);
  if (BMI < 18.5) {
    console.log("berat kurang");
    return "berat kurang";
  } else if (BMI >= 18.5 && BMI <= 24.9) {
    console.log("ideal");
    return "ideal";
  } else if (BMI >= 25.0 && BMI <= 34.9) {
    console.log("sangat kelebihan berat badan");
    return "sangat kelebihan berat badan";
  } else {
    console.log("obesitas");
    return "obesitas";
  }
}
const hasilBMI = bodyMassIndex(77, 1.75);
console.log(hasilBMI);

//-------------------------------------------------------------------------------------------------------------------------------------------------//

/* ------------------------------------MENAMPILKAN ARRAY GENAP----------------------- */
/* 
1. buat function yang bernama antiGanjil terlebih dahulu
2. isi parameter antiGanjil nya dengan arrayOfNumber
3. return arrayOfNumber dengan menggunakan metode filter dengan genap sebagai callback
4. di dalam function genap isikan parameter dengan num 
5. return num dengan num jika di bagi habis dan sisa nya 0 maka nilai nya genap
6. deklarasikan array 1-10
7. tampilkan hasil nya dengan console log
*/
function antiGanjil(arrayOfNumber) {
  return arrayOfNumber.filter(function genap(num) {
    return num % 2 == 0;
  });
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const hasilGenap = antiGanjil(array);
console.log("bilangan genap :", hasilGenap);

//--------------------------------------------------------------------------------------//

/* --------MENGUBAH STRING MENJADI ARRAY--------------- */
/* 
1. Buat function stringToArray terlebih dahulu
2. masukan parameter string dan spasi (parameter spasi untuk bisa memisahkan perkata)
3. return string dan gunakan split untuk mengubah dari string menjadi array dan isi dengan parameter spasi
4. lalu tampilkan hasilnya dengn console log dengan memanggil function yang sudah dibuat tadi
5. masukan parameter nya dengan kalimat string dan spasi, supaya bisa dipisah per kata
*/
function stringToArray(string, spasi) {
  return string.split(spasi);
}

console.log(stringToArray("Ramaikan lalu hitamkan", " "));
