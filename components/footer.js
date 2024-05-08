import Link from "next/link"
import React from 'react'

export default function Footer() {
    return (
      <footer>
          <div className="contain">
            <div className="flex">
              <div className="col">
                <div className="logo_footer">
                  <Link href="">
                    <img src="/images/logo.svg" alt="" />
                  </Link>
                </div>
                <ul>
                  <li>
                    <em>Nirapad9 LLC</em>
                    <em>Corp office - Dallas, TX</em>
                    <em>12959 Jupiter Rd, Dallas, TX 75238</em>
                  </li>
                  <li>
                    <Link href="mailto:info@nirapad9.com">Email: info@nirapad9.com</Link>
                  </li>
                  <li>
                    <Link href="tel:909-308-4909">Phone: 909-308-4909</Link>
                  </li>
                </ul>
              </div>

              <div className="col">
                <h5>Services</h5>
                <ul className="f_lnk">
                  <li>
                    <Link href="">Staffing Services</Link>
                  </li>
                  <li>
                    <Link href="">Consulting Services</Link>
                  </li>
                  
                </ul>
              </div>

              <div className="col">
                <h5>Resources</h5>
                <ul className="f_lnk">
                  <li>
                    <Link href="">About Us</Link>
                  </li>
                  <li>
                    <Link href="">Blogs</Link>
                  </li>
                  <li>
                    <Link href="">Press </Link>
                  </li>
                  <li>
                    <Link href="">Announcements</Link>
                  </li>
                  <li>
                    <Link href="">Careers</Link>
                  </li>
                </ul>
              </div>

              <div className="col">
                <h5>Follow us on social</h5>
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
           
            <div className="copyright">
              <p>
                <span>Copy</span>
                <Link href="" >Terms</Link>
                <Link href="">Privacy</Link>
              </p>
            </div>
          </div>
        </footer>
    )
  }