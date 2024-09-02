// 1.1. Sortir array dengan dan tanpa sort

// Fungsi dengan sort
function minMaxAvgWsort(arr) {
  if (arr.length === 0) return { min: null, max: null, avg: null };

  const sortedArr = arr.slice().sort((a, b) => a - b);
  const minValue = sortedArr[0];
  const maxValue = sortedArr[sortedArr.length - 1];
  const total = arr.reduce((acc, num) => acc + num, 0);
  const avgValue = total / arr.length;

  return { min: minValue, max: maxValue, avg: avgValue };
}

const array1 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
console.log(minMaxAvgWsort(array1));

// Fungsi tanpa sort
function minMaxAvg(arrC) {
  if (arrC.length === 0) return { min: null, max: null, avg: null };

  let nilaiMin = arrC[0];
  let nilaiMax = arrC[0];
  let total = 0;

  for (let num of arrC) {
    if (num < nilaiMin) nilaiMin = num;
    if (num > nilaiMax) nilaiMax = num;
    total += num;
  }

  const rataRata = total / arrC.length;
  return { min: nilaiMin, max: nilaiMax, avg: rataRata };
}

const newarray = [4, 3, 7, 5, 5];
console.log(minMaxAvg(newarray));

// 1.2. Gabung kata array jadi string
function gabungkanKata(arr) {
  if (arr.length === 0) return "";
  if (arr.length === 1) return arr[0];
  if (arr.length === 2) return arr.join(" dan ");

  const arrBanyak = arr.slice(0, -1).join(", ");
  const arrAkhir = arr[arr.length - 1];
  return `${arrBanyak} dan ${arrAkhir}`;
}

const kataArray = ["Cihuy", "Skibidi", "Sigma", "Rizz"];
console.log(gabungkanKata(kataArray));

// 1.3. Ubah string jadi array
function ubahString(string) {
  const delimeter = /[ ,]+/;
  return string.split(delimeter);
}

let kalimat1 = "Gyattt, Vinum Tax";
console.log(ubahString(kalimat1));

// 1.4. Jumlahkan indeks yang sama pada 2 array
function jumlahkanArray(arrA, arrB) {
  if (arrA.length !== arrB.length)
    throw new Error("Panjang kedua array harus sama!");
  return arrA.map((num, index) => num + arrB[index]);
}

const arrA = [10, 20, 30];
const arrB = [90, 80, 70];
console.log(jumlahkanArray(arrA, arrB));

// 1.5. Menambahkan elemen baru ke array
function tambahArrayBaru(array, elemen) {
  if (array.includes(elemen)) {
    console.log("Elemen sudah ada");
  } else {
    array.push(elemen);
    console.log("Berhasil ditambahkan");
  }
}

const arrBaru = [1, 2, 3];
tambahArrayBaru(arrBaru, 5);
console.log(arrBaru);

