// JavaScript untuk menangani aksi tombol Log Out
    document.getElementById('logoutBtn').addEventListener('click', function() {
        // Meminta konfirmasi dari pengguna sebelum keluar dari akun
        var confirmLogout = confirm("Apakah Anda yakin ingin keluar dari akun?");
        
        if (confirmLogout) {
            // Jika pengguna menekan OK, lakukan logout
            logout();
        } else {
            // Jika pengguna menekan Cancel, batalkan logout
            alert("Logout dibatalkan.");
        }
    });

    // Fungsi untuk logout
    function logout() {
        // Di sini Anda dapat menambahkan logika logout, seperti membersihkan sesi atau mengarahkan ke halaman logout
        alert("Anda telah berhasil logout.");
        // Contoh: Redirect ke halaman logout
        window.location.href = "logout.php"; // Ganti dengan URL logout yang sesuai
    }