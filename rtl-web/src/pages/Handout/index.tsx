import React from "react";
import Document from "./Document";

export default function () {
  const BASE_PATH = `https://www.runthelistpodcast.com/s/`;
  const getLastItem = (thePath: string) =>
    thePath.substring(thePath.lastIndexOf("/") + 1);
  const pdfUrl = BASE_PATH + getLastItem(window.location.pathname);
  console.log(`pdf url is ${pdfUrl}`);
  return (
    <div>
      <h1>Handout</h1>
      <Document url={pdfUrl} />
    </div>
  );
}
