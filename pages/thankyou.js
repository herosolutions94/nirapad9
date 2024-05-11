import Link from "next/link";
import React, { useState} from 'react';


export default function Thankyou() {

  return (
    <main className="thankyou_main">
      <section className="thankyou_pg">
        <div className="contain">
            <div className="cntnt">
                <div className="sec_heading">
                    <h1>Thank you!</h1>
                </div>
                <h2>Someone from our team will be in touch soon</h2>
                <p>In the meantime, follow us on social media</p>
                <ul className="social_logon">
                  <li>
                    <Link href="">
                      <img src="/images/facebook.svg" alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <img src="/images/twitter.svg" alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <img src="/images/instagram.svg" alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <img src="/images/linkedin.svg" alt="" />
                    </Link>
                  </li>
                </ul>
            </div>
        </div>
      </section>
    </main>
  );
}
