import Link from "next/link"
import React, { useState } from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import ReactStars from "react-stars"
import TalkToUs from "../components/talk-to-us"
import Heading from "../components/heading"

export default function About() {
	const [activeTab, setActiveTab] = useState(0)
	const [showDetail, setShowDetail] = useState(false)
	const popShow = () => {
		setShowDetail(!showDetail)
	}
	const testi = {
		slidesToShow: 2,
		cssEase: "linear",
		slidesToScroll: 1,
		speed: 15000,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 1000,
		arrows: false,
		dots: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	}

	return (
		<main>
			<section className="sub_banner about_banner">
				<div className="heading_banner">
					<h1>About Us</h1>
				</div>
			</section>
			<section className="grid_abt">
				<div className="contain">
					<div className="flex">
						<div className="colL">
							<p>At NirApad9, we aim to remain at the forefront of innovative staffing solutions, committed to delivering value through a deep understanding of the industry's needs.  Established in 2020 during significant changes in the global workforce, NirApad9 was founded by our CEO, Naveen Kolla, based on his personal experiences as a candidate and hiring manager. He identified key issues in the staffing industry, such as a lack of reasonable skill assessment by recruiters and inconsistencies between candidate's claimed and actual abilities, which motivated us to take a unique approach to staff beyond traditional methods. </p>
							<p>Our goal is to revolutionize recruitment by prioritizing rigorous vetting processes and embracing technological advancements, ensuring that candidates possess the necessary skills and excel in navigating cutting-edge technological environments.</p>
							<p>We provide cutting-edge staffing solutions tailored to meet our clients' unique needs. Our team of experts possesses a deep understanding of the industry and is committed to delivering value through innovative and effective strategies. We pride ourselves on staying up-to-date with the latest trends and technologies to ensure our clients receive the most relevant and comprehensive solutions</p>
						</div>
						<div className="colR">
							<div className="image">
								<img src="/images/abt1.png" alt="" />
							</div>
						</div>
						<div className="col w-100">
							<div className="cntnt text-center">
								<Heading text="Cultivating Company Culture for Growth, Collaboration, and Innovation" />
								<p>Central to NirApad9 are our core values of growth, opportunity, collaboration, and ownership, which drive our operations and relationships. We foster an environment where employees are encouraged to excel across various domains, such as technical expertise, adaptability, teamwork, and proactive engagement, recognizing the importance of versatility and continuous learning for professional development. By embodying these values, we elevate employee careers and provide clients with the highest caliber of innovative, technology-driven, and human-centric solutions.</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="mission_sec mission_about_page">
				<div className="contain">
					<div className="flex">
						<div className="colL">
							<div className="image">
								<img src="/images/abt2.png" alt="" />
							</div>
						</div>
						<div className="colR">
							<Heading text="Our Mission" />
							<p>We foster collective and organic growth through a dynamic approach to staffing and technology. Our ethos is grounded in the belief that our employees and the company's progress are interlinked. Together, we're committed to rising by achieving excellence in a changing landscape. </p>
						</div>
					</div>
				</div>
			</section>
			<section className="vision_sec vision_about_page">
				<div className="contain">
					<div className="flex">
						<div className="colL">
							<Heading text="Our Vision" />
							<p>We aim to revolutionize staffing efficiency by reducing candidate processing time from 7 – 10 days to 4 hours within the next two years. Leveraging cutting-edge technology and human capital strategies, we're committed to multifaceted operational improvements and enhanced talent partner relations to achieve this ambitious goal. We envision ourselves at the forefront of the industry, setting new standards for efficiency and excellence.</p>
						</div>
						<div className="colR">
							<div className="image">
								<img src="/images/abt2.png" alt="" />
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="team_sec">
				<div className="contain-fluid">
					<div className="text-center">
						<Heading text="Meet our Team" />
					</div>
					<div className="tabs_btn">
						<button className={activeTab === 0 ? "active" : " "} onClick={() => setActiveTab(0)}>
							All
						</button>
						<button className={activeTab === 1 ? "active" : " "} onClick={() => setActiveTab(1)}>
							DEVELOPERS
						</button>
						<button className={activeTab === 2 ? "active" : " "} onClick={() => setActiveTab(2)}>
							DIGITAL MARKETING
						</button>
						<button className={activeTab === 3 ? "active" : " "} onClick={() => setActiveTab(3)}>
							FINANCE
						</button>
						<button className={activeTab === 4 ? "active" : " "} onClick={() => setActiveTab(4)}>
							HR
						</button>
						<button className={activeTab === 5 ? "active" : " "} onClick={() => setActiveTab(5)}>
							UI/UX
						</button>
					</div>
					<div className="devide_line_color"></div>
					{/* ============popup team============= */}
					<div className={showDetail ? "team_detail active" : "team_detail"}>
						<div className="x_btn" onClick={popShow}></div>
						<div className="inner_team_details flex">
							<div className="colL">
								<div className="image">
									<img src="/images/team1.png" alt="" />
								</div>
								<h4>Katy Perry</h4>
								<p>Founder and CEO</p>
							</div>
							<div className="colR">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. </p>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit ut labore et dolore magna aliqua. </p>
								<p>Sit amet consectetur adipiscing elit. Viverra justo nec ultrices dui sapien eget mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit Nascetur ridiculus mus mauris vitae ultricies. Sit amet consectetur adipiscing elit. Viverra justo nec ultrices dui sapien eget mi</p>
								<div className="social_logon">
									<span>Follow Me on - </span>
									<Link href="">
										<img src="/images/share_linked.svg" alt="" />
									</Link>
									<Link href="">
										<img src="/images/share_envelop.svg" alt="" />
									</Link>
								</div>
							</div>
						</div>
					</div>
					{/* ===============end popup team========= */}
					<div className={showDetail ? "tab_cntnt hide" : "tab_cntnt"}>
						<div className={activeTab === 0 ? "team_content active" : "team_content"}>
							<div className="flex">
								<div className="col">
									<div className="inner">
										<div className="image">
											<img src="/images/user.png" alt="" />
											<span className="plus_btn" onClick={popShow}>
												<img src="/images/plus.svg" alt="" />
											</span>
										</div>
										<h4>Naveen Kola</h4>
										<p>Company Head</p>
									</div>
								</div>
								<div className="col">
									<div className="inner">
										<div className="image">
											<img src="/images/user.png" alt="" />
											<span className="plus_btn" onClick={popShow}>
												<img src="/images/plus.svg" alt="" />
											</span>
										</div>
										<h4>Naveen Kola</h4>
										<p>Company Head</p>
									</div>
								</div>
								<div className="col">
									<div className="inner">
										<div className="image">
											<img src="/images/user.png" alt="" />
											<span className="plus_btn" onClick={popShow}>
												<img src="/images/plus.svg" alt="" />
											</span>
										</div>
										<h4>Naveen Kola</h4>
										<p>Company Head</p>
									</div>
								</div>
								<div className="col">
									<div className="inner">
										<div className="image">
											<img src="/images/user.png" alt="" />
											<span className="plus_btn" onClick={popShow}>
												<img src="/images/plus.svg" alt="" />
											</span>
										</div>
										<h4>Naveen Kola</h4>
										<p>Company Head</p>
									</div>
								</div>
								<div className="col">
									<div className="inner">
										<div className="image">
											<img src="/images/user.png" alt="" />
											<span className="plus_btn" onClick={popShow}>
												<img src="/images/plus.svg" alt="" />
											</span>
										</div>
										<h4>Naveen Kola</h4>
										<p>Company Head</p>
									</div>
								</div>
								<div className="col">
									<div className="inner">
										<div className="image">
											<img src="/images/user.png" alt="" />
											<span className="plus_btn" onClick={popShow}>
												<img src="/images/plus.svg" alt="" />
											</span>
										</div>
										<h4>Naveen Kola</h4>
										<p>Company Head</p>
									</div>
								</div>
								<div className="col">
									<div className="inner">
										<div className="image">
											<img src="/images/user.png" alt="" />
											<span className="plus_btn" onClick={popShow}>
												<img src="/images/plus.svg" alt="" />
											</span>
										</div>
										<h4>Naveen Kola</h4>
										<p>Company Head</p>
									</div>
								</div>
								<div className="col">
									<div className="inner">
										<div className="image">
											<img src="/images/user.png" alt="" />
											<span className="plus_btn" onClick={popShow}>
												<img src="/images/plus.svg" alt="" />
											</span>
										</div>
										<h4>Naveen Kola</h4>
										<p>Company Head</p>
									</div>
								</div>
								<div className="col">
									<div className="inner">
										<div className="image">
											<img src="/images/user.png" alt="" />
											<span className="plus_btn" onClick={popShow}>
												<img src="/images/plus.svg" alt="" />
											</span>
										</div>
										<h4>Naveen Kola</h4>
										<p>Company Head</p>
									</div>
								</div>
								<div className="col">
									<div className="inner">
										<div className="image">
											<img src="/images/user.png" alt="" />
											<span className="plus_btn" onClick={popShow}>
												<img src="/images/plus.svg" alt="" />
											</span>
										</div>
										<h4>Naveen Kola</h4>
										<p>Company Head</p>
									</div>
								</div>
							</div>
						</div>
						<div className={activeTab === 1 ? "team_content active" : "team_content"}>
							<div className="flex">
								<div className="col">
									<div className="inner">
										<div className="image">
											<img src="/images/user.png" alt="" />
											<span className="plus_btn" onClick={popShow}>
												<img src="/images/plus.svg" alt="" />
											</span>
										</div>
										<h4>Naveen Kola</h4>
										<p>Company Head</p>
									</div>
								</div>
								<div className="col">
									<div className="inner">
										<div className="image">
											<img src="/images/user.png" alt="" />
											<span className="plus_btn" onClick={popShow}>
												<img src="/images/plus.svg" alt="" />
											</span>
										</div>
										<h4>Naveen Kola</h4>
										<p>Company Head</p>
									</div>
								</div>
								<div className="col">
									<div className="inner">
										<div className="image">
											<img src="/images/user.png" alt="" />
											<span className="plus_btn" onClick={popShow}>
												<img src="/images/plus.svg" alt="" />
											</span>
										</div>
										<h4>Naveen Kola</h4>
										<p>Company Head</p>
									</div>
								</div>
								<div className="col">
									<div className="inner">
										<div className="image">
											<img src="/images/user.png" alt="" />
											<span className="plus_btn" onClick={popShow}>
												<img src="/images/plus.svg" alt="" />
											</span>
										</div>
										<h4>Naveen Kola</h4>
										<p>Company Head</p>
									</div>
								</div>
							</div>
						</div>
						<div className={activeTab === 2 ? "team_content active" : "team_content"}>
							<div className="flex">
								<div className="col">
									<div className="inner">
										<div className="image">
											<img src="/images/user.png" alt="" />
											<span className="plus_btn" onClick={popShow}>
												<img src="/images/plus.svg" alt="" />
											</span>
										</div>
										<h4>Naveen Kola</h4>
										<p>Company Head</p>
									</div>
								</div>
								<div className="col">
									<div className="inner">
										<div className="image">
											<img src="/images/user.png" alt="" />
											<span className="plus_btn" onClick={popShow}>
												<img src="/images/plus.svg" alt="" />
											</span>
										</div>
										<h4>Naveen Kola</h4>
										<p>Company Head</p>
									</div>
								</div>
								<div className="col">
									<div className="inner">
										<div className="image">
											<img src="/images/user.png" alt="" />
											<span className="plus_btn" onClick={popShow}>
												<img src="/images/plus.svg" alt="" />
											</span>
										</div>
										<h4>Naveen Kola</h4>
										<p>Company Head</p>
									</div>
								</div>
								<div className="col">
									<div className="inner">
										<div className="image">
											<img src="/images/user.png" alt="" />
											<span className="plus_btn" onClick={popShow}>
												<img src="/images/plus.svg" alt="" />
											</span>
										</div>
										<h4>Naveen Kola</h4>
										<p>Company Head</p>
									</div>
								</div>
							</div>
						</div>
						<div className={activeTab === 3 ? "team_content active" : "team_content"}>
							<div className="flex">
								<div className="col">
									<div className="inner">
										<div className="image">
											<img src="/images/user.png" alt="" />
											<span className="plus_btn" onClick={popShow}>
												<img src="/images/plus.svg" alt="" />
											</span>
										</div>
										<h4>Naveen Kola</h4>
										<p>Company Head</p>
									</div>
								</div>
								<div className="col">
									<div className="inner">
										<div className="image">
											<img src="/images/user.png" alt="" />
											<span className="plus_btn" onClick={popShow}>
												<img src="/images/plus.svg" alt="" />
											</span>
										</div>
										<h4>Naveen Kola</h4>
										<p>Company Head</p>
									</div>
								</div>
								<div className="col">
									<div className="inner">
										<div className="image">
											<img src="/images/user.png" alt="" />
											<span className="plus_btn" onClick={popShow}>
												<img src="/images/plus.svg" alt="" />
											</span>
										</div>
										<h4>Naveen Kola</h4>
										<p>Company Head</p>
									</div>
								</div>
								<div className="col">
									<div className="inner">
										<div className="image">
											<img src="/images/user.png" alt="" />
											<span className="plus_btn" onClick={popShow}>
												<img src="/images/plus.svg" alt="" />
											</span>
										</div>
										<h4>Naveen Kola</h4>
										<p>Company Head</p>
									</div>
								</div>
							</div>
						</div>
						<div className={activeTab === 4 ? "team_content active" : "team_content"}>
							<div className="flex">
								<div className="col">
									<div className="inner">
										<div className="image">
											<img src="/images/user.png" alt="" />
											<span className="plus_btn" onClick={popShow}>
												<img src="/images/plus.svg" alt="" />
											</span>
										</div>
										<h4>Naveen Kola</h4>
										<p>Company Head</p>
									</div>
								</div>
								<div className="col">
									<div className="inner">
										<div className="image">
											<img src="/images/user.png" alt="" />
											<span className="plus_btn" onClick={popShow}>
												<img src="/images/plus.svg" alt="" />
											</span>
										</div>
										<h4>Naveen Kola</h4>
										<p>Company Head</p>
									</div>
								</div>
								<div className="col">
									<div className="inner">
										<div className="image">
											<img src="/images/user.png" alt="" />
											<span className="plus_btn" onClick={popShow}>
												<img src="/images/plus.svg" alt="" />
											</span>
										</div>
										<h4>Naveen Kola</h4>
										<p>Company Head</p>
									</div>
								</div>
								<div className="col">
									<div className="inner">
										<div className="image">
											<img src="/images/user.png" alt="" />
											<span className="plus_btn" onClick={popShow}>
												<img src="/images/plus.svg" alt="" />
											</span>
										</div>
										<h4>Naveen Kola</h4>
										<p>Company Head</p>
									</div>
								</div>
							</div>
						</div>
						<div className={activeTab === 5 ? "team_content active" : "team_content"}>
							<div className="flex">
								<div className="col">
									<div className="inner">
										<div className="image">
											<img src="/images/user.png" alt="" />
											<span className="plus_btn" onClick={popShow}>
												<img src="/images/plus.svg" alt="" />
											</span>
										</div>
										<h4>Naveen Kola</h4>
										<p>Company Head</p>
									</div>
								</div>
								<div className="col">
									<div className="inner">
										<div className="image">
											<img src="/images/user.png" alt="" />
											<span className="plus_btn" onClick={popShow}>
												<img src="/images/plus.svg" alt="" />
											</span>
										</div>
										<h4>Naveen Kola</h4>
										<p>Company Head</p>
									</div>
								</div>
								<div className="col">
									<div className="inner">
										<div className="image">
											<img src="/images/user.png" alt="" />
											<span className="plus_btn" onClick={popShow}>
												<img src="/images/plus.svg" alt="" />
											</span>
										</div>
										<h4>Naveen Kola</h4>
										<p>Company Head</p>
									</div>
								</div>
								<div className="col">
									<div className="inner">
										<div className="image">
											<img src="/images/user.png" alt="" />
											<span className="plus_btn" onClick={popShow}>
												<img src="/images/plus.svg" alt="" />
											</span>
										</div>
										<h4>Naveen Kola</h4>
										<p>Company Head</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="testimonial_sec">
				<div className="contain">
					<Heading text="Hear What Our Clients Have to Say" />
				</div>
				<div className="slider_testi">
					<Slider {...testi}>
						<div className="item">
							<div className="inner">
								<div className="inner_inner">
									<p>Amazing service! helped us achieve our goals quickly and efficiently. </p>
									<ReactStars className="rates" count={5} value={5} size={12} color1={"#ddd"} color2={"#F0C91A"} edit={false} />
									<h4>Vp of HR, Acme Solutions</h4>
									<p>Mark Cowel</p>
								</div>
							</div>
						</div>
						<div className="item">
							<div className="inner">
								<div className="inner_inner">
									<p>Amazing service! helped us achieve our goals quickly and efficiently. </p>
									<ReactStars className="rates" count={5} value={5} size={12} color1={"#ddd"} color2={"#F0C91A"} edit={false} />
									<h4>Vp of HR, Acme Solutions</h4>
									<p>Mark Cowel</p>
								</div>
							</div>
						</div>
						<div className="item">
							<div className="inner">
								<div className="inner_inner">
									<p>Amazing service! helped us achieve our goals quickly and efficiently. </p>
									<ReactStars className="rates" count={5} value={5} size={12} color1={"#ddd"} color2={"#F0C91A"} edit={false} />
									<h4>Vp of HR, Acme Solutions</h4>
									<p>Mark Cowel</p>
								</div>
							</div>
						</div>
						<div className="item">
							<div className="inner">
								<div className="inner_inner">
									<p>Amazing service! helped us achieve our goals quickly and efficiently. </p>
									<ReactStars className="rates" count={5} value={5} size={12} color1={"#ddd"} color2={"#F0C91A"} edit={false} />
									<h4>Vp of HR, Acme Solutions</h4>
									<p>Mark Cowel</p>
								</div>
							</div>
						</div>
					</Slider>
				</div>
			</section>
			<TalkToUs />
		</main>
	)
}
