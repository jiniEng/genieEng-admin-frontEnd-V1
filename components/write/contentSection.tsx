import styled from "@emotion/styled";
import { NextPage } from "next";
import { ChangeEvent, useState } from "react";

const ContentSection: NextPage = () => {
  const [height, setHeight] = useState<number>(300);

  const changeContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { scrollHeight } = e.target;
    setHeight(scrollHeight < 300 ? 300 : scrollHeight);
  };

  return (
    <Section>
      <Label>내용 작성</Label>
      <SubLabel>게시글의 내용을 작성해주세요.</SubLabel>
      <ContentInput onChange={changeContent} height={height} />
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
  height: fit-content;
  margin-top: 70px;
`;

const SubLabel = styled.p`
  font-size: 18px;
  color: #555555;
  padding-bottom: 20px;
`;

const Label = styled(SubLabel)`
  font-size: 24px;
  font-weight: bold;
  padding-bottom: 3px;
`;

const ContentInput = styled.textarea`
  width: 100%;
  height: ${({ height }: { height: number }) => height + "px"};
  resize: none;
  border: 1px #000 solid;
  border-radius: 5px;
  padding: 20px 20px;
  font-size: 20px;
  overflow: hidden;
`;

export default ContentSection;
