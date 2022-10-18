import { NextPage } from "next";
import Header from "../header/header";

interface props {
  path: string;
}

const headerIgnore = ["/login", "/_error"];

const HeaderController: NextPage<props> = ({ path }: props) => {
  return <>{headerIgnore.includes(path) ? <></> : <Header />}</>;
};

export default HeaderController;
