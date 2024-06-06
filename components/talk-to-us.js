import React from "react"
import Link from "next/link"

export default function TalkToUs() {
	return (
		<>
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
		</>
	)
}
