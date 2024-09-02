// 3.1. Scan tipe data primitif
function ambilTipeDataPrimitif(arr) {
  // Inisialisasi array baru untuk menyimpan tipe data primitif
  const hasil = [];
  // Menggunakan for-loop untuk iterasi setiap elemen dalam array
  for (let i = 0; i < arr.length; i++) {
    // Memeriksa apakah item adalah tipe data primitif atau null
    if (
      item === null ||
      (typeof item !== "object" && typeof item !== "function")
    ) {
      hasil.push(item); // Menambahkan item ke array hasil jika memenuhi kondisi
    }
  }
  return hasil; // Mengembalikan array yang hanya berisi tipe data primitif
}

const dataArray = [1, "string", null, false, undefined, 2, "yes", undefined];
//console.log(ambilTipeDataPrimitif(dataArray)); // Output: [1, "string", null, false, undefined, 2, "yes", undefined]

// 3.2. Mengambil nilai kedua terkecil dari array
function secondSmallest(array) {
  // Menyalin array dan mengurutkan elemen dari kecil ke besar

  const sortedArr = array.slice().sort((a, b) => a - b);
  //: Metode slice() tanpa argumen akan menyalin seluruh elemen dari array asli ke array baru.

  return sortedArr[1]; // Mengembalikan nilai kedua terkecil
}

const array = [1, 2, 3, 4, 5]; //Mendefinisikan array asli dengan elemen-elemen 1, 2, 3, 4, dan 5.
console.log(secondSmallest(array)); // Ini memanggil fungsi secondSmallest dengan argumen array dan mencetak hasilnya ke konsol. Output: 2

// 3.3. Mengembalikan jumlah angka dari array tipe data campuran
function sumNumbers(arr) {
  // Inisialisasi variabel untuk menyimpan jumlah angka
  let total = 0;
  // Menggunakan for-loop untuk iterasi setiap elemen dalam array
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    // Memeriksa apakah item adalah angka
    if (typeof item === "number") {
      total += item; // Menambahkan item ke total jika bertipe number
    }
  }
  return total; // Mengembalikan jumlah angka
}

const mixedTypeArray = [1, "cihuy", "brainrot", 10];
console.log(sumNumbers(mixedTypeArray)); //  Output: 11
//Kode tersebut mendefinisikan array mixedTypeArray yang berisi elemen-elemen dengan tipe data campuran,
//kemudian menggunakan fungsi sumNumbers untuk menjumlahkan semua elemen yang bertipe angka dan mencetak hasilnya ke konsol.

// 3.4. Mengembalikan jumlah nilai duplikat dari array angka
function countDuplicates(arr) {
  let counts = {}; // Objek untuk menyimpan jumlah kemunculan setiap elemen
  let duplicateCount = 0; // Variabel untuk menghitung jumlah duplikat

  // Menggunakan for-loop untuk iterasi setiap elemen dalam array
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
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
