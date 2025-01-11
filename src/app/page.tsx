
import { NavBar } from "./components/navbar/navbar";
import { HomePage } from "./components/home/home";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <NavBar/>
      <main className={styles.main}>
        <HomePage/>
      </main>
      <footer className={styles.footer}>
        {/* <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a> */}
        
      </footer>
    </div>
  );
}
