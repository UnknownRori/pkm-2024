import ProductCard from "@/components/product-card";

import TopiImg from "@/assets/topi.png";
import TasImg from "@/assets/tas.png";
import BaseLayout from "@/layout/base";

export default function ProductList() {
  return (
    <BaseLayout>
      <div className="grid gap-4 grid-cols-2 justify-center items-center justify-items-center">
        <ProductCard link="/produk/1" img={TopiImg} title="Topi"></ProductCard>
        <ProductCard link="/produk/1" img={TasImg} title="Tas"></ProductCard>
      </div>
    </BaseLayout>
  );
}
