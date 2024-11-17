import Card from "@/shared/card";

export type KegiatanCardProps = {
  img: string,
  title: string,
  content: string,
};


export default function KegiatanCard(props: KegiatanCardProps) {
  return (
    <Card className="flex gap-4">
      <div>
        <img src={props.img} alt={props.title} />
      </div>

      <div className="flex flex-col gap-4">
        <h1>{props.title}</h1>

        <p>{props.content}</p>
      </div>
    </Card>
  );
}