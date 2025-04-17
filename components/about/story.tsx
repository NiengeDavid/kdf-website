import React from "react";

export default function OurStorySection() {
  return (
    <div>
      <div className="w-full h-[826px] px-auto py-11 bg-gray-200 inline-flex flex-col justify-center items-center gap-2.5">
        <div className="w-[952px] flex flex-col justify-center items-center gap-7">
          <div className="w-[805px] flex flex-col justify-center items-center gap-5">
            <div className="self-stretch text-center justify-center text-black text-3xl font-bold font-['Poppins']">
              Our Story
            </div>
            <div className="self-stretch text-center justify-center text-black text-xl font-medium font-['Poppins']">
              The journey of KDF Scholarship Foundation and how we've grown over
              the years.
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-center items-start gap-5">
            <div className="self-stretch h-48 pl-5 bg-white rounded-lg flex flex-col justify-center items-start gap-3.5">
              <div className="self-stretch justify-center text-left text-red-600 text-2xl font-semibold font-['Poppins']">
                The Beginning
              </div>
              <div className="self-stretch justify-center text-left text-zinc-500 text-xl font-medium font-['Poppins']">
                KDF Scholarship Foundation was established in 2010 with a vision
                to support talented students who lacked the financial means to
                pursue higher education. What started as a small initiative
                supporting 10 students has now grown into a comprehensive
                scholarship program.
              </div>
            </div>
            <div className="self-stretch h-48 pl-5 bg-white rounded-lg flex flex-col justify-center items-start gap-3.5">
              <div className="self-stretch justify-center text-left text-red-600 text-2xl font-semibold font-['Poppins']">
                Growth and Impact
              </div>
              <div className="self-stretch justify-center text-left text-zinc-500 text-xl font-medium font-['Poppins']">
                Over the years, we have expanded our reach to support students
                across multiple disciplines and educational levels. Through
                partnerships with educational institutions and generous donors,
                we've been able to increase our scholarship offerings and
                provide more comprehensive support to our beneficiaries.
              </div>
            </div>
            <div className="self-stretch h-48 pl-5 bg-white rounded-lg flex flex-col justify-center items-start gap-3.5">
              <div className="self-stretch justify-center text-left text-red-600 text-2xl font-semibold font-['Poppins']">
                Today
              </div>
              <div className="self-stretch justify-center text-left text-zinc-500 text-xl font-medium font-['Poppins']">
                Today, KDF Scholarship Foundation stands as a beacon of hope for
                many students. We've awarded over 500 scholarships, partnered
                with more than 20 institutions, and distributed over 50 million
                in funds. Our alumni network continues to grow, with many former
                scholarship recipients now giving back to the foundation and
                their communities.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full inline-flex flex-col justify-start items-center gap-7 py-20 px-18">
        <div className="w-[805px] flex flex-col justify-start items-center gap-5">
          <div className="self-stretch text-center justify-start text-black text-3xl font-bold font-['Poppins']">
            Our Core
          </div>
          <div className="self-stretch text-center justify-start text-black text-xl font-medium font-['Poppins']">
            The principles that guide our work and decision-making process.
          </div>
        </div>
        <div className="self-stretch inline-flex justify-center gap-15 items-center">
          <div className="w-80 h-52 bg-white rounded-xl shadow-[2px_2px_8px_0px_rgba(0,0,0,0.25)] inline-flex flex-col justify-center items-center gap-3">
            <div className="w-12 h-12 p-2.5 bg-red-100 rounded-3xl inline-flex justify-center items-center gap-2.5">
              <div className="w-7 h-7 relative overflow-hidden">
                <img src="/academic-cap.svg" alt="" />
              </div>
            </div>
            <div className="self-stretch text-center justify-start text-black text-2xl font-bold font-['Poppins']">
              Excellence
            </div>
            <div className="w-72 text-center justify-start text-black text-base font-medium font-['Poppins']">
              We strive for excellence in all our programs and encourage the
              same in our scholars.
            </div>
          </div>
          <div className="w-80 h-52 bg-white rounded-xl shadow-[2px_2px_8px_0px_rgba(0,0,0,0.25)] inline-flex flex-col justify-center items-center gap-3">
            <div className="w-12 h-12 p-2.5 bg-red-100 rounded-3xl inline-flex justify-center items-center gap-2.5">
              <div className="w-7 h-7 relative overflow-hidden">
              <img src="/academic-cap.svg" alt="" />
              </div>
            </div>
            <div className="self-stretch text-center justify-start text-black text-2xl font-bold font-['Poppins']">
              Inclusivity
            </div>
            <div className="w-72 text-center justify-start text-black text-base font-medium font-['Poppins']">
              We believe in equal opportunities for all, regardless of
              background or circumstances.
            </div>
          </div>
          <div className="w-80 h-52 bg-white rounded-xl shadow-[2px_2px_8px_0px_rgba(0,0,0,0.25)] inline-flex flex-col justify-center items-center gap-3">
            <div className="w-12 h-12 p-2.5 bg-red-100 rounded-3xl inline-flex justify-center items-center gap-2.5">
              <div className="w-7 h-7 relative overflow-hidden">
              <img src="/academic-cap.svg" alt="" />
              </div>
            </div>
            <div className="self-stretch text-center justify-start text-black text-2xl font-bold font-['Poppins']">
              Excellence
            </div>
            <div className="w-72 text-center justify-start text-black text-base font-medium font-['Poppins']">
              We believe in the transformative power of education to change
              lives and communities.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
