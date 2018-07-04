import React, { Component, Fragment } from "react";
import ContentManager from "./ContentManager";

import data from "../data.json";

const Main = ({ match }) => {
  const item = Object.keys(data.items).map(key => {
    if (key !== match.params.id) return;

    return data.items[key];
  });

  return (
    <main>
      <ContentManager content={match.params.id} items={data.items} />
    </main>
  );
};

export default Main;
