import { IEpisode, ICharacter, IResultEpisode } from "@/interfaces/interfaces";

const mainUrl = 'https://rickandmortyapi.com/api';
const allEpisodesUrl = `${mainUrl}/episode`;
const characterUrl = `${mainUrl}/character`;

const parseIdFromUrl = (endpoints: string[]): number[] => {
    return endpoints.map((url) => {
        const urlParts = url.split("/");
        return parseInt(urlParts[urlParts.length - 1]);
    });
};

//API call to get list Episodes
export async function getEpisodeList() {
    let allEpisodes: IResultEpisode[] = [];
    let url: string = allEpisodesUrl;
    while (url) {
        const result = await fetch(url)
            .then(response => response.json());

        allEpisodes = [...allEpisodes, ...result.results];
        if (result.info.next) {
            url = result.info.next;
        } else {
            url = "";
        }
    }

    const episodes: IEpisode[] = [];

    for (let allEpisode of allEpisodes) {
        const episode: IEpisode = {
            charactersIds: parseIdFromUrl(allEpisode.characters),
            id: allEpisode.id,
            name: allEpisode.name
        };

        episodes.push(episode);
    }

    return episodes;
}

//API call to get Characters
export async function getCharacters(list: number[]) {
    let allCharacters: ICharacter[] = [];
    let url: string = characterUrl;
    let specificType: boolean = false;

    if (list.length > 0) {
        url = `${characterUrl}/${list}`;
        specificType = true;
    }

    const result = await fetch(url)
        .then(response => response.json());
    if (specificType === true) {
        allCharacters = [...result];
    } else {
        allCharacters = [...result.results];
    }

    const characters: ICharacter[] = [];

    for (let character of allCharacters) {
        const char: ICharacter = {
            id: character.id,
            name: character.name,
            image: character.image
        };
        characters.push(char);
    }

    return characters;
}
