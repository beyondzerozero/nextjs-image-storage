import PrivateImageApp from "@/components/privateImageApp";

export default function Private() {
  return (
    <>
      <h1 className="mb-4 pt-28 text-4xl">이미지 등록 웹앱(Private)</h1>
      <p className="mb-4">
        ※ 표시되는 이미지는 5분후, 링크가 닫힙니다.
        <br />
        다시 보고 싶은 경우에는 다시불러오기버튼을 클릭하세요.
      </p>
      <div className="flex-1 w-full flex flex-col items-center">
        <PrivateImageApp />
      </div>
    </>
  );
}
