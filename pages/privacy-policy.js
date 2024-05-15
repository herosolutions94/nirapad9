import Link from "next/link";
import React, { useState} from 'react';
import Faq from "../components/faq";

export default function PrivacyPolicy() {
    const data = {
        faq_list : [
            {
                id: "1",
                icon:"/images/Paper.svg",
                title: "Terms & Conditions",
                content: "<ul><li><a href=''>Overview</a></li><li><a href=''>Changes to Terms & Conditions</a></li><li><a href=''>Modification of Site Terms</a></li><li><a href=''>License & Site Access</a></li></ul>",
            },
            {
                id: "2",
                icon:"/images/Lock.svg",
                title: "Privacy Policy",
                content: "<ul><li><a href=''>Overview</a></li><li><a href=''>Information Policy</a></li><li><a href=''>Data Policy</a></li><li><a href=''>Cookies & Analytics</a></li></ul>",
            },
            {
                id: "3",
                icon:"/images/copyright.svg",
                title: "Copyright",
                content: "<ul><li><a href=''>Overview</a></li><li><a href=''>Information Policy</a></li><li><a href=''>Data Policy</a></li><li><a href=''>Cookies & Analytics</a></li></ul>",
            },
            {
                id: "4",
                icon:"/images/faq.svg",
                title: "FAQs",
                content: "<ul><li><a href=''>Overview</a></li><li><a href=''>Information Policy</a></li><li><a href=''>Data Policy</a></li><li><a href=''>Cookies & Analytics</a></li></ul>",
            },
            
            
        ]
    }
  return (
    <main>
      <section className="sub_banner privacy_banner">
        <div className="heading_banner">
            <h1>Privacy Policy</h1>
        </div>
      </section>
      <section className="txt_dt_pg">
        <div className="contain">
            <div className="flex">
                <div className="colL">
                <Faq data={data}/>
                </div>
                <div className="colR">
                    <p>Policy Effective Date 2024</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae semper quis lectus nulla at volutpat. Vestibulum sed arcu non odio euismod lacinia. Sit amet mauris commodo quis. Ipsum dolor sit amet consectetur adipiscing elit. Ultrices mi tempus imperdiet nulla malesuada pellentesque. Eu volutpat odio facilisis mauris sit. Eleifend quam adipiscing vitae proin sagittis. Nam at lectus urna duis convallis convallis. Maecenas volutpat blandit aliquam etiam.</p>
                    <hr/>
                    <h5>Table of Contents</h5>
                    <ul>
                        <li>
                            <Link href="">Overview</Link>
                        </li>
                        <li>
                            <Link href="">Information Policy</Link>
                        </li>
                        <li>
                            <Link href="">Data Policy</Link>
                        </li>
                        <li>
                            <Link href="">Cookies & Analytics</Link>
                        </li>
                    </ul>
                    <hr/>
                    <h5>Overview of Privacy Policy</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae semper quis lectus nulla at volutpat. Vestibulum sed arcu non odio euismod lacinia. Sit amet mauris commodo quis. Ipsum dolor sit amet consectetur adipiscing elit. Ultrices mi tempus imperdiet nulla malesuada pellentesque. Eu volutpat odio facilisis mauris sit. Eleifend quam adipiscing vitae proin sagittis. Nam at lectus urna duis convallis convallis. Maecenas volutpat blandit aliquam etiam.</p>
                    <p>Sed blandit libero volutpat sed cras ornare. Nunc consequat interdum varius sit amet mattis vulputate. Eu lobortis elementum nibh tellus molestie nunc non. Non pulvinar neque laoreet suspendisse interdum. Neque gravida in fermentum et sollicitudin ac orci phasellus egestas. Vestibulum mattis ullamcorper velit sed ullamcorper. Adipiscing enim eu turpis egestas pretium aenean pharetra magna. Habitant morbi tristique senectus et netus et malesuada. Porttitor rhoncus dolor purus non enim. Duis ultricies lacus sed turpis tincidunt id aliquet. Elit duis tristique sollicitudin nibh sit amet. Imperdiet massa tincidunt nunc pulvinar sapien. Phasellus faucibus scelerisque eleifend donec. Lorem ipsum dolor sit amet consectetur.</p>
                    <p>Consectetur adipiscing elit ut aliquam purus sit amet luctus. Nunc mattis enim ut tellus elementum sagittis vitae et. Condimentum id venenatis a condimentum vitae sapien pellentesque. Id consectetur purus ut faucibus pulvinar elementum integer. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Ultrices vitae auctor eu augue ut. Diam sollicitudin tempor id eu. Eget sit amet tellus cras adipiscing enim eu. Nisl vel pretium lectus quam id leo in vitae turpis. Sapien nec sagittis aliquam malesuada. Cras pulvinar mattis nunc sed. Auctor augue mauris augue neque gravida in fermentum et. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat. Tellus rutrum tellus pellentesque eu tincidunt. Elit at imperdiet dui accumsan sit amet nulla facilisi.</p>
                    <hr/>
                    <h5>Information Policy</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae semper quis lectus nulla at volutpat. Vestibulum sed arcu non odio euismod lacinia. Sit amet mauris commodo quis. Ipsum dolor sit amet consectetur adipiscing elit. Ultrices mi tempus imperdiet nulla malesuada pellentesque. Eu volutpat odio facilisis mauris sit. Eleifend quam adipiscing vitae proin sagittis. Nam at lectus urna duis convallis convallis. Maecenas volutpat blandit aliquam etiam.</p>
                    <p>Sed blandit libero volutpat sed cras ornare. Nunc consequat interdum varius sit amet mattis vulputate. Eu lobortis elementum nibh tellus molestie nunc non. Non pulvinar neque laoreet suspendisse interdum. Neque gravida in fermentum et sollicitudin ac orci phasellus egestas. Vestibulum mattis ullamcorper velit sed ullamcorper. Adipiscing enim eu turpis egestas pretium aenean pharetra magna. Habitant morbi tristique senectus et netus et malesuada. Porttitor rhoncus dolor purus non enim. Duis ultricies lacus sed turpis tincidunt id aliquet. Elit duis tristique sollicitudin nibh sit amet. Imperdiet massa tincidunt nunc pulvinar sapien. Phasellus faucibus scelerisque eleifend donec. Lorem ipsum dolor sit amet consectetur.</p>
                    <p>Consectetur adipiscing elit ut aliquam purus sit amet luctus. Nunc mattis enim ut tellus elementum sagittis vitae et. Condimentum id venenatis a condimentum vitae sapien pellentesque. Id consectetur purus ut faucibus pulvinar elementum integer. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Ultrices vitae auctor eu augue ut. Diam sollicitudin tempor id eu. Eget sit amet tellus cras adipiscing enim eu. Nisl vel pretium lectus quam id leo in vitae turpis. Sapien nec sagittis aliquam malesuada. Cras pulvinar mattis nunc sed. Auctor augue mauris augue neque gravida in fermentum et. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat. Tellus rutrum tellus pellentesque eu tincidunt. Elit at imperdiet dui accumsan sit amet nulla facilisi.</p>
                    <hr/>
                    <h5>Data  Policy</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae semper quis lectus nulla at volutpat. Vestibulum sed arcu non odio euismod lacinia. Sit amet mauris commodo quis. Ipsum dolor sit amet consectetur adipiscing elit. Ultrices mi tempus imperdiet nulla malesuada pellentesque. Eu volutpat odio facilisis mauris sit. Eleifend quam adipiscing vitae proin sagittis. Nam at lectus urna duis convallis convallis. Maecenas volutpat blandit aliquam etiam.</p>
                    <p>Sed blandit libero volutpat sed cras ornare. Nunc consequat interdum varius sit amet mattis vulputate. Eu lobortis elementum nibh tellus molestie nunc non. Non pulvinar neque laoreet suspendisse interdum. Neque gravida in fermentum et sollicitudin ac orci phasellus egestas. Vestibulum mattis ullamcorper velit sed ullamcorper. Adipiscing enim eu turpis egestas pretium aenean pharetra magna. Habitant morbi tristique senectus et netus et malesuada. Porttitor rhoncus dolor purus non enim. Duis ultricies lacus sed turpis tincidunt id aliquet. Elit duis tristique sollicitudin nibh sit amet. Imperdiet massa tincidunt nunc pulvinar sapien. Phasellus faucibus scelerisque eleifend donec. Lorem ipsum dolor sit amet consectetur.</p>
                    <hr/>
                    <h5>Cookies & Analytics</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae semper quis lectus nulla at volutpat. Vestibulum sed arcu non odio euismod lacinia. Sit amet mauris commodo quis. Ipsum dolor sit amet consectetur adipiscing elit. Ultrices mi tempus imperdiet nulla malesuada pellentesque. Eu volutpat odio facilisis mauris sit. Eleifend quam adipiscing vitae proin sagittis. Nam at lectus urna duis convallis convallis. Maecenas volutpat blandit aliquam etiam.</p>
                    <p>Sed blandit libero volutpat sed cras ornare. Nunc consequat interdum varius sit amet mattis vulputate. Eu lobortis elementum nibh tellus molestie nunc non. Non pulvinar neque laoreet suspendisse interdum. Neque gravida in fermentum et sollicitudin ac orci phasellus egestas. Vestibulum mattis ullamcorper velit sed ullamcorper. Adipiscing enim eu turpis egestas pretium aenean pharetra magna. Habitant morbi tristique senectus et netus et malesuada. Porttitor rhoncus dolor purus non enim. Duis ultricies lacus sed turpis tincidunt id aliquet. Elit duis tristique sollicitudin nibh sit amet. Imperdiet massa tincidunt nunc pulvinar sapien. Phasellus faucibus scelerisque eleifend donec. Lorem ipsum dolor sit amet consectetur.</p>
                    <p>Consectetur adipiscing elit ut aliquam purus sit amet luctus. Nunc mattis enim ut tellus elementum sagittis vitae et. Condimentum id venenatis a condimentum vitae sapien pellentesque. Id consectetur purus ut faucibus pulvinar elementum integer. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Ultrices vitae auctor eu augue ut. Diam sollicitudin tempor id eu. Eget sit amet tellus cras adipiscing enim eu. Nisl vel pretium lectus quam id leo in vitae turpis. Sapien nec sagittis aliquam malesuada. Cras pulvinar mattis nunc sed. Auctor augue mauris augue neque gravida in fermentum et. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat. Tellus rutrum tellus pellentesque eu tincidunt. Elit at imperdiet dui accumsan sit amet nulla facilisi.</p>
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
