import React, { useState } from "react";
import CategorySearchHeader from "./CategorySearchHeader";
import CategoryList from "./CategoryList";

import { categoryItems } from "./data";

export default function () {
  const [data, setData] = useState(categoryItems);

  const searchCategory = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const txt = e.target.value;
    if (txt.length <= 0) {
      setData(categoryItems);
      return;
    }
    const newData = data.filter((c) => {
      const itemData = `${c.title.toUpperCase()}`;
      const textData = txt.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setData(newData);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        marginBottom: 50,
      }}
    >
      <CategorySearchHeader onChange={searchCategory} />
      <CategoryList data={data} />
    </div>
  );
}
