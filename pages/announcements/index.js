import Link from "next/link"
import React, { useState } from "react"

export default function Announcements() {
	return (
		<main>
			<section className="sub_banner announcements_banner">
				<div className="heading_banner">
					<h1>Announcements</h1>
				</div>
			</section>
			<section className="announcement_sec">
				<div className="contain">
					<div className="outer_list">
						<div className="inner_list">
							<div className="colL">
								<Link href="/announcements/detail" className="image">
									<img src="/images/a1.png" alt="" />
								</Link>
							</div>
							<div className="colR">
								<div className="category">
									Category: Product <br />
									FEBRUARY 20, 2024
								</div>
								<h2>
									<Link href="/announcements/detail">Meet NirApad9</Link>
								</h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore e. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoLorem ipsum </p>
								<Link href="/announcements/detail">Read More {">>"}</Link>
							</div>
						</div>
						<div className="inner_list">
							<div className="colL">
								<Link href="/announcements/detail" className="image">
									<img src="/images/a2.png" alt="" />
								</Link>
							</div>
							<div className="colR">
								<div className="category">
									Category: Product <br />
									FEBRUARY 20, 2024
								</div>
								<h2>
									<Link href="/announcements/detail">Meet NirApad9</Link>
								</h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore e. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoLorem ipsum </p>
								<Link href="/announcements/detail">Read More {">>"}</Link>
							</div>
						</div>
						<div className="inner_list">
							<div className="colL">
								<Link href="/announcements/detail" className="image">
									<img src="/images/a3.png" alt="" />
								</Link>
							</div>
							<div className="colR">
								<div className="category">
									Category: Product <br />
									FEBRUARY 20, 2024
								</div>
								<h2>
									<Link href="/announcements/detail">Meet NirApad9</Link>
								</h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore e. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoLorem ipsum </p>
								<Link href="/announcements/detail">Read More {">>"}</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="cta_sec p_t_zero">
				<div className="contain">
					<div className="devide_line_color"></div>
					<div className="flex">
						<div className="colL">
							<div className="image">
								<img src="/images/cta.svg" alt="" />
							</div>
						</div>
						<div className="colR">
							<p>Ready to elevate your workforce? Contact us today for personalized staffing solutions tailored to your company's needs. Let's collaborate to find the perfect talent that drives your success. </p>
							<div className="btn_blk justify-content-center">
								<Link href="/contact" className="site_btn">
									<span>Talk to us</span>
									<span className="arrow">
										<img src="/images/chevron_right.svg" alt="" />
									</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}
