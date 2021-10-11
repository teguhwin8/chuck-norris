import Header from "../../components/Header"
import Layout from "../../components/layout"
import styles from "../../styles/Search.module.css"
import Head from "next/head"
import Image from "next/image"
import { useRouter } from "next/router"

export default function Category({ data, category }) {
  const router = useRouter()
	const refreshData = () => {
		router.replace(router.asPath)
	}
	return (
		<Layout>
			<Head>
				<title>Category</title>
			</Head>
			<Header back={true} />
			<div className={styles.flexCenter}>
				<Image src="/chuck-norris.svg" alt="Chuck Norris" width={60} height={60} />
			</div>
			<div className={styles.resultKeyword}>Category: <span className={styles.capitalize}>{category}</span></div>
			<div className={styles.chuckNorrisCaption}>“{data.value}”</div>
			<div className={styles.flexCenter}>
				<button className="defaultButton" onClick={refreshData}>
					Another!
				</button>
			</div>
		</Layout>
	)
}

export async function getServerSideProps(context) {
	const category = context.params.name
	const res = await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
	const data = await res.json()

	return { props: { data, category } }
}
