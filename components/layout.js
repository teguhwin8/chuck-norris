import Head from "next/head"

export default function Layout({ children }) {
	return (
		<>
			<Head>
				<title>Chuck Norris</title>
			</Head>
			<div className="container">{children}</div>
		</>
	)
}
