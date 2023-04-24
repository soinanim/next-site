import Head from 'next/head';
import A from '../components/A';

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={'i love dogs, next.js' + keywords}></meta>
        <title>Главная страница</title>
      </Head>
      <nav className='navbar'>
        <A href={'/'} text='Главная'></A>
        <A href={'/users'} text='Пользователи'></A>
      </nav>
      <div>{children}</div>
      <style jsx>{`
        .navbar {
          background: #252526;
          padding: 15px;
        }
      `}</style>
    </>
  );
};

export default MainContainer;
