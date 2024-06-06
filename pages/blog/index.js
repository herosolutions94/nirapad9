import TalkToUs from "@/components/components/talk-to-us"
import Link from "next/link"
import React, { useState } from "react"

export default function Blog() {
	return (
		<main>
			<section className="sub_banner blog_banner">
				<div className="heading_banner">
					<h1>Blogs</h1>
				</div>
			</section>
			<section className="blog_pg main_blog_page">
				<div className="contain">
					<div className="flex">
						<div className="colL">
							<Link href="/blog/detail" className="image">
								<img src="/images/post1.png" alt="" />
							</Link>
						</div>
						<div className="colR">
							<div className="inner">
								<div className="date">FEBRUARY 20, 2024</div>
								<div className="sec_heading">
									<h2>
										<Link href="/blog/detail">Meet NirApad9</Link>
									</h2>
								</div>
								<p>Discover NirApad9's comprehensive services, bridging staffing and consulting seamlessly. Our staffing solutions connect you with top-tier talent, whiler </p>
								<Link href="/blog/detail">Read More {">>"}</Link>
							</div>
						</div>
					</div>
					<div className="other_blog">
						<div className="flex">
							<div className="col">
								<div className="_inner">
									<Link href="/blog/detail" className="image">
										<img src="/images/post2.png" alt="" />
									</Link>
									<div className="txt">
										<div className="date">FEBRUARY 20, 2024</div>
										<h2>
											<Link href="/blog/detail">Meet NirApad9</Link>
										</h2>
										<p>Discover NirApad9's comprehensive services, bridging staffing and consulting seamlessly. Our staffing solutions connect you with top-tier talent, whiler </p>
										<Link href="/blog/detail">Read More {">>"}</Link>
									</div>
								</div>
							</div>
							<div className="col">
								<div className="_inner">
									<Link href="/blog/detail" className="image">
										<img src="/images/post2.png" alt="" />
									</Link>
									<div className="txt">
										<div className="date">FEBRUARY 20, 2024</div>
										<h2>
											<Link href="/blog/detail">Meet NirApad9</Link>
										</h2>
										<p>Discover NirApad9's comprehensive services, bridging staffing and consulting seamlessly. Our staffing solutions connect you with top-tier talent, whiler </p>
										<Link href="/blog/detail">Read More {">>"}</Link>
									</div>
								</div>
							</div>
							<div className="col">
								<div className="_inner">
									<Link href="/blog/detail" className="image">
										<img src="/images/post2.png" alt="" />
									</Link>
									<div className="txt">
										<div className="date">FEBRUARY 20, 2024</div>
										<h2>
											<Link href="/blog/detail">Meet NirApad9</Link>
										</h2>
										<p>Discover NirApad9's comprehensive services, bridging staffing and consulting seamlessly. Our staffing solutions connect you with top-tier talent, whiler </p>
										<Link href="/blog/detail">Read More {">>"}</Link>
									</div>
								</div>
							</div>
							<div className="col">
								<div className="_inner">
									<Link href="/blog/detail" className="image">
										<img src="/images/post2.png" alt="" />
									</Link>
									<div className="txt">
										<div className="date">FEBRUARY 20, 2024</div>
										<h2>
											<Link href="/blog/detail">Meet NirApad9</Link>
										</h2>
										<p>Discover NirApad9's comprehensive services, bridging staffing and consulting seamlessly. Our staffing solutions connect you with top-tier talent, whiler </p>
										<Link href="/blog/detail">Read More {">>"}</Link>
									</div>
								</div>
							</div>
							<div className="col">
								<div className="_inner">
									<Link href="/blog/detail" className="image">
										<img src="/images/post2.png" alt="" />
									</Link>
									<div className="txt">
										<div className="date">FEBRUARY 20, 2024</div>
										<h2>
											<Link href="/blog/detail">Meet NirApad9</Link>
										</h2>
										<p>Discover NirApad9's comprehensive services, bridging staffing and consulting seamlessly. Our staffing solutions connect you with top-tier talent, whiler </p>
										<Link href="/blog/detail">Read More {">>"}</Link>
									</div>
								</div>
							</div>
							<div className="col">
								<div className="_inner">
									<Link href="/blog/detail" className="image">
										<img src="/images/post2.png" alt="" />
									</Link>
									<div className="txt">
										<div className="date">FEBRUARY 20, 2024</div>
										<h2>
											<Link href="/blog/detail">Meet NirApad9</Link>
										</h2>
										<p>Discover NirApad9's comprehensive services, bridging staffing and consulting seamlessly. Our staffing solutions connect you with top-tier talent, whiler </p>
										<Link href="/blog/detail">Read More {">>"}</Link>
									</div>
								</div>
							</div>
							<div className="col">
								<div className="_inner">
									<Link href="/blog/detail" className="image">
										<img src="/images/post2.png" alt="" />
									</Link>
									<div className="txt">
										<div className="date">FEBRUARY 20, 2024</div>
										<h2>
											<Link href="/blog/detail">Meet NirApad9</Link>
										</h2>
										<p>Discover NirApad9's comprehensive services, bridging staffing and consulting seamlessly. Our staffing solutions connect you with top-tier talent, whiler </p>
										<Link href="/blog/detail">Read More {">>"}</Link>
									</div>
								</div>
							</div>
							<div className="col">
								<div className="_inner">
									<Link href="/blog/detail" className="image">
										<img src="/images/post2.png" alt="" />
									</Link>
									<div className="txt">
										<div className="date">FEBRUARY 20, 2024</div>
										<h2>
											<Link href="/blog/detail">Meet NirApad9</Link>
										</h2>
										<p>Discover NirApad9's comprehensive services, bridging staffing and consulting seamlessly. Our staffing solutions connect you with top-tier talent, whiler </p>
										<Link href="/blog/detail">Read More {">>"}</Link>
									</div>
								</div>
							</div>
							<div className="col">
								<div className="_inner">
									<Link href="/blog/detail" className="image">
										<img src="/images/post2.png" alt="" />
									</Link>
									<div className="txt">
										<div className="date">FEBRUARY 20, 2024</div>
										<h2>
											<Link href="/blog/detail">Meet NirApad9</Link>
										</h2>
										<p>Discover NirApad9's comprehensive services, bridging staffing and consulting seamlessly. Our staffing solutions connect you with top-tier talent, whiler </p>
										<Link href="/blog/detail">Read More {">>"}</Link>
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
