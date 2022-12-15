import { atom, RecoilState } from "recoil";
import { writePostDataType } from "utils/interface/writePost/writePost";

const writePostDefaultDataObject: writePostDataType = {
  title: "",
  content: "",
  imgs: [],
};

export const writePostDataRecoil: RecoilState<writePostDataType> = atom({
  key: "calendarRecoil",
  default: writePostDefaultDataObject,
});
