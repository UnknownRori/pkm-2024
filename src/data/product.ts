import TopiImg from "@/assets/topi.png";
import TasImg from "@/assets/tas.png";

export type ProductData = {
    id: string,
    nama: string,
    img: string,
    deskripsi: string,
};

const data = [
    {
        id: "1",
        nama: "Topi",
        img: TopiImg,
        deskripsi: `
Topi Sekolah yang dirancang untuk kenyamanan anak sekolahan. Dengan desain modern dan kekinian, topi ini cocok dipakai dalam berbagai kesempatan. Dibuat dari bahan berkualitas seperti katun lembut atau kanvas premium, topi ini ringan dan breathable, sehingga kepala tetap sejuk meski dipakai sepanjang hari. Tidak hanya menunjang penampilan, topi ini juga berfungsi melindungi kepala dari sinar UV, menjadikannya pilihan yang tepat untuk kegiatan bersekolah terutama saat upacara.

Dengan pilihan warna dan motif yang sesuai dengan outfit seragam sekolah. Jahitan yang rapi dan bahan yang tahan lama memastikan topi ini awet digunakan dalam waktu lama, bahkan setelah sering dicuci. Perawatannya pun mudah, sehingga Anda tidak perlu khawatir tentang keawetannya.

Topi ini dirancang untuk semua kalangan, baik pria maupun wanita. Selain menjadi pelengkap gaya, topi ini juga bisa menjadi hadiah sempurna untuk teman, keluarga, atau pasangan Anda. Dengan topi ini, Anda tidak hanya mendapatkan perlindungan dari panas dan sinar matahari, tetapi juga tampilan yang lebih percaya diri dan modis. Pilih topi sekolah kami untuk melengkapi aktivitas Anda dengan gaya dan kenyamanan maksimal!
`,
    },
    {
        id: "2",
        nama: "Tas",
        img: TasImg,
        deskripsi: `
Tas premium kami hadir dengan desain modern yang dirancang untuk mendukung berbagai kebutuhan Anda, baik untuk aktivitas sehari-hari, bekerja, hingga traveling. Dibuat dari bahan berkualitas tinggi seperti kulit sintetis, kanvas tebal, atau nilon tahan air, tas ini memberikan kesan stylish sekaligus tahan lama.

Dengan ruang penyimpanan yang luas dan kompartemen yang terorganisir, tas ini memudahkan Anda menyimpan barang dengan rapi. Mulai dari laptop, gadget, hingga perlengkapan pribadi, semua dapat disimpan dengan aman. Selain itu, materialnya yang kuat memastikan tas tetap kokoh meskipun membawa beban berat.

Tersedia dalam berbagai model seperti tote bag, backpack, sling bag, dan handbag, tas ini hadir dengan pilihan warna dan desain yang beragam. Cocok untuk pria maupun wanita, tas ini dapat melengkapi berbagai gaya, baik formal maupun kasual.

Tidak hanya nyaman digunakan, tas ini juga dirancang agar mudah dirawat. Bahan anti air dan anti noda membuatnya tetap terlihat bersih dan baru meskipun sering digunakan. Jahitan rapi dan detail berkualitas tinggi menjadikan tas ini pilihan ideal untuk penggunaan jangka panjang.

Tas ini tidak hanya berfungsi sebagai pelengkap gaya, tetapi juga sebagai hadiah istimewa untuk orang tersayang. Tingkatkan kepercayaan diri Anda dengan tas yang menggabungkan gaya, kenyamanan, dan fungsionalitas ini! 🎒👜✨
`,
    }
];

export default data;


