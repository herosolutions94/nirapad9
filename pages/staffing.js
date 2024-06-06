import Link from "next/link"
import React, { useState } from "react"
import TalkToUs from "../components/talk-to-us"
import Heading from "../components/heading"

export default function Staffing() {
	return (
		<main>
			<section className="sub_banner staffing_banner">
				<div className="heading_banner">
					<h1>Staffing Services</h1>
				</div>
			</section>
			<section className="staffing_overview">
				<div className="contain">
					<div className="flex">
						<div className="colL">
							<p>In today's dynamic business environment, staffing partners play a pivotal role in bridging the gap between talented individuals seeking employment and organizations in need of skilled personnel. At NirApad9, we take pride in being more than just matchmakers; we&lsquo;re the architects of the future workforce.</p>
							<div className="pt-4"></div>
							<p>Our forward-thinking staffing solutions transcend traditional approaches, reflecting our commitment to revolutionizing the industry. Rooted in technology and human-centric methodologies, we don't just match; we architect the future workforce. Our comprehensive services navigate the job market's complexities, ensuring companies discover the right talent while candidates secure their ideal positions.</p>
						</div>
						<div className="colR">
							<div className="image">
								<img src="/images/staffing1.png" alt="" />
							</div>
						</div>
					</div>
				</div>
			</section>
			<section id="staffing_solutions" style={{ backgroundImage: "url('/images/staffing_solutions_img.jpg')" }}>
				<div class="devide_line_color"></div>
				<div className="contain">
					<div className="text-center">
						<Heading text="Types of Staffing Solutions We Provide" />
					</div>
					<div className="wrapper">
						<div className="column">
							<div className="solutions_block">
								<div className="icon">
									<img src="/images/f1.svg" alt="" />
								</div>
								<div className="text">
									<h4>Full Time Equivalent (FTE) Staffing</h4>
									<p>Providing dedicated, long-term personnel solutions for seamless team integration and productivity.</p>
								</div>
							</div>
						</div>
						<div className="column">
							<div className="solutions_block">
								<div className="icon">
									<img src="/images/f3.svg" alt="" />
								</div>
								<div className="text">
									<h4>Corp-to-Corp (C2C) Staffing</h4>
									<p>Facilitating flexible business collaborations through strategic talent partnerships.</p>
								</div>
							</div>
						</div>
						<div className="column">
							<div className="solutions_block">
								<div className="icon">
									<img src="/images/f2.svg" alt="" />
								</div>
								<div className="text">
									<h4>Contract-to-hire (C2H) staffing</h4>
									<p>Offering a pathway for companies to assess and transition temporary hires into permanent roles.</p>
								</div>
							</div>
						</div>
						<div className="column">
							<div className="solutions_block">
								<div className="icon">
									<img src="/images/f4.svg" alt="" />
								</div>
								<div className="text">
									<h4>Managed Service Provider (MSP) staffing</h4>
									<p>Streamlining workforce management through expert oversight and optimization of external talent resources.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="advantages_staffing_sec">
				<div className="contain">
					<div className="devide_line_color"></div>
					<div className="cntnt text-center">
						<Heading text="Unlocking Your Competitive Edge: Our Key Advantages" />
						<p>We differentiate ourselves through a unique staffing model that offers unparalleled advantages to employers and job seekers. Our approach transcends traditional staffing services, revolutionizing the recruitment process with the following innovations: </p>
					</div>
					<div className="list_advantage">
						<div className="inner_list">
							<div className="image_icon" style={{ backgroundImage: "url('/images/circle.svg')" }}>
								<img src="/images/stafing_advantage_01.png" alt="" className="mini_img" />
							</div>
							<div className="txt_cntnt">
								<h4>Talent Partner Precision:</h4>
								<p>Our network of talent partners boasts a diverse range of technical and industry-related skills. Each candidate is carefully matched with a talent partner who excels in the required skill set, ensuring efficient and precise assessments.</p>
							</div>
						</div>
						<div className="inner_list">
							<div className="image_icon" style={{ backgroundImage: "url('/images/circle.svg')" }}>
								<img src="/images/stafing_advantage_02.png" alt="" className="mini_img" />
							</div>
							<div className="txt_cntnt">
								<h4>Cultural Fit Assessment:</h4>
								<p>We recognize the importance of cultural fit alongside technical expertise. Our recruiters conduct thorough assessments to ensure candidates align with the company's culture and values. </p>
							</div>
						</div>
						<div className="inner_list">
							<div className="image_icon" style={{ backgroundImage: "url('/images/circle.svg')" }}>
								<img src="/images/stafing_advantage_03.png" alt="" className="mini_img" />
							</div>
							<div className="txt_cntnt">
								<h4>Dynamic Engagement Strategy:</h4>
								<p>We prioritize feedback and ongoing communication. Our process includes continuous engagement with candidates and clients, refining our matching process and addressing evolving needs.</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="staffing_process_sec">
				<div className="contain">
					<div className="devide_line_color"></div>
					<div className="cntnt text-center">
						<Heading text="Our Proven Process Delivers Top Talent" />
						<p>The staffing process is meticulously designed to ensure a seamless and dynamic match between our clients and candidates. Here's how we achieve this:</p>
					</div>
					<div className="flex">
						<div className="col">
							<div className="inner">
								<div className="blk_circle">
									<img src="/images/staffing_process_sec_01.png" alt="" />
								</div>
								<div className="blk_txt">
									<h3>Client Assessment</h3>
									<p>We start by deeply understanding our client's needs, culture, and challenges.</p>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="inner">
								<div className="blk_circle">
									<img src="/images/staffing_process_sec_02.png" alt="" />
								</div>
								<div className="blk_txt">
									<h3>Talent Partner Vetting</h3>
									<p>Our experts use technology to find candidates and evaluate their cultural fit. </p>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="inner">
								<div className="blk_circle">
									<img src="/images/staffing_process_sec_03.png" alt="" />
								</div>
								<div className="blk_txt">
									<h3>Fit Evaluation</h3>
									<p>Our candidates undergo thorough assessments by skilled talent partners, ensuring they meet exact job skill requirements. </p>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="inner">
								<div className="blk_circle">
									<img src="/images/staffing_process_sec_04.png" alt="" />
								</div>
								<div className="blk_txt">
									<h3>Continuous Engagement</h3>
									<p>We maintain ongoing communication with clients and candidates to ensure robust feedback.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="bg_shape">
					<img src="/images/bg-shape-3.png" alt="" />
				</div>
			</section>
			<section className="choose_staffing staffing_page">
				<div className="contain">
					<div className="devide_line_color"></div>
					<div className="cntnt text-center">
						<Heading text="Why NirApad9 is Your Top Choice for Talent Solutions?" />
						<p>We offer innovative staffing solutions blending technology and a human-centric approach. Our model assesses diverse technological skill sets, supported by talent partner networks for precise candidate matching. Continuous engagement ensures adaptability for evolving niche needs. </p>
					</div>
					<div className="flex">
						<div className="col d-flex">
							<div className="inner w-100 d-flex flex-column">
								<div className="image">
									<img src="/images/choose1.png" alt="" />
								</div>
								<div className="blk_txt d-flex flex-column flex-grow-1">
									<h3 className="mb-auto">Comprehensive Talent Matching</h3>
									<div className="mini_devide_line"></div>
									<p>Our algorithms and talent expertise ensure precise candidate matching, saving time and resources in hiring.</p>
								</div>
							</div>
						</div>
						<div className="col d-flex">
							<div className="inner w-100 d-flex flex-column">
								<div className="image">
									<img src="/images/choose2.png" alt="" />
								</div>
								<div className="blk_txt d-flex flex-column flex-grow-1">
									<h3 className="mb-auto">Tech-Savvy Solutions</h3>
									<div className="mini_devide_line"></div>
									<p>We leverage cutting-edge tech for efficient, industry-tailored solutions, optimizing your workforce.</p>
								</div>
							</div>
						</div>
						<div className="col d-flex">
							<div className="inner w-100 d-flex flex-column">
								<div className="image">
									<img src="/images/choose3.png" alt="" />
								</div>
								<div className="blk_txt d-flex flex-column flex-grow-1">
									<h3 className="mb-auto">Proactive Support and Engagement</h3>
									<div className="mini_devide_line"></div>
									<p>We offer proactive support and ongoing communication for long-term success and satisfaction</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="technology_sec">
				<div className="contain">
					<div className="devide_line_color"></div>
					<div className="cntnt text-center">
						<Heading text="Our Technologies" />
						<p>We streamline the hiring process and ensure the selection of suitable candidates for our clients' business needs. Our Talent Partner Program addresses this challenge by providing comprehensive vetting and assessment services, leveraging expertise in technologies such as below: </p>
					</div>
					<div className="flex">
						<div className="col">
							<div className="inner">
								<div className="image">
									<img src="/images/logo1.png" alt="" />
								</div>
								<div className="blk_txt">
									<h3>Microsoft</h3>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="inner">
								<div className="image">
									<img src="/images/logo2.png" alt="" />
								</div>
								<div className="blk_txt">
									<h3>Workday</h3>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="inner">
								<div className="image">
									<img src="/images/logo4.png" alt="" />
								</div>
								<div className="blk_txt">
									<h3>SAP</h3>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="inner">
								<div className="image">
									<img src="/images/logo3.png" alt="" />
								</div>
								<div className="blk_txt">
									<h3>Zoho</h3>
								</div>
							</div>
						</div>
					</div>
					<div className="btn_blk text-center">
						<Link href="/technology" className="site_btn">
							<span>See more technologies</span>
							<span className="arrow">
								<img src="/images/chevron_right.svg" alt="" />
							</span>
						</Link>
					</div>
				</div>
			</section>
			<TalkToUs />
		</main>
	)
}
