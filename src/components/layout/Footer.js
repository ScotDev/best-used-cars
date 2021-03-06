import React from 'react'

export default function Footer() {
    const weekdayTimes = '09:00 - 18:00';
    const saturdayTimes = '09:00 - 17:00';
    const sundayTimes = '10:00 - 16:00';
    return (
        <div className="footer" id="footer">
            <ul>
                <li className="footer-title">Opening Hours</li>
                <li>
                    <p>Mon - Fri: {weekdayTimes}</p>
                </li>
                <li>
                    <p>Saturday: {saturdayTimes}</p>
                </li>
                <li>
                    <p>Sunday: {sundayTimes}</p>
                </li>
            </ul>
            <ul>
                <li className="footer-title">Contact Us</li>
                <li>
                    {/* Not real contact info, no need to be indexed be any search engines */}
                    <a href="tel: 07777777777" rel="nofollow"><i class="ri-phone-line"></i> 07777777777</a>
                </li>
                <li>
                    <a href="mailto:info@best-used-cars.com" rel="nofollow"><i class="ri-mail-send-line"></i> info@best-used-cars.com</a>
                </li>
                <li>
                    <a href="https://www.facebook.com/"><i class="ri-facebook-circle-line"></i> Facebook</a>
                </li>
                <li>
                    <a href="https://www.twitter.com/"><i class="ri-twitter-line"></i> Twitter</a>
                </li>
                <li>
                    <a href="https://goo.gl/maps/ccj44Kx6vKnJCMQ2A"><i class="ri-map-pin-line"></i> Find us</a>
                </li>
            </ul>
            <ul>
                <li className="footer-title">Best Used Cars</li>
                <li>
                    <a href="#new-arrivals">New arrivals</a>
                </li>
                <li>
                    <a href="#">Limited offers</a>
                </li>
                <li>
                    <a href="#sale">Sale</a>
                </li>
                <li>
                    <a href="#">Testimonials</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
            </ul>
        </div>

    )
}
