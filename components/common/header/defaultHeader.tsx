import styled from "@emotion/styled";
import { NextPage } from "next";

const DefaultHeader: NextPage = () => {
  return (
    <HeaderSection>
      <LogoWrap>
        <Logo />
        <Title>지니영어</Title>
      </LogoWrap>
      <PatchReqBtn>수정요청</PatchReqBtn>
    </HeaderSection>
  );
};

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

  width: 70px;
  height: 51px;
`;

const Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
`;

const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const HeaderSection = styled.header`
  width: 100vw;
  height: 85px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 0 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default DefaultHeader;
