import Head from "next/head"
import Layout from "../components/layout"
import styles from "../styles/Search.module.css"
import Image from "next/image"

export default function Search({ data, keyword }) {
	return (
		<Layout>
			<Head>
				<title>Search Results</title>
			</Head>
			<div className={styles.flexCenter}>
				<Image src="/chuck-norris.svg" alt="Chuck Norris" width={60} height={60} />
			</div>
			<div className={styles.resultKeyword}>Search Text: {keyword}</div>
			{data.result?.map((result) => (
				<div className={styles.chuckNorrisCaption} key={result.id}>
					“{result.value}”
				</div>
			))}
		</Layout>
	)
}

export async function getServerSideProps(context) {
	const keyword = context.query.keyword
	const res = await fetch(`https://api.chucknorris.io/jokes/search?query=${keyword}`)
	const data = await res.json()

	return { props: { data, keyword } }
}
