import styled from "@emotion/styled";
import { NextPage } from "next";
import { useEffect, useState } from "react";

const Header: NextPage = () => {
  const [headerSplit, setHeaderSplit] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const pageY = window.pageYOffset;

      if (pageY <= 80) {
        setHeaderSplit(false);
      } else {
        setHeaderSplit(true);
      }
    });
  }, []);

  return (
    <HeaderSection>
      <MainHeaderWrap show={headerSplit}>
        <LogoWrap>
          <Logo />
          <Title>지니영어</Title>
        </LogoWrap>
        <PatchReqBtn>수정요청</PatchReqBtn>
      </MainHeaderWrap>
      <CategoryWrap split={headerSplit}>
        <Category>초등갤러리</Category>
        <Category>중등갤러리</Category>
        <Category>공지사항</Category>
        <Category>일정관리</Category>
      </CategoryWrap>
    </HeaderSection>
  );
};

const Category = styled.p`
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`;

const categoryPositionStyleChange = ({ split }: { split: boolean }) => {
  return split ? "position:fixed; top:0; left:0;" : "position:static;";
};

const CategoryWrap = styled.div`
  width: 100%;
  height: 44px;
  padding: 0 20vw;

  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  display: flex;
  align-items: center;
  justify-content: space-between;

  ${categoryPositionStyleChange};
`;

const PatchReqBtn = styled.button`
  width: 150px;
  height: 45px;

  background: #6c63ff;
  border-radius: 50px;

  color: white;
  font-size: 18px;
  font-weight: bold;

  cursor: pointer;
  transition: 150ms;

  &:active {
    transform: scale(0.98);
  }
`;

const Logo = styled.div`
  width: 80px;
  height: 65px;

  background-image: url("/img/header/logo.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 26px;
`;

const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const MainHeaderWrap = styled.div`
  width: 100%;
  height: 80px;
  padding: 0 20vw;
  border-bottom: 1px solid #000;

  background-color: white;

  align-items: center;
  justify-content: space-between;

  display: ${({ show }: { show: boolean }) => (show ? "none" : "flex")};
`;

const HeaderSection = styled.header`
  width: 100%;
  height: 125px;
`;

export default Header;
