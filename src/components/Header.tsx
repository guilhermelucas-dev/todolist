import styles from './Header.module.css';
import todoLogo from '../assets/rocket.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="Logotipo do todo" />
      <h1>to<span className={styles.logoDark}>do</span></h1>
    </header>
  );
}