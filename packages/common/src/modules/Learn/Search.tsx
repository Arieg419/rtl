import React from "react";
import { View } from "react-native";
import { RouteComponentProps } from "react-router";
import { categoryItems } from "./data";
import SearchHeader from "./SearchHeader";
import SearchList from "./SearchList";

interface Props extends RouteComponentProps {
  navigation: any;
}
interface State {}

export default class Search extends React.Component<Props, State> {
  state = {
    searchBarFocused: false,
    data: categoryItems,
  };

  searchItems = (text: String) => {
    if (text.length === 0) {
      this.setState({
        data: categoryItems,
        value: "Search",
      });
      return;
    }
    let newData = this.state.data.filter((item) => {
      const itemData = `${item.title.toUpperCase()}`;
      const textData = text.toUpperCase();
      if (text.length > 0) {
        return itemData.indexOf(textData) > -1;
      }
    });
    this.setState({
      data: newData,
      value: text,
    });
  };

  keyboardDidShow = () => {
    this.setState({ searchBarFocused: true });
  };

  keyboardWillShow = () => {
    this.setState({ searchBarFocused: true });
  };

  keyboardWillHide = () => {
    this.setState({ searchBarFocused: false });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <SearchHeader
          searchBarFocused={this.state.searchBarFocused}
          searchItems={this.searchItems}
        />
        <SearchList
          data={this.state.data}
          searchBarFocused={this.state.searchBarFocused}
          navigation={this.props.navigation}
        />
      </View>
    );
  }
}
