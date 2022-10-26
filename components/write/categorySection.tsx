import styled from "@emotion/styled";
import { NextPage } from "next";

interface props {
  categoryName: string;
}

const CategorySection: NextPage<props> = ({ categoryName }: props) => {
  return (
    <CategoryWrap>
      <PenImg />
      <Category>{categoryName}</Category>
    </CategoryWrap>
  );
};

const Category = styled.h1`
  font-size: 32px;
`;

const PenImg = styled.div`
  width: 35px;
  aspect-ratio: 1;
  background-image: url("/img/writePost/writePen.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

const CategoryWrap = styled.div`
  width: fit-content;
  margin-top: 120px;

  display: flex;
  align-items: center;
  gap: 5px;
`;

export default CategorySection;
