import WritingRes from "components/writingRes/writingRes";
import { NextPage } from "next";

const WritingFailed: NextPage = () => {
  const resPageData = {
    title: "글 등록에 실패하였습니다",
    img: "/img/writingRes/failed.svg",
  };

  return (
    <>
      <WritingRes resPageData={resPageData} />
    </>
  );
};

export default WritingFailed;
