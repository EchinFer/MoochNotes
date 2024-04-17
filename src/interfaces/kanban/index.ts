
export enum EKanbanItemTypeBackground {
    Color,
    Image,
}

export interface IKanbanItemBackground {
    type: EKanbanItemTypeBackground
    content: string
}

export interface IKanbanTag {
    id: number;
    name: string;
}

export interface IKanbanItem {
    id: string;
    title: string;
    content: string;
    background: IKanbanItemBackground
    tag?: IKanbanTag;
    updatedAt?: string;
    createdAt: string;
}

export interface IKanbanColumn {
    id: string;
    title: string;
    cards: IKanbanItem[]
}