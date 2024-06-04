import Link from "next/link";
import React, { useEffect, useRef } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ProgressProvider from "../components/circle-progress";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import ReactStars from 'react-stars'
import Map from "./loader/map";
import CountUp from 'react-countup';
import Image from "next/image";


export default function MainPage() {
	// const element = <CountUp delay={500} end={350} duration={5} enableScrollSpy={true} scrollSpyDelay={500} />
	useEffect(() => {
		
		// let counter_h1 = document.getElementById("counter_h1").innerHTML = style.color;
		// console.log(counter_h1);
		console.log("element", <CountUp delay={500} end={350} duration={5} enableScrollSpy={true} scrollSpyDelay={500} />);
		// <h1 id="counter_h1">asdasd<CountUp delay={500} end={350} duration={5} enableScrollSpy={true} scrollSpyDelay={500} suffix="+" /></h1>
	}, [])
  const testi = {
    slidesToShow: 2,
    cssEase: 'linear',
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
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <main>
      <section className="banner">
        <div className="contain-fluid">
          <div className="flex">
            <div className="colL">
              <h3>Personalized Solutions Guided by Talent Experts</h3>
              <h1>Transform Staffing</h1>
              <h3>Build Your Dream Team with Skilled Professionals, In-Demand Job Openings, and Solutions that Drive Excellence.</h3>
              <div className="btn_blk">
                <Link href="/contact" className="site_btn">Talk to an Expert <Image src="/images/chevron_right_circle.svg" width={100} height={100} alt="" className="chevron_right" /></Link>
              </div>
            </div>
            <div className="colR">
              <Map />
            </div>
          </div>
        </div>
        <div className="shap_banner">
          <img src="/images/shape.svg" alt="" />
        </div>
      </section>
      <section className="after_banner">
        <div className="contain">
          <div className="center_text_blk">
              <div className="sec_heading">
                <h2>Meet NirApad9 – Your Customized Staffing Solution </h2>
              </div>
              <p>Welcome to NirApad9, your gateway to a streamlined talent acquisition journey. Our talent partners are masters at identifying precise skills and revolutionizing the talent discovery landscape. We value your time immensely, meticulously screening candidates to deliver only the finest choices for your company. </p>
			  <div className="pt-4"></div>
			  <p>Beyond mere recruitment, our specialty is crafting harmonious matches that benefit organizations and individuals, ensuring sustained prosperity and fulfillment. Let us handle the hiring complexities while you focus on building a dynamic team driving progress and innovation.</p>
              <div className="btn_blk text-center">
                <Link href="/about" className="site_btn">Get To Know Us </Link>
              </div>
          </div>
          <div className="devide_line_color"></div>
          <div className="center_text_blk">
              <div className="sec_heading">
                <h2>Comprehensive Services for Your Success</h2>
              </div>
              <p>Discover NirApad9's comprehensive services, bridging staffing and consulting seamlessly. Our staffing solutions connect you with top-tier talent, while our consulting services revolutionize talent management, offering strategic guidance and innovative solutions for workforce optimization and growth. Partner with us for expert support in finding candidates and enhancing talent strategies.</p>
          </div>
        </div>
      </section>
      <section className="services_sec">
        <div className="contain">
            <div className="flex">
              <div className="col d-flex">
                <div className="inner w-100 d-flex flex-column">
                  <div className="sec_heading">
                    <h2>Staffing Services</h2>
                  </div>
                  <p>Connect with top-tier skilled professionals tailored for your company's needs.</p>
				  <div className="mt-auto"></div>
                  <div className="btn_blk text-center">
                    <Link href="/staffing" className="site_btn">Read More <img src="/images/chevron_right_circle.svg" width={20} height={20} className="chevron_right" alt="" /></Link>
                  </div>
                </div>
              </div>
              <div className="col d-flex">
                <div className="inner w-100 d-flex flex-column">
                  <div className="sec_heading">
                    <h2>Consulting Services </h2>
                  </div>
                  <p>Revolutionize talent management with strategic guidance and innovative solutions.</p>
				  <div className="mt-auto"></div>
                  <div className="btn_blk text-center">
                    <Link href="/consulting" className="site_btn">Read More <img src="/images/chevron_right_circle.svg" width={20} height={20} className="chevron_right" alt="" /></Link>
                  </div>
                </div>
              </div>
              <div className="col d-flex">
                <div className="inner w-100 d-flex flex-column">
                  <div className="sec_heading">
                    <h2>Talent</h2>
                  </div>
                  <p>Connect with top-tier skilled professionals tailored for your company's needs.</p>
				  <div className="mt-auto"></div>
                  <div className="btn_blk text-center">
                    <Link href="/for-talent" className="site_btn">Read More <img src="/images/chevron_right_circle.svg" width={20} height={20} className="chevron_right" alt="" /></Link>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>
      <section className="icon_section">
        <div className="contain">
            <div className="flex">
              <div className="colL">
                <div className="sec_heading">
                  <h2>Addressing Staffing Challenges Across Various Industries </h2>
                </div>
                <p>Our tailored solutions and expertise span across various sectors, ensuring that we can meet the unique needs of each industry and drive success for our clients. </p>
              </div>
              <div className="colR">
                <div className="inner">
                  <div className="col_inner">
                    <div className="img_icon">
                      <img src="/images/icon1.svg" alt="" />
                    </div>
                    <h4>Healthcare</h4>
                  </div>
                  <div className="col_inner">
                    <div className="img_icon">
                      <img src="/images/icon2.svg" alt="" />
                    </div>
                    <h4>IT</h4>
                  </div>
                  <div className="col_inner">
                    <div className="img_icon">
                      <img src="/images/icon3.svg" alt="" />
                    </div>
                    <h4>Higher Education</h4>
                  </div>
                  <div className="col_inner">
                    <div className="img_icon">
                      <img src="/images/icon4.svg" alt="" />
                    </div>
                    <h4>Finance</h4>
                  </div>
                  <div className="col_inner">
                    <div className="img_icon">
                      <img src="/images/icon5.svg" alt="" />
                    </div>
                    <h4>Defense</h4>
                  </div>
                  <div className="col_inner">
                    <div className="img_icon">
                      <img src="/images/icon6.svg" alt="" />
                    </div>
                    <h4>Insurance</h4>
                  </div>
                  <div className="col_inner">
                    <div className="img_icon">
                      <img src="/images/icon7.svg" alt="" />
                    </div>
                    <h4>Telecom</h4>
                  </div>
                </div>
              </div>
            </div>
            
        </div>
      </section>
      
      <section className="success_rate_sec">
        <div className="contain">
        <div className="devide_line_color"></div>
          <div className="cntnt">
            <div className="sec_heading">
              <h2>Proven Success Rate</h2>
            </div>
            <p>Experience our proven success: delivering results, exceeding expectations, and driving your success. </p>
          </div>
          <div className="flex">
            <div className="col">
              <div className="progress_div">
              <ProgressProvider valueStart={10} valueEnd={100} color="#FFD9EB">
                {value => <CircularProgressbar value={value}/>}
              </ProgressProvider>
			  <CountUp id="ok" delay={500} end={350} duration={5} enableScrollSpy={true} scrollSpyDelay={500} suffix="+" />
              </div>
              <h3>Employee Placement</h3>
            </div>
            <div className="col">
              <div className="progress_div">
              <ProgressProvider valueStart={10} valueEnd={100} color="#FCE1BF">
                {value => <CircularProgressbar value={value}/>}
              </ProgressProvider>
			  <CountUp id="ok" delay={500} end={4} duration={5} enableScrollSpy={true} scrollSpyDelay={500} suffix=" Days" />
              </div>
              <h3>Average Time to Fill</h3>
            </div>
            <div className="col">
              <div className="progress_div">
              <ProgressProvider valueStart={10} valueEnd={100} color="#E5F5CE">
                {value => <CircularProgressbar value={value}/>}
              </ProgressProvider>
			  <CountUp id="ok" delay={500} end={108} duration={5} enableScrollSpy={true} scrollSpyDelay={500} suffix="+" />
              </div>
              <h3>No. Of Clients we worked with</h3>
            </div>
            <div className="col">
              <div className="progress_div">
              <ProgressProvider valueStart={10} valueEnd={99} color="#BBECFB">
                {value => <CircularProgressbar value={value}/>}
              </ProgressProvider>
			  <CountUp id="ok" delay={500} end={99} duration={5} enableScrollSpy={true} scrollSpyDelay={500} suffix="%" />
              </div>
              <h3>Client Satisfaction  & Retention  </h3>
            </div>
            <div className="col">
              <div className="progress_div">
              <ProgressProvider valueStart={10} valueEnd={98} color="#DDC4F9">
                {value => <CircularProgressbar value={value}/>}
              </ProgressProvider>
			  <CountUp id="ok" delay={500} end={98} duration={5} enableScrollSpy={true} scrollSpyDelay={500} suffix="%" />
              </div>
              <h3>Employee Satisfaction & Retention </h3>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonial_sec">
        <div className="contain">
          <div className="sec_heading">
            <h2>Hear What Our Clients Have to Say</h2>
          </div>
        </div>
        <div className="slider_testi">
          <Slider {...testi}>
            <div className="item">
              <div className="inner">
                <div className="inner_inner">
                  <p>Amazing service! helped us achieve our goals quickly and efficiently. </p>
                  <ReactStars
                            className="rates"
                            count={5}
                            value={5}
                            size={12}
                            color1={'#ddd'}
                            color2={'#F0C91A'}
                            edit={false}/>
                  <h4>Vp of HR, Acme Solutions</h4>
                  <p>Mark Cowel</p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="inner">
                <div className="inner_inner">
                  <p>Amazing service! helped us achieve our goals quickly and efficiently. </p>
                  <ReactStars
                            className="rates"
                            count={5}
                            value={5}
                            size={12}
                            color1={'#ddd'}
                            color2={'#F0C91A'}
                            edit={false}/>
                  <h4>Vp of HR, Acme Solutions</h4>
                  <p>Mark Cowel</p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="inner">
                <div className="inner_inner">
                  <p>Amazing service! helped us achieve our goals quickly and efficiently. </p>
                  <ReactStars
                            className="rates"
                            count={5}
                            value={5}
                            size={12}
                            color1={'#ddd'}
                            color2={'#F0C91A'}
                            edit={false}/>
                  <h4>Vp of HR, Acme Solutions</h4>
                  <p>Mark Cowel</p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="inner">
                <div className="inner_inner">
                  <p>Amazing service! helped us achieve our goals quickly and efficiently. </p>
                  <ReactStars
                            className="rates"
                            count={5}
                            value={5}
                            size={12}
                            color1={'#ddd'}
                            color2={'#F0C91A'}
                            edit={false}/>
                  <h4>Vp of HR, Acme Solutions</h4>
                  <p>Mark Cowel</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      <section className="spotlight_sec">
        <div className="contain">
          <div className="sec_heading">
            <h2>Customer Spotlight : Share Your Reviews With Us!</h2>
          </div>
          <div className="flex">
            <div className="col">
              <div className="inner">
                <Link href="">
                  <img src="/images/expand.svg" alt="" />
                </Link>
                <div className="image">
                  <img src="/images/glassdoor_testi.svg" alt="" />
                </div>
                <div className="mini_flex">
                  <div className="mini_logo">
                    <img src="/images/glassdoor_logo.svg" alt="" />
                  </div>
                  <span>Rating</span>
                </div>
                <div className="review_flex">
                  <span>5.0</span>
                  <ReactStars
                    className="rates"
                    count={5}
                    value={5}
                    size={20}
                    color1={'#ddd'}
                    color2={'#F0C91A'}
                    edit={false}/>
                    <span>1000 Reviews</span>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="inner">
                <Link href="">
                  <img src="/images/expand.svg" alt="" />
                </Link>
                <div className="image">
                  <img src="/images/google_testi.svg" alt="" />
                </div>
                <div className="mini_flex">
                  <div className="mini_logo">
                    <img src="/images/google_logo.svg" alt="" />
                  </div>
                  <span>Rating</span>
                </div>
                <div className="review_flex">
                  <span>5.0</span>
                  <ReactStars
                    className="rates"
                    count={5}
                    value={5}
                    size={20}
                    color1={'#ddd'}
                    color2={'#F0C91A'}
                    edit={false}/>
                    <span>1000 Reviews</span>
                </div>
              </div>
            </div>
          </div>
          <div className="btn_blk">
            <Link href="" className="site_btn">
              <img src="/images/edit_circle.svg" alt="" className="chevron_left" />
              <span>Write a Review</span>
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
                <Link href="/contact" className="site_btn">Talk to us <img src="/images/chevron_right_circle.svg" width={20} height={20} alt="" className="chevron_right" /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
