import Link from "next/link";
import React, { useState} from 'react';


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
                <div className="sec_heading">
                    <h2>Overview</h2>
                </div>
                <p>Time and Materials consulting services. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
            <div className="devide_line_color"></div>
        </div>
      </section>
      <section className="consulting_pg_sec">
        <div className="contain">
          <div className="flex">
            <div className="colL">
              <div className="sec_heading">
                <h2>Consulting </h2>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. </p>
              <div className="btn_blk">
                <Link href="" className="site_btn">Learn More</Link>
              </div>
            </div>
            <div className="colR">
              <div className="image">
                <img src="/images/staffing-banner.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="feature_consulting_sec">
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
      </section>
      <section className="advantages_staffing_sec">
        <div className="contain">
            <div className="devide_line_color"></div>
            <div className="cntnt">
                <div className="sec_heading text-center">
                    <h2>Advantages</h2>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Urna nunc id cursus metus aliquam eleifend mi in. Eu facilisis sed odio morbi quis commodo odio aenean sed. Venenatis cras sed felis eget velit aliquet sagittis id consectetur. </p>
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
            <Link href="" className="site_btn blank">See more technologies </Link>
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
