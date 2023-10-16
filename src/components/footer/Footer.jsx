import Container from "../container/Container";
import styles from "./Footer.module.scss";
import Contacts from "../сontactInfoBlock/ContactInfoBlock";

function Footer() {
  return (
    <>
      <footer className={styles.footer} id="footer">
        <Container variant="containerFooter">
          <div className={styles.footerContainer}>
            <div className={styles.footerLogoHolder}>
              <p className={styles.footerLogo}>Logo Here</p>
            </div>

            <div className={styles.footerHolder}>
              <nav className={styles.footerNav}>
                <div className={styles.footerList}>
                  <h3>Reach us</h3>
                  <Contacts />
                </div>

                <div className={styles.footerList}>
                  <h3>Company</h3>

                  <li>
                    <a href="/">About</a>
                  </li>
                  <li>
                    <a href="/">Contact</a>
                  </li>
                  <li>
                    <a href="/">Blogs</a>
                  </li>
                </div>

                <div className={styles.footerList}>
                  <h3>Legal</h3>

                  <li>
                    <a href="/">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/">Terms & Services</a>
                  </li>
                  <li>
                    <a href="/">Terms of Use</a>
                  </li>
                  <li>
                    <a href="/">Refund Policy</a>
                  </li>
                </div>

                <div className={styles.footerList}>
                  <h3>Quick Links</h3>

                  <li>
                    <a href="/">Techlabz Keybox</a>
                  </li>
                  <li>
                    <a href="/">Downloads</a>
                  </li>
                  <li>
                    <a href="/">Forum</a>
                  </li>
                </div>
              </nav>

              <div className={styles.footerBox}>
                <li>
                  <h4 className={styles.footerTitle}>Join Our Newsletter</h4>
                </li>
                <li>
                  <form className={styles.footerForm}>
                    <input
                      type="email"
                      autoComplete="on"
                      name="email"
                      placeholder="Your email address"
                      className={styles.input}
                      pattern="^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$"
                    ></input>

                    <button type="submit" className={styles.footerButton}>
                      Subscribe
                    </button>
                  </form>
                </li>

                <li>
                  <p className={styles.footerNote}>
                    * Will send you weekly updates for your better tool
                    management.
                  </p>
                </li>
              </div>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
