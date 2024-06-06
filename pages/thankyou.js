import Link from "next/link"
import React, { useState } from "react"
import Heading from "../components/heading"

export default function Thankyou() {
	return (
		<main className="thankyou_main">
			<section className="thankyou_pg">
				<div className="contain">
					<div className="cntnt">
						<Heading text="Thank you!" />
						<h3>Someone from our team will be in touch soon</h3>
						<p>In the meantime, follow us on social media</p>
						<ul className="social_logon">
							<li>
								<Link href="">
									<img src="/images/facebook.svg" alt="" />
								</Link>
							</li>
							<li>
								<Link href="">
									<img src="/images/twitter.svg" alt="" />
								</Link>
							</li>
							<li>
								<Link href="">
									<img src="/images/instagram.svg" alt="" />
								</Link>
							</li>
							<li>
								<Link href="">
									<img src="/images/linkedin.svg" alt="" />
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</section>
		</main>
	)
}
