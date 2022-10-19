import WritingRes from "components/writingRes/writingRes";
import { NextPage } from "next";

const WritingSuccess: NextPage = () => {
  const resPageData = {
    title: "성공적으로 글이 등록되었습니다",
    img: "/img/writingRes/success.svg",
  };

  return (
    <>
      <WritingRes resPageData={resPageData} />
    </>
  );
};

export default WritingSuccess;
