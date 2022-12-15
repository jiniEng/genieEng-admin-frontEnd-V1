import styled from "@emotion/styled";
import CategorySection from "components/write/categorySection";
import ContentSection from "components/write/contentSection";
import ImgSelectSection from "components/write/imgSelectSection";
import TitleSection from "components/write/titleSection";
import { getWriteTargetDocs } from "docs/writeTaget";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import {
  targetDocsType,
  targetNameListType,
} from "utils/interface/writePost/writePost";
import { writePostDataRecoil } from "utils/store/writePost/writePost";

interface props {
  target: targetNameListType | null;
}

const WritePost: NextPage<props> = ({ target }: props) => {
  const router = useRouter();
  const [writePostData, setWritePostData] = useRecoilState(writePostDataRecoil);
  const [categoryDocs, setCategoryDocs] = useState<targetDocsType>({
    categoryName: "",
    url: "",
  });

  useEffect(() => {
    if (target === null) {
      router.replace("/");
    } else {
      const docs = getWriteTargetDocs(target);
      setCategoryDocs(docs);
    }
  }, []);

  const submit = () => {
    console.log(writePostData);
    setWritePostData({ title: "", content: "", imgs: [] });
  };

  return (
    <WritePage>
      <WriteSection>
        <CategorySection categoryName={categoryDocs.categoryName} />
        <TitleSection />
        <ContentSection />
        <ImgSelectSection />
        <WritePostBtn onClick={submit}>다음으로</WritePostBtn>
      </WriteSection>
    </WritePage>
  );
};

const WritePostBtn = styled.button`
  width: 450px;
  height: 70px;
  border-radius: 10px;
  background-color: #6c63ff;
  margin-top: 70px;

  color: white;
  font-size: 28px;
  font-weight: bold;

  cursor: pointer;
  transition: 200ms;

  &:active {
    transform: scale(0.99);
  }
`;

const WriteSection = styled.article`
  width: 1000px;
  height: fit-content;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 8%;
  padding-bottom: 100px;
`;

const WritePage = styled.main`
  width: 100%;
  min-height: 100vh;
  height: fit-content;
  background-color: #f9f6f6;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-bottom: 7vw;
`;

export function getServerSideProps({ query }: any) {
  let target: targetNameListType | null = query.t;

  if (!target || !["elementary", "middle", "notice"].includes(target)) {
    target = null;
  }

  return {
    props: {
      target,
    },
  };
}

export default WritePost;
