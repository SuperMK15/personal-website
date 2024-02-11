import React, { useEffect, useState } from "react";
import { TerminalContextProvider, ReactTerminal } from "react-terminal";
import MatrixRainingCode from '../components/MatrixRainingEffect';
import styles from '../styles/TerminalPage.module.css';
import { BarLoader } from 'react-spinners';

import projects from './data/projects.json';
import experiences from './data/experiences.json';
import certifications from './data/certifications.json';

const TerminalPage = () => {
    const [booted, setBooted] = useState(false);
    const [username, setUsername] = useState("");
    const [currentDirectory, setCurrentDirectory] = useState("");

    let directories = {
        "/home": ["about.txt", "projects/", "contact/", "experiences/", "certifications/"], // root directory
        "/projects": [...projects.map(project => project.terminal_name + "/")],
        "/contact": ["email.exe", "linkedin.exe", "github.exe"],
        "/experiences": [...experiences.map(experience => experience.terminal_name + "/")],
        "/certifications": [...certifications.map(certification => certification.terminal_name + "/")],
    };

    projects.forEach(project => {
        directories["/projects/" + project.terminal_name] =
            [
                "name.txt",
                "description.txt",
                "techstack.txt",
                (project.source_code ? "project_github.exe" : null),
                (project.demo ? "demo.exe" : null),
                (project.pdf ? "research_paper.exe" : null)
            ].filter(Boolean);
    });

    experiences.forEach(experience => {
        directories["/experiences/" + experience.terminal_name] =
            [
                "role.txt",
                "duration.txt",
                "role_description.txt"
            ];
    });

    certifications.forEach(certification => {
        directories["/certifications/" + certification.terminal_name] =
            [
                "title.txt",
                "credential.exe"
            ];
    });

    const commands = {
        user: (name) => {
            setUsername(name);
            if (!name)
                return <p>Username reset.</p>;
            else
                return <p>{`Username set to ${name}. To reset, run the command 'user' without any arguments.`}</p>;
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
                    -- ls: Lists all files and directories in the current directory. <br />
                    -- cd [directory]: Changes the current directory to the specified [directory]. <br />
                    -- pwd: Displays the current directory. <br />
                    -- cat [file]: Displays the contents of the specified [file]. <br />
                    -- exec [file]: Executes the specified [file]. Must be a .exe file to do so. <br />
                    -- user [username]: allows you to specify a [username] to be displayed in the terminal prompt. <br />
                    -- clear: Clears the terminal. <br />
                    -- exit: Exits the terminal and returns to the home page. <br />
                    -- help: Displays this help message. <br />
                </ul>
                <p>----------------------------------------------------------------------------------------</p>
            </>
        ),

        cd: (arg) => {
            if (!arg || arg === "~") {
                setCurrentDirectory("");
                return <p></p>;
            }

            let nav_tracker;

            if (arg[0] === '/') {
                nav_tracker = arg;
            } else {
                if (arg[0] === "." && arg[1] == "/") arg = arg.slice(2);

                const commands = arg.split("/").filter(Boolean);
                nav_tracker = currentDirectory;

                commands.forEach(command => {
                    if (command === "..") {
                        if (currentDirectory === "/") {
                            return <p>{`Directory ${arg} not found.`}</p>;
                        } else {
                            nav_tracker = nav_tracker.slice(0, nav_tracker.lastIndexOf("/"));
                        }
                    } else {
                        nav_tracker += "/" + command;
                    }
                });
            }

            if (nav_tracker === "") {
                setCurrentDirectory(nav_tracker);
                return <p></p>;
            } else if (nav_tracker in directories) {
                setCurrentDirectory(nav_tracker);
                return <p></p>;
            } else {
                return <p>{`Directory ${arg} not found.`}</p>;
            }
        },

        ls: () => {
            if (currentDirectory === "") {
                let ret = "";
                directories["/home"].forEach(element => {
                    ret += element + '\u00A0\u00A0';
                });
                return <p>{ret}</p>;
            } else {
                let ret = "";
                directories[currentDirectory].forEach(element => {
                    ret += element + '\u00A0\u00A0';
                });
                return <p>{ret}</p>;
            }
        },

        pwd: () => {
            if (currentDirectory === "") {
                return <p>~/</p>;
            } else {
                return <p>{"~" + currentDirectory}</p>;
            }
        },

        cat: (file) => {
            if (file === "about.txt") {
                if (currentDirectory !== "") return <p>{"File " + file + " not found."}</p>;
                else return (
                    <>
                        Hello, my name is Manasva! I am currently a first-year student at the Univerity of Waterloo, pursuing a Computer Science degree with a Digital Hardware specialization. I'm also a recipient of the Schulich Leader Scholarship, the most prestigious STEM scholarship for Canadian undergraduate students!
                        <br />
                    </>
                );
            } else if (file === "email.exe") {
                return <p>mailto: manasva.katyal@gmail.com</p>
            } else if (file === "linkedin.exe") {
                return <p>goto: https://www.linkedin.com/in/manasva-katyal/</p>
            } else if (file === "github.exe") {
                return <p>goto: https://github.com/SuperMK15/</p>
            } else if (file === "name.txt") {
                const ret = projects.find(project => "/projects/" + project.terminal_name === currentDirectory);
                if (ret?.name) return <p>{ret.name}</p>;
            } else if (file === "description.txt") {
                const ret = projects.find(project => "/projects/" + project.terminal_name === currentDirectory);
                if (ret?.description) return <p>{ret.description}</p>;
            } else if (file === "techstack.txt") {
                const ret = projects.find(project => "/projects/" + project.terminal_name === currentDirectory);
                if (ret?.tags) {
                    let techstack = "";
                    ret.tags.forEach(tag => {
                        techstack += tag + ',\u00A0';
                    });
                    techstack = techstack.slice(0, -2);
                    return <p>{techstack}</p>;
                }
            } else if (file === "project_github.exe") {
                const ret = projects.find(project => "/projects/" + project.terminal_name === currentDirectory);
                if (ret?.source_code) return <p>goto: {ret.source_code}</p>;
            } else if (file === "demo.exe") {
                const ret = projects.find(project => "/projects/" + project.terminal_name === currentDirectory);
                if (ret?.demo) return <p>goto: {ret.demo}</p>;
            } else if (file === "research_paper.exe") {
                const ret = projects.find(project => "/projects/" + project.terminal_name === currentDirectory);
                if (ret?.pdf) return <p>goto: {ret.pdf}</p>;
            } else if (file === "role.txt") {
                const ret = experiences.find(experience => "/experiences/" + experience.terminal_name === currentDirectory);
                if (ret?.title) return <p>{ret.title}</p>;
            } else if (file === "duration.txt") {
                const ret = experiences.find(experience => "/experiences/" + experience.terminal_name === currentDirectory);
                if (ret?.date) return <p>{ret.date}</p>;
            } else if (file === "role_description.txt") {
                const ret = experiences.find(experience => "/experiences/" + experience.terminal_name === currentDirectory);
                if (ret?.description) return <p>{ret.description}</p>;
            } else if (file === "title.txt") {
                const ret = certifications.find(certification => "/certifications/" + certification.terminal_name === currentDirectory);
                console.log(ret);
                if (ret?.name) return <p>{ret.name}</p>;
            } else if (file === "credential.exe") {
                const ret = certifications.find(certification => "/certifications/" + certification.terminal_name === currentDirectory);
                if (ret?.credential_link) return <p>goto: {ret.credential_link}</p>;
            }

            return <p>{`File ${file} not found.`}</p>;
        },

        exec: (file) => {
            const ret_val = <p>{`Running executable ${file}...`}</p>

            if (file === "project_github.exe") {
                const ret = projects.find(project => "/projects/" + project.terminal_name === currentDirectory);
                if (ret?.source_code) {
                    window.open(ret.source_code, "_blank");
                    return ret_val;
                }
            } else if (file === "demo.exe") {
                const ret = projects.find(project => "/projects/" + project.terminal_name === currentDirectory);
                if (ret?.demo) {
                    window.open(ret.demo, "_blank");
                    return ret_val;
                }
            } else if (file === "research_paper.exe") {
                const ret = projects.find(project => "/projects/" + project.terminal_name === currentDirectory);
                if (ret?.pdf) {
                    window.open(ret.pdf, "_blank");
                    return ret_val;
                }
            } else if (file === "credential.exe") {
                const ret = certifications.find(certification => "/certifications/" + certification.terminal_name === currentDirectory);
                if (ret?.credential_link) {
                    window.open(ret.credential_link, "_blank");
                    return ret_val;
                }
            } else if (file === "email.exe") {
                window.open("mailto: manasva.katyal@gmail.com", "_blank");
                return ret_val;
            } else if (file === "linkedin.exe") {
                window.open("https://www.linkedin.com/in/manasva-katyal/", "_blank");
                return ret_val;
            } else if (file === "github.exe") {
                window.open("https://github.com/SuperMK15/", "_blank");
                return ret_val;
            }
            
            return <p>{`File ${file} not found or is not a .exec file.`}</p>;
        }
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
                                prompt={username + (username ? ":" : "") + "~" + currentDirectory + "$"}
                                welcomeMessage={<p>Welcome to the terminal! Type 'help' see a list of commands.</p>}
                                showControlButtons={false}
                                showControlBar={false}
                                style={{ overflow: "hidden" }}
                                errorMessage={<p>Command not found. Type 'help' to see a list of commands.</p>}
                            />
                        </div>
                    </div>
                ) : (
                    <div className={styles.centerText}>
                        <div className={styles.textContainer}>
                                <BarLoader color={'#00FF00'} loading={true} size={100} />
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
