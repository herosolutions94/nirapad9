import Link from "next/link"
import React, { useState } from "react"
import Dropdown from "../components/custom-drop"
import Heading from "../components/heading"

export default function Contact() {
	const handleSelect = (option) => {
		console.log("Selected option:", option)
	}

	const options = [
		{ value: "Consulting Services", label: "Consulting Services" },
		{ value: "Staffing Services", label: "Staffing Services" },
		{ value: "Consultants", label: "Consultants" },
	]
	return (
		<main>
			<section className="sub_banner contact_banner">
				<div className="heading_banner">
					<h1>Contact Us</h1>
				</div>
			</section>
			<section className="contact_area">
				<div className="contain">
					<div className="cntnt text-center">
						<Heading text="Talk To us" />
						<p>We are eager to hear from you, whether you’re seeking innovative staffing solutions, exploring potential career opportunities, or need customized quality consulting to enhance your growth. Our team is here to assist.</p>
						<p>Please fill out the form below, and one of our team members will reach out, to discuss how we can collaborate to achieve your goals. Your journey towards revolutionizing recruitment with industry-led technological standards starts here. Let’s create impactful connections together! </p>
					</div>
					<div className="form_blk">
						<div className="devide_line_color"></div>
						<form>
							<div className="row form_row">
								<div className="col-sm-6">
									<div className="txt_blk">
										<label>Full Name*</label>
										<div className="input_outer">
											<input type="text" className="input" name="fullname" />
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
										<label>Email Address*</label>
										<div className="input_outer">
											<input type="text" className="input" name="email" />
										</div>
									</div>
								</div>
								<div className="col-sm-6">
									<div className="txt_blk">
										<label>Company Name</label>
										<div className="input_outer">
											<input type="text" className="input" name="company_name" />
										</div>
									</div>
								</div>
								<div className="col-sm-6">
									<div className="txt_blk">
										<label>Services</label>
										<div className="input_outer">
											{/* <select className="input">
												<option>Consulting Services</option>
												<option>Staffing Services</option>
											</select> */}
											<Dropdown options={options} onSelect={handleSelect} defaultLabel="" />
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
								<button className="site_btn submit_btn">
									<span>Submit</span>
									<span className="check">
										<img src="/images/check.svg" alt="" />
									</span>
								</button>
							</div>
						</form>
					</div>
				</div>
			</section>
		</main>
	)
}
