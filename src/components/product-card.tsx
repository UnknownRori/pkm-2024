import Card from "@/shared/card";

export type ProductCard = {
  img: string,
  title: string,
};

export default function ProductCard(props: ProductCard) {
  return (

    <Card className="flex flex-col gap-4">
      <img src={props.img} alt="" />
      <h1 className="text-2xl text-center">{props.title}</h1>
      <div className="flex gap-4 justify-center items-center">
        <button className="bg-primary-600 py-2 px-12 flex justify-center items-center rounded">
          <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <circle cx="9" cy="21" r="1" />  <circle cx="20" cy="21" r="1" />  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
        </button>

        <button className="bg-primary-600 py-2 px-12 flex justify-center items-center text-center text-white rounded">
          Beli
        </button>
      </div>
    </Card>
  );
}
