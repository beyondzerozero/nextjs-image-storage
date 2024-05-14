import ImageApp from "@/components/imageApp";

export default function Index() {
  return (
    <>
      <h1 className="mb-4 pt-28 text-4xl">이미지 등록 웹엡</h1>
      <div className="flex-1 w-full flex flex-col items-center">
        <ImageApp />
      </div>
    </>
  );
}