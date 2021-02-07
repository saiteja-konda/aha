import Head from "next/head";
import ActionSlider from "../components/ActionSlider";
import Header from "../components/Header";
import MainCarouse from "../components/Maincarouse";
import styles from "../styles/Home.module.css";
import latest from "../data/Latest";
import Originals from "../data/Originals";
import Samjam from "../data/Samjam";
import Mostwatched from "../data/Mostwatched";
const Home = () => {
  return (
    <>
      <Header />
      <MainCarouse style={{ marginTop: "200px" }} />
      <h4 className={styles.titles}>LATEST ON AHA</h4>
      <hr className={styles.div} />
      <ActionSlider data={latest} />
      <h4 className={styles.titles}>AHA ORIGINALS</h4>
      <hr className={styles.div} />
      <ActionSlider data={Originals} />
      <h4 className={styles.titles}>MOST WATCHED ON AHA</h4>
      <hr className={styles.div} />
      <ActionSlider data={Mostwatched} />
      <h4 className={styles.titles}>SAM JAM</h4>
      <hr className={styles.div} />
      <ActionSlider data={Samjam} />
    </>
  );
};

export default Home;
