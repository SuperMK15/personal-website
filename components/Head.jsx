import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Manasva Katyal is a current University of Waterloo Computer Science student, with a passion for embedded systems, machine learning/artificial intelligence, and web development."
      />
      <meta
        name="keywords"
        content="manasva katyal, manasva, katyal, personal website, portfolio, web dev, manasva developer, mern stack, manasva katyal portfolio, schulich leader"
      />
      <meta property="og:title" content="Manasva Katyal's Portfolio" />
      <meta
        property="og:description"
        content="A collection of Manasva Katyal's projects, experiences, and interests."
      />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Manasva Katyal',
};
