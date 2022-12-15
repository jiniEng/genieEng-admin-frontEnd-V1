export interface targetDocsType {
  categoryName: string;
  url: string;
}

export type targetNameListType = "elementary" | "middle" | "notice";

export interface targetDocsMapType {
  elementary: targetDocsType;
  middle: targetDocsType;
  notice: targetDocsType;
}

export interface writePostDataType {
  title: string;
  content: string;
}
