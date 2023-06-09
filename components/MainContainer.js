import Head from 'next/head';
import Header from './Header';

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={'next.js' + keywords}></meta>
        <title>Next.js App</title>
      </Head>

      <Header />
      <div>{children}</div>
    </>
  );
};

export default MainContainer;
