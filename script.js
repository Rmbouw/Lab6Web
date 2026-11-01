const judul = document.getElementById("judul");
const pesan = document.getElementById("pesan");
judul.textContent = "Belajar JavaScript LAGI";
pesan.textContent = "Konten berhasil diubah oleh JavaScript."

const tombol = document.getElementById("tombolAksi");
const pesan = document.getElementById("pesan");
tombol.addEventListener("click", function () {
pesan.textContent = "Tombol diklik pada " + new Date().toLocaleTimeString();
});

const tombolGaya = document.getElementById("tombolGaya");
const teksGaya = document.getElementById("teksGaya");
tombolGaya.addEventListener("click", function () {
teksGaya.classList.toggle("highlight");
teksGaya.classList.toggle("teks-besar");
});