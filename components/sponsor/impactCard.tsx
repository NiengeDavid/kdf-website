import React from "react";
import Image from "next/image";

export default function ImpactSection() {
  return (
<div className="w-full h-96 px-32 py-7 bg-gray-200 inline-flex flex-col justify-start items-start gap-2.5">
    <div className="w-full flex flex-col justify-start items-center gap-7">
        <div className="w-[805px] flex flex-col justify-start items-center gap-5">
            <div className="self-stretch text-center justify-start text-black text-3xl font-bold font-['Poppins']">Our Impact</div>
            <div className="self-stretch text-center justify-start text-black text-xl font-medium font-['Poppins']">Through the generous support of the Kwankwasiyya Development Foundation, we have made a significant impact on education in Nigeria.</div>
        </div>
        <div className="self-stretch inline-flex justify-center items-center gap-7">
            <div className="w-80 h-44 bg-white rounded-xl shadow-[2px_2px_8px_0px_rgba(0,0,0,0.25)] inline-flex flex-col justify-center items-center gap-3">
                <div className="w-12 h-12 p-2.5 bg-red-100 rounded-3xl inline-flex justify-center items-center gap-2.5">
                   <img src="/academic-cap.svg" alt="" />
                </div>
                <div className="self-stretch text-center justify-start text-black text-2xl font-bold font-['Poppins']">148+</div>
                <div className="w-44 justify-start text-black text-base font-medium font-['Poppins']">Scholarships Funded</div>
            </div>
            <div className="w-80 h-44 bg-white rounded-xl shadow-[2px_2px_8px_0px_rgba(0,0,0,0.25)] inline-flex flex-col justify-center items-center gap-3">
                <div className="w-12 h-12 p-2.5 bg-red-100 rounded-3xl inline-flex justify-center items-center gap-2.5">
                    <img src="/location-line.svg" alt="" />
                </div>
                <div className="self-stretch text-center justify-start text-black text-2xl font-bold font-['Poppins']">48+</div>
                <div className="w-48 justify-start text-black text-base font-medium font-['Poppins']">Communities Impacted</div>
            </div>
            <div className="w-80 h-44 bg-white rounded-xl shadow-[2px_2px_8px_0px_rgba(0,0,0,0.25)] inline-flex flex-col justify-center items-center gap-3">
                <div className="w-12 h-12 p-2.5 bg-red-100 rounded-3xl inline-flex justify-center items-center gap-2.5">
                    <img src="/fluent-money.svg" alt="" />
                </div>
                <div className="self-stretch text-center justify-start text-black text-2xl font-bold font-['Poppins']">100M+</div>
                <div className="w-48 justify-start text-black text-base font-medium font-['Poppins']">Communities Impacted</div>
            </div>
        </div>
    </div>
</div>      
  );
}
