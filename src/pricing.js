import React from "react";

export default function ProductPage() {
  return (
    <div>
      {/* First Section with Gray BG */}
      <div className="bg-zinc-50 flex flex-col h-screen max-h-[696px] justify-center text-center align-middle pt-[92px] mb-24">
        {/* Content div at center of main div */}
        <div className="w-full max-w-[624px] mx-auto">
          {/* Div with icon and text */}
          <div className="flex justify-center gap-2 mb-4">
            <svg
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.0489 0.927053C10.3483 0.00574231 11.6517 0.00573993 11.9511 0.927051L13.6942 6.29179C13.828 6.70382 14.212 6.98278 14.6452 6.98278H20.2861C21.2548 6.98278 21.6576 8.22239 20.8738 8.7918L16.3103 12.1074C15.9598 12.362 15.8132 12.8134 15.947 13.2254L17.6902 18.5902C17.9895 19.5115 16.935 20.2776 16.1513 19.7082L11.5878 16.3926C11.2373 16.138 10.7627 16.138 10.4122 16.3926L5.84869 19.7082C5.06498 20.2776 4.0105 19.5115 4.30985 18.5902L6.05296 13.2254C6.18683 12.8134 6.04018 12.362 5.68969 12.1074L1.12616 8.7918C0.342451 8.22239 0.745225 6.98278 1.71395 6.98278H7.35477C7.788 6.98278 8.17196 6.70382 8.30583 6.2918L10.0489 0.927053Z"
                fill="#48B649"
              />
            </svg>
            <p>Trusted by over 1,000 customers</p>
          </div>
          <h1 className="text-[64px] font-bold leading-[70px] mb-4">
            Powerful Patient
            <span className="text-[color:var(--primary-color)] block">
              Experience.
            </span>
          </h1>
          <p className="w-full text-lg leading-[27px] font-normal text-zinc-600 mb-8">
            ConcertRx modernizes how pharmacies manage workflow, medication
            waiting lists, and patient journeys by efficiently triggering SMS
            notifications by dragging a card on a visual interface or
            autonomously based on rules.
          </p>
          <div className="flex justify-center gap-2">
            <button className="bg-[color:var(--primary-color)] text-white px-8 py-4 rounded-[22px] text-base leading-4 font-bold">
              Try ConcertRx now
            </button>
            <button className="text-[color:var(--primary-color)] border border-[color:var(--primary-color)] px-8 py-4 rounded-[22px] text-base leading-4 font-bold">
              View Pricing
            </button>
          </div>
        </div>
      </div>

      {/* Second Section with video player */}
      <div className="flex flex-col justify-center text-center align-middle mb-24">
        {/* Content div at center of main div */}

        <div className="w-full mx-auto">
          {/* Div with icon and text */}
          <div className="flex justify-center gap-2 mb-4">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM16 9.8C16.02 9.97 15.98 10.15 15.9 10.3L13.8 15.2C13.58 15.71 13.06 16.03 12.5 16H7C5.9 16 5 15.1 5 14V9C4.98 8.62 5.13 8.26 5.4 8L10 3L10.69 3.69C10.87 3.88 10.98 4.13 10.99 4.39V4.59L10.41 8H15C15.55 8 16 8.45 16 9V9.8Z"
                fill="#48B649"
              />
            </svg>

            <p>It’s Simple</p>
          </div>
          <h1 className="text-[64px] font-bold leading-[70px] mb-4">
            Easy to get started
          </h1>
          <p className="w-full text-lg leading-[27px] font-normal text-zinc-600 mb-8">
            We made ConcertRx easy to use. Like, really easy.
          </p>
        </div>

        {/* Div with video player */}
        <div className="flex justify-center items-center gap-5 mb-5">
          <div className="text-center max-w-[175px] flex flex-col items-end">
            <img src="images/video-left-arrow.png" className="mb-2" />
            <p className="text-sm mb-3 leading-[14px] font-medium self-center">
              Smart Workflow
            </p>
            <p className="text-xs leading-[14.4px]">
              Adding column of your choice makes it easier to manage the work.
            </p>
          </div>
          <div className="">
            <img src="images/video-creative.png" className="mb-2" />
          </div>
          <div className="text-center max-w-[175px] flex flex-col items-start">
            <p className="text-sm mb-3 leading-[14px] font-medium self-center">
              Smart waiting list
            </p>
            <p className="text-xs leading-[14.4px] mb-2">
              Sending text notifications to customers saves a lot of time.
            </p>
              <img src="images/video-right-arrow.png" className="mb-2" />
          </div>
        </div>
        {/* Div below video player */}
        <div className="flex justify-center gap-5">
          <div className="text-center max-w-[175px]  flex flex-col items-center">
            <img src="images/video-below-arrow.png" className="mb-2" />
            <p className="text-sm mb-3 leading-[14px] font-medium self-center">
              Smart patient journeys
            </p>
            <p className="text-xs leading-[14.4px]">
              Walk-in patients get notified by receiving text messages on each
              and every step.
            </p>
          </div>
        </div>
      </div>

      {/* Easy Workflow management section */}
      <div className="flex justify-center w-full max-w-[1220px] h-[627px] mx-auto items-center mb-24">
        {/* left section */}
        <div className="w-1/2 h-full flex items-center">
          <img
            src="images/easy-workflow-mgmt-1-left.png"
            alt="easy-workflow-management"
            className="absolute max-w-[673px] product-page-images-box-shadow"
          />
        </div>
        {/* right section */}
        <div className="w-full max-w-[624px]  h-full bg-zinc-50 flex flex-col rounded-lg pr-[94px]">
          {/* icon with text */}
          <div className="max-w-[405px] my-auto self-end">
            <div className="flex gap-2 mb-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_259_4520)">
                  <path
                    d="M17 11H20C21.11 11 22 10.1 22 9V5C22 3.89 21.1 3 20 3H17C15.89 3 15 3.9 15 5V6H9.01V5C9.01 3.89 8.11 3 7.01 3H4C2.9 3 2 3.9 2 5V9C2 10.11 2.9 11 4 11H7C8.11 11 9 10.1 9 9V8H11V15.01C11 16.66 12.34 18 13.99 18H15V19C15 20.11 15.9 21 17 21H20C21.11 21 22 20.1 22 19V15C22 13.89 21.1 13 20 13H17C15.89 13 15 13.9 15 15V16H13.99C13.45 16 13 15.55 13 15.01V8H15V9C15 10.1 15.9 11 17 11Z"
                    fill="#48B649"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_259_4520">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p>Easy Workflow</p>
            </div>

            <h1 className="text-5xl font-bold leading-[57.6px] mb-4">
              Easy Workflow Management
            </h1>
            <p className="w-full text-base leading-[27px] font-normal text-zinc-600 mb-8">
              ConcertRx modernizes how pharmacies manage workflows, medication
              waiting lists, and patient journeys by efficiently triggering SMS
              notifications.
            </p>
          </div>
        </div>
      </div>

      {/* Patient’s Journey Management section */}
      <div className="flex justify-center w-full max-w-[1220px] h-[627px] mx-auto items-center mb-24">
        {/* left section */}
        <div className="w-full max-w-[624px] h-full bg-zinc-50 flex flex-col rounded-lg pl-[54px]">
          {/* icon with text */}
          <div className="max-w-[405px] my-auto">
            <div className="flex gap-2 mb-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_259_4520)">
                  <path
                    d="M17 11H20C21.11 11 22 10.1 22 9V5C22 3.89 21.1 3 20 3H17C15.89 3 15 3.9 15 5V6H9.01V5C9.01 3.89 8.11 3 7.01 3H4C2.9 3 2 3.9 2 5V9C2 10.11 2.9 11 4 11H7C8.11 11 9 10.1 9 9V8H11V15.01C11 16.66 12.34 18 13.99 18H15V19C15 20.11 15.9 21 17 21H20C21.11 21 22 20.1 22 19V15C22 13.89 21.1 13 20 13H17C15.89 13 15 13.9 15 15V16H13.99C13.45 16 13 15.55 13 15.01V8H15V9C15 10.1 15.9 11 17 11Z"
                    fill="#48B649"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_259_4520">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p>Easy Workflow</p>
            </div>

            <h1 className="text-5xl font-bold leading-[57.6px] mb-4">
              Patient’s Journey Management
            </h1>
            <p className="w-full text-base leading-[27px] font-normal text-zinc-600 mb-8">
              ConcertRx modernizes how pharmacies manage workflows, medication
              waiting lists, and patient journeys by efficiently triggering SMS
              notifications.
            </p>
          </div>
        </div>
        {/* right section */}
        <div className="w-1/2 h-full flex items-center">
          <img
            src="images/easy-workflow-mgmt-1-left.png"
            alt="easy-workflow-management"
            className="absolute max-w-[673px] product-page-images-box-shadow right-28"
          />
        </div>
      </div>

      {/* Out of stocks? section */}
      <div className="flex justify-center w-full max-w-[1220px] h-[627px] mx-auto items-center mb-24">
        {/* left section */}
        <div className="w-1/2 h-full flex items-center">
          <img
            src="images/easy-workflow-mgmt-1-left.png"
            alt="easy-workflow-management"
            className="absolute max-w-[673px] product-page-images-box-shadow"
          />
        </div>
        {/* right section */}
        <div className="w-full max-w-[624px]  h-full bg-zinc-50 flex flex-col rounded-lg pr-[94px]">
          {/* icon with text */}
          <div className="max-w-[405px] my-auto self-end">
            <div className="flex gap-2 mb-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_259_4520)">
                  <path
                    d="M17 11H20C21.11 11 22 10.1 22 9V5C22 3.89 21.1 3 20 3H17C15.89 3 15 3.9 15 5V6H9.01V5C9.01 3.89 8.11 3 7.01 3H4C2.9 3 2 3.9 2 5V9C2 10.11 2.9 11 4 11H7C8.11 11 9 10.1 9 9V8H11V15.01C11 16.66 12.34 18 13.99 18H15V19C15 20.11 15.9 21 17 21H20C21.11 21 22 20.1 22 19V15C22 13.89 21.1 13 20 13H17C15.89 13 15 13.9 15 15V16H13.99C13.45 16 13 15.55 13 15.01V8H15V9C15 10.1 15.9 11 17 11Z"
                    fill="#48B649"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_259_4520">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p>Easy Workflow</p>
            </div>

            <h1 className="text-5xl font-bold leading-[57.6px] mb-4">
              Out of stocks?
            </h1>
            <p className="w-full text-base leading-[27px] font-normal text-zinc-600 mb-8">
              ConcertRx modernizes how pharmacies manage workflows, medication
              waiting lists, and patient journeys by efficiently triggering SMS
              notifications.
            </p>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="max-h-[696px] text-center">
        {/* Content div at center of main div */}
        <div className="w-full mx-auto">
          {/* Div with icon and text */}
          <div className="flex justify-center gap-2 mb-4">
            <svg
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.0489 0.927053C10.3483 0.00574231 11.6517 0.00573993 11.9511 0.927051L13.6942 6.29179C13.828 6.70382 14.212 6.98278 14.6452 6.98278H20.2861C21.2548 6.98278 21.6576 8.22239 20.8738 8.7918L16.3103 12.1074C15.9598 12.362 15.8132 12.8134 15.947 13.2254L17.6902 18.5902C17.9895 19.5115 16.935 20.2776 16.1513 19.7082L11.5878 16.3926C11.2373 16.138 10.7627 16.138 10.4122 16.3926L5.84869 19.7082C5.06498 20.2776 4.0105 19.5115 4.30985 18.5902L6.05296 13.2254C6.18683 12.8134 6.04018 12.362 5.68969 12.1074L1.12616 8.7918C0.342451 8.22239 0.745225 6.98278 1.71395 6.98278H7.35477C7.788 6.98278 8.17196 6.70382 8.30583 6.2918L10.0489 0.927053Z"
                fill="#48B649"
              />
            </svg>
            <p className="text-sm leading-[21px] font-medium text-zinc-500">
              Trusted by over 1,000 customers
            </p>
          </div>

          {/* Content | Heading & Text & Buttons */}
          <h1 className="text-5xl leading-[57.6px] font-bold text-zinc-800 -tracking-[4%] mb-4">
            But don't take it from us…
          </h1>
          <div className="bg-zinc-50 py-12 flex flex-col w-full text-center justify-center items-center">
            <p className="text-lg block leading-[27px] font-normal w-full max-w-[742px] mb-7">
              “Their system for getting rapid antigen tests was easy to register
              and for pickng was hassle free. I appriciate that they sell
              australian made test as well.”
            </p>
            <p className="text-sm leading-[14px] font-bold mb-[10px]">
              Teowai Rathai
            </p>
            <p className="text-sm leading-[14px] font-normal mb-7">
              Kohler, Hegmann and Littel
            </p>
            <div className="flex justify-between">
              {/* Left arrow */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.2"
                  d="M14.7104 15.8803L10.8304 12.0003L14.7104 8.12027C15.1004 7.73027 15.1004 7.10027 14.7104 6.71027C14.3204 6.32027 13.6904 6.32027 13.3004 6.71027L8.71043 11.3003C8.32043 11.6903 8.32043 12.3203 8.71043 12.7103L13.3004 17.3003C13.6904 17.6903 14.3204 17.6903 14.7104 17.3003C15.0904 16.9103 15.1004 16.2703 14.7104 15.8803Z"
                  fill="#52525B"
                />
              </svg>
              {/* Right arrow */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.28957 15.8803L13.1696 12.0003L9.28957 8.12027C8.89957 7.73027 8.89957 7.10027 9.28957 6.71027C9.67957 6.32027 10.3096 6.32027 10.6996 6.71027L15.2896 11.3003C15.6796 11.6903 15.6796 12.3203 15.2896 12.7103L10.6996 17.3003C10.3096 17.6903 9.67957 17.6903 9.28957 17.3003C8.90957 16.9103 8.89957 16.2703 9.28957 15.8803Z"
                  fill="#52525B"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Ready to Make Music? */}
      <div className="max-h-[696px] text-center pt-[129px] mb-[120px]">
        {/* Content div at center of main div */}
        <div className="w-full max-w-[630px] mx-auto">
          {/* Div with icon and text */}
          <div className="flex justify-center gap-2 mb-4">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_259_4546)">
                <path
                  d="M10.67 21C10.32 21 10.05 20.69 10.1 20.34L11 14H7.49997C6.61997 14 7.16997 13.25 7.18997 13.22C8.44997 10.99 10.34 7.69 12.84 3.29C12.94 3.11 13.14 3 13.34 3C13.69 3 13.96 3.31 13.91 3.66L13.01 10H16.52C16.92 10 17.14 10.19 16.92 10.66C13.63 16.4 11.72 19.75 11.17 20.71C11.07 20.89 10.88 21 10.67 21Z"
                  fill="#48B649"
                />
              </g>
              <defs>
                <clipPath id="clip0_259_4546">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p className="text-sm leading-[21px] font-medium text-zinc-500">
              Lets Connect
            </p>
          </div>

          {/* Content | Heading & Text & Buttons */}
          <h1 className="text-5xl leading-[57.6px] font-bold text-zinc-800 -tracking-[4%] mb-4">
            Ready to Make Music?
          </h1>
          <p className="w-full text-sm leading-[21px] font-normal text-zinc-600 mb-8">
            Your success in this new era of pharmacy will be defined by your
            ability to challenge outdated business processes and ask what really
            works. You can either use a pen and paper to manage an Ozempic
            waiting list or you can use ConcertRx and save time, money and
            hair!.
          </p>
          <button className="block mx-auto bg-[color:var(--primary-color)] text-white px-8 py-4 rounded-[32px] text-sm leading-[18.2px] font-medium mb-4">
            Start for free
          </button>
          <button className="text-zinc-800 text-xs leading-3 font-normal">
            Get 50 credits now.
          </button>
        </div>
      </div>
    </div>
  );
}
