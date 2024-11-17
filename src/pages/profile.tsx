import BaseLayout from "@/layout/base";
import Profil1 from "@/assets/foto1.png";
import Profil2 from "@/assets/foto2.png";

export default function Profile() {
  return (
    <BaseLayout>
      <section className="flex flex-col gap-8 sm:px-4 md:px-14 mt-12">
        <h1 className="text-4xl">
          Profile
        </h1>

        <p>
          UMKM desa sawahan merupakan usaha kecil yang berbasis di Desa Sawahan,
          Juwiring. Kami bergerak di bidang tas , ikat pinggang , topi , bordir dll ,
          yang menghasilkan produk berkualitas tinggi dan ramah lingkungan. Dengan memanfaatkan
          sumber daya lokal, kami berkomitmen untuk memberdayakan masyarakat desa dan
          menciptakan lapangan kerja bagi warga sekitar.
        </p>
      </section>

      <section className="flex flex-col gap-12 sm:px-4 md:px-14">
        <img src={Profil1} alt="" className="rounded" />
        <img src={Profil2} alt="" className="rounded" />
      </section>
    </BaseLayout>
  );
}
