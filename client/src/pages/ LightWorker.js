import React from "react";

// import Auth from "../utils/auth";
// import { useQuery } from "@apollo/client";
// import { QUERY_THOUGHTS, QUERY_ME_BASIC } from "../utils/queries";

//default image will include the Ask me sphere icon and click event

function LightWorker() {
  return (
    <section id="about-me" className="my-5 intro">
      <div class="flex-row">
        <h1 id="about" className="section-title primary-border">
          Ask and you shall Recieve
        </h1>
      </div>
      <div className="flex-row">
        <div class="intro-info">
          <div class="intro-img">
            {/* <img src={profileImage} style={{ width: "100%" }} alt="profile" /> */}
          </div>
          <p>Insert the image</p>
        </div>
      </div>
    </section>
  );
}

export default LightWorker;
