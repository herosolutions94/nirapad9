import Link from "next/link";
import React, { useState} from 'react';


export default function Technology() {

  return (
    <main>
      <section className="sub_banner technology_banner">
        <div className="heading_banner">
            <h1>Technologies</h1>
        </div>
      </section>
      <section className="technology_sec">
        <div className="contain">
          <div className="search_field_form">
              <input type="text" name="" className="input" placeholder="Search" />
              <button><img src="/images/search.svg" alt="" /></button>
          </div>
          <div className="tech_pg_flex">
            <div className="flex">
                <div className="col">
                <Link href="" className="inner">
                    <div className="image">
                    <img src="/images/logo1.png" alt="" />
                    </div>
                    <div className="blk_txt">
                    <h3>Microsoft</h3>
                    </div>
                </Link>
                </div>
                <div className="col">
                <Link href="" className="inner">
                    <div className="image">
                    <img src="/images/logo2.png" alt="" />
                    </div>
                    <div className="blk_txt">
                    <h3>Workday</h3>
                    </div>
                </Link>
                </div>
                <div className="col">
                <Link href="" className="inner">
                    <div className="image">
                    <img src="/images/logo4.png" alt="" />
                    </div>
                    <div className="blk_txt">
                    <h3>SAP</h3>
                    </div>
                </Link>
                </div>
                <div className="col">
                <Link href="" className="inner">
                    <div className="image">
                    <img src="/images/logo3.png" alt="" />
                    </div>
                    <div className="blk_txt">
                    <h3>Zoho</h3>
                    </div>
                </Link>
                </div>
            </div>
            <div className="cntnt">
                <p>Time and Materials consulting services. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
            <div className="btn_blk text-center">
                <Link href="" className="site_btn">Talk to us</Link>
            </div>
          </div>
          <div className="more_tech_company">
            <div className="flex">
                <div className="col">
                    <Link href="" className="inner">
                        <div className="image">
                        <img src="/images/logo5.png" alt="" />
                        </div>
                        <div className="blk_txt">
                        <h3>Oracle</h3>
                        </div>
                    </Link>
                </div>
                <div className="col">
                    <Link href="" className="inner">
                        <div className="image">
                        <img src="/images/logo6.png" alt="" />
                        </div>
                        <div className="blk_txt">
                        <h3>UI/UX</h3>
                        </div>
                    </Link>
                </div>
                <div className="col">
                    <Link href="" className="inner">
                        <div className="image">
                        <img src="/images/logo8.png" alt="" />
                        </div>
                        <div className="blk_txt">
                        <h3>FullStack Dev</h3>
                        </div>
                    </Link>
                </div>
                <div className="col">
                    <Link href="" className="inner">
                        <div className="image">
                        <img src="/images/logo9.png" alt="" />
                        </div>
                        <div className="blk_txt">
                        <h3>Tech</h3>
                        </div>
                    </Link>
                </div>
                <div className="col">
                    <Link href="" className="inner">
                        <div className="image">
                        <img src="/images/logo5.png" alt="" />
                        </div>
                        <div className="blk_txt">
                        <h3>Oracle</h3>
                        </div>
                    </Link>
                </div>
                <div className="col">
                    <Link href="" className="inner">
                        <div className="image">
                        <img src="/images/logo6.png" alt="" />
                        </div>
                        <div className="blk_txt">
                        <h3>UI/UX</h3>
                        </div>
                    </Link>
                </div>
                <div className="col">
                    <Link href="" className="inner">
                        <div className="image">
                        <img src="/images/logo8.png" alt="" />
                        </div>
                        <div className="blk_txt">
                        <h3>FullStack Dev</h3>
                        </div>
                    </Link>
                </div>
                <div className="col">
                    <Link href="" className="inner">
                        <div className="image">
                        <img src="/images/logo9.png" alt="" />
                        </div>
                        <div className="blk_txt">
                        <h3>Tech</h3>
                        </div>
                    </Link>
                </div>
                <div className="col">
                    <Link href="" className="inner">
                        <div className="image">
                        <img src="/images/logo5.png" alt="" />
                        </div>
                        <div className="blk_txt">
                        <h3>Oracle</h3>
                        </div>
                    </Link>
                </div>
                <div className="col">
                    <Link href="" className="inner">
                        <div className="image">
                        <img src="/images/logo6.png" alt="" />
                        </div>
                        <div className="blk_txt">
                        <h3>UI/UX</h3>
                        </div>
                    </Link>
                </div>
                <div className="col">
                    <Link href="" className="inner">
                        <div className="image">
                        <img src="/images/logo8.png" alt="" />
                        </div>
                        <div className="blk_txt">
                        <h3>FullStack Dev</h3>
                        </div>
                    </Link>
                </div>
                <div className="col">
                    <Link href="" className="inner">
                        <div className="image">
                        <img src="/images/logo9.png" alt="" />
                        </div>
                        <div className="blk_txt">
                        <h3>Tech</h3>
                        </div>
                    </Link>
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
