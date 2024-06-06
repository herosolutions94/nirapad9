import React from "react"
import Link from "next/link"

export default function Heading(props) {
	const { text, link } = props
	return (
		<>
			<div className="sec_heading">
				{link ? (
					<>
						<h2>
							<Link href={link}>{text}</Link>
						</h2>
					</>
				) : (
					<>
						<h2>{text}</h2>
					</>
				)}
			</div>
		</>
	)
}
