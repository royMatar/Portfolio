import styles from "./page.module.css";
import ModelViewer from "../app/components/ModelViewer";

export default function Home() {
  return (
    <main className={styles.main}>
      <ModelViewer />
      <p style={{color:'white', fontSize:'40px'}}>In Development</p>
    </main>
  );
}
