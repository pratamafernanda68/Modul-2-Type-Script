var nama = "Budi";
var umur = 17;
var aktif = true;
console.log(nama, umur, aktif);
function login(username, password) {
    return username === "admin" && password === "admin";
}
console.log(login("admin", "admin"));
var user = {
    id: 1,
    nama: "Sinta",
    role: "admin"
};
console.log(user);
var buku1 = {
    id: 1,
    judul: "Belajar Backend"
};
console.log(buku1);
