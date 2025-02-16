import "./footer.css";
import facebook_icon from "../../assets/facebook_icon.svg";
import pinterest_icon from "../../assets/pinterest_icon.svg";
import twitter_icon from "../../assets/twitter_icon.svg";
import youTube_icon from "../../assets/youTube_icon.svg";

export const Footer = () => {
  return (
    <footer className="w-full bg-[var(--dark-gray-bg)] text-gray-500 flex flex-col">
      <section className="container mx-auto w-full flex flex-col md:flex-row py-8">
        <div className="w-full md:w-1/2 flex flex-col md:flex-row footer-menu">
          <div className="w-full md:w-1/3 p-4">
            <ul>
              <li>
                <a href="#">FIND A STORE</a>
              </li>
              <li>
                <a href="#">BECOME A MEMBER</a>
              </li>
              <li>
                <a href="#">SIGN UP FOR EMAIL</a>
              </li>
              <li>
                <a href="#">Send Us Feedback</a>
              </li>
              <li>
                <a href="#">STUDENT DISCOUNTS</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <ul>
              <li>
                <a href="#">GET HELP</a>
              </li>
              <li>
                <a href="#">Order Status</a>
              </li>
              <li>
                <a href="#">Delivery</a>
              </li>
              <li>
                <a href="#">Returns</a>
              </li>
              <li>
                <a href="#">Payment Options</a>
              </li>
              <li>
                <a href="#">Contact Us On Nike.com Inquiries</a>
              </li>
              <li>
                <a href="#">Contact Us On All Other Inquiries</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <ul>
              <li>
                <a href="#">ABOUT NIKE</a>
              </li>
              <li>
                <a href="#">News</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Investors</a>
              </li>
              <li>
                <a href="#">Sustainability</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-end items-start p-4">
          <div className="flex space-x-4">
            <a href="#">
              <img src={twitter_icon} alt="Twitter Icon" className="h-10" />
            </a>
            <a href="#">
              <img src={facebook_icon} alt="Facebook Icon" className="h-10" />
            </a>
            <a href="#">
              <img src={youTube_icon} alt="You Tube Icon" className="h-10" />
            </a>
            <a href="#">
              <img src={pinterest_icon} alt="Pinterest Icon" className="h-10" />
            </a>
          </div>
        </div>
      </section>
      <section className="bg-[var(--dark-gray-bg)] w-full py-4 copy">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p>
            &copy; {new Date().getFullYear()} Nike Inc. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#">Guides</a>
            <a href="#">Terms of Sale</a>
            <a href="#">Terms of Use</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </section>
    </footer>
  );
};
