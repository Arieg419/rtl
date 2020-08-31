import React, { useState } from "react";
import CategorySearchHeader from "./CategorySearchHeader";
import CategoryList from "./CategoryList";

import { categoryItems, CategoryItemType } from "./data";

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

  const searchByTags = (tags: Array<string>) => {
    if (!tags || tags.length === 0) {
      setData(categoryItems);
      return;
    }

    let newData: Array<CategoryItemType> = [];
    tags.forEach((t) => {
      newData = data.filter((c) => {
        const itemData = `${c.title.toUpperCase()}`;
        const textData = t.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
    });
    // @ts-ignore
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
      <CategorySearchHeader
        onAutoCompleteChange={(e, value) => {
          searchByTags(value.map((v: CategoryItemType) => v.title));
        }}
        onChange={searchCategory}
      />
      <CategoryList data={data} />
    </div>
  );
}