// 2.1. Fungsi anti ganjil
function antiGanjil(arrayOfNumber) {
  return arrayOfNumber.filter((number) => number % 2 === 0);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(antiGanjil(numbers));

// 2.2. Integer dengan limit
function insertIntegers(...integers) {
  const maxSize = 5;
  const resultArray = [];

  for (let i = 0; i < integers.length; i++) {
    if (resultArray.length < maxSize) {
      resultArray.push(integers[i]);
    } else {
      break;
    }
  }

  return resultArray;
}

console.log(insertIntegers(7, 3, 2, 4, 6, 8));

// 2.3. Gabungkan array
function gabungArr(arrE, arrF) {
  return arrE.concat(arrF);
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8];
console.log(gabungArr(arr1, arr2));

// 2.4. Scan duplikat
function scanDuplicate(arrD) {
  return arrD.filter((item, index) => arrD.indexOf(item) !== index);
}

const arrG = [1, 2, 3, 4, 4, 5, 2, 6, 5, 363, 54];
console.log(scanDuplicate(arrG));

// 2.5. Menemukan perbedaan
function cariBeda(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  const beda = [
    ...arr1.filter((item) => !set2.has(item)),
    ...arr2.filter((item) => !set1.has(item)),
  ];
  return beda;
}

const arraH = [1, 2, 3, 4];
const arrI = [1, 2, 3, 5];
console.log(`Perbedaan terdapat pada: ${cariBeda(arraH, arrI)}`);

// 3.1. Scan tipe data primitif
function ambilTipeDataPrimitif(arr) {
  // Menggunakan filter untuk mengambil item yang bertipe data primitif
  return arr.filter(
    (item) =>
      item === null || (typeof item !== "object" && typeof item !== "function") // Memeriksa apakah item adalah null atau bukan objek dan bukan fungsi
  );
}

const dataArray = [1, "string", null, false, undefined, 2, "yes", undefined];
console.log(ambilTipeDataPrimitif(dataArray)); // Output: [1, "string", null, false, undefined, 2, "yes", undefined]

// 3.2. Mengambil nilai kedua terkecil dari array
function secondSmallest(array) {
  // Menyalin array dan mengurutkan elemen dari kecil ke besar
  const sortedArr = array.slice().sort((a, b) => a - b);
  return sortedArr[1]; // Mengembalikan nilai kedua terkecil
}

const array = [1, 2, 3, 4, 5];
console.log(secondSmallest(array)); // Output: 2

// 3.3. Mengembalikan jumlah angka dari array tipe data campuran
function sumNumbers(arr) {
  // Memfilter elemen yang bertipe data number dan menjumlahkannya menggunakan reduce
  return arr
    .filter((item) => typeof item === "number") // Memfilter elemen bertipe number
    .reduce((a, b) => a + b, 0); // Menjumlahkan semua elemen bertipe number
}

const mixedTypeArray = [1, "cihuy", "brainrot", 10];
console.log(sumNumbers(mixedTypeArray)); // Output: 11

// 3.4. Mengembalikan jumlah nilai duplikat dari array angka
function countDuplicates(arr) {
  let counts = {}; // Objek untuk menyimpan jumlah kemunculan setiap elemen
  let duplicateCount = 0; // Variabel untuk menghitung jumlah duplikat

  for (let num of arr) {
    counts[num] = (counts[num] || 0) + 1; // Menghitung kemunculan setiap elemen
    if (counts[num] === 2) {
      // Jika elemen muncul untuk kedua kalinya
      duplicateCount++; // Tambahkan 1 ke jumlah duplikat
    }
  }

  return duplicateCount; // Mengembalikan jumlah nilai yang memiliki duplikat
}

const duplicateNumbersArray = [10, 20, 40, 10, 50, 30, 10, 60, 10];
console.log(countDuplicates(duplicateNumbersArray)); // Output: 1 (hanya 10 yang muncul lebih dari satu kali)

// 3.5. Batu gunting kertas
function BatuGuntingKertas(PilihanPlayer) {
  const pilihan = ["batu", "gunting", "kertas"]; // Pilihan yang tersedia
  const PilihanKomputer = pilihan[Math.floor(Math.random() * pilihan.length)]; // Pilihan acak untuk komputer

  console.log(`Pilihan player: ${PilihanPlayer}`);
  console.log(`Pilihan Komputer: ${PilihanKomputer}`);

  if (PilihanPlayer === PilihanKomputer) return "Seri"; // Jika pilihan sama, hasilnya seri

  // Menentukan pemenang berdasarkan aturan batu-gunting-kertas
  if (
    (PilihanPlayer === "batu" && PilihanKomputer === "gunting") ||
    (PilihanPlayer === "gunting" && PilihanKomputer === "kertas") ||
    (PilihanPlayer === "kertas" && PilihanKomputer === "batu")
  ) {
    return "Menang"; // Player menang
  } else {
    return "Kalah"; // Player kalah
  }
}

console.log(BatuGuntingKertas("batu")); // Contoh output: Menang, Kalah, atau Seri
