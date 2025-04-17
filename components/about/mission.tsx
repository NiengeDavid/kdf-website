import React from "react";
import Image from "next/image";
import Container from "../Container";


export default function Mission() {
  return (
    <div className="inline-flex justify-start items-center gap-14 p-23">
      <div className=" h-96 relative">
        <Image
          src="/assets/mission-pic.png"
          alt="mission pic"
          width={548}
          height={96}
        />
      </div>
      <div className=" inline-flex flex-col justify-start items-start gap-7">
        <div className="w-72 text-left  justify-start text-black text-3xl font-semibold font-['Poppins']">
          Our Mission & Vision
        </div>
        <div className="self-stretch flex flex-col justify-start items-start gap-5">
          <div className="w-[508px] flex flex-col justify-start items-start gap-3.5">
            <div className="self-stretch justify-start text-left text-black text-3xl font-semibold font-['Poppins']">
              Mission
            </div>
            <div className="self-stretch text-left justify-start text-black text-xl font-medium font-['Poppins']">
              To empower talented and deserving students through educational
              scholarships, mentorship, and resources that enable them to
              achieve their full potential and contribute positively to society.
            </div>
          </div>
          <div className="w-[492px] flex flex-col justify-start items-start gap-3.5">
            <div className="self-stretch text-left justify-start text-black text-3xl font-semibold font-['Poppins']">
              Vision
            </div>
            <div className="self-stretch text-left justify-start text-black text-xl font-medium font-['Poppins']">
              A world where financial barriers do not prevent any deserving
              student from accessing quality education and achieving their
              dreams.
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start gap-3.5">
            <div className="self-stretch justify-start text-left text-black text-3xl font-semibold font-['Poppins']">
              Values
            </div>
            <div className="self-stretch justify-start text-left text-black text-xl font-medium font-['Poppins']">
              • Excellence in education
              <br />• Integrity and transparency
              <br />• Inclusivity and diversity
              <br />• Community development
              <br />• Sustainable impact
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
