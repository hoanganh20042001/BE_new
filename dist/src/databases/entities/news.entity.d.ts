import { BaseEntity } from 'typeorm';
export declare class News extends BaseEntity {
    id: number;
    title: string;
    newDate: Date;
    view: number;
    liked: number;
    image: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
}
