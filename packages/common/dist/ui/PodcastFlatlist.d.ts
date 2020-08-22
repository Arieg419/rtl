import React from "react";
export default class PodcastFlatlist extends React.Component {
    state: {
        data: {
            name: string;
            link: string;
            topic: string;
            photo: string;
        }[];
    };
    render(): JSX.Element;
}
