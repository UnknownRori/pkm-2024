export default function Footer() {
  return (
    <>
      <footer className="flex sm:flex-col md:flex-row justify-between bg-text-100 text-white sm:px-2 md:px-12 py-4 mt-12">
        <div className="px-12 flex py-2 justify-center items-center">
          <h1 className="text-4xl">UMKM Sawahan</h1>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <p>
            Kontak Kami
          </p>
          <p>
            Sawahan ,Sawahan, Juwiring,Klaten
          </p>
          <p>
            Telp : 081567967356
          </p>
          <p>
            ig     : desa.sawahan
          </p>
        </div>
      </footer>
      <div className="bg-text-200 text-white text-center">
        UMKM Sawahan
      </div>
    </>
  );
}
