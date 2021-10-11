import Layout from "../components/layout"
import { useRouter } from "next/router"
import styles from "../styles/Home.module.css"
import { useRef } from "react"
import Header from "../components/Header"

export default function Home({ data, categories }) {
	const router = useRouter()
	const refreshData = () => {
		router.replace(router.asPath)
	}
	const searchInputRef = useRef(null)
	const categoryInputRef = useRef(null)
	const search = (e) => {
		e.preventDefault()
		const keyword = searchInputRef.current.value
		if (!keyword) return
		router.push(`search?keyword=${keyword}`)
	}
	const handleSearchByCategory = (e) => {
		e.preventDefault()
		const category = categoryInputRef.current.value
		if (!category) return
		router.push(`category/${category}`)
	}
	return (
		<Layout>
			<Header back={false} />
			<form action="#" className={styles.searchForm}>
				<input type="text" ref={searchInputRef} placeholder="Search jokes by text" className={styles.searchInput} />
				<button className="defaultButton" onClick={search}>
					Search!
				</button>
			</form>
			<div className={styles.flexCenter}>
				<img src={data.icon_url} alt="Chuck Norris" width={60} height={60} />
			</div>
			<div className={styles.chuckNorrisCaption}>“{data.value}”</div>
			<div className={styles.flexCenter}>
				<button className="defaultButton" onClick={refreshData}>
					Another!
				</button>
			</div>
			<div className="relative">
				<div className={styles.searchByCategory}>
					<div className={styles.selectCategory}>
						<input type="text" list="data" ref={categoryInputRef} />

						<datalist id="data">
							{categories.map((item, key) => (
								<option key={key} value={item} />
							))}
						</datalist>
					</div>
					<button className="defaultButton" onClick={handleSearchByCategory}>
						Search!
					</button>
				</div>
			</div>
		</Layout>
	)
}

export async function getServerSideProps() {
	const [randomRes, categoryRes] = await Promise.all([fetch(`https://api.chucknorris.io/jokes/random`), fetch(`https://api.chucknorris.io/jokes/categories`)])
	const [data, categories] = await Promise.all([randomRes.json(), categoryRes.json()])
	return { props: { data, categories } }
}
