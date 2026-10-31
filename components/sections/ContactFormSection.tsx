"use client";

import { useState } from "react";

const SERVICE_OPTIONS = [
  "2D Animation",
  "3D Animation",
  "Hybrid Animation",
  "Cel Animation",
  "Motion Graphics",
  "Whiteboard Animation",
  "Video Editing",
  "CGI-VFX",
  "Logo Animation",
  "Infographics",
  "Architectural Visualization",
] as const;

export function ContactFormSection() {
  const [selectedServices, setSelectedServices] = useState<string[]>(["2D Animation"]);
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service],
    );
  };

  return (
    <div className="rounded-[24px] border border-[#e8eaf2] bg-white p-6 shadow-[0_24px_60px_-15px_rgb(15_23_42/0.1)] sm:p-10">
      <h2 className="font-sans text-[24px] font-extrabold tracking-[-0.03em] text-[#0b0c10] sm:text-[28px]">
        Tell Us About Your Project
      </h2>
      <p className="mt-1.5 font-sans text-[14.5px] text-[#646774]">
        Select the animation services you are interested in and share your brief below.
      </p>

      {submitted ? (
        <div className="mt-8 rounded-[18px] border border-[#ffcab8] bg-[#fff4f0] p-8 text-center">
          <div className="mx-auto grid size-14 place-items-center rounded-full bg-[linear-gradient(135deg,#ff1b1d_0%,#ff6b12_100%)] text-white">
            ✓
          </div>
          <h3 className="mt-4 font-sans text-[22px] font-extrabold text-[#0b0c10]">
            Thank You! Your Brief Has Been Received.
          </h3>
          <p className="mt-2 font-sans text-[14.5px] text-[#585b66]">
            A senior producer from VideoAnimation.us will reach out within 2 business hours with your
            tailored estimate and creative treatment.
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="mt-6 inline-flex h-10 cursor-pointer items-center justify-center rounded-[10px] border border-[#0b0c10] px-5 font-sans text-[13px] font-bold text-[#0b0c10] hover:bg-[#0b0c10] hover:text-white"
          >
            Submit Another Inquiry
          </button>
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="mt-7 space-y-6"
        >
          {/* 11 Services Checkboxes (From Live Site) */}
          <div>
            <span className="block font-sans text-[12px] font-extrabold uppercase tracking-[0.14em] text-[#454752]">
              Select Services Needed
            </span>
            <div className="mt-3 flex flex-wrap gap-2.5">
              {SERVICE_OPTIONS.map((service) => {
                const active = selectedServices.includes(service);
                return (
                  <button
                    key={service}
                    type="button"
                    onClick={() => toggleService(service)}
                    aria-pressed={active}
                    className={`cursor-pointer rounded-full px-3.5 py-2 font-sans text-[13px] font-bold transition-all ${
                      active
                        ? "bg-[linear-gradient(135deg,#ff171d_0%,#ff6512_100%)] text-white shadow-[0_6px_16px_-4px_rgb(255_45_27/0.4)]"
                        : "border border-[#dfe2ec] bg-[#f8f9fc] text-[#4a4d58] hover:border-[#ff4719]"
                    }`}
                  >
                    {service}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="full-name"
                className="block font-sans text-[13px] font-bold text-[#1d1f27]"
              >
                Full Name *
              </label>
              <input
                id="full-name"
                name="name"
                type="text"
                required
                placeholder="John Carter"
                className="mt-1.5 h-12 w-full rounded-[11px] border border-[#dce0eb] bg-[#fbfcfe] px-4 font-sans text-[14px] text-[#0c0d12] outline-none transition-colors focus:border-[#ff3b1b] focus:bg-white"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block font-sans text-[13px] font-bold text-[#1d1f27]"
              >
                Work Email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="john@company.com"
                className="mt-1.5 h-12 w-full rounded-[11px] border border-[#dce0eb] bg-[#fbfcfe] px-4 font-sans text-[14px] text-[#0c0d12] outline-none transition-colors focus:border-[#ff3b1b] focus:bg-white"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block font-sans text-[13px] font-bold text-[#1d1f27]"
            >
              Phone Number *
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="+1 (833) 666-6684"
              className="mt-1.5 h-12 w-full rounded-[11px] border border-[#dce0eb] bg-[#fbfcfe] px-4 font-sans text-[14px] text-[#0c0d12] outline-none transition-colors focus:border-[#ff3b1b] focus:bg-white"
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block font-sans text-[13px] font-bold text-[#1d1f27]"
            >
              Project Description & Goals *
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              required
              placeholder="Tell us about your story, target duration, style references, or launch deadline..."
              className="mt-1.5 w-full rounded-[11px] border border-[#dce0eb] bg-[#fbfcfe] p-4 font-sans text-[14px] text-[#0c0d12] outline-none transition-colors focus:border-[#ff3b1b] focus:bg-white"
            />
          </div>

          <button
            type="submit"
            className="bg-cta-gradient inline-flex h-[52px] w-full cursor-pointer items-center justify-center gap-2.5 rounded-[12px] font-sans text-[15.5px] font-bold text-white shadow-[0_14px_30px_-6px_rgb(255_45_27/0.48)] transition-transform hover:-translate-y-0.5"
          >
            <span>Send Project Brief</span>
            <span>→</span>
          </button>
        </form>
      )}
    </div>
  );
}
