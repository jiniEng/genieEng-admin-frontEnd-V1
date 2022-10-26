import {
  targetDocsMapType,
  targetDocsType,
  targetNameListType,
} from "utils/interface/writePost/writePost";

const targetDocs: targetDocsMapType = {
  elementary: { categoryName: "초등 갤러리 글 쓰기", url: "" },
  middle: { categoryName: "중등 갤러리 글 쓰기", url: "" },
  notice: { categoryName: "공지 작성하기", url: "" },
};

export const getWriteTargetDocs = (
  target: targetNameListType
): targetDocsType => {
  return targetDocs[target];
};
