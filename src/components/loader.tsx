import React from 'react'
import Image from 'next/image'
import loadingSpinner from '../assets/rmPortal.gif'
import styles from '@/styles/Home.module.css'

function loader() {
    return (
        <>
            <Image priority={true} className={styles.loader} src={loadingSpinner} alt="Loading..." />
        </>

    )
}

export default loader