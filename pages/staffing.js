import Link from "next/link";
import React, { useState} from 'react';


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
                    <div className="sec_heading">
                        <h2>Overview</h2>
                    </div>
                    <p>Time and Materials consulting services. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>
                <div className="colR">
                    <div className="image">
                        <img src="/images/staffing1.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
      </section>
	  <section id="staffing_solutions" style={{backgroundImage: "url('/images/staffing_solutions_img.jpg')"}}>
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
                <div className="sec_heading">
                    <h2>Unlocking Your Competitive Edge: Our Key Advantages</h2>
                </div>
                <p>We differentiate ourselves through a unique staffing model that offers unparalleled advantages to employers and job seekers. Our approach transcends traditional staffing services, revolutionizing the recruitment process with the following innovations: </p>
            </div>
            <div className="list_advantage">
                <div className="inner_list">
                    <div className="image_icon" style={{backgroundImage:"url('/images/circle.svg')"}}>
                      <img src="/images/stafing_advantage_01.png" alt="" className="mini_img" />
                    </div>
                    <div className="txt_cntnt">
                      <h4>Talent Partner Precision:</h4>
                      <p>Our network of talent partners boasts a diverse range of technical and industry-related skills. Each candidate is carefully matched with a talent partner who excels in the required skill set, ensuring efficient and precise assessments.</p>
                    </div>
                </div>
                <div className="inner_list">
                    <div className="image_icon" style={{backgroundImage:"url('/images/circle.svg')"}}>
                      <img src="/images/stafing_advantage_02.png" alt="" className="mini_img" />
                    </div>
                    <div className="txt_cntnt">
                      <h4>Cultural Fit Assessment:</h4>
                      <p>We recognize the importance of cultural fit alongside technical expertise. Our recruiters conduct thorough assessments to ensure candidates align with the company's culture and values. </p>
                    </div>
                </div>
                <div className="inner_list">
                    <div className="image_icon" style={{backgroundImage:"url('/images/circle.svg')"}}>
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
          <div className="cntnt">
              <div className="sec_heading text-center">
                  <h2>Staffing Process</h2>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Urna nunc id cursus metus aliquam eleifend mi in. Eu facilisis sed odio morbi quis commodo odio aenean sed. Venenatis cras sed felis eget velit aliquet sagittis id consectetur.</p>
          </div>
          <div className="flex">
            <div className="col">
              <div className="inner">
                <div className="blk_circle"></div>
                <div className="blk_txt">
                  <h3>IT Staffing</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="inner">
                <div className="blk_circle"></div>
                <div className="blk_txt">
                  <h3>IT Staffing</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="inner">
                <div className="blk_circle"></div>
                <div className="blk_txt">
                  <h3>IT Staffing</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="inner">
                <div className="blk_circle"></div>
                <div className="blk_txt">
                  <h3>IT Staffing</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg_shape">
          <img src="/images/bg-shape-3.png" alt="" />
        </div>
      </section>
      <section className="choose_staffing">
        <div className="contain">
          <div className="devide_line_color"></div>
          <div className="cntnt">
              <div className="sec_heading text-center">
                  <h2>Why Choose us for Staffing</h2>
              </div>
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
      <section className="technology_sec">
        <div className="contain">
          <div className="devide_line_color"></div>
          <div className="cntnt">
              <div className="sec_heading text-center">
                  <h2>Technolgies</h2>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Urna nunc id cursus metus aliquam eleifend mi in. Eu facilisis sed odio morbi quis commodo odio aenean sed. Venenatis cras sed felis eget velit aliquet sagittis id consectetur. </p>
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
            <Link href="/technology" className="site_btn blank">See more technologies </Link>
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
              <div className="btn_blk">
                <Link href="/contact" className="site_btn">Talk to us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
