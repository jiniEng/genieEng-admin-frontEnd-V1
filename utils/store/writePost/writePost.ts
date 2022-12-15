import { atom, RecoilState } from "recoil";
import { writePostDataType } from "utils/interface/writePost/writePost";

export const writePostDataRecoil: RecoilState<writePostDataType> = atom({
  key: "calendarRecoil",
  default: {
    title: "",
    content: "",
  },
});
