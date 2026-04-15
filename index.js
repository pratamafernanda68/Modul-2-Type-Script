var nama = "Budi";
var umur = 17;
var aktif = true;

console.log(nama, umur, aktif);

function login(username, password) {
    return username === "admin" && password === "admin";
}

const siswa1 = {
    id: 1,
    nama: "Budi Santoso",
    kelas: "XII RPL 1",
};

console.log(siswa1);

// Tugas 2
function hitungUmur(tahunLahir) {
    const tahunSekarang = new Date().getFullYear();
    return tahunSekarang - tahunLahir;
}

const umurSiswa1 = hitungUmur(2005);
console.log(umurSiswa1);
