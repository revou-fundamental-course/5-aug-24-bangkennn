document.addEventListener('DOMContentLoaded', function() {
    // Menyembunyikan elemen dengan kelas 'article-bmi' saat halaman dimuat
    document.querySelector('.article-bmi').style.display = 'none';

    // Menambahkan event listener untuk tombol dengan kelas 'hitung'
    document.querySelector('.hitung').addEventListener('click', function(event) {
        // Mencegah default action dari tombol
        event.preventDefault();

        // Validasi jenis kelamin
        const jenisKelamin = document.querySelector('input[name="jenis-kelamin"]:checked');
        if (!jenisKelamin) {
            alert('Silakan pilih jenis kelamin.');
            return;
        }

        // Validasi umur
        const umur = document.querySelector('.umur').value;
        if (!umur || isNaN(umur) || umur <= 0) {
            alert('Silakan masukkan umur yang valid.');
            return;
        }

        // Mengambil nilai berat dan tinggi dari input
        const berat = parseFloat(document.querySelector('.berat').value);
        const tinggi = parseFloat(document.querySelector('.tinggi').value) / 100; // Mengubah satuan tinggi dari cm ke m

        // Memeriksa apakah nilai berat dan tinggi valid
        if (isNaN(berat) || isNaN(tinggi) || tinggi === 0) {
            alert('Masukkan nilai berat dan tinggi yang valid.');
            return;
        }

        // Menghitung BMI
        const bmi = berat / (tinggi * tinggi);
        // Menampilkan hasil BMI dengan 1 angka di belakang koma
        document.querySelector('.hasil-bmi').textContent = bmi.toFixed(1);

        // Menentukan kategori BMI
        let kategori = '';
        let deskripsi = '';
        if (bmi < 18.5) {
            kategori = 'Kurang';
            deskripsi = 'Berat badan kurang';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            kategori = 'Ideal';
            deskripsi = 'Berat badan ideal';
        } else {
            kategori = 'Berlebih';
            deskripsi = 'Berat badan berlebih';
        }

        // Menampilkan kategori BMI dan deskripsinya
        document.querySelector('.data_bmi').textContent = `Berat badan Anda ${kategori}`;
        document.querySelector('.deskripsi-bmi').textContent = deskripsi;

        // Menampilkan kisaran BMI
        const kisaran = Math.floor(bmi);
        document.querySelector('.golongan-bmi').textContent = `Hasil BMI di antara : ${kisaran} - ${kisaran + 1}`;

        // Menentukan saran berdasarkan kategori BMI
        let saran = '';
        if (kategori === 'Kurang') {
            saran = 'Anda perlu menambah berat badan untuk mencapai berat badan ideal. Cobalah untuk makan lebih sering dengan porsi kecil. Pilih makanan yang kaya akan nutrisi dan kalori. Jangan lupa untuk berolahraga secara teratur untuk membangun massa otot.';
        } else if (kategori === 'Berlebih') {
            saran = 'Anda perlu menurunkan berat badan untuk mencapai berat badan ideal. Cobalah untuk mengurangi asupan kalori dan meningkatkan aktivitas fisik. Pastikan untuk mengatur pola makan yang seimbang dan sehat. Dengan demikian, Anda dapat mencapai berat badan yang ideal dan meningkatkan kesehatan secara keseluruhan.';
        } else {
            saran = 'Pertahankan berat badan Anda yang sekarang. Pastikan untuk terus makan makanan yang seimbang dan berolahraga secara teratur. Dengan demikian, Anda dapat menjaga kesehatan dan berat badan yang ideal.';
        }
        // Menampilkan saran
        document.querySelector('.penjelasan-golongan').textContent = saran;

        // Menampilkan elemen dengan kelas 'article-bmi'
        document.querySelector('.article-bmi').style.display = 'block';
    });
});
