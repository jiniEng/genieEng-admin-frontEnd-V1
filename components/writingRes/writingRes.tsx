import styled from "@emotion/styled";
import { NextPage } from "next";

interface resPageDataType {
  title: string;
  img: string;
}

interface props {
  resPageData: resPageDataType;
}

const WritingRes: NextPage<props> = ({ resPageData }: props) => {
  return (
    <SuccessPage>
      <SuccessSection>
        <Notification>
          <h1>알림</h1>
        </Notification>
        <SuccessImgWrap>
          <Title>{resPageData.title}</Title>
          <SuccessImg img={resPageData.img} />
        </SuccessImgWrap>
        <BttonWrap>
          <HomeBtn>홈으로</HomeBtn>
          <CheckBtn>확인하러가기</CheckBtn>
        </BttonWrap>
      </SuccessSection>
    </SuccessPage>
  );
};

const Title = styled.h1`
  font-size: 35px;
`;

const SuccessImg = styled.div`
  height: calc(70% - 40px);
  aspect-ratio: 1;
  background-image: url(${({ img }: { img: string }) => img});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

const SuccessImgWrap = styled.div`
  height: 66%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const HomeBtn = styled.button`
  height: 70%;
  width: 240px;
  background-color: #8179ff;
  border-radius: 5px;

  color: white;
  font-size: 22px;
  font-weight: bold;

  cursor: pointer;

  transition: 0.1s;

  &:active {
    transform: scale(0.99);
  }
`;

const CheckBtn = styled(HomeBtn)`
  background-color: white;
  color: #8179ff;
  border: #8179ff 2px solid;
`;

const BttonWrap = styled.div`
  height: 20%;
  border-top: 1px solid #bdb9b9;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

const Notification = styled.div`
  height: 14%;
  border-bottom: 1px solid #bdb9b9;
  padding-left: 30px;

  display: flex;
  align-items: center;

  & > h1 {
    color: #c0c0c0;
    font-size: 28px;
  }
`;

const SuccessSection = styled.section`
  height: 64%;
  aspect-ratio: 93/60;

  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: white;
  border-radius: 5px;
`;

const SuccessPage = styled.main`
  width: 100%;
  height: calc(100vh - 125px);
  background-color: #f9f6f6;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export default WritingRes;
