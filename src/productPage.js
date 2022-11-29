import React from "react";

export default function ProductPage() {
  return (
    <div>
      {/* First Section with Gray BG */}
      <div className="bg-[#EFF2EF] flex flex-col h-screen max-h-[696px] justify-center text-center align-middle pt-[72px] mb-24">
        {/* Content div at center of main div */}
        <div className="w-full max-w-[624px] mx-auto px-[22px]">
          {/* Div with icon and text */}
          <div className="flex justify-center items-center gap-2 mb-4 h-[26px]">
            <img src="images/star-icon-1.png" alt="Star icon" />
            <p className="text-sm leading-[21px] font-medium text-zinc-500 -tracking-[0.01em]">
              Trusted by over 1,000 customers
            </p>
          </div>
          <h1 className="text-[64px] font-bold leading-[110%] mb-4 ">
            Powerful Patient
            <span className="text-[color:var(--primary-color)] block">
              Experience.
            </span>
          </h1>
          <p className="w-full text-lg leading-[27px] font-normal text-zinc-600 mb-8 -tracking-[0.01em]">
            ConcertRx modernizes how pharmacies manage workflow, medication
            waiting lists, and patient journeys by efficiently triggering SMS
            notifications by dragging a card on a visual interface or
            autonomously based on rules.
          </p>
          <div className="flex justify-center gap-2">
            <button className="bg-[color:var(--primary-color)] text-white px-8 py-4 rounded-[22px] text-base leading-4 font-bold">
              Try ConcertRx now
            </button>
            <button className="text-[color:var(--primary-color)] border border-[color:var(--primary-color)] px-8 py-4 rounded-[22px] text-base leading-4 font-bold h-12">
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
          <div className="flex justify-center align-middle gap-2 mb-2 mr-[30px]">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="m-0.5"
            >
              <path
                d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM16 9.8C16.02 9.97 15.98 10.15 15.9 10.3L13.8 15.2C13.58 15.71 13.06 16.03 12.5 16H7C5.9 16 5 15.1 5 14V9C4.98 8.62 5.13 8.26 5.4 8L10 3L10.69 3.69C10.87 3.88 10.98 4.13 10.99 4.39V4.59L10.41 8H15C15.55 8 16 8.45 16 9V9.8Z"
                fill="#48B649"
              />
            </svg>
            <p className="text-sm leading-[21px] font-medium text-zinc-800 -tracking-[0.01em]">
              It’s Simple
            </p>
          </div>
          <h1 className="text-[48px] font-bold leading-[130%] -tracking-[0.04em] mb-[14px]">
            Easy to get started
          </h1>
          <p className="w-full text-lg leading-[27px] font-normal -tracking-[0.01em] text-zinc-600 mb-[41px]">
            We made ConcertRx easy to use. Like, really easy.
          </p>
        </div>

        {/* Div with video player */}
        <div className="flex justify-center items-center gap-5 mb-5">
          <div className="text-center max-w-[175px] flex flex-col items-end pb-5">
            <img src="images/video-left-arrow.png" className="mb-2" />
            <p className="text-sm mb-3 leading-[14px] font-medium self-center pr-4">
              Smart Workflow
            </p>
            <p className="text-xs leading-[120%] font-normal text-zinc-600">
              Adding column of your choice makes it easier to manage the work.
            </p>
          </div>
          <div className="">
            <img
              src="images/video-creative.png"
              alt="video-player"
              className="max-w-[842px] mb-2 video-player-box-shadow"
            />
          </div>
          <div className="text-center max-w-[175px] flex flex-col items-start pb-5">
            <p className="text-sm mb-3 leading-[14px] font-medium self-center ml-5">
              Smart waiting list
            </p>
            <p className="text-xs leading-[120%] font-normal text-zinc-600 mb-2 ml-[9px]">
              Sending text notifications to customers saves a lot of time.
            </p>
            <img src="images/video-right-arrow.png" className="mb-2" />
          </div>
        </div>
        {/* Div below video player */}
        <div className="flex justify-center gap-5">
          <div className="text-center max-w-[175px]  flex flex-col items-center pb-5 pt-4">
            <img src="images/video-below-arrow.png" className="mb-2" />
            <p className="text-sm mb-3 leading-[14px] font-medium self-center pr-6">
              Smart patient journeys
            </p>
            <p className="text-xs leading-[120%] font-normal text-zinc-600 pr-6">
              Walk-in patients get notified by receiving text messages on each
              and every step.
            </p>
          </div>
        </div>
      </div>

      {/* Easy Workflow management section */}
      <div className="flex justify-center w-full max-w-[1220px] h-[627px] mx-auto items-center mb-24">
        {/* left section */}
        <div className="w-1/2 h-full flex items-center align-middle">
          <img
            src="images/easy-workflow-mgmt-1-left.png"
            alt="easy-workflow-management"
            className="max-w-[673px] product-page-images-box-shadow"
          />
        </div>
        {/* right section */}
        <div className="w-full min-w-[624px]  h-full bg-zinc-50 flex flex-col rounded-lg pr-[94px]">
          <div className="max-w-[405px] my-auto pt-7 pb-0 self-end">
            {/* icon with text */}
            <div className="flex gap-2 mb-2 items-center">
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
              <p className="text-xs leading-[18px] font-medium -tracking-[0.01em] mt-[1px] mb-[5px]">
                Easy Workflow
              </p>
            </div>

            <h1 className="text-5xl font-bold leading-[120%] -tracking-[0.04em] mb-4">
              Easy Workflow Management
            </h1>
            <p className="w-full text-base leading-6 font-normal -tracking-[0.01em] text-zinc-600">
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
            <div className="flex gap-2 mb-2 items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_259_4538)">
                  <path
                    d="M8 6C8 3.79 9.79 2 12 2C14.21 2 16 3.79 16 6C16 8.21 14.21 10 12 10C9.79 10 8 8.21 8 6ZM17 22H18C19.1 22 20 21.1 20 20V15.22C20 14.1 19.39 13.07 18.39 12.56C17.96 12.34 17.49 12.13 17 11.94V22ZM12.34 17L15 11.33C14.07 11.12 13.07 11 12 11C9.47 11 7.29 11.7 5.61 12.56C4.61 13.07 4 14.1 4 15.22V22H6.34C6.12 21.55 6 21.04 6 20.5C6 18.57 7.57 17 9.5 17H12.34ZM10 22L11.41 19H9.5C8.67 19 8 19.67 8 20.5C8 21.33 8.67 22 9.5 22H10Z"
                    fill="#48B649"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_259_4538">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p className="text-xs leading-[18px] font-medium -tracking-[0.01em] mt-[1px] mb-[5px]">
                Manage Pharmacies
              </p>
            </div>

            <h1 className="text-5xl font-bold leading-[120%] -tracking-[0.04em] mb-4">
              Patient’s Journey Management
            </h1>
            <p className="w-full text-base leading-6 font-normal -tracking-[0.01em] text-zinc-600">
              ConcertRx modernizes how pharmacies manage workflow, medication
              waiting lists and patient journeys by efficiently triggering SMS
              notifications by dragging a card on a visual interface or
              autonomously based on rules.
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
      <div className="flex justify-center w-full max-w-[1220px] h-[627px] mx-auto items-center mb-16">
        {/* left section */}
        <div className="w-1/2 h-full flex items-center align-middle">
          <img
            src="images/easy-workflow-mgmt-1-left.png"
            alt="easy-workflow-management"
            className="max-w-[673px] product-page-images-box-shadow"
          />
        </div>
        {/* right section */}
        <div className="w-full min-w-[624px]  h-full bg-zinc-50 flex flex-col rounded-lg pr-[94px] pt-[6px]">
          {/* icon with text */}
          <div className="max-w-[405px] my-auto self-end">
            <div className="flex gap-2 mb-2 items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_259_4582)">
                  <path
                    d="M20 2H4C2.9 2 2.01 2.9 2.01 4L2 22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM9 11H7V9H9V11ZM13 11H11V9H13V11ZM17 11H15V9H17V11Z"
                    fill="#48B649"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_259_4582">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p className="text-xs leading-[18px] font-medium -tracking-[0.01em] mt-[1px] mb-[5px]">
                SMS. An easy, effective channel.
              </p>
            </div>

            <h1 className="text-5xl font-bold leading-[120%] -tracking-[0.04em] mb-4">
              Out of stocks?
            </h1>
            <p className="w-full text-base leading-6 font-normal -tracking-[0.01em] text-zinc-600">
              SMS. An easy, effective channel. With ConcertRx, you can
              effortlessly embed SMS notifications into your workflow, keeping
              your customers in the loop, happy and returning.
            </p>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="max-h-[696px] text-center pt-14 mb-16">
        {/* Content div at center of main div */}
        <div className="w-full mx-auto">
          {/* Div with icon and text */}
          <div className="flex justify-center items-center gap-2 mb-2">
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0489 2.92705C12.3483 2.00574 13.6517 2.00574 13.9511 2.92705L15.6942 8.29179C15.828 8.70382 16.212 8.98278 16.6452 8.98278H22.2861C23.2548 8.98278 23.6576 10.2224 22.8738 10.7918L18.3103 14.1074C17.9598 14.362 17.8132 14.8134 17.947 15.2254L19.6902 20.5902C19.9895 21.5115 18.935 22.2776 18.1513 21.7082L13.5878 18.3926C13.2373 18.138 12.7627 18.138 12.4122 18.3926L7.84869 21.7082C7.06498 22.2776 6.0105 21.5115 6.30985 20.5902L8.05296 15.2254C8.18683 14.8134 8.04018 14.362 7.68969 14.1074L3.12616 10.7918C2.34245 10.2224 2.74523 8.98278 3.71395 8.98278H9.35477C9.788 8.98278 10.172 8.70382 10.3058 8.2918L12.0489 2.92705Z"
                fill="#48B649"
              />
            </svg>
            <p className="text-sm leading-[21px] font-medium text-zinc-500 -tracking-[0.01em]">
              Trusted by over 1,000 customers
            </p>
          </div>

          {/* Content | Heading & Text & Buttons */}
          <h1 className="text-5xl leading-[120%] font-bold text-zinc-800 -tracking-[0.04em] mb-10">
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
            <div className="flex gap-2">
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
      <div className="max-h-[696px] text-center pt-[64.5px] mb-[116px]">
        {/* Content div at center of main div */}
        <div className="w-full max-w-[630px] mx-auto">
          {/* Div with icon and text */}
          <div className="flex justify-center gap-2 mb-2">
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
            <p className="text-sm leading-[21px] font-medium text-zinc-500 mt-[1px] mb-0.5 -tracking-[0.01em]">
              Lets Connect
            </p>
          </div>

          {/* Content | Heading & Text & Buttons */}
          <h1 className="text-5xl leading-[120%] font-bold text-zinc-800 -tracking-[0.04em] mb-4">
            Ready to Make Music?
          </h1>
          <p className="w-full text-sm leading-[150%] font-normal text-zinc-600 mb-6 -tracking-[0.01em] px-0.5">
            Your success in this new era of pharmacy will be defined by your
            ability to challenge outdated business processes and ask what really
            works. You can either use a pen and paper to manage an Ozempic
            waiting list or you can use ConcertRx and save time, money and
            hair!.
          </p>
          <button className="block mx-auto bg-[color:var(--primary-color)] text-white px-8 py-4 rounded-[32px] text-sm leading-[130%] font-medium -tracking-[0.01em] mb-2">
            Start for free
          </button>
          <button className="text-zinc-800 text-xs leading-3 font-normal -tracking-[0.01em]">
            Get 50 credits now.
          </button>
        </div>
      </div>
    </div>
  );
}
