import React, { useEffect, useRef, useState } from "react"
import style from "/styles/loader.module.scss"
import Map from "./map"
import MainPage from "../main"
import About from "../about"

export default function SiteLoader() {
	const height = useRef()
	const wrap_height = useRef()
	useEffect(() => {
		let loader_h = height.current?.offsetHeight / 10
		wrap_height.current.style.height = loader_h + "rem"
		setTimeout(function () {
			document.querySelector(".site_loader div:nth-child(1)").id = style.move_line
		}, 1000)
		const inter_01 = setInterval(function () {
			document.querySelector(".site_loader").className = style.active + " " + "site_loader"
			document.querySelector(".site_loader div:nth-child(1)").className = style.line + " " + style.move + " " + style.zoom
		}, 2000)
		setTimeout(function () {
			document.querySelector("#__next").className = style.__next_zoom
		}, 3000)
		return () => {
			clearInterval(inter_01)
		}
	}, [])
	return (
		<>
			<div id={style.main_map}>
				<div id={style.site_loader} ref={height} className="site_loader">
					<div className={style.line}>
						<div className={style.circle}></div>
					</div>
					<div className={style.wrapper} ref={wrap_height}>
						<div className={style.site_logo}>
							<img src="/images/logo.svg" alt="" />
						</div>
					</div>
				</div>
				{/* <Map /> */}
				<MainPage />
			</div>
		</>
	)
}
