import React from "react";
import Image from "next/image";

export default function OurTeam() {
  return (
    <div className="w-full inline-flex bg-bg3 flex-col justify-center items-center gap-12 p-15">
      <div className="w-[844px] flex flex-col justify-start items-center gap-5">
        <div className="self-stretch text-center justify-start text-black text-3xl font-bold">
          Our Team
        </div>
        <div className="w-[900px] text-center justify-start text-black text-xl font-medium">
          Meet the dedicated individuals who work tirelessly to make our mission
          a reality.
        </div>
      </div>
      <div className="self-stretch flex flex-col justify-start items-start gap-5">
        <div className="self-stretch inline-flex justify-center items-center gap-2.5">
          <div className="w-96 h-72 bg-white rounded-lg outline outline-offset-[-1px] outline-zinc-300 inline-flex flex-col justify-center items-center gap-3">
            <Image src="/assets/kwankwaso-pics-team.jpeg" alt="Kwankwanso" width={100} height={100} className="rounded-full"/>
            <div className="w-80 text-center justify-start text-black text-2xl font-semibold">
              Engr. Dr. Rabiu Musa <br />
              Kwankwaso
            </div>
            <div className="self-stretch text-center justify-start text-zinc-500 text-xl font-semibold">
              KDF Scholars Sponsor
            </div>
          </div>
        </div>
        <div className="self-stretch inline-flex justify-center items-center gap-2.5">
          <div className="w-96 h-72 bg-white rounded-lg  outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex flex-col justify-center items-center gap-3">
          <Image src="/assets/Engr.Abba.jpeg" alt="Engr. Abba" width={96} height={96} className="rounded-full" />

            <div className="w-80 text-center justify-center text-black text-2xl font-semibold">
              Engr. Abubakar Sani Bello (Abbah)
            </div>
            <div className="self-stretch text-center justify-center text-zinc-500 text-xl font-semibold">
              Pro Chancellor Administration MIU, Nigeria
            </div>
          </div>
          <div className="w-96 h-72 bg-white rounded-lg  outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex flex-col justify-center items-center gap-3">
          <Image src="/assets/VC-MIU.jpg" alt="VC" width={96} height={96} className="rounded-full" />
          <div className="w-80 text-center justify-center text-black text-2xl font-semibold">
              Prof. Muhammed Tanko
            </div>
            <div className="self-stretch text-center justify-center text-zinc-500 text-xl font-semibold">
              Vice Chancellor MIU, Nigeria
            </div>
          </div>
          <div className="w-96 h-72 bg-white rounded-lg  outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex flex-col justify-center items-center gap-3">
          <Image src="/assets/Anas.jpg" alt="Engr.Anas" width={96} height={96} className="rounded-full" />
          <div className="w-80 text-center justify-center text-black text-2xl font-semibold">
              Engr. Anas Alhassan
            </div>
            <div className="self-stretch text-center justify-center text-zinc-500 text-xl font-semibold">
              Director Estate Management
              <br />
              MIU Nigeria
            </div>
          </div>
        </div>
        <div className="self-stretch inline-flex justify-center items-center gap-2.5">
          <div className="w-96 h-72 bg-white rounded-lg  outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex flex-col justify-center items-center gap-3">
          <Image src="/assets/sir-mustapha.jpg" alt="mustapha uba" width={96} height={96} className="rounded-full" />

            <div className="w-80 text-center justify-center text-black text-2xl font-semibold">
              Mr. Mustapha Uba
            </div>
            <div className="self-stretch text-center justify-center text-zinc-500 text-xl font-semibold">
              H.O.D Computer Science
              <br />
              KDF - MIU Staff Adviser
            </div>
          </div>
          <div className="w-96 h-72 bg-white rounded-lg outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex flex-col justify-center items-center gap-3">
          <Image src="/assets/Mr.kabir.jpg" alt="Mr kabir" width={96} height={96} className="rounded-full" />
            <div className="w-80 text-center justify-center text-black text-2xl font-semibold">
              Mr. Kabir Sani
            </div>
            <div className="self-stretch text-center justify-center text-zinc-500 text-xl font-semibold">
              GST Department
              <br />
              KDF - MIU Staff Adviser
            </div>
          </div>
          <div className="w-96 h-72 bg-white rounded-lg outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex flex-col justify-center items-center gap-3">
          <Image src="/assets/Mr.Nura.jpg" alt="Mr Nura" width={96} height={96} className="rounded-full" />
            <div className="w-80 text-center justify-center text-black text-2xl font-semibold">
              Mr. Nura Uba
            </div>
            <div className="self-stretch text-center justify-center text-zinc-500 text-xl font-semibold">
              Former H.O.D Accounting Department <br />
              KDF - MIU Staff Adviser
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
