import { Tag } from "./Tags";

export interface Project {
    id: number;
    name: string;
    summary: string;
    descripton: string;
    projectLink: string;
    pictures: string[];
    // tags: string[];
    tags: Tag[]
}