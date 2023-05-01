import A from '../components/A';
import styles from '../styles/Header.module.scss';

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>Logo</div>
      <nav className={styles.navbar}>
        <A href={'/'} text='Home'></A>
        <A href={'/about'} text='About'></A>
        <A href={'/contact'} text='Contact'></A>
        <A href={'/users'} text='Users'></A>
      </nav>
    </div>
  );
}
