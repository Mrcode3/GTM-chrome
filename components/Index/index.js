import styles from "../../styles/Pages.module.css";

export default function Index({ navigateToPage }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {/* options components -- start*/}
        <div className={styles.options}>
          <div className={styles.lists}>
            <p>List</p>
            <select name="" id="">
              <option value="">My Leads</option>
              <option value="a">a</option>
              <option value="b">b</option>
              <option value="c">c</option>
              <option value="d">d</option>
            </select>
          </div>
          <button className={styles.toggle}>
            <p>hide options</p>
            <img src="/up-arrow.png" alt="" />
          </button>
        </div>
        {/* options components -- end*/}

        {/* content component --start */}
        <div className={styles.content}>
          <h2 className={styles.title}>
            GTM Copilot <br /> is now ready
          </h2>
          <p className={styles.description}>You may visit a supported site</p>
          <button className={styles.button}>See example</button>
        </div>
        {/* content component -- end */}
      </main>
    </div>
  );
}
