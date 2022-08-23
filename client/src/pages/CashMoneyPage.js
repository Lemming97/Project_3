import React, { useState } from "react";
import moneyImg from "../assets/images/CashMoney.png";
import wandImg from "../assets/images/magic wand.png";
import like from "../assets/images/like.png";
import dislike from "../assets/images/dislike.png";
import circle from "../assets/images/circle.png";
import cashmoney from "../utils/cashmoneyrando.js";

const CashMoneyPage = () => {
  const [showResponse, setShowResponse] = useState(false);
  return (
    <div className="px-4 sm:px-20">
      <div className="flex flex-col-reverse lg:flex-row text-center lg:text-left justify-between items-center gap-6">
        <div className="flex-1">
          <h1 className="text-5xl tracking-widest">CashMoney</h1>
          <p className="text-xl tracking-widest leading-loose mt-4">
            Secrets of the Universe? Well, no. But CashMoney will give you lotto
            numbers to play. Try your luck...
          </p>
        </div>
        <div className="flex justify-end items-center flex-1 lg:pr-10">
          <img src={moneyImg} alt="" className="w-80" />
        </div>
      </div>
      <div className="flex flex-col-reverse mt-10 lg:mt-0 lg:flex-row text-center lg:text-left gap-14">
        <div className="flex-1">
          <img src={wandImg} alt="" className="w-96" />
        </div>
        {!showResponse && (
          <div style={{ flex: 2 }} className="lg:mt-14 lg:ml-20">
            <h1 className="uppercase text-4xl tracking-widest">I am Ready</h1>
            <button
              className="uppercase bg-darkGrey text-lightGrey px-20 py-2 text-2xl mt-6"
              onClick={() => {
                setShowResponse(true);
              }}
            >
              Click
            </button>
          </div>
        )}
        {showResponse && (
          <div style={{ flex: 2 }} className="mt-16">
            <div className="bg-darkGrey text-white text-center py-10 px-10 relative">
              <p className="text-2xl tracking-wider leading-loose">
                {cashmoney()}
              </p>
              <button className="absolute right-6 bottom-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="#83a2ab"
                  className="bi bi-share-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z" />
                </svg>
              </button>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-6 mt-4">
              <div
                className="flex flex-col xs:flex-row items-center gap-3"
                style={{ flex: 2 }}
              >
                <p className="text-xl tracking-widest flex-1">
                  Are you satisfied with the Sphere's response?
                </p>
                <div className="flex items-center gap-2 flex-1">
                  <button>
                    <img src={like} alt="" className="w-64" />
                  </button>
                  <button>
                    <img src={dislike} alt="" className="w-64" />
                  </button>
                  <button className="flex justify-center items-center relative">
                    <img src={circle} alt="" className="w-64" />
                    <p className="absolute text-xl">5</p>
                  </button>
                </div>
              </div>
              <button
                className="flex-1 text-3xl tracking-widest"
                onClick={() => {
                  setShowResponse(false);
                }}
              >
                Try Again?
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CashMoneyPage;
