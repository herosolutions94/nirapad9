import Link from "next/link";
import React, { useEffect, useRef } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import ReactStars from 'react-stars'


export default function About() {
  const testi = {
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <main>
      <section className="sub_banner">
        <div className="heading_banner">
            <h1>About Us</h1>
            {/* <div className="abt_img">
              <img src="/images/sub_shape.svg" alt="" />
            </div> */}
        </div>
      </section>
      <section className="grid_abt">
        <div className="contain">
          <div className="flex">
            <div className="colL">
              <p>At NirApad9, we aim to remain at the forefront of innovative staffing solutions, committed to delivering value through a deep understanding of the industry's needs.  Established in 2020 during significant changes in the global workforce, NirApad9 was founded by our CEO, Naveen Kolla, based on his personal experiences as a candidate and as a hiring manager. He identified key issues in the staffing industry, such as a lack of reasonable skill assessment by recruiters and inconsistencies between candidates claimed and actual abilities, which motivated us to take a unique approach to staffing beyond traditional methods. Our goal is to revolutionize recruitment by prioritizing rigorous vetting processes and embracing technological advancements, ensuring that candidates possess the necessary skills and excel in navigating cutting-edge technological environments. </p>
              <p>We provide cutting-edge staffing solutions tailored to meet our clients' unique needs. Our team of experts possesses a deep understanding of the industry and is committed to delivering value through innovative and effective strategies. We pride ourselves on staying up-to-date with the latest trends and technologies to ensure our clients receive the most relevant and comprehensive solutions. </p>
            </div>
            <div className="colR">
              <div className="image">
                <img src="/images/abt1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mission_sec">
        <div className="contain">
          <div className="flex">
            <div className="colL">
              <div className="image">
                <img src="/images/abt2.png" alt="" />
              </div>
            </div>
            <div className="colR">
              <div className="sec_heading">
                <h2>Our Mission</h2>
              </div>
              <p>We foster collective and organic growth through a dynamic approach to staffing and technology. Our ethos is grounded in the belief that our employees’ and the company’s progress are interlinked. Together, we're committed to rising by achieving excellence in a changing landscape. </p>
            </div>
          </div>
        </div>
      </section>
      <section className="vision_sec">
        <div className="contain">
          <div className="flex">
            <div className="colL">
              <div className="sec_heading">
                <h2>Our Vision</h2>
              </div>
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
              <img src="/images/pencil.svg" alt="" />
              <span>Write a Review</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="cta_sec">
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
              <div className="btn_blk">
                <Link href="" className="site_btn">Talk to us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
