import BaseLayout from "@/layout/base";
import KegiatanCard from "@/components/kegiatan-card";

import Foto1 from "@/assets/foto1.png";
import Foto2 from "@/assets/foto2.png";

export default function KegiatanList() {
  return (
    <BaseLayout>
      <KegiatanCard img={Foto1} title="Judul" content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam doloribus fuga repudiandae dolorem eveniet! Ratione nam numquam consequatur, voluptate architecto consequuntur vel minima esse excepturi mollitia, fuga nesciunt aspernatur blanditiis?"></KegiatanCard>
      <KegiatanCard img={Foto2} title="Judul" content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam doloribus fuga repudiandae dolorem eveniet! Ratione nam numquam consequatur, voluptate architecto consequuntur vel minima esse excepturi mollitia, fuga nesciunt aspernatur blanditiis?"></KegiatanCard>
    </BaseLayout>
  );
}
