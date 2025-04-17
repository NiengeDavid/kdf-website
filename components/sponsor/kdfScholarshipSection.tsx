import React from "react";
import Image from "next/image";

export default function KDFScholarshipSection() {
  return (
            <section className="bg-white py-8">
              <div className="container mx-auto py-10 px-15">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-1/2">
                    <Image 
                      src="/assets/kdfScholarshipSection.png" 
                      alt="KDF Scholarship Foundation Group" 
                      width={500} 
                      height={350}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="w-full md:w-1/2 space-y-4 pl-8">
                    <h2 className="self-stretch text-left justify-start text-black text-3xl font-bold font-['Poppins']">About KDF Scholarship Foundation</h2>
                    <p className="self-stretch text-left justify-start text-base font-medium font-['Poppins']  text-gray-800">
                      The Kwankwasiyya Development Foundation (KDF) is a non-profit organization dedicated to improving the lives of Nigerians through education, healthcare, and community development initiatives. Founded with a vision to create sustainable impact, KDF has been at the forefront of educational empowerment in Nigeria.
                    </p>
                    <p className="self-stretch text-left justify-start text-base font-medium font-['Poppins']  text-gray-800">
                      Our scholarship program is the flagship initiative of the foundation, providing financial support to talented and deserving students who face financial barriers to education. Through this program, we aim to nurture the next generation of leaders who will contribute to the development of Nigeria.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 pt-5">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 bg-red-200 p-1.5 rounded-full">
                          <img src="/academic-cap.svg" alt="" />
                        </div>
                        <div>
                        <div className="self-stretch justify-start text-left text-black text-lg font-semibold font-['Poppins']">Mission</div>
                          <div className="self-stretch justify-start text-left text-black text-sm font-medium font-['Poppins']">To empower through education and community development</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 p-1.5  bg-red-200 rounded-full">
                        <img src="/academic-cap.svg" alt="" />
                        </div>
                        <div>
                        <div className="w-16 justify-start text-left text-black text-lg font-semibold font-['Poppins']">Values</div>
                        <div className="w-48 justify-start text-left text-black text-sm font-medium font-['Poppins']">Integrity, Excellence, Compassion, and Service</div>                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
  );
}
