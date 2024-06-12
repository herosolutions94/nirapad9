import React from "react"
import Link from "next/link"
import Slider from "react-slick"
import ReactStars from "react-stars"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import TalkToUs from "../components/talk-to-us"
import Heading from "../components/heading"

export default function ForTalent() {
	// const testi = {
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	speed: 1500,
	// 	infinite: true,
	// 	autoplay: true,
	// 	autoplaySpeed: 10000,
	// 	arrows: false,
	// 	dots: true,
	// }

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
			{
				breakpoint: 580,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	}
	return (
		<main>
			<section className="sub_banner for_talent_banner">
				<div className="heading_banner">
					<h1>For Talent</h1>
				</div>
			</section>
			<section className="for_talent_overview">
				<div className="contain">
					<div className="row justify-content-center">
						<div className="col-lg-10">
							<p>At NirApad9, we aim to remain at the forefront of innovative staffing solutions, committed to delivering value through a deep understanding of the industry's needs. Established in 2020 during significant changes in the global workforce, NirApad9 was founded by our CEO, Naveen Kolla, based on his personal experiences as a candidate and hiring manager. He identified key issues in the staffing industry, such as a lack of reasonable skill assessment by recruiters and inconsistencies between candidate's claimed and actual abilities, which motivated us to take a unique approach to staff beyond traditional methods. </p>
							<p>Our goal is to revolutionize recruitment by prioritizing rigorous vetting processes and embracing technological advancements, ensuring that candidates possess the necessary skills and excel in navigating cutting-edge technological environments.</p>
							<p>We provide cutting-edge staffing solutions tailored to meet our clients' unique needs. Our team of experts possesses a deep understanding of the industry and is committed to delivering value through innovative and effective strategies. We pride ourselves on staying up-to-date with the latest trends and technologies to ensure our clients receive the most relevant and comprehensive solutions</p>
						</div>
					</div>
					<div className="devide_line_color"></div>
				</div>
			</section>
			<section className="for_talent_advantage">
				<div className="contain">
					<div className="row justify-content-center">
						<div className="col-lg-10">
							<div className="text-center">
								<Heading text="Advantages" />
							</div>
							<p>We provide cutting-edge staffing solutions tailored to meet our clients' unique needs. Our team of experts possesses a deep understanding of the industry and is committed to delivering value through innovative and effective strategies. We pride ourselves on staying up-to-date with the latest trends and technologies to ensure our clients receive the most relevant and comprehensive solutions</p>
						</div>
						<div className="row justify-content-center mt-5">
							<div className="col-lg-7">
								<div className="in_block">
									<div className="angle">
										<img src="/images/long_lines.svg" alt="" />
									</div>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
								</div>
								<div className="in_block">
									<div className="angle">
										<img src="/images/long_lines.svg" alt="" />
									</div>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
								</div>
								<div className="in_block">
									<div className="angle">
										<img src="/images/long_lines.svg" alt="" />
									</div>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="for_talent_experience">
				<div className="contain">
					<div className="wrapper">
						<div className="image">
							<img src="/images/Technology-and-Experience-at-Your-Side.png" alt="" />
						</div>
						<div className="content">
							<Heading text="Technology and Experience at Your Side" />
							<div className="text">
								<h4>Upload Your Resume</h4>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing </p>
								<Link href="/upload-cv" className="link">
									Upload Resume &gt;&gt;
								</Link>
							</div>
							<div className="text">
								<h4>Search For Jobs</h4>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing </p>
								<button type="button" className="link">
									Search Jobs &gt;&gt;
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <section className="testimonial_sec for_talent_testimonial">
				<div className="contain">
					<Heading text="Hear What Our Clients Have to Say" />
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
				</div>
			</section> */}
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
			<section className="for_talent_article">
				<div className="contain">
					<div className="row justify-content-center">
						<div className="col-lg-11">
							<div className="text-center">
								<Heading text="Articles & Resources" />
							</div>
							<div className="wrapper">
								<div className="column">
									<div className="inner">
										<h4>Lorem ipsum dolor</h4>
										<p>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur </p>
									</div>
									<div className="inner">
										<h4>Lorem ipsum dolor</h4>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing Lorem iconsectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing </p>
									</div>
								</div>
								<div className="column">
									<div className="inner active">
										<h4>Lorem ipsum dolor</h4>
										<p>Lorem ipsum dolor sit amet, consectetur Lorem ipsum consecteturLorem ipsum dolor consecteturLorem ipsum dolor consecteturLorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur consectetur consectetur </p>
									</div>
									<div className="inner active">
										<h4>Lorem ipsum dolor</h4>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscingamet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing </p>
									</div>
								</div>
								<div className="column">
									<div className="inner">
										<h4>Lorem ipsum dolor</h4>
										<p>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur </p>
									</div>
									<div className="inner">
										<h4>Lorem ipsum dolor</h4>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consecteturconsectetur </p>
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
