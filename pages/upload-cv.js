import Link from "next/link"
import React, { useState } from "react"
import Dropdown from "../components/custom-drop"

export default function Contact() {
	const handleSelect = (option) => {
		console.log("Selected option:", option)
	}

	const options = [
		{ value: "Consulting Services", label: "Consulting Services" },
		{ value: "Staffing Services", label: "Staffing Services" },
	]
	return (
		<main>
			<section className="sub_banner for_talent_banner">
				<div className="heading_banner">
					<h1>For Talent</h1>
				</div>
			</section>
			<section className="contact_area for_talent_upload">
				<div className="contain">
					<div className="cntnt text-center">
						<div className="sec_heading">
							<h2>We’re excited to build this relationship with you.</h2>
						</div>
						<p>Share your information below and one of our recruiters will reach out to you shortly!</p>
					</div>
					<div className="form_blk">
						<form>
							<div className="row form_row">
								<div className="col-sm-6">
									<div className="txt_blk">
										<label>First Name*</label>
										<div className="input_outer">
											<input type="text" className="input" name="firstname" />
										</div>
									</div>
								</div>
								<div className="col-sm-6">
									<div className="txt_blk">
										<label>Last Name*</label>
										<div className="input_outer">
											<input type="text" className="input" name="lastname" />
										</div>
									</div>
								</div>
								<div className="col-sm-6">
									<div className="txt_blk">
										<label>Email Address*</label>
										<div className="input_outer">
											<input type="text" className="input" name="email" />
										</div>
									</div>
								</div>
								<div className="col-sm-6">
									<div className="txt_blk">
										<label>Phone Number*</label>
										<div className="input_outer">
											<input type="text" className="input" name="phone" />
										</div>
									</div>
								</div>
								<div className="col-sm-6">
									<div className="txt_blk">
										<label>Resume/CV*</label>
										<button type="button" className="upload_btn">
											Attach, Dropbox or enter manually
										</button>
										<p className="small">(File types: pdf, doc, docx, txt, rtf)</p>
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
								<button className="site_btn">
									<span>Submit</span>
									<span className="arrow">
										<img src="/images/chevron_right.svg" alt="" />
									</span>
								</button>
							</div>
						</form>
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
