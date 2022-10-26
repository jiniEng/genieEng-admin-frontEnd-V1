import styled from "@emotion/styled";
import CategorySection from "components/write/categorySection";
import ContentSection from "components/write/contentSection";
import ImgSelectSection from "components/write/imgSelectSection";
import TitleSection from "components/write/titleSection";
import { getWriteTargetDocs } from "docs/writeTaget";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  targetDocsType,
  targetNameListType,
} from "utils/interface/writePost/writePost";

interface props {
  target: targetNameListType | null;
}

const WritePost: NextPage<props> = ({ target }: props) => {
  const router = useRouter();
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

  return (
    <WritePage>
      <WriteSection>
        <CategorySection categoryName={categoryDocs.categoryName} />
        <TitleSection />
        <ContentSection />
        <ImgSelectSection />
      </WriteSection>
    </WritePage>
  );
};

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
