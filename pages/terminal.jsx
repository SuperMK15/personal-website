import React, { useEffect, useState } from "react";
import MatrixRainingCode from '../components/MatrixRainingEffect';
import styles from '../styles/TerminalPage.module.css';

const TerminalPage = () => {
    const [booted, setBooted] = useState(false);

    useEffect(() => {
        const bootUp = () => {
            setTimeout(() => {
                setBooted(true);
            }, 1800);
        };

        bootUp();
    }, []);

    return (
        <div className={booted ? styles.terminalOverlay : styles.bootUpOverlay}>
            <MatrixRainingCode className={styles.matrixContainer} />
            {booted ? (
                <div className={styles.centerText}>
                    <div className={styles.textContainer}>
                        <h1 className={styles.textMessage}>
                            Terminal Coming Soon!
                        </h1>
                        <a href="./" className={styles.linkBack}>
                            Go back to Home
                        </a>
                    </div>
                </div>
            ) : (
                <div className={styles.centerText}>
                    <div className={styles.textContainer}>
                        <h1 className={styles.textMessage}>
                            Booting Up...
                        </h1>
                    </div>
                </div>
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
