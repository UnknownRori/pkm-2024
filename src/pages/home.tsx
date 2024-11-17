import BannerImage from "@/assets/banner.png";
import BaseLayout from "@/layout/base";
import ProductCard from "@/components/product-card";
import KegiatanCard from "@/components/kegiatan-card";

import TopiImg from "@/assets/topi.png";
import TasImg from "@/assets/tas.png";

import Foto1 from "@/assets/foto1.png";
import Foto2 from "@/assets/foto2.png";

export default function Home() {
  return (
    <BaseLayout>
      <div className="flex justify-center items-center">
        <img src={BannerImage} alt="banner" className="w-[80%]" />
      </div>

      <section className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-3xl">Produk</h1>

        <div className="flex lg:flex-row sm:flex-col gap-12">
          <ProductCard img={TopiImg} title="Topi"></ProductCard>
          <ProductCard img={TasImg} title="Tas"></ProductCard>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center gap-4 md:px-24 sm:px-4">
        <h1 className="text-3xl">Produk</h1>

        <div className="flex flex-col gap-12">
          <KegiatanCard img={Foto1} title="Judul" content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam doloribus fuga repudiandae dolorem eveniet! Ratione nam numquam consequatur, voluptate architecto consequuntur vel minima esse excepturi mollitia, fuga nesciunt aspernatur blanditiis?"></KegiatanCard>
          <KegiatanCard img={Foto2} title="Judul" content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam doloribus fuga repudiandae dolorem eveniet! Ratione nam numquam consequatur, voluptate architecto consequuntur vel minima esse excepturi mollitia, fuga nesciunt aspernatur blanditiis?"></KegiatanCard>
        </div>
      </section>
    </BaseLayout>
  )
}
