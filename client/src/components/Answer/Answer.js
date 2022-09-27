import React from "react";
import { useState } from "react";
import { useQuery } from '@apollo/client';
import ShareModal from "../Modal/Modal.js";
import { BsFillShareFill } from "react-icons/bs";
import { GET_BY_CATEGORY } from '../../utils/queries.js';
import like from "../../assets/images/like.png";
import dislike from "../../assets/images/dislike.png";
import circle from "../../assets/images/circle.png";

// const lightArr = [];
// const MMArr = [];
// const sorcSphere = [];
const Answer = (props) => {
    const [showResponse, setShowResponse] = useState(false);
    const [showModal, setShowModal] = useState(false);
    // function 1:
    //     1. Draw out the "answer" key values from JSON object
    //     2. Push to array of strings
    const { data } = useQuery(GET_BY_CATEGORY);
    let ansArr = [];
    for (var key in data) {
        if (key === 'answer') {
            ansArr.push(key);
        }
    }
    /* function 2:   
        3. Roll up a random number with Math.random() * array.length, rounded 
        4. Use that index as single answer to return in Answer component
    */
    const getOneAnswer = () => {
        let randIndex = Math.round(Math.random() * ansArr.length - 1);
        let randAns = ansArr[randIndex];
        console.log(randAns);
        return randAns;
    }
    // put button to generate answer in this return rather than on page proper? 
    return (
        <>
        {/* Copied over from LightWorker. Modify to not be recursive :) */}
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
              </p>
              <button
                className="px-4 py-2 absolute right-6 bottom-6 share-button"
                type="button"
                onClick={() => {
                  setShowModal(true);
                //   run getOneAnswer()
                }}
              >
                <BsFillShareFill />
              </button>

              {showModal && <ShareModal setOpenModal={setShowModal} />}
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
                    <p className="absolute text-xl">2</p>
                  </button>
                </div>
              </div>
              <button
                className="flex-1 text-3xl tracking-widest"
                onClick={() => {
                  setShowResponse(false);
                }}
              >
                Ask Again?
              </button>
            </div>
          </div>
        )}
        </>
    )
}

export default Answer;