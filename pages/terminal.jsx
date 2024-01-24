import React, { useEffect, useState } from "react";
import { TerminalContextProvider, ReactTerminal } from "react-terminal";
import MatrixRainingCode from '../components/MatrixRainingEffect';
import styles from '../styles/TerminalPage.module.css';

import projects from './data/projects.json';
import experiences from './data/experiences.json';
import certifications from './data/certifications.json';

const TerminalPage = () => {
    const [booted, setBooted] = useState(false);
    const [username, setUsername] = useState("");

    const commands = {
        about: (
            <>
                Hello, my name is Manasva! I am currently a first-year student at the Univerity of Waterloo, pursuing a Computer Science degree with a Digital Hardware specialization. I'm also a recipient of the Schulich Leader Scholarship, the most prestigious STEM scholarship for Canadian undergraduate students!
                <br />
            </>
        ),

        social: (type) => {
            if (type === "email") {
                return "manasva.katyal@gmail.com";
            } else if (type === "linkedin") {
                return "https://www.linkedin.com/in/manasva-katyal/";
            } else if (type === "github") {
                return "https://github.com/SuperMK15/";
            } else {
                return "Please specify a valid social after the command (email, linkedin, or github).";
            }
        },

        user: (name) => {
            setUsername(name);
            if (!name)
                return "Username reset.";
            else
                return `Username set to ${name}. To reset, run the command 'user' without any arguments.`;
        },

        exit: () => {
            window.location.href = "/";
            return (
                <>
                    Exiting terminal...
                    <br />
                </>
            );
        },

        help: () => (
            <>
                <p>----------------------------------------------------------------------------------------</p>
                <p>Available Commands</p>
                <p>----------------------------------------------------------------------------------------</p>
                <ul>
                    -- about: Displays a short bio about me. <br />
                    -- social [type]: Displays my email, LinkedIn, and GitHub based on the [type] specified. <br />
                    -- user [username]: allows you to specify a [username] to be displayed in the terminal prompt. <br />
                    -- clear: Clears the terminal. <br />
                    -- exit: Exits the terminal and returns to the home page. <br />
                    -- help: Displays this help message. <br />
                </ul>
                <p>----------------------------------------------------------------------------------------</p>
            </>
        ),
    };

    useEffect(() => {
        const bootUp = () => {
            setTimeout(() => {
                setBooted(true);
            }, 1800);
        };

        if (!booted) bootUp();
    }, []);

    return (
        <TerminalContextProvider>
            <div className={booted ? styles.terminalOverlay : styles.bootUpOverlay}>
                <MatrixRainingCode className={styles.matrixContainer} />
                {booted ? (
                    <div className={styles.cmd}>
                        <div className={styles.cmdContainer}>
                            <ReactTerminal
                                commands={commands}
                                theme="matrix"
                                prompt={username + "$"}
                                welcomeMessage={<>Welcome to the terminal! Type 'help' see a list of commands.<br /></>}
                                showControlButtons={false}
                                showControlBar={false}
                                style={{ overflow: "hidden" }}
                            />
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
        </TerminalContextProvider>
    );
};

export async function getStaticProps() {
    return {
        props: { title: 'Terminal' },
    };
}

export default TerminalPage;
