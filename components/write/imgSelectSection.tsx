import styled from "@emotion/styled";
import { NextPage } from "next";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { writePostDataRecoil } from "utils/store/writePost/writePost";

const ImgSelectSection: NextPage = () => {
  const [imgView, setImgView] = useState<string[]>([]);
  const setWritePostData = useSetRecoilState(writePostDataRecoil);

  const onFileChange = async (e: any) => {
    const file = e.target.files[0];

    const formData = new FormData();
    formData.append("image", file);
    setWritePostData((pre) => ({ ...pre, imgs: [...pre.imgs, formData] }));

    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      }: any = finishedEvent;

      setImgView([...imgView, result]);
    };
    await reader.readAsDataURL(file);
  };
  return (
    <Section>
      <Label>사진 업로드</Label>
      <SubLabel>게시글에 추가할 사진을 업로드 해주세요.</SubLabel>
      <ImageSelectContainer>
        <ImageSelectWrap>
          <ImageSeletBtn htmlFor="fileInput" />
          <OriginImageSeletBtn
            type="file"
            id="fileInput"
            accept="image/*"
            onChange={onFileChange}
          />
          <SelectLabel>사진 업로드</SelectLabel>
        </ImageSelectWrap>
        <ImagesWrap>
          {imgView.map((img, i) => (
            <SelectedImg img={img} key={i}></SelectedImg>
          ))}
        </ImagesWrap>
      </ImageSelectContainer>
    </Section>
  );
};

const SelectedImg = styled.div`
  width: 150px;
  aspect-ratio: 1;
  border: 1px solid #bdb9b9;
  border-radius: 5px;

  background-image: url(${({ img }: { img: string }) => img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  flex-shrink: 0;
`;

const ImagesWrap = styled.div`
  margin-left: 20px;
  width: 100%;
  display: flex;
  overflow-x: scroll;
  gap: 20px;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const SelectLabel = styled.p`
  font-size: 14px;
  color: #bdb9b9;
  font-weight: bold;
`;

const ImageSeletBtn = styled.label`
  width: 30px;
  aspect-ratio: 1;

  background-image: url("/img/writePost/addImage.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
`;

const OriginImageSeletBtn = styled.input`
  display: none;
`;

const ImageSelectWrap = styled.div`
  width: 150px;
  aspect-ratio: 1;
  border: #bdb9b9 solid 1px;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;

  flex: 150px 0 0;
`;

const ImageSelectContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
`;

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

export default ImgSelectSection;
