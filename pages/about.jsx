import { useState, useEffect } from 'react';

const AboutPage = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    const content =
      "Hello, my name is Manasva! I am currently a first-year student at the Univerity of Waterloo, pursuing a Computer Science degree with a Digital Hardware specialization. I'm also a recipient of the Schulich Leader Scholarship, the most prestigious STEM scholarship for Canadian undergraduates!<br><br>As a dedicated programming and robotics enthusiast, I am constantly seeking new challenges and innovative ways to effectively utilize my technical skills. I am very passionate about embedded systems, AI/ML, mechatronics, astrophysics, and aviation.<br><br>I have worked on projects for volunteer purposes, personal enjoyment, and hackathons with various programming languages including JS, Embedded C/C++, Java, and Python. I am also a recreational pilot, holding a GPL (glider pilot license) and PPL (private pilot license), and have a deep appreciation for the freedom and adventure that flying offers.<br><br>Throughout this website, you will find a collection of my projects, experiences, and interests. Feel free to reach out to me if you have any questions or would like to connect!";

    let index = 0;
    const typingInterval = setInterval(() => {
      setText(content.substring(0, index));
      index++;

      if (index > content.length) {
        clearInterval(typingInterval);
      }
    }, 7);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <>
      <h3>
        <div dangerouslySetInnerHTML={{ __html: text }} />
      </h3>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
