import Banner from "components/main/banner";
import CommunityShortcut from "components/main/community";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Banner />
      <CommunityShortcut />
    </>
  );
};

export default Home;
