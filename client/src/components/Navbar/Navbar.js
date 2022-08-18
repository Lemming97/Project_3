import React, { useState } from "react";
import logo from "../../assets/images/Sphere favicon .png";
import StripeCheckout from "react-stripe-checkout";
import { useSnackbar } from "notistack";

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const mobileNavHandler = () => {
    setShowMobileNav((prevValue) => !prevValue);
  };

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const paymentSubmit = () => {
    enqueueSnackbar("The Sphere thanks you!");
  };

  return (
    <div className="flex justify-between items-center py-3 ">
      <div>
        <img src={logo} alt="" className="w-24" />
      </div>
      {showMobileNav && (
        <div
          className="fixed top-0 left-0 bg-black w-full h-full opacity-40 z-30 overflow-hidden"
          onClick={mobileNavHandler}
        ></div>
      )}
      {showMobileNav && (
        <div className="bg-darkGrey text-white w-[200px] fixed top-0 right-0 h-screen z-50 flex flex-col gap-10 py-10 px-8 overflow-hidden ">
          <button
            className="flex justify-end text-3xl lg:hidden text-white"
            onClick={mobileNavHandler}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fillRule="#ffffff"
              className="bi bi-x"
              viewBox="0 0 16 16"
              style={{ fill: "#ffffff" }}
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </button>
          <a href="/" className="tracking-wider">
            Sorcerer's Sphere
          </a>
          <a href="/" className="tracking-wider">
            Magic Mark
          </a>
          <a href="/" className="tracking-wider">
            Light Worker
          </a>
          <a href="/" className="tracking-wider">
            CashMoney
          </a>
          <a href="/" className="text-red tracking-wider">
            Login/Signup
          </a>
        </div>
      )}
      <button className="block lg:hidden" onClick={mobileNavHandler}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="#100f0d"
          className="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </button>
      <div className="hidden lg:flex items-center gap-6 text-lg xl:tracking-widest text-dark">
        <a href="/">Sorcerer's Sphere</a>
        <div className="h-6 w-[1px] bg-dark"></div>
        <a href="/">Magic Mark</a>
        <div className="h-6 w-[1px] bg-dark"></div>
        <a href="/">Light Worker</a>
        <div className="h-6 w-[1px] bg-dark"></div>
        <a href="/">CashMoney</a>
        <div className="h-6 w-[1px] bg-dark"></div>
        <StripeCheckout
          // When testing strip use 42 repeated as the cardnumber 1234 as the date and any three numbers for the CVC code
          stripeKey="pk_test_51LXcTCI4xTgSuEekRHNVfZ7PdNqf4Zfz2DzqHonYQzLoCQFcjp4gdai2bi27kGivKzzvyUQujpmdORmHTB0ZZLKO00iHSL8Vf0"
          name="Give the Sphere your money"
          panelLabel="Quick click me!"
          amount={100}
          token={paymentSubmit}
        >
          <div>Donate 1$</div>
        </StripeCheckout>
        <div className="h-6 w-[1px] bg-dark"></div>
        <a className="text-red">Login/Signup</a>
      </div>
    </div>
  );
};

export default Navbar;
