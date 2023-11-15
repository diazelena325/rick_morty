import React from 'react'
import styles from '@/styles/Home.module.css'
import { IEpisode } from "../../interfaces/interfaces";


function episode_item(props: { activeButton: number, ep: IEpisode, toggleActiveButton: ((id: number) => void), handleUpdateCharacters: ((chList: number[], title: string) => void) }) {

    return (
        <><li key={props.ep.id}><button className={`${styles.epItem} ${props.activeButton === props.ep.id ? styles.special : ''}`}
            onClick={() => {
                props.toggleActiveButton(props.ep.id);
                props.activeButton === props.ep.id ? props.handleUpdateCharacters([], "") : props.handleUpdateCharacters(props.ep.charactersIds, props.ep.name)
            }}><p className={styles.epText}>{props.ep.name}</p></button> </li></>
    )
}

export default episode_item