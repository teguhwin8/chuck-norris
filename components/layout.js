import Head from "next/head"

export default function Layout({ children }) {
	return (
		<>
			<Head>
				<title>Chuck Norris</title>
			</Head>
			<div className="container">
				<div className="header">
					<div className="headerTitle">CHUCK NORRIS</div>
				</div>
				{children}
			</div>
		</>
	)
}
