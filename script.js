const namaHalte = ["Halte Blok M # 1.1", "Halte CSW ASEAN # 1.2 - 13.4", "Halte Masjid Agung # 1.3", "Halte Bundaran Senayan # 1.4", "Halte GBK # 1.5", "Halte Polda # 1.6", "Halte Bendungan Hilir Semanggi # 1.7 - 9.15", "Halte Karet Sudirman # 1.8", "Halte Dukuh Atas # 1.9 - 4.17 - 6.20", "Halte Tosari # 1.10", "Halte Bundaran HI Astra # 1.11", "Halte M.H Thamrin # 1.12", "Halte Bank Indonesia # 1.13", "Halte Monas # 1.14 - 2.21", "Halte Harmoni Temporer # 1.15", "Halte Sawah Besar # 1.16", "Halte Mangga Besar # 1.17", "Halte Olimo # 1.18", "Halte Glodok # 1.19", "Halte Kota # 1.20 - 12.6", "Halte Kali Besar Barat # 1.21 - 12.22", "Halte Museum Fatahilah # 1.22 - 12.5", "Halte Pulo Gadung # 2.1 - 4.1", "Halte Bermis # 2.2", "Halte Pulomas # 2.3", "Halte ASMI # 2.4", "Halte Pedongkelan # 2.5", "Halte Cempaka Putih # 2.6", "Halte RS. Islam # 2.7", "Halte Cempaka Tengah # 2.8", "Halte Pasar Cempaka Putih # 2.9", "Halte Rawa Selatan # 2.10", "Halte Galur # 2.11", "Halte Senen # 2.12 - 14.1", "Halte Atrium # 2.13", "Halte RSPAD # 2.14", "Halte Deplu # 2.15", "Halte Gambir I # 2.16", "Halte Istiqlal # 2.17", "Halte Juanda # 2.18 - 3.15", "Halte Pecenongan # 2.19 - 3.14", "Halte Balaikota # 2.22", "Halte Gambir II # 2.23", "Halte Kwitang # 2.24", "Halte Kalideres # 3.1", "Halte Pesakih # 3.2", "Halte Sumur Bor # 3.3", "Halte Rawa Buaya # 3.4", "Halte Jembatan Baru # 3.5", "Halte Dispenda Samsat Barat # 3.6", "Halte Jembatan Gantung # 3.7", "Halte Taman Kota # 3.8", "Halte Indosiar # 3.9 - 8.17", "Halte Jelambar # 3.10 - 8.18", "Halte Grogol # 3.11 - 9.21", "Halte RS. Sumber Waras # 3.12", "Halte Pasar Pulogadung # 4.2", "Halte TU GAS # 4.3", "Halte Layur # 4.4", "Halte Pemuda Rawamangun # 4.5", "Halte Velodrome # 4.6", "Halte Sunan Giri # 4.7", "Halte UNJ # 4.8", "Halte Pramuka BPKP # 4.9", "Halte Pramuka LIA # 4.10", "Halte Utan Kayu # 4.11", "Halte Pasar Genjing # 4.12", "Halte Matraman # 4.13 - 5.12", "Halte Manggarai # 4.14", "Halte Pasar Rumput # 4.15", "Halte Halimun # 4.16 - 6.19", "Halte Ancol # 5.1", "Halte Pademangan # 5.2", "Halte Gunung Sahari Mangga Dua # 5.3 - 12.9", "Halte Jembatan Merah # 5.4 - 12.10", "Halte Pasar Baru Timur # 5.5", "Halte Budi Utomo # 5.6", "Halte Senen Sentral # 5.7", "Halte Pal Putih # 5.8", "Halte Kramat Sentiong # 5.9", "Halte Salemba UI # 5.10", "Halte Salemba Carolus # 5.11", "Halte Tegalan # 5.13", "Halte Slamet Riyadi # 5.14", "Halte Matraman Baru # 5.15", "Halte Pasar Jatinegara # 5.16", "Halte RS. Premier Jatinegara # 5.17 - 11.15", "Halte Kampung Melayu # 5.18 - 7.14 - 11.16", "Halte Ragunan # 6.1", "Halte Departemen Pertanian # 6.2", "Halte SMK 57 # 6.3", "Halte Jatipadang # 5.4", "Halte Pejaten # 6.5", "Halte Buncit Indah # 6.6", "Halte Warung Jati # 6.7", "Halte Imigrasi # 6.8", "Halte Duren Tiga # 6.9", "Halte Mampang Prapatan # 6.10", "Halte Kuningan Timur # 6.11", "Halte Patra Kuningan # 6.12", "Halte Departemen Kesehatan # 6.13", "Halte GOR Sumantri # 6.14", "Halte Karet Kuningan # 6.15", "Halte Kuningan Madya # 6.16", "Halte Setiabudi Utara # 6.17", "Halte Latuharhary # 6.18", "Halte Kampung Rambutan # 7.1", "Halte Tanah Merdeka # 7.2", "Halte Flyover Raya Bogor # 7.3", "Halte RS. Harapan Bunda # 7.4", "Halte Pasar Induk Kramat Jati # 7.5", "Halte Pasar Kramat Jati # 7.6", "Halte PGC I # 7.7", "Halte BKN # 7.8 - 10.21", "Halte Cawang BRT # 7.9 - 9.3 - 10.19", "Halte BNN # 7.10 - 9.5", "Halte Cawang Otista # 7.11", "Halte Gelanggang Remaja # 7.12", "Halte Bidara Cina # 7.13", "Halte Lebak Bulus # 8.1", "Halte Pondok Pinang # 8.2", "Halte Pondok Indah I # 8.3", "Halte Pondok Indah II # 8.4", "Halte Tanah Kusir Kodim # 8.5", "Halte Kebayuran Lama Bungur # 8.6", "Halte Pasar Kebayoran Lama # 8.7", "Halte Simprug # 8.8", "Halte Permata Hijau # 8.9", "Halte Permata Hijau RS Medika # 8.10", "Halte Pos Pengumben # 8.11", "Halte Kelapa Dua Sasak # 8.12", "Halte Kebon Jeruk # 8.13", "Halte Duri Kepa # 8.14", "Halte Kedoya Assiddiqiyah # 8.15", "Halte Kedoya Green Garden # 8.16", "Halte Tomang Mandala # 8.19", "Halte RS. Tarakan # 8.20", "Halte Petojo # 8.21", "Halte Pinang Ranti # 9.1", "Halte Garuda Taman Mini # 9.2", "Halte Cawang Ciliwung # 9.6", "Halte Cikoko Cawang # 9.7", "Halte Tebet Eco Park # 9.8", "Halte Pancoran Tugu # 9.9", "Halte Pancoran Barat # 9.10", "Halte Tegal Parang # 9.11", "Halte Kuningan Barat # 9.12", "Halte Gatot Subroto Jamsostek # 9.13", "Halte Gatot Subroto LIPI # 9.14", "Halte Senayan JCC # 9.16", "Halte Slipi Petamburan # 9.17", "Halte Slipi Kemanggisan # 9.18", "Halte RS. Harapan Kita # 9.19", "Halte S. Parman Podomoro City # 9.20", "Halte Latumeten St. Grogol # 9.22", "Halte Jembatan Besi # 9.23", "Halte Jembatan Dua # 9.24", "Halte Jembatan Tiga # 9.25", "Halte Penjaringan # 9.26 - 12.24", "Halte Pluit # 9.27 - 12.1", "Halte Tanjung Priok # 10.1 - 12.21", "Halte Enggano # 10.2 - 12.20", "Halte Permai Koja # 10.3 - 12.19", "Halte Walikota Jakarta Utara # 10.4 - 12.18", "Halte Plumpang Pertamina # 10.5 - 12.17", "Halte Sunter Kelapa Gading # 10.6 - 12.16", "Halte Yos Sudarso Kodamar # 10.7", "Halte Cempaka Mas II # 10.8", "Halte Cempaka Putih # 10.9", "Halte Pulomas Bypass # 10.10", "Halte Kayu Putih Rawasari # 10.11", "Halte Pemuda Pramuka # 10.12", "Halte Utan Kayu Rawamangun # 10.13", "Halte Ahmad Yani Bea Cukai # 10.14", "Halte St. Jatinegara I # 10.15", "Halte Pedati Prumpung # 10.16", "Halte Cipinang Kebon Nanas # 10.17", "Halte Penas Kalimalang # 10.18", "Halte Cawang Soetoyo # 10.19", "Halte PGC II # 10.22", "Halte Terminal Pulogebang # 11.1", "Halte Walikota Jakarta Timur # 11.2", "Halte Penggilingan # 11.3", "Halte Perumnas Klender # 11.4", "Halte Flyover Radin Inten # 11.5", "Halte Buaran # 11.6", "Halte Kampung Sumur # 11.7", "Halte Flyover Klender # 11.8", "Halte St. Klender # 11.9", "Halte Cipinang # 11.10", "Halte Imigrasi Jakarta Timur # 11.11", "Halte Pasar Enjo # 11.12", "Halte Flyover Jatinegara # 11.13", "Halte St. Jatinegara II # 11.14", "Halte Landmark Auto Plaza # 12.2", "Halte Pakin # 12.3", "Halte Gedong Panjang # 12.4", "Halte Pangeran Jayakarta # 12.7", "Halte Mangga Dua # 12.8", "Halte Kemayoran Landas Pacu Timur # 12.11 - 14.4", "Halte Danau Gunung # 12.12a - 14.5", "Halte Sunter Barat A # 12.12b - 14.6", "Halte SMP 140 # 12.13", "Halte Sunter Karya # 12.14", "Halte Sunter Boulevard Barat # 12.15", "Halte Tendean # 13.1", "Halte Rawa Barat # 13.2", "Halte Tirtayasa # 13.3", "Halte Mayestik # 13.5", "Halte Velbak # 13.6", "Halte Kebayoran Lama # 13.7", "Halte Seskoal # 13.8", "Halte Cipulir # 13.9", "Halte Swadarma # 13.10", "Halte JORR W2 # 13.11", "Halte Adam Malik # 13.12", "Halte Ciledug Puri Beta I # 13.13", "Halte Ciledug Puri Beta II # 13.14", "Halte CBD Ciledug # 13.15", "Halte Tanah Tinggi # 14.2", "Halte Benyamin Sueb # 14.3", "Halte Sunter Barat B # 14.7", "Halte Jakarta International Stadium # 14.8"];

// Fungsi untuk generate nama halte secara acak
function generateRandomHalte() {
    // Ambil satu elemen acak dari array namaHalte
    return namaHalte[Math.floor(Math.random() * namaHalte.length)];
  }
  
  // Event listener untuk tombol
  document.querySelector("#tombol").addEventListener("click", () => {
    // Tampilkan output nama halte secara acak di halaman website
    document.querySelector("#nama-halte-tujuan").innerHTML = generateRandomHalte();
    document.querySelector("#nama-halte-dari").innerHTML = generateRandomHalte();
  });