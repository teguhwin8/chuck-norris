import Link from "next/link"

function Header({ back }) {
	return (
		<div className="header">
			{back && (
				<div className="backToHome">
					<Link href="/">
						<a>
							<svg xmlns="http://www.w3.org/2000/svg" className="backIcon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
							</svg>
						</a>
					</Link>
				</div>
			)}
			<div className="headerTitle">CHUCK NORRIS</div>
		</div>
	)
}

export default Header
