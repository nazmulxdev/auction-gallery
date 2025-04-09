import React from "react";
import footerImage from "../../assets/AuctionGallery.png";
const FooterSection = () => {
  return (
    <div>
      <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10 py-32">
        <nav>
          <img src={footerImage} />
        </nav>
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">Bid.</a>
          <a className="link link-hover">Win.</a>
          <a className="link link-hover">Own.</a>
        </nav>
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Auction</a>
          <a className="link link-hover">Categories</a>
          <a className="link link-hover">How to works</a>
        </nav>
        <aside>
          <p>© {new Date().getFullYear()} AuctionHub. All rights reserved.</p>
        </aside>
      </footer>
    </div>
  );
};

export default FooterSection;
