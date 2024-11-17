import BaseLayout from "@/layout/base";

export default function NotFoundPage() {
  return (
    <BaseLayout>
      <div className="flex flex-col gap-8 justify-center items-center h-full">
        <h1 className="text-6xl font-bold italic">
          404
        </h1>

        <h2 className="text-4xl">
          Not Found
        </h2>
      </div>
    </BaseLayout>
  );
}
