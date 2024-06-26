import Link from "next/link"
import React, { useState } from "react"
import TalkToUs from "../components/talk-to-us"
import Heading from "../components/heading"

export default function MicrosoftStaffing() {
	return (
		<main>
			<section className="sub_banner microsoft_banner">
				<div className="heading_banner">
					<h1>Staffing Services</h1>
				</div>
			</section>
			<section className="consulting_overview micro-overview">
				<div className="contain">
					<div className="cntnt text-center">
						<Heading text="Overview" />
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu lobortis elementum nibh tellus. Et malesuada fames ac turpis egestas. Duis tristique sollicitudin nibh sit. Vulputate dignissim </p>
					</div>
					<div className="flex">
						<div className="col">
							<div className="image">
								<img src="/images/m1.png" alt="" />
							</div>
							<h3>Office 365</h3>
						</div>
						<div className="col">
							<div className="image">
								<img src="/images/m2.png" alt="" />
							</div>
							<h3>Share Point</h3>
						</div>
						<div className="col">
							<div className="image">
								<img src="/images/m3.png" alt="" />
							</div>
							<h3>Power BI</h3>
						</div>
					</div>
				</div>
			</section>
			<section className="advantages_staffing_sec">
				<div className="contain">
					<div className="devide_line_color"></div>
					<div className="cntnt text-center">
						<Heading text="Advantages of Our Microsoft Staffing" />
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu lobortis elementum nibh tellus. Et malesuada fames ac turpis egestas. Duis tristique sollicitudin nibh sit. Vulputate dignissim </p>
					</div>
					<div className="list_advantage">
						<div className="inner_list">
							<div className="image_icon">
								<img src="/images/circle.svg" alt="" />
							</div>
							<div className="txt_cntnt">
								<h4>Access to Specialized Talent:</h4>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu lobortis elementum nibh tellus. EtDuis tristique sollicitudin nibh sit</p>
							</div>
						</div>
						<div className="inner_list">
							<div className="image_icon">
								<img src="/images/circle.svg" alt="" />
							</div>
							<div className="txt_cntnt">
								<h4>Years in Operation:</h4>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu lobortis elementum nibh tellus. EtDuis tristique sollicitudin nibh sit</p>
							</div>
						</div>
						<div className="inner_list">
							<div className="image_icon">
								<img src="/images/circle.svg" alt="" />
							</div>
							<div className="txt_cntnt">
								<h4>Subject Matter Expertise:</h4>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu lobortis elementum nibh tellus. EtDuis tristique sollicitudin nibh sit</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="choose_staffing">
				<div className="contain">
					<div className="devide_line_color"></div>
					<div className="cntnt text-center">
						<Heading text="Why Choose us for Staffing" />
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Urna nunc id cursus metus aliquam eleifend mi in. Eu facilisis sed odio morbi quis commodo odio aenean sed. Venenatis cras sed felis eget velit aliquet sagittis id consectetur. </p>
					</div>
					<div className="flex">
						<div className="col">
							<div className="inner">
								<div className="image">
									<img src="/images/choose1.png" alt="" />
								</div>
								<div className="blk_txt">
									<h3>IT Staffing</h3>
									<div className="mini_devide_line"></div>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="inner">
								<div className="image">
									<img src="/images/choose2.png" alt="" />
								</div>
								<div className="blk_txt">
									<h3>Design & Development</h3>
									<div className="mini_devide_line"></div>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="inner">
								<div className="image">
									<img src="/images/choose3.png" alt="" />
								</div>
								<div className="blk_txt">
									<h3>Time & Materials</h3>
									<div className="mini_devide_line"></div>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="choose_staffing p_b_0">
				<div className="contain">
					<div className="devide_line_color"></div>
					<div className="cntnt text-center">
						<Heading text="Proven Success Rate for Microsoft Staffing" />
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu lobortis elementum nibh tellus. Et malesuada fames ac turpis egestas. Duis tristique sollicitudin nibh sit. Vulputate dignissim suspendisse in est ante in nibh. Donec enim diam.</p>
					</div>
					<div className="flex proven_success_rate">
						<div className="col">
							<div className="inner">{/* <div className="image">
                  <img src="/images/choose1.png" alt="" />
                </div>
                <div className="blk_txt">
                  <h3>IT Staffing</h3>
                  <div className="mini_devide_line"></div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div> */}</div>
						</div>
						<div className="col">
							<div className="inner">{/* <div className="image">
                  <img src="/images/choose2.png" alt="" />
                </div>
                <div className="blk_txt">
                  <h3>Design & Development</h3>
                  <div className="mini_devide_line"></div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div> */}</div>
						</div>
						<div className="col">
							<div className="inner">{/* <div className="image">
                  <img src="/images/choose3.png" alt="" />
                </div>
                <div className="blk_txt">
                  <h3>Time & Materials</h3>
                  <div className="mini_devide_line"></div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div> */}</div>
						</div>
					</div>
				</div>
			</section>
			<TalkToUs />
		</main>
	)
}
