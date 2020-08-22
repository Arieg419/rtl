export declare type TagItemType = {
    title: string;
    bgColor: string;
};
export declare type CategoryItemType = {
    title: string;
    tags: Array<TagItemType>;
    lastUpdated: string;
    resources: string;
};
export declare const categoryItems: Array<CategoryItemType>;
