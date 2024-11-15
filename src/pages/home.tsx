import BannerImage from "@/assets/banner.png";
import BaseLayout from "@/layout/base";
import ProductCard from "@/components/product-card";

import TopiImg from "@/assets/topi.png";
import TasImg from "@/assets/tas.png";

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
    </BaseLayout>
  )
}
