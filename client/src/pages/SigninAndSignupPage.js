import React from "react";
import Form from "../components/Form/Form";

const SigninAndSignupPage = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center px-4">
      <div className="mt-6 md:mt-0">
        <h1 className="uppercase text-3xl text-dark tracking-widest">
          Ask and you shall recieve
        </h1>
      </div>

      <div className="my-14">
        <Form />
      </div>
    </div>
  );
};

export default SigninAndSignupPage;
