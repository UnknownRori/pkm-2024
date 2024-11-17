import BaseLayout from "@/layout/base";

export default function Kontak() {
  return (
    <BaseLayout>
      <div className="flex justify-between items-center h-full">
        <div className="flex justify-center items-center w-full">
          081567967356
        </div>
        <iframe className="rounded w-full" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d823.7861120906641!2d110.7222114!3d-7.6645054!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a3f7ac89a3ea3%3A0x2356bdfa80e5dca6!2sKantor%20Kepala%20Desa%20Sawahan!5e1!3m2!1sen!2sid!4v1731841408024!5m2!1sen!2sid" width="600" height="450" loading="lazy"></iframe>
        <div className="flex justify-center items-center w-full">
          desa.sawahan
        </div>
      </div>
    </BaseLayout>
  );
}
