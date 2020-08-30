import React from "react";
import { RouteComponentProps } from "react-router";
interface Props extends RouteComponentProps {
    navigation: any;
}
interface State {
}
export default class Search extends React.Component<Props, State> {
    state: {
        searchBarFocused: boolean;
        data: import("./data").CategoryItemType[];
    };
    searchItems: (text: String) => void;
    keyboardDidShow: () => void;
    keyboardWillShow: () => void;
    keyboardWillHide: () => void;
    render(): JSX.Element;
}
export {};
