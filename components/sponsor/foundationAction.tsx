import React from "react";
import Image from "next/image";

export default function FoundationAction() {
  return (
    <div className="">
        <div className="w-full inline-flex flex-col justify-start items-center gap-7 bg-gray-200 px-25 pt-5 pb-20">
            <div className="w-[805px] flex flex-col justify-start items-center gap-5">
                <div className="self-stretch text-center justify-start text-black text-3xl font-bold font-['Poppins']">Foundation in Action</div>
                <div className="self-stretch text-center justify-start text-black text-xl font-medium font-['Poppins']">See the impact of the Kwankwasiyya Development Foundation in Mewar International University through our photo gallery</div>
            </div>
            <div className="self-stretch inline-flex justify-between items-center">
                <div className="w-80 h-72 relative bg-white rounded-xl shadow-[2px_2px_8px_0px_rgba(0,0,0,0.25)] overflow-hidden">
                    <img className="w-80 h-72 left-0 top-[-28px] absolute" src="/assets/Action-img-1.png" />
                </div>
                <div className="w-80 h-72 relative bg-white rounded-xl shadow-[2px_2px_8px_0px_rgba(0,0,0,0.25)] overflow-hidden">
                    <img className="w-80 h-72 left-0 top-0 absolute" src="/assets/Action-img-2.png" />
                </div>
                <div className="w-80 h-72 relative bg-white rounded-xl shadow-[2px_2px_8px_0px_rgba(0,0,0,0.25)] overflow-hidden">
                    <img className="w-80 h-72 left-0 top-0 absolute" src="/assets/Action-img-3.png" />
                </div>
            </div>
        </div>
        <div className="w-full h-96 px-40 py-14 bg-primary-red inline-flex flex-col justify-start items-center gap-2.5 ">
            <div className="w-[963px] flex flex-col justify-start items-center gap-14">
                <div className="self-stretch flex flex-col justify-start items-center gap-5">
                    <div className="self-stretch text-center justify-start text-white text-4xl font-bold font-['Poppins']">Thank you Sponsor</div>
                    <div className="self-stretch text-center justify-start text-white text-2xl font-bold font-['Poppins']">We, the beneficiaries at Mewar International University, offer our heartfelt gratitude to Engr. Dr. Rabiu Musa Kwankwaso and the Kwankwasiyya Development Foundation (KDF) for granting us the opportunity to become students at this great institution.</div>
                </div>
            </div>
        </div>
    </div>
  );
}
