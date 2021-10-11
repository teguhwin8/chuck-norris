import Layout from "../components/layout"
import { useRouter } from 'next/router';
import styles from "../styles/Home.module.css"

export default function Home({ data }) {
  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
  }
	return (
		<Layout>
			<form action="#" className={styles.searchForm}>
				<input type="text" placeholder="Search jokes by text" className={styles.searchInput} />
				<button className={styles.defaultButton}>Search!</button>
			</form>
			<div className={styles.flexCenter}>
				<img src={data.icon_url} alt="Chuck Norris" width={60} height={60} />
			</div>
			<div className={styles.chuckNorrisCaption}>“{data.value}”</div>
			<div className={styles.flexCenter}>
				<button className={styles.defaultButton} onClick={refreshData}>Another!</button>
			</div>
		</Layout>
	)
}

export async function getServerSideProps() {
	const res = await fetch(`https://api.chucknorris.io/jokes/random`)
	const data = await res.json()

	return { props: { data } }
}
