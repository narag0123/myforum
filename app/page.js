import styles from "./styles.module.scss";

export default async function Home() {
    // await fetch("/list", {
    //     cache: "force-cache",
    // });

    // await fetch("/URL", {
    //     next: {revalidate: 60},
    // });

    return <div className={styles.mainPage}>main</div>;
}
