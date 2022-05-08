import Intro from "./intro";
import { useEffect } from "react";
import { masterKeywordApi } from "../../api/masterKeywordApi";
import SearchKeywordContainer from "./search/SearchKeywordContainer";

const Home = () => {
  useEffect(() => {
    masterKeywordApi();
  });

  return (
    <>
      <Intro />
      <SearchKeywordContainer />
    </>
  );
};

export default Home;
