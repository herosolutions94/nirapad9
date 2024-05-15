import Link from "next/link";
import React, { useState} from 'react';


export default function Contact() {

  return (
    <main>
      <section className="sub_banner contact_banner">
        <div className="heading_banner">
            <h1>Contact Us</h1>
        </div>
      </section>
      <section className="contact_area">
        <div className="contain">
            <div className="cntnt">
                <div className="sec_heading">
                    <h2>Talk To us</h2>
                </div>
                <p>Fill Out the form Below and we’ll get in touch with you. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu lobortis elementum nibh tellus. EtDuis tristique sollicitudin nibh sit</p>
            </div>
            <div className="form_blk">
                <div className="devide_line_color"></div>
                <form>
                    <div className="row form_row">
                        <div className="col-sm-6">
                            <div className="txt_blk">
                                <label>Full Name*</label>
                                <div className="input_outer">
                                    <input type="text" className="input" name="fullname"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="txt_blk">
                                <label>Phone Number*</label>
                                <div className="input_outer">
                                <input type="text" className="input" name="phone"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="txt_blk">
                                <label>Email Address*</label>
                                <div className="input_outer">
                                <input type="text" className="input" name="email"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="txt_blk">
                                <label>Company Name</label>
                                <div className="input_outer">
                                <input type="text" className="input" name="company_name"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="txt_blk">
                                <label>Services</label>
                                <div className="input_outer">
                                <select className="input">
                                    <option>Consulting Services</option>
                                    <option>Staffing Services</option>
                                </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="txt_blk">
                                <label>Message*</label>
                                <div className="input_outer">
                                <textarea className="input" name=""></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="lbl_btn">
                                <input type="checkbox" name="agree" id="agree" />
                                <label htmlFor="agree">Please check here if you do not want to receive informational emails from us.</label>
                            </div>
                        </div>
                    </div>
                    <div className="br"></div>
                    <div className="btn_blk text-center">
                        <button className="site_btn">Submit</button>
                    </div>
                </form>
            </div>
        </div>
      </section>
    </main>
  );
}
