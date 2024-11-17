import Foto1 from "@/assets/foto1.png";
import Foto2 from "@/assets/foto2.png";
import Foto3 from "@/assets/foto3.png";
import Foto4 from "@/assets/foto4.png";
import BaseLayout from "@/layout/base";

export default function Gallery() {
  return (
    <BaseLayout>

      <div className="grid gap-4 grid-cols-2 justify-center items-center justify-items-center">
        <img src={Foto1} alt="" className="rounded w-[500px]" />
        <img src={Foto2} alt="" className="rounded w-[500px]" />
        <img src={Foto3} alt="" className="rounded w-[500px]" />
        <img src={Foto4} alt="" className="rounded w-[500px]" />
      </div>
    </BaseLayout>
  );
}
