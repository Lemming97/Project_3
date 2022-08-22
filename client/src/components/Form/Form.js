import React from "react";

const Form = () => {
  return (
    <div className="bg-lightGrey border-[3px] border-dark px-10 py-16 text-center">
      <div>
        <h1 className="uppercase text-xl tracking-widest">
          Enter and Bare Your Soul
        </h1>
        <form className="my-6 flex flex-col md:flex-row items-center gap-4">
          <input
            type="text"
            placeholder="Email"
            className="bg-white border-[3px] border-green py-1 px-8 text-center text-dark focus:outline-none w-full md:w-auto"
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-white border-[3px] border-green py-1 px-8 text-center text-dark focus:outline-none w-full md:w-auto"
          />
          <button
            type="submit"
            className="uppercase bg-green text-lightGrey py-[7px] px-14 w-full md:w-auto"
          >
            Enter
          </button>
        </form>
      </div>
      <div className="pt-6">
        <h1 className="uppercase text-xl tracking-widest">
          Initiate and Set Your Intention
        </h1>
        <form className="mt-6 flex flex-col md:flex-row items-center gap-4">
          <input
            type="text"
            placeholder="Email"
            className="bg-white border-[3px] border-green py-1 px-8 text-center text-dark focus:outline-none w-full md:w-auto"
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-white border-[3px] border-green py-1 px-8 text-center text-dark focus:outline-none w-full md:w-auto"
          />
          <button
            type="submit"
            className="uppercase bg-green text-lightGrey py-[7px] px-14 w-full md:w-auto"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
