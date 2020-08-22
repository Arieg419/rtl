import { Component } from "react";
interface State {
}
interface Props {
    width: number;
    height: number;
    type: string;
    price: number;
    topMargin: number;
    imageUri: string;
}
export default class HandoutItem extends Component<Props, State> {
    render(): JSX.Element;
}
export {};
