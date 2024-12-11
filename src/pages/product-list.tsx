import ProductCard from "@/components/product-card";

import BaseLayout from "@/layout/base";

import ProductData from "@/data/product";

export default function ProductList() {
  const list = ProductData.map((data) => {
    return (<ProductCard link={`/produk/${data.id}`} img={data.img} title={data.nama} key={data.id} />)
  })
  return (
    <BaseLayout>
      <div className="grid gap-4 grid-cols-2 justify-center items-center justify-items-center">
        {list}
      </div>
    </BaseLayout>
  );
}
