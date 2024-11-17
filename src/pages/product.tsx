import BaseLayout from "@/layout/base";
import ProductCard from "@/components/product-card";

import TopiImg from "@/assets/topi.png";

export default function Product() {
  return (
    <BaseLayout>
      <div className="sm:px-4 md:px-12 py-4">
        <h1 className="text-3xl text-center">Produk</h1>

        <div className="flex gap-12">
          <ProductCard img={TopiImg} title="Topi"></ProductCard>
          <div>
            <h2 className="text-2xl font-bold">
              Kaos kaki
            </h2>

            <ul className="flex flex-col gap-4 list-decimal">
              <li>
                ✨ Desain Modern dan Nyaman Dipakai Seharian Kaos kaki premium kami hadir dengan desain modern dan bahan yang lembut serta elastis. Terbuat dari campuran katun berkualitas tinggi dan serat elastane, kaos kaki ini memberikan kenyamanan luar biasa tanpa terasa ketat atau panas. Cocok untuk penggunaan sehari-hari maupun olahraga ringan.
              </li>
              <li>
                💨 Anti Bau dan Menyerap Keringat Dilengkapi dengan teknologi anti-bakteri dan bahan yang menyerap keringat, kaos kaki ini menjaga kaki tetap kering dan bebas bau sepanjang hari. Cocok untuk cuaca panas ataupun kegiatan aktif, Anda akan merasakan kenyamanan yang maksimal.
              </li>
              <li>
                🧦 Pilihan Warna dan Motif Beragam Tersedia dalam berbagai warna dan motif trendi yang bisa dipilih sesuai gaya Anda. Mulai dari warna polos klasik hingga motif unik, kaos kaki ini mudah dipadukan dengan berbagai jenis sepatu dan pakaian.
              </li>
              <li>
                💪 Tahan Lama dan Mudah Dirawat Kaos kaki kami didesain untuk tahan lama bahkan setelah banyak pencucian. Bahan berkualitasnya tidak mudah melar atau berubah bentuk, sehingga tetap nyaman dan tampil baik dalam jangka waktu yang lama.
              </li>
              <li>

                🛒 Ideal untuk Hadiah dan Pemakaian Pribadi Selain untuk Anda sendiri, kaos kaki ini juga cocok dijadikan hadiah untuk keluarga atau teman. Desainnya yang unisex membuatnya bisa dipakai siapa saja, baik pria maupun wanita.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
