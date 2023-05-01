import Link from 'next/link';
import styles from '../styles/A.module.scss';

export default function A({ href, text }) {
  return (
    <Link href={href} legacyBehavior>
      <a className={styles.link}>{text}</a>
    </Link>
  );
}
