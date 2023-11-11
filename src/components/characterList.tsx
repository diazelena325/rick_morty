import React from 'react'
import styles from '@/styles/Home.module.css'
import { ICharacter } from '@/interfaces/interfaces'

type Props = { episode: string } & { characters: ICharacter[] };

function characterList(props: Props) {

    return (
        <div className={styles.charContainer} >
            {props.episode &&
                <h3 className={styles.charSelectText}>{props.characters.length} Characters in episode "{props.episode}" </h3>
            }
            <div className={styles.charGrid}>
                {props.characters.map((ch: ICharacter) => {
                    return (
                        <div className={styles.charCard} key={ch.id}>
                            <img src={ch.image} className={styles.img} />

                            {props.episode && <span className={styles.name}>{ch.name}</span>}
                        </div>
                    )
                })}

            </div>
        </div >
    )
}

export default characterList