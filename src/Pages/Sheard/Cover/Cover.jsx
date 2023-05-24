import React from "react";
import { Parallax } from 'react-parallax';

const Cover = ({ imag, h, w, title, opacity, subTitle }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={imag}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div className={`hero h-[${h}] w-[${w}] mx-auto`}>
        <div className="hero-overlay bg-opacity-60  ">
          <div className="hero-content text-center w-full h-full md:flex justify-center items-center flex-col text-neutral-content">
            <div
              className={` bg-base-200 flex justify-center items-center flex-col bg-opacity-${opacity} md:mx-28 px-20  h-[335px] w-10/12`}
            >
              <h1 className="mb-5 text-5xl text-black font-bold uppercase">
                {title}
              </h1>
              <p className="mb-5 text-black">{subTitle}</p>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
