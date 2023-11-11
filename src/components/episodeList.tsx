import React, { useEffect, useState } from 'react'
import { getEpisodeList } from '../pages/api/rickAndMortyAPI'
import { IEpisode } from "@/interfaces/interfaces";
import styles from '@/styles/Home.module.css'

const initialItems: IEpisode[] =
    [{
        charactersIds: [0],
        id: 0,
        name: ""
    }
    ]

interface Props { handleUpdateCharacters: ((chList: number[], title: string) => void) }

function episodeList(props: Props) {
    const [episodes, setEpisodes] = useState(initialItems);
    const [activeButton, setActiveButton] = useState<number>(-1);

    useEffect(() => {
        getEpisodeList().then(data => {
            setEpisodes(data);
        });
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
                {episodes.map((ep) => {
                    return (
                        <li key={ep.id}><button className={`${styles.epItem} ${activeButton === ep.id ? styles.special : ''}`}
                            onClick={() => {
                                toggleActiveButton(ep.id);
                                activeButton === ep.id ? props.handleUpdateCharacters([], "") : props.handleUpdateCharacters(ep.charactersIds, ep.name)
                            }}><p className={styles.epText}>{ep.name}</p></button> </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default episodeList