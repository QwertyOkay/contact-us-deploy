import MobMenu from "../menuMob/menuMob";
import Container from "../container/Container";
import Nav from "../headerNav/headerNav";
import styles from "./Header.module.scss";

function Header() {
  return (
    <>
      <MobMenu />
      <header className={styles.header}>
        <Container>
          <Nav />
        </Container>
      </header>
    </>
  );
}

export default Header;
