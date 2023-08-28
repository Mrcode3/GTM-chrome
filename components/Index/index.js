import styles from "../../styles/Pages.module.css";

export default function Index({ navigateToPage }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div>options</div>
        <h2 className={styles.title}>
          GTM Copilot <br /> is now ready
        </h2>
        <p className={styles.description}>You may visit a supported site</p>
        <button className={styles.button}>See example</button>
        {/* <h1 className={styles.code}>Index Page ./components/Index/index.js</h1>
        <p>{"[ - This is Index page content - ]"}</p>
        <p onClick={() => navigateToPage("new")}>{"Go to New Page >"}</p> */}
      </main>
    </div>
  );
}
