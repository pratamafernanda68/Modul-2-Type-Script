let nama: string = "Budi";
let umur: number = 17;
let aktif: boolean = true;

console.log(nama, umur, aktif);


function login(username: string, password: string): boolean {
  return username === "admin" && password === "admin";
}

console.log(login("admin", "admin"));



interface Siswa {
  id: number;
  nama: string;
  kelas: string;
}

const siswa1: Siswa = {
  id: 1,
  nama: "Budi Santoso",
  kelas: "XII RPL 1"
};

console.log(siswa1);



function hitungUmur(tahunLahir: number): number {
  const tahunSekarang = new Date().getFullYear();
  return tahunSekarang - tahunLahir;
}

const umurSiswa = hitungUmur(2005);
console.log(umurSiswa);
