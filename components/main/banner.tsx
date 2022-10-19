import styled from "@emotion/styled";
import type { NextPage } from "next";

const Banner: NextPage = () => {
  return (
    <BannerSection>
      <PurpleBox>
        <DescriptionWrap>
          <Hashtag>#지니영어 관리자 페이지</Hashtag>
          <Title>
            <p>원하시는 커뮤니티에 글을</p>
            <p>작성해보세요.</p>
          </Title>
          <ReadMore>자세히보기</ReadMore>
        </DescriptionWrap>
      </PurpleBox>
      <SkyBox />
      <BannerImg />
    </BannerSection>
  );
};

const BannerImg = styled.div`
  height: 350px;
  aspect-ratio: 597/400;
  background-image: url("/img/main/bannerImg.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  z-index: 2;
  position: absolute;
  bottom: 0;
  right: 250px;
`;

const ReadMore = styled.button`
  background-color: white;
  color: #6c63ff;
  width: 180px;
  height: 50px;
  font-size: 24px;
  font-weight: bold;
  border-radius: 200px;
  margin-top: 40px;
`;

const Title = styled.h1`
  font-size: 45px;
  color: white;
`;

const Hashtag = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: white;
  margin-bottom: 8px;
`;

const DescriptionWrap = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const BannerSection = styled.div`
  width: 100vw;
  height: 580px;
  position: relative;
`;

const Box = styled.div`
  position: absolute;
  height: 450px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const PurpleBox = styled(Box)`
  z-index: 1;
  top: 0;
  left: 0;

  width: 66vw;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  border-radius: 0 0 200px 0;

  background-color: #7c74ff;
`;

const SkyBox = styled(Box)`
  bottom: 0px;
  right: 0;
  width: 74vw;
  border-radius: 0 0 0 200px;
  background-color: #efeef8;
`;

export default Banner;
