import React from "react";
export default class SearchBar extends React.Component {
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
