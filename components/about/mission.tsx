import React from "react";
import Image from "next/image";
import Container from "../Container";

export default function Mission() {
  return (
    <Container>
      <div className="flex flex-col justify-between items-center gap-6 p-2 py-8 md:p-28 md:flex-row">
        <div className="w-full mb-4 relative">
          <Image
            src="/assets/mission-pic.png"
            alt="mission pic"
            width={548}
            height={96}
          />
        </div>
        <div className="flex w-full flex-col justify-start items-start gap-7">
          <h1 className="w-full text-left  justify-start text-black text-3xl font-semibold">
            Our Mission & Vision
          </h1>
          <div className="self-stretch flex flex-col justify-start items-start gap-5">
            <div className="w-full flex flex-col justify-start items-start gap-3.5">
              <h1 className="self-stretch justify-start text-left text-black text-3xl font-semibold">
                Mission
              </h1>
              <div className="self-stretch text-left justify-start text-black text-xl font-medium">
                To empower talented and deserving students through educational
                scholarships, mentorship, and resources that enable them to
                achieve their full potential and contribute positively to
                society.
              </div>
            </div>
            <div className="w-full flex flex-col justify-start items-start gap-3.5">
              <div className="self-stretch text-left justify-start text-black text-3xl font-semibold">
                Vision
              </div>
              <div className="self-stretch text-left justify-start text-black text-xl font-medium">
                A world where financial barriers do not prevent any deserving
                student from accessing quality education and achieving their
                dreams.
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-3.5">
              <div className="self-stretch justify-start text-left text-black text-3xl font-semibold">
                Values
              </div>
              <div className="self-stretch justify-start text-left text-black text-xl font-medium">
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
    </Container>
  );
}
