export declare class createNewsDto {
    title: string;
    content: string;
}
export declare class updateNewsDto {
    newsId: number;
    title: string;
    newDate: Date;
    content: string;
}
export declare class addLikeDto {
    newsId: number;
    userId: number;
}
export declare class addViewDto {
    newsId: number;
}
