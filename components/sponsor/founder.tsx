import React from "react";
import Image from "next/image";

export default function Founder() {
  return (
    <div className="w-[1100px] inline-flex flex-col justify-start items-center gap-7 py-15">
      <div className="w-[805px] flex flex-col justify-start items-center gap-5 ">
        <div className="self-stretch text-center justify-start text-black text-3xl font-bold font-['Poppins']">
          Our Founder
        </div>
        <div className="self-stretch text-center justify-start text-black text-xl font-medium font-['Poppins']">
          Meet Engr. Dr. Rabiu Musa Kwankwaso, the visionary behind the
          Kwankwasiyya Development Foundation
        </div>
      </div>
      <div className="self-stretch inline-flex justify-start items-center gap-6">
        <div className="w-80 h-96 relative bg-white rounded-xl overflow-hidden">
          <Image
            src="/assets/kwankwaso.png"
            alt="Dr. Rabiu Musa Kwankwaso"
            width={631}
            height={96}
          />
        </div>
        <div className="w-[724px] inline-flex flex-col justify-start items-start gap-5">
          <div className="self-stretch flex flex-col justify-start items-start gap-7">
            <div className="self-stretch justify-start text-left text-black text-3xl font-bold font-['Poppins']">
              Engr. Dr. Rabiu Musa Kwankwaso
            </div>
            <div className="self-stretch justify-start text-left text-black text-base font-medium font-['Poppins']">
              Engr. Dr. Rabiu Musa Kwankwaso is a distinguished Nigerian
              politician, engineer, and philanthropist who has dedicated his
              life to public service and community development. Born on October
              21, 1956, in Kwankwaso village of Kano State, he has served in
              various capacities including as the Governor of Kano State for two
              terms and as a Senator of the Federal Republic of Nigeria.
              <br />
              <br />
              Dr. Kwankwaso's passion for education stems from his own academic
              journey. He holds a Ph.D. in Water Engineering from Sharda
              University India, a Master's degree in Water Engineering from
              Middlesex Polytechnic London, and a Postgraduate Diploma in Water
              Engineering from Loughborough University of Technology.
              <br />
              <br />
              In 2016, he established the Kwankwasiyya Development Foundation to
              formalize his philanthropic efforts, with a special focus on
              education. Through this foundation, he has sponsored the education
              of thousands of Nigerian students both locally and
              internationally, believing that education is the most powerful
              tool for national development.
            </div>
            <div className="w-[520px] h-36 px-2.5 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-rose-300 flex flex-col justify-center items-center gap-[5px]">
              <div className="self-stretch justify-start text-black text-lg font-semibold font-['Poppins']">
                Educational Philosophy
              </div>
              <div className="self-stretch justify-start text-black text-base font-medium font-['Poppins']">
                "Education is the most powerful weapon which you can use to
                change the world. I believe in investing in the future of our
                youth through quality education."
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
