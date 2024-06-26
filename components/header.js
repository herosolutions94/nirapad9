"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import React, { useState } from "react"
import { Dropdown } from "@nextui-org/react"
export default function Header({ data }) {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false)
	const [isDropOpen, setIsDropOpen] = useState(false)
	const [services, setServices] = useState(false)
	const [resources, setResources] = useState(false)
	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen)
	}
	const toggleDrop = () => {
		setIsDropOpen(!isDropOpen)
	}
	const ToggleServices = () => {
		setServices(!services)
	}
	const closeDropdown = () => {
		setIsDropdownOpen(false)
		setToggle(false)
	}
	const closeDrop = () => {
		setIsDropOpen(false)
		setToggle(false)
	}
	const [toggle, setToggle] = useState(false)
	const ToggleAction = () => {
		setToggle(!toggle)
	}
	return (
		<header>
			<div className="contain-fluid">
				<div className="logo">
					<Link href="/">
						<img src="/images/logo.svg" alt="" />
					</Link>
				</div>
				<div className={toggle ? "toggle active" : "toggle"} onClick={ToggleAction}>
					<span></span>
				</div>
				<nav id="nav" className={toggle ? "active" : ""}>
					<ul>
						<li className={`drop ${isDropdownOpen ? "open" : ""}`} onMouseEnter={toggleDropdown} onMouseLeave={closeDropdown} onClick={toggleDropdown}>
							<div className="drop_btn">Services</div>
							<div className={`sub sub_long ${services && active}`}>
								<div className="left">
									<h4 className="pb-4">FOR EMPLOYERS</h4>
									<ul className="flex">
										<li>
											<ul>
												<li>
													<Link href="/staffing" onClick={closeDropdown}>
														<h5>Staffing</h5>
													</Link>
												</li>
												<li>
													<Link href="/microsoft-staffing" onClick={closeDropdown}>
														Microsoft
													</Link>
												</li>
												<li>
													<Link href="/staffing" onClick={closeDropdown}>
														Workday
													</Link>
												</li>
												<li>
													<Link href="/staffing" onClick={closeDropdown}>
														SAP
													</Link>
												</li>
												<li>
													<Link href="/staffing" onClick={closeDropdown}>
														ZOHO
													</Link>
												</li>
												<li>
													<Link href="/technology" onClick={closeDropdown}>
														More&gt;&gt;
													</Link>
												</li>
											</ul>
										</li>
										<li>
											<ul>
												<li>
													<Link href="/consulting" onClick={closeDropdown}>
														<h5>Consulting</h5>
													</Link>
												</li>
												<li>
													<Link href="/micosoft-staffing" onClick={closeDropdown}>
														Microsoft
													</Link>
												</li>
												<li>
													<Link href="/consulting" onClick={closeDropdown}>
														Workday
													</Link>
												</li>
												<li>
													<Link href="/consulting" onClick={closeDropdown}>
														SAP
													</Link>
												</li>
												<li>
													<Link href="/consulting" onClick={closeDropdown}>
														ZOHO
													</Link>
												</li>
												<li>
													<Link href="/technology" onClick={closeDropdown}>
														More&gt;&gt;
													</Link>
												</li>
											</ul>
										</li>
									</ul>
								</div>
								<div className="line"></div>
								<div className="right">
									<h4 className="pb-4">FOR TALENT</h4>
									<ul className="flex">
										<li>
											<ul>
												<li>
													<Link href="/for-talent" onClick={closeDropdown}>
													Open Jobs
													</Link>
												</li>
												<li>
													<Link href="/" onClick={closeDropdown}>
													Partners
													</Link>
												</li>
												<li>
													<Link href="/upload-cv" onClick={closeDropdown}>
														Become a Talent
													</Link>
												</li>
											</ul>
										</li>
									</ul>
								</div>
							</div>
						</li>
						<li>
							<Link href="/about" onClick={ToggleAction}>
								About Us
							</Link>
						</li>
						<li className={`drop ${isDropOpen ? "open" : ""}`} onMouseEnter={toggleDrop} onMouseLeave={closeDrop} onClick={toggleDrop}>
							<div className="drop_btn">Resources</div>
							<ul className={resources ? "sub sm active" : "sub sm"}>
								<li>
									<Link href="/press" onClick={closeDrop}>
										Press
									</Link>
								</li>
								<li>
									<Link href="/blog" onClick={closeDrop}>
										Blogs
									</Link>
								</li>
								<li>
									<Link href="/announcements" onClick={closeDropdown}>
										Announcements
									</Link>
								</li>
							</ul>
						</li>
					</ul>
				</nav>
				<div className="cta_btn btn_blk">
					<Link href="/contact" className="site_btn blank">
						Contact Us
					</Link>
				</div>
				<div className="clearfix"></div>
			</div>
		</header>
	)
}
