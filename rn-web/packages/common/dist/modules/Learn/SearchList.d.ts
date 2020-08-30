import React from "react";
import { RouteComponentProps } from "react-router";
import { CategoryItemType } from "./data";
interface Props extends RouteComponentProps {
}
export default function SearchList(props: {
    searchBarFocused: boolean;
    data: Array<CategoryItemType>;
    navigation: React.FC<Props>;
}): JSX.Element;
export {};
