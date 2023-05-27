import React from "react";

export default function Self() {
  return (
    <div className="flex pb-6">
      <div className="w-1/2 text-zinc-400 p-6 borderRight flex flex-col">
       
          <h2 className="font-semibold mb-1 text-lg">
            Hello! I'm Shivani Shukla
          </h2>
          <p className=" text-base leading-6 ">
            a passionate and detail-oriented Front-End Developer specializing in
            React and user-centric design. As a fresh graduate with a strong
            foundation in HTML, CSS, and JavaScript, I am constantly expanding
            my skills and exploring the latest web development trends. I thrive
            in collaborative environments and love working on projects that
            merge creativity and technology to deliver exceptional user
            experiences.
          </p>
        
      </div>
      <div className=" w-1/2  p-6 ">
        <ul>
          <li className="aboutRightLi">
        
            <span className="aboutRightLiSpan">Age</span> 23
          </li>
          <li className="aboutRightLi">
        
            <span className="aboutRightLiSpan">Residence</span> UP
          </li>
          <li className="aboutRightLi">
        
            <span className="aboutRightLiSpan">Adress</span>Lucknow
        
          </li>
        </ul>
      </div>
    </div>
  );
}
