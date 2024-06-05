import Link from "next/link"
import React, { useState } from "react"

export default function Consulting() {
	return (
		<main>
			<section className="sub_banner consulting_banner">
				<div className="heading_banner">
					<h1>Consulting Services</h1>
				</div>
			</section>
			<section className="consulting_overview">
				<div className="contain">
					<div className="cntnt text-center">
						{/* <div className="sec_heading">
                    <h2>Overview</h2>
                </div> */}
						<p>We are dedicated to solving complex challenges across various industries through our expert consulting services. Our approach combines traditional methodologies with an extensive network of partnerships to deliver customized solutions, tailored to each client's unique needs. Whether you aim to enhance operational efficiency, implement new technologies, or streamline business processes, our team is equipped with the knowledge and expertise to guide you to success.</p>
						<p>Our services cover a broad-spectrum including risk management, compliance, digital transformation, and specific industry solutions, ensuring a well-rounded approach to address all your business challenges. We specialize in consulting for leading technologies including SAP, Workday, Microsoft, and Zoho, ensuring you receive the most advanced and relevant advice. Our expertise extends to deploying these technologies to address specific issues such as improving supply chain logistics, enhancing customer relationship management, and boosting data security. </p>
					</div>
					<div className="devide_line_color"></div>
				</div>
			</section>
			<section className="consulting_pg_sec">
				<div className="contain">
					<div className="flex">
						<div className="colL">
							<div className="sec_heading">
								<h2>Our Consulting Services </h2>
							</div>
							<p>NirApad9 can tackle complex challenges across industries with expert consulting services, combining traditional methods and extensive partnerships to provide customized solutions. Our team's expertise spans operational efficiency, technology implementation, and process streamlining. </p>
							{/* <div className="btn_blk">
                <Link href="" className="site_btn">Learn More</Link>
              </div> */}
						</div>
						<div className="colR">
							<div className="image">
								<img src="/images/staffing-banner.png" alt="" />
							</div>
						</div>
					</div>
				</div>
			</section>
			<section id="staffing_solutions" style={{ backgroundImage: "url('/images/staffing_solutions_img.jpg')" }}>
				<div class="devide_line_color"></div>
				<div className="contain">
					<div className="sec_heading text-center">
						<h2>Types of Staffing Solutions We Provide</h2>
					</div>
					<div className="wrapper">
						<div className="column">
							<div className="solutions_block">
								<div className="icon">
									<img src="/images/f1.svg" alt="" />
								</div>
								<div className="text">
									<h4>Time & Materials</h4>
									<p>Flexibility with time spent and materials used, adapting seamlessly to changes in project scope.</p>
								</div>
							</div>
						</div>
						<div className="column">
							<div className="solutions_block">
								<div className="icon">
									<img src="/images/f3.svg" alt="" />
								</div>
								<div className="text">
									<h4>Project-Based Consulting</h4>
									<p>Achieve specific, predefined outcomes with expertise tailored to your project&lsquo;s demands.</p>
								</div>
							</div>
						</div>
						<div className="column">
							<div className="solutions_block">
								<div className="icon">
									<img src="/images/f2.svg" alt="" />
								</div>
								<div className="text">
									<h4>Master Service Agreement (MSA)</h4>
									<p>Streamline future engagements with a predefined agreement outlining terms and services.</p>
								</div>
							</div>
						</div>
						<div className="column">
							<div className="solutions_block">
								<div className="icon">
									<img src="/images/f4.svg" alt="" />
								</div>
								<div className="text">
									<h4>Offshore</h4>
									<p>Access global talent for cost-effective, high-quality consulting solutions around the clock.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <section className="feature_consulting_sec">
        <div className="contain">
            <div className="devide_line_color"></div>
            <div className="sec_heading text-center">
                <h2>Features</h2>
            </div>
            <div className="flex">
                <div className="col">
                    <div className="inner">
                        <div className="icon_img">
                            <img src="/images/f1.svg" alt="" />
                        </div>
                        <div className="txt">
                            <h3>Feature 1</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                            <Link href="">Read More {">>"}</Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="inner">
                        <div className="icon_img">
                            <img src="/images/f2.svg" alt="" />
                        </div>
                        <div className="txt">
                            <h3>Feature 2</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                            <Link href="">Read More {">>"}</Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="inner">
                        <div className="icon_img">
                            <img src="/images/f3.svg" alt="" />
                        </div>
                        <div className="txt">
                            <h3>Feature 2</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                            <Link href="">Read More {">>"}</Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="inner">
                        <div className="icon_img">
                            <img src="/images/f4.svg" alt="" />
                        </div>
                        <div className="txt">
                            <h3>Feature 2</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                            <Link href="">Read More {">>"}</Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="inner">
                        <div className="icon_img">
                            <img src="/images/f5.svg" alt="" />
                        </div>
                        <div className="txt">
                            <h3>Feature 2</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                            <Link href="">Read More {">>"}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section> */}
			<section className="advantages_staffing_sec">
				<div className="contain">
					<div className="devide_line_color"></div>
					<div className="cntnt text-center">
						<div className="sec_heading">
							<h2>Unlocking Your Competitive Edge: Our Key Advantages</h2>
						</div>
						<p>We differentiate ourselves through a unique consulting model that offers unparalleled advantages to businesses and stakeholders. Our approach transcends traditional consulting services, revolutionizing business strategy and operations with the following innovations: </p>
					</div>
					<div className="list_advantage">
						<div className="inner_list">
							<div className="image_icon" style={{ backgroundImage: "url('/images/circle.svg')" }}>
								<img src="/images/stafing_advantage_04.png" alt="" className="mini_img" />
							</div>
							<div className="txt_cntnt">
								<h4>Expert Guidance:</h4>
								<p>Access to seasoned professionals with deep industry knowledge and expertise, providing tailored solutions that drive competitive advantage. </p>
							</div>
						</div>
						<div className="inner_list">
							<div className="image_icon" style={{ backgroundImage: "url('/images/circle.svg')" }}>
								<img src="/images/stafing_advantage_05.png" alt="" className="mini_img" />
							</div>
							<div className="txt_cntnt">
								<h4>Innovative Solutions:</h4>
								<p>Stay ahead of industry trends with innovative solutions that harness the latest technologies and strategic insights. </p>
							</div>
						</div>
						<div className="inner_list">
							<div className="image_icon" style={{ backgroundImage: "url('/images/circle.svg')" }}>
								<img src="/images/stafing_advantage_06.png" alt="" className="mini_img" />
							</div>
							<div className="txt_cntnt">
								<h4>Customization:</h4>
								<p>Provide solutions that are customized to meet your specific business needs and challenges, ensuring relevance and effectiveness</p>
							</div>
						</div>
						<div className="inner_list">
							<div className="image_icon" style={{ backgroundImage: "url('/images/circle.svg')" }}>
								<img src="/images/stafing_advantage_07.png" alt="" className="mini_img" />
							</div>
							<div className="txt_cntnt">
								<h4>Objective Perspective:</h4>
								<p>Gain an external, objective perspective on your business challenges and opportunities, leading to more informed decision-making. </p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="choose_staffing choose_staffing_page">
				<div className="contain">
					<div className="devide_line_color"></div>
					<div className="cntnt">
						<div className="sec_heading text-center">
							<h2>Why NirApad9 is Your Top Choice for Consulting Solutions? </h2>
						</div>
						{/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Urna nunc id cursus metus aliquam eleifend mi in. Eu facilisis sed odio morbi quis commodo odio aenean sed. Venenatis cras sed felis eget velit aliquet sagittis id consectetur. </p> */}
					</div>
					<div className="wrapper">
						<div className="flex">
							<div className="col">
								<div className="inner">
									<div className="image">
										<img src="/images/choose1.png" alt="" />
									</div>
									<div className="blk_txt">
										<h3>Tailored Expertise</h3>
										<div className="mini_devide_line"></div>
										<p>NirApad9 offers industry-specific expertise and custom solutions ensuring each is tailored to fit the specific requirements of every client. </p>
									</div>
								</div>
							</div>
							<div className="col">
								<div className="inner">
									<div className="image">
										<img src="/images/choose2.png" alt="" />
									</div>
									<div className="blk_txt">
										<h3>Expert Partnership</h3>
										<div className="mini_devide_line"></div>
										<p>Our vast network of industry-leading partners enhances our service delivery by providing access to specialized knowledge and cutting-edge solutions. </p>
									</div>
								</div>
							</div>
							<div className="col">
								<div className="inner">
									<div className="image">
										<img src="/images/choose3.png" alt="" />
									</div>
									<div className="blk_txt">
										<h3>Results-Oriented Innovation</h3>
										<div className="mini_devide_line"></div>
										<p>We focus on delivering measurable outcomes and maintaining competitiveness through innovative, effective strategies.</p>
									</div>
								</div>
							</div>
							<div className="col">
								<div className="inner">
									<div className="image">
										<img src="/images/choose3.png" alt="" />
									</div>
									<div className="blk_txt">
										<h3>Results-Oriented Innovation</h3>
										<div className="mini_devide_line"></div>
										<p>We focus on delivering measurable outcomes and maintaining competitiveness through innovative, effective strategies.</p>
									</div>
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
						<div className="sec_heading">
							<h2>Our Technologies</h2>
						</div>
						<p>We optimize business processes and ensure alignment with our clients' strategic objectives. Our Consulting services addresses challenges by providing comprehensive evaluation and implementation services, leveraging expertise in technologies such as below: </p>
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
						<Link href="/" className="site_btn">
							<span>See more technologies</span>
							<span className="arrow">
								<img src="/images/chevron_right.svg" alt="" />
							</span>
						</Link>
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
