import { IEpisode, IResultEpisode } from "@/interfaces/interfaces";
import { allEpisodesUrl } from '@/constants/constants'

const parseIdFromUrl = (endpoints: string[]): number[] => {
    return endpoints.map((url) => {
        const urlParts = url.split("/");
        return parseInt(urlParts[urlParts.length - 1]);
    });
};

const setupEpisodeData = (allEpisodes: IResultEpisode[]) => {
    let episodes: IEpisode[] = [];
    for (let allEpisode of allEpisodes) {
        const episode: IEpisode = {
            charactersIds: parseIdFromUrl(allEpisode.characters),
            id: allEpisode.id,
            name: allEpisode.name
        };

        episodes.push(episode);
    }
    return episodes;
};

//API call to get list Episodes
export async function getEpisodeList(): Promise<IEpisode[] | string> {
    let episodeResults: IResultEpisode[] = [];
    let url: string = allEpisodesUrl;

    try {
        while (url) {
            const result = await fetch(url)
                .then(response => response.json());

            episodeResults = [...episodeResults, ...result.results];

            if (result.info.next) {
                url = result.info.next;
            } else {
                url = "";
            }
        }

        const episodeList: IEpisode[] = setupEpisodeData(episodeResults);

        return episodeList;

    } catch (error) {
        throw new Error("Failed to load data");
    }

}