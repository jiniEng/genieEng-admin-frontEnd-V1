import styled from "@emotion/styled";
import { NextPage } from "next";

const MainHeader: NextPage = () => {
  return (
    <HeaderSection>
      <MainHeaderWrap>
        <LogoWrap>
          <Logo />
          <Title>지니영어</Title>
        </LogoWrap>
        <PatchReqBtn>수정요청</PatchReqBtn>
      </MainHeaderWrap>
      <CategoryWrap>
        <Category>초등갤러리</Category>
        <Category>중등갤러리</Category>
        <Category>공지사항</Category>
        <Category>일정관리</Category>
      </CategoryWrap>
    </HeaderSection>
  );
};
const Category = styled.p`
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
`;

const CategoryWrap = styled.div`
  width: 100vw;
  height: 70px;
  padding: 0 20vw;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PatchReqBtn = styled.button`
  background: #6c63ff;
  border-radius: 50px;

  width: 150px;
  height: 45px;

  color: white;
  font-weight: bold;
  font-size: 18px;

  cursor: pointer;
  transition: 150ms;

  &:active {
    transform: scale(0.98);
  }
`;

const Logo = styled.div`
  background-image: url("/img/header/logo.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  width: 80px;
  height: 65px;
`;

const Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
`;

const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
const MainHeaderWrap = styled.div`
  width: 100vw;
  height: 90px;
  padding: 0 20vw;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid #000;
`;

const HeaderSection = styled.header``;

export default MainHeader;
