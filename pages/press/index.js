import Link from "next/link";
import React, { useState} from 'react';


export default function Press() {

  return (
    <main>
      <section className="sub_banner blog_banner">
        <div className="heading_banner">
            <h1>Press</h1>
        </div>
      </section>
      <section className="blog_pg">
        <div className="contain">
            <div className="feature_press">
                <div className="sec_heading text-center">
                    <h2>Featured Press</h2>
                </div>
                <div className="feature_flex_press">
                    <div className="flex">
                        <div className="col">
                            <div className="_inner">
                                <Link href="" className="image">
                                    <img src="/images/post2.png" alt="" />
                                </Link>
                                <div className="txt">
                                    <h2><Link href="">Discover NirApad9's comprehensive service</Link></h2>
                                    <p>Discover NirApad9's comprehensive services, bridging staffing and consulting seamlessly. Our staffing solutions connect you with top-tier talent, whiler </p>
                                    <Link href="">Read More {">>"}</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="_inner">
                                <Link href="" className="image">
                                    <img src="/images/post2.png" alt="" />
                                </Link>
                                <div className="txt">
                                    <h2><Link href="">Discover NirApad9's comprehensive service</Link></h2>
                                    <p>Discover NirApad9's comprehensive services, bridging staffing and consulting seamlessly. Our staffing solutions connect you with top-tier talent, whiler </p>
                                    <Link href="">Read More {">>"}</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="other_blog">
                <div className="sec_heading text-center">
                    <h2>All Press</h2>
                </div>
                <div className="flex">
                    <div className="col">
                        <div className="_inner">
                            <Link href="" className="image">
                                <img src="/images/post2.png" alt="" />
                            </Link>
                            <div className="txt">
                                <h2><Link href="">Meet NirApad9</Link></h2>
                                <p>Discover NirApad9's comprehensive services, bridging staffing and consulting seamlessly. Our staffing solutions connect you with top-tier talent, whiler </p>
                                <Link href="">Read More {">>"}</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="_inner">
                            <Link href="" className="image">
                                <img src="/images/post2.png" alt="" />
                            </Link>
                            <div className="txt">
                                <h2><Link href="">Meet NirApad9</Link></h2>
                                <p>Discover NirApad9's comprehensive services, bridging staffing and consulting seamlessly. Our staffing solutions connect you with top-tier talent, whiler </p>
                                <Link href="">Read More {">>"}</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="_inner">
                            <Link href="" className="image">
                                <img src="/images/post2.png" alt="" />
                            </Link>
                            <div className="txt">
                                <h2><Link href="">Meet NirApad9</Link></h2>
                                <p>Discover NirApad9's comprehensive services, bridging staffing and consulting seamlessly. Our staffing solutions connect you with top-tier talent, whiler </p>
                                <Link href="">Read More {">>"}</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="_inner">
                            <Link href="" className="image">
                                <img src="/images/post2.png" alt="" />
                            </Link>
                            <div className="txt">
                                <h2><Link href="">Meet NirApad9</Link></h2>
                                <p>Discover NirApad9's comprehensive services, bridging staffing and consulting seamlessly. Our staffing solutions connect you with top-tier talent, whiler </p>
                                <Link href="">Read More {">>"}</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="_inner">
                            <Link href="" className="image">
                                <img src="/images/post2.png" alt="" />
                            </Link>
                            <div className="txt">
                                <h2><Link href="">Meet NirApad9</Link></h2>
                                <p>Discover NirApad9's comprehensive services, bridging staffing and consulting seamlessly. Our staffing solutions connect you with top-tier talent, whiler </p>
                                <Link href="">Read More {">>"}</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="_inner">
                            <Link href="" className="image">
                                <img src="/images/post2.png" alt="" />
                            </Link>
                            <div className="txt">
                                <h2><Link href="">Meet NirApad9</Link></h2>
                                <p>Discover NirApad9's comprehensive services, bridging staffing and consulting seamlessly. Our staffing solutions connect you with top-tier talent, whiler </p>
                                <Link href="">Read More {">>"}</Link>
                            </div>
                        </div>
                    </div>
                </div>
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
                <Link href="" className="site_btn">Talk to us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
