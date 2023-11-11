export interface IEpisode {
    charactersIds: number[];
    id: number;
    name: string;
}

export interface IResultEpisode {
    characters: string[];
    id: number;
    name: string;
}

export interface ICharacter {
    id: number;
    name: string;
    image: string;
}