import React, { useCallback, useEffect, useState } from 'react'
import EpisodeList from '@/components/episodeList'
import CharacterList from '@/components/Characters/characterList'
import styles from '@/styles/Home.module.css'
import { getCharacters } from '../pages/api/character_rmAPI'
import { ICharacter } from "@/interfaces/interfaces"
import LoadingImage from '@/components/loader'



const initialItems: ICharacter[] = [{
    id: 0,
    name: "",
    image: ""
}];

function mainPage() {
    const [characters, setCharacters] = useState(initialItems);
    const [cList, setCList] = useState<number[]>([]);
    const [episodeTitle, setEpisodeTitle] = useState<string>("");
    const [loader, setLoader] = useState<boolean>(true);
    const [midloader, setMidLoader] = useState<boolean>(false);

    useEffect(() => {
        getCharacters(cList).then(data => {
            setTimeout(function () {
                setMidLoader(false);
                setLoader(false);
                setCharacters(data);
            }, 1000);
        });
    }, [cList]);

    const updateCharacters = useCallback((chList: number[], title: string) => {
        setMidLoader(true);
        setCList(chList);
        setEpisodeTitle(title);

    }, []);



    return (
        <div className={`${styles.mainContainer} ${styles.outer}`}>
            <div className={styles.top}>
                {(loader || midloader) && <LoadingImage />}
            </div>
            {!loader &&
                <div className={`${styles.mainDiv} ${styles.below}`}>
                    <h1 className={styles.mainTitle}>Rick and Morty Characters</h1>
                    <div className={styles.content}>
                        <EpisodeList
                            handleUpdateCharacters={updateCharacters} />
                        <CharacterList
                            episode={episodeTitle}
                            characters={characters} />
                    </div>
                </div>}


        </div >


    )
}

export default mainPage