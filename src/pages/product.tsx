import { useParams } from "react-router-dom";

import BaseLayout from "@/layout/base";
import ProductCard from "@/components/product-card";
import Markdown from "react-markdown";

import ProductData from "@/data/product";

export default function Product() {
  const params = useParams();
  const data = ProductData[params.produkId - 1];
  return (
    <BaseLayout>
      <div className="sm:px-4 md:px-12 py-4">
        <h1 className="text-3xl text-center">Produk</h1>

        <div className="flex sm:flex-col md:flex-row gap-12">
          <ProductCard img={data.img} title={data.nama}></ProductCard>
          <div>
            <h2 className="text-2xl font-bold">
              {data.nama}
            </h2>

            <div className="prose lg:prose-xl">
              <Markdown className="prose lg:prose-xl">
                {data.deskripsi}
              </Markdown>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
