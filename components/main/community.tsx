import styled from "@emotion/styled";
import { NextPage } from "next";

const CommunityShortcut: NextPage = () => {
  const communitys = [
    {
      title: "초등 갤러리",
      content: "초등학생 수업 관련 자료 등록",
    },
    {
      title: "중등 갤러리",
      content: "중학생 수업 관련 자료 등록",
    },
    {
      title: "공지사항",
      content: "학원 관련 공지사항 등록",
    },
  ];

  return (
    <Container>
      <Wrapper>
        <TitleWrap>
          <Title>커뮤니티 글쓰기</Title>
          <SubTitle>바로가기</SubTitle>
        </TitleWrap>
        <Content>
          {communitys.map((community, i) => (
            <Frame key={i}>
              <CommunityName>{community.title}</CommunityName>
              <CommunityDescription>{community.content}</CommunityDescription>
            </Frame>
          ))}
        </Content>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: fit-content;

  margin-top: 150px;
  margin-bottom: 100px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Title = styled.p`
  font-size: 34px;
  font-weight: 700;
`;

const SubTitle = styled.span`
  font-size: 30px;
  color: #333333;
`;

const TitleWrap = styled.div`
  margin-bottom: 70px;
`;

const Content = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 40px;
`;

const Frame = styled.div`
  width: 340px;
  height: 340px;

  padding: 36px 0 0 36px;
  background: #665cff;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 70px 10px;

  color: #fff;
`;

const CommunityName = styled.p`
  font-size: 28px;
  font-weight: bold;
`;

const CommunityDescription = styled.p`
  margin-top: 8px;
  font-size: 15px;
`;

export default CommunityShortcut;
