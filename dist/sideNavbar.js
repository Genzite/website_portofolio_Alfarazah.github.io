function toggleHamburger() {
    const btn = document.getElementById('hamburger');
    const sideBar = document.getElementById('sidebar');
  
    btn.classList.toggle('open');
    sideBar.classList.toggle('-translate-x-full');
    sideBar.classList.toggle('translate-x-0');
  
    // Cek jika sidebar dibuka
    if (sideBar.classList.contains('translate-x-0')) {
      // Tambahkan event listener 1x untuk mendeteksi klik di luar
      document.addEventListener('click', clickOutsideHandler);
    }
  }
  
  // Fungsi untuk menutup jika klik di luar
  function clickOutsideHandler(event) {
    const btn = document.getElementById('hamburger');
    const sideBar = document.getElementById('sidebar');
  
    // Jika klik bukan di dalam sidebar atau tombol hamburger
    if (!sideBar.contains(event.target) && !btn.contains(event.target)) {
      // Tutup sidebar
      sideBar.classList.add('-translate-x-full');
      sideBar.classList.remove('translate-x-0');
      btn.classList.remove('open');
  
      // Hapus event listener setelah tertutup
      document.removeEventListener('click', clickOutsideHandler);
    }
  }
  