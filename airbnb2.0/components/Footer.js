import React from "react";

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Airbnb Works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Acessebility</p>
        <p>This is not a real site</p>
        <p>But a Pretty Awesome Clone</p>
        <p>Referrals Accepted</p>
        <p>XOXO</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">HOST</h5>
        <p>Purav Kapoor</p>
        <p>Web Dev</p>
        <p>At Your</p>
        <p>Service</p>
        <p>24 x 7</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help Centre</p>
        <p>Trust & Safety</p>
        <p>My LinkedIn</p>
        <p>linkedin.com/in/purav-kapoor/</p>
        <p>Hope to see you in my Connections!!</p>
      </div>
    </div>
  );
}

export default Footer;
