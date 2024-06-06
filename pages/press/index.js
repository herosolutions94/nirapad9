import TalkToUs from "@/components/components/talk-to-us"
import Link from "next/link"
import React, { useState } from "react"

export default function Press() {
	return (
		<main>
			<section className="sub_banner blog_banner">
				<div className="heading_banner">
					<h1>Press</h1>
				</div>
			</section>
			<section className="blog_pg">
				<div className="contain">
					<div className="feature_press">
						<div className="sec_heading text-center">
							<h2>Featured Press</h2>
						</div>
						<div className="feature_flex_press">
							<div className="flex">
								<div className="col">
									<div className="_inner">
										<Link href="/press/detail" className="image">
											<img src="/images/press_rectangle_160.jpg" alt="" />
										</Link>
										<div className="txt">
											<div class="date">FEBRUARY 20, 2024</div>
											<h2>
												<Link href="/press/detail">Discover NirApad9's comprehensive service</Link>
											</h2>
											<p>Discover NirApad9's comprehensive services, bridging staffing and consulting seamlessly. Our staffing solutions connect you with top-tier talent, whiler </p>
											<Link href="/press/detail">Read More {">>"}</Link>
										</div>
									</div>
								</div>
								<div className="col">
									<div className="_inner">
										<Link href="/press/detail" className="image">
											<img src="/images/press_rectangle_160.jpg" alt="" />
										</Link>
										<div className="txt">
											<div class="date">FEBRUARY 20, 2024</div>
											<h2>
												<Link href="/press/detail">Discover NirApad9's comprehensive service</Link>
											</h2>
											<p>Discover NirApad9's comprehensive services, bridging staffing and consulting seamlessly. Our staffing solutions connect you with top-tier talent, whiler </p>
											<Link href="/press/detail">Read More {">>"}</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="other_blog">
						<div className="sec_heading text-center">
							<h2>All Press</h2>
						</div>
						<div className="flex">
							<div className="col">
								<div className="_inner">
									<Link href="/press/detail" className="image">
										<img src="/images/post2.png" alt="" />
									</Link>
									<div className="txt">
										<div class="date">FEBRUARY 20, 2024</div>
										<h2>
											<Link href="/press/detail">Meet NirApad9</Link>
										</h2>
										<p>Discover NirApad9's comprehensive services, bridging staffing and consulting seamlessly. Our staffing solutions connect you with top-tier talent, whiler </p>
										<Link href="/press/detail">Read More {">>"}</Link>
									</div>
								</div>
							</div>
							<div className="col">
								<div className="_inner">
									<Link href="/press/detail" className="image">
										<img src="/images/post2.png" alt="" />
									</Link>
									<div className="txt">
										<div class="date">FEBRUARY 20, 2024</div>
										<h2>
											<Link href="/press/detail">Meet NirApad9</Link>
										</h2>
										<p>Discover NirApad9's comprehensive services, bridging staffing and consulting seamlessly. Our staffing solutions connect you with top-tier talent, whiler </p>
										<Link href="/press/detail">Read More {">>"}</Link>
									</div>
								</div>
							</div>
							<div className="col">
								<div className="_inner">
									<Link href="/press/detail" className="image">
										<img src="/images/post2.png" alt="" />
									</Link>
									<div className="txt">
										<div class="date">FEBRUARY 20, 2024</div>
										<h2>
											<Link href="/press/detail">Meet NirApad9</Link>
										</h2>
										<p>Discover NirApad9's comprehensive services, bridging staffing and consulting seamlessly. Our staffing solutions connect you with top-tier talent, whiler </p>
										<Link href="/press/detail">Read More {">>"}</Link>
									</div>
								</div>
							</div>
							<div className="col">
								<div className="_inner">
									<Link href="/press/detail" className="image">
										<img src="/images/post2.png" alt="" />
									</Link>
									<div className="txt">
										<div class="date">FEBRUARY 20, 2024</div>
										<h2>
											<Link href="/press/detail">Meet NirApad9</Link>
										</h2>
										<p>Discover NirApad9's comprehensive services, bridging staffing and consulting seamlessly. Our staffing solutions connect you with top-tier talent, whiler </p>
										<Link href="/press/detail">Read More {">>"}</Link>
									</div>
								</div>
							</div>
							<div className="col">
								<div className="_inner">
									<Link href="/press/detail" className="image">
										<img src="/images/post2.png" alt="" />
									</Link>
									<div className="txt">
										<div class="date">FEBRUARY 20, 2024</div>
										<h2>
											<Link href="/press/detail">Meet NirApad9</Link>
										</h2>
										<p>Discover NirApad9's comprehensive services, bridging staffing and consulting seamlessly. Our staffing solutions connect you with top-tier talent, whiler </p>
										<Link href="/press/detail">Read More {">>"}</Link>
									</div>
								</div>
							</div>
							<div className="col">
								<div className="_inner">
									<Link href="/press/detail" className="image">
										<img src="/images/post2.png" alt="" />
									</Link>
									<div className="txt">
										<div class="date">FEBRUARY 20, 2024</div>
										<h2>
											<Link href="/press/detail">Meet NirApad9</Link>
										</h2>
										<p>Discover NirApad9's comprehensive services, bridging staffing and consulting seamlessly. Our staffing solutions connect you with top-tier talent, whiler </p>
										<Link href="/press/detail">Read More {">>"}</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<TalkToUs />
		</main>
	)
}
