import React from 'react'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import rmError from '@/assets/rmError.png'


function error(props: { message: string }) {

    const refreshPage = () => {
        window.location.reload();
    }

    return (
        <div className={styles.errorDiv}>
            <Image priority={true} className={styles.errorImage} src={rmError} alt="Error" />
            <h4 className={styles.errorMessage}>Oops! Something went wrong while loading {props.message}</h4>
            <p className={styles.errorMessage}>
                Possible reasons:</p>
            <ul>
                <li> 1. Check your internet connection and try again.</li>
                <li> 2. The server might be experiencing temporary issues. Please try again later.</li>
                <li> 3. If the problem persists, contact support for assistance.</li>
            </ul>
            <button className={styles.errorButton} onClick={refreshPage}>Try Again</button>
        </div >
    )
}

export default error