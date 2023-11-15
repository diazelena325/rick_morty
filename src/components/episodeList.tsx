import React, { useEffect, useState } from 'react'
import { getEpisodeList } from '../pages/api/episode_rmAPI'
import { IEpisode } from "@/interfaces/interfaces"
import styles from '@/styles/Home.module.css'
import Error from '@/components/error'
import EpisodeItem from '@/components/Episodes/episode_item'


const initialItems: IEpisode[] =
    [{
        charactersIds: [0],
        id: 0,
        name: ""
    }
    ]

function episodeList(props: { handleUpdateCharacters: ((chList: number[], title: string) => void) }) {
    const [episodes, setEpisodes] = useState(initialItems);
    const [activeButton, setActiveButton] = useState<number>(-1);
    const [errorOccured, setErrorOccured] = useState<boolean>(false);

    useEffect(() => {

        const fetchEpisodeData = async () => {
            try {
                const data = await getEpisodeList();
                setEpisodes(data as IEpisode[]);
                setErrorOccured(false);
            } catch (error) {
                setErrorOccured(true);
            }
        };

        fetchEpisodeData();
    }, []);

    const toggleActiveButton = (id: number) => {
        if (id === activeButton) {
            setActiveButton(-1);
        } else {
            setActiveButton(id);
        }
    }

    return (
        <div className={styles.epContainer}>
            <h2 className={styles.epTitle}>Episodes</h2>
            <ul className={styles.epList}>
                {episodes && !errorOccured ?
                    episodes.map((ep: IEpisode) => {
                        return (
                            <EpisodeItem
                                key={ep.id}
                                activeButton={activeButton}
                                ep={ep}
                                toggleActiveButton={toggleActiveButton}
                                handleUpdateCharacters={props.handleUpdateCharacters} />
                        )
                    })
                    : <Error message={'episodes'} />}
            </ul>
        </div>
    )
}

export default episodeList