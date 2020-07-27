import React from "react";
import Matches from "../league/Matches";
import Search from "../league/Search";
import SummonerPages from "../league/SummonerPages";
const Index = () => {
  return (

      <React.Fragment>
        <Search />
        <SummonerPages />
        <Matches />
      </React.Fragment>

  );
};

export default Index;
