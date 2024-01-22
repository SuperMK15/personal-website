import React, { useEffect, useState } from "react";
import MatrixRainingCode from '../components/MatrixRainingEffect';
import styles from '../styles/TerminalPage.module.css';

const TerminalPage = () => {
    const [booted, setBooted] = useState(false);

    useEffect(() => {
        const bootUp = () => {
            setTimeout(() => {
                setBooted(true);
            }, 2000);
        };

        bootUp();
    }, []);

    return (
        <div className={booted ? styles.terminalOverlay : styles.bootUpOverlay}>
            {booted ? (
                <>
                    <MatrixRainingCode className={styles.matrixContainer} />
                    <div className={styles.centerText}>
                        <div className={styles.textContainer}>
                            <h1 className={styles.comingSoon}>
                                Terminal Module Coming Soon
                            </h1>
                            <a href="./" className={styles.linkBack}>
                                Go back to Home
                            </a>
                        </div>
                    </div>
                </>
            ) : (
                <h1 className={styles.bootUpMessage}>Booting up...</h1>
            )}
        </div>
    );
};

export async function getStaticProps() {
    return {
        props: { title: 'Terminal' },
    };
}

export default TerminalPage;
