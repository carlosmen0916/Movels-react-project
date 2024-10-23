import React from "react";
import Footer from "./Footer";
import { useState, useEffect } from "react";
const DEFAULT_FAQS = [
  {
    question: "What is Movelz?",
    answer:
      "Movelz is a platforms that connects drivers and passengers heading the same direction.",
  },
  {
    question: "How does Movelz work?",
    answer:
      "Movelz gives the opportunity to the drivers to monetize their empty seats and passengers to find a book an affordable ride.",
  },
  {
    question: "Is it safe to travel with Movelz?",
    answer:
      "Yes, safety is a top priority for us. Drivers and passengers are verified and both parties can view and check profiles and reviews before confirming a ride. A chat will be available before the trip to establish trust as well as to confirm details.",
  },
  {
    question: "How are ride prices calculated?",
    answer:
      "Ride prices are suggested based on the distance and current fuel costs. However, drivers have some flexibility to set the price within a reasonable range.",
  },
  {
    question: "How do I search for and book a ride as a passenger?",
    answer:
      "It has never been this easy. Download the app, select passenger in the Home Screen and introduce the details for your trip (Origin, destination, date…) And choose the trip that fits better for you.",
  },
  {
    question: "What happens if I need to cancel a ride?",
    answer:
      "If you need to cancel, you can do so through the app. Check our cancellation policies.",
  },
  {
    question: "What happens if the driver cancels the ride?",
    answer:
      "If the driver cancels the ride you will be notified immediately and you will receive a refund. Check our cancellation policies.",
  },
  {
    question: "How are user ratings managed?",
    answer:
      "After every ride, both passengers and drivers can rate each other.",
  },
  {
    question: "How can I contact the driver/passenger?",
    answer: "Once your trip is booked a chat will be available.",
  },
  {
    question: "What if I encounter problems during the ride?",
    answer:
      "If you experience any issues during the ride, there will be a customer support available 24h.",
  },
  {
    question: "How do I edit or delete a trip I posted?",
    answer:
      "If you need to change the details of a trip, you can make it from “trips” and choose the upcoming trip needed.",
  },
  {
    question: "Do I need a driver’s license to use Movelz?",
    answer:
      "As a passenger is not needed. If you are offering a ride as a driver we will verify your driver’s license.",
  },
  {
    question: "How can I pay for my ride?",
    answer:
      "All payments on Movelz are secured, this is a priority for us. That’s why we use Stripe to handle all transactions.",
  },
  {
    question: "Can I pay the driver in cash?",
    answer:
      "No, all payments must be made through the Movelz app to maintain our security standards and avoid scams.",
  },
  {
    question: "Can I bring luggage on a ride?",
    answer:
      "Yes, but always is a good idea to check with the driver through our messaging system, specially if you plan to bring large items.",
  },
  {
    question: "What if my trip gets delayed?",
    answer:
      "It is important for both sides to communicate through the group chat.",
  },
  {
    question: "Can I bring a pet on the ride?",
    answer:
      "Depends on driver preferences. You should always ask the driver in advance.",
  },
  {
    question: "How do I report inappropriate behavior?",
    answer:
      "You can report it directly to Movelz through the app. We take this seriously.",
  },
  {
    question: "What is the bidding system on Movelz?",
    answer:
      "The bidding system allows passengers to place a bid and negotiate a fair price.",
  },
  {
    question: "How does the bidding system work?",
    answer:
      "As a passenger you can place a bid until 3 days before the trip starts and it will be available only for full trips not part trips.",
  },
  {
    question: "Is there a minimum bid?",
    answer:
      "Yes, there is a minimum established of a 35% less of the original price posted by the driver.",
  },
  {
    question: "How do I know the exact route I must follow?",
    answer:
      "There is a navigation system powered by Mapbox inside the app that will be displayed once the trip starts.",
  },
  {
    question: "What should I do if I lose an item during my Movelz ride?",
    answer:
      "Try to contact the driver through the chat, if the chat is closed, contact with our customers support and we’ll try to solve it as soon as possible.",
  },
  {
    question: "Does Movelz offer discounts or promotions?",
    answer:
      "Yes, you can receive a 5% cashback from the trips made of the users that you referred.",
  },
  {
    question: "Is Movelz available in my city?",
    answer: "As of now we are available all across the US.",
  },
];

const Help = () => {
  const [faqs, setFaqs] = useState(DEFAULT_FAQS);
  const [questions, setQuestions] = useState(Array(25).fill(false));
  const [searchWord, setSearchWord] = useState("");
  const [seeMore, setSeeMore] = useState(9);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const controlSeeMore = () => {
    if(seeMore === 9) {
      setSeeMore(19);
    }else if(seeMore === 19) 
    setSeeMore(25);

  }

  const onSearchWordChange = (e) => {
    setSearchWord(e.target.value);
    const filtered_faqs = DEFAULT_FAQS.filter((fq) => {
      const questionMatch = fq.question.toLowerCase().includes(e.target.value);
      const answerMatch = fq.answer.toLowerCase().includes(e.target.value);

      return questionMatch || answerMatch;
    });
    setFaqs(filtered_faqs);
  };

  const toggleQuestion = (index) => {
    setQuestions((prev) =>
      prev.map((question, i) => (i === index ? !question : question))
    );
  };

  const handleResize = () => {
    const currentIsLargeScreen = window.innerWidth >= 1280;
  
    if (isLargeScreen && !currentIsLargeScreen) {
      setSeeMore(9);
    }
  
    setIsLargeScreen(currentIsLargeScreen);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const displayedFaqs = faqs.slice(0, seeMore);

  const currentFaqs = isLargeScreen ? faqs : displayedFaqs;

  return (
    <div className="w-full">
      <div className="relative grid helphome px-8 sm:px-16 h-[523px] bg-cover bg-center">
        <div className="absolute inset-0 w-1/2 bg-gradient-to-r from-black/100 via-[rgba(0,0,0,0.5)]"></div>
        <div data-aos="fade-up">
          <div className="h-[400px] lg:h-[523px] flex flex-col justify-center items-start">
            <div className="text-white text-[32px] sm:text-6xl font-bold font-Navigo">
              We are here <br />
              to help.
            </div>
            <div className="w-[350px] sm:w-[424px] text-white text-base sm:text-xl py-4 font-Satoshi">
              Find answers to common questions or get in touch with our support
              team.
            </div>
            <div className="bg-[#00FF7F] flex rounded-3xl px-10 py-2 w-fit my-6 font-boldxl:mx-0 font-sans text-base font-bold">
              Go to FAQs
            </div>
          </div>
        </div>
      </div>

      <div className="relative lg:absolute top-[-132px] lg:top-[150px] rounded-[10px] sm:mx-auto lg:right-[6%] mx-8 sm:w-[556px] lg:w-[480px] h-[560px] bg-white p-8 shadow-2xl shadow-gray-400">
        <h2 className="text-[32px] mb-4 leading-8 font-Navigo font-bold text-left">
          Contact Us
        </h2>
        <form className="flex flex-col">
          <div className="text-base leading-[22px] font-Satoshi font-medium">
            Full Name
          </div>
          <input
            type="text"
            className="mt-[10px] mb-[8px] py-2 px-3 border bg-[#E5E5E5] border-none rounded-[10px]"
          />
          <div className="text-base leading-[22px] font-Satoshi font-medium">
            Email
          </div>
          <input
            type="email"
            className="mt-[10px] mb-[8px] py-2 px-3 border bg-[#E5E5E5] border-none rounded-[10px]"
          />
          <div className="text-base leading-[22px] font-Satoshi font-medium">
            Phone Number
          </div>
          <input
            type="tel"
            className="mt-[10px] mb-[8px] py-2 px-3 border bg-[#E5E5E5] border-none rounded-[10px]"
          />
          <div className="text-base leading-[22px] font-Satoshi font-medium">
            Message
          </div>
          <textarea className="mt-[10px] mb-[8px] py-2 px-3 border bg-[#E5E5E5]  h-[100px] border-none rounded-[10px] resize-none"></textarea>
        </form>
        <button className="w-full h-11 mt-5 bg-[#000200] rounded-[50px] text-white">
          Submit Form
        </button>
      </div>

      <div className="flex flex-col xl:flex-row xl:justify-between pl-0 xl:pl-24 pr-0 xl:pr-[100px]">
        <div className="pt-0 lg:pt-44">
          <div className="ml-8 sm:ml-0 text-4xl font-medium font-Navigo leading-[66px] text-left sm:text-center xl:text-left">
            FAQs
          </div>
          <div className="w-full px-8 sm:px-0 sm:w-[400px] xl:w-[380px] text-left sm:text-center xl:text-left m-auto xl:m-0 font-Satoshi font-medium text-xl leading-[27px]">
            Have a question? Browse through our FAQs for quick assistance.
          </div>
          <div className="relative mt-6 mx-8 sm:mx-auto sm:w-[412px] h-12 mb-0 xl:mb-5">
            <input
              type="text"
              placeholder="Search a topic..."
              onChange={onSearchWordChange}
              value={searchWord}
              className="placeholder-current w-full h-full absolute bg-[#E5E5E5] pl-6 rounded-[50px] border-none placeholder-[#7E7E7E] font-Satoshi outline-none"
            />
            <svg
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[26px] h-[26px] absolute right-5 top-1/2 -translate-y-1/2"
            >
              <path
                d="M12.6667 12.6667L16 16M1 7.66667C1 9.43478 1.70238 11.1305 2.95262 12.3807C4.20286 13.631 5.89856 14.3333 7.66667 14.3333C9.43478 14.3333 11.1305 13.631 12.3807 12.3807C13.631 11.1305 14.3333 9.43478 14.3333 7.66667C14.3333 5.89856 13.631 4.20286 12.3807 2.95262C11.1305 1.70238 9.43478 1 7.66667 1C5.89856 1 4.20286 1.70238 2.95262 2.95262C1.70238 4.20286 1 5.89856 1 7.66667Z"
                stroke="#000200"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>

        <div className="pt-20 xl:pt-[186px] pb-9 lg:pb-[76px]">
          <div className="px-8 sm:w-[620px] mx-auto">
            {currentFaqs.map((faq, index) => (
              <div key={index} className="pb-5 sm:pb-8 w-full">
                <div className="flex justify-between">
                  <div
                    className="font-Navigo font-medium text-lg sm:text-2xl leading-7 text-[#0A0B0A] cursor-pointer"
                    onClick={() => toggleQuestion(index)}
                    aria-expanded={questions[index]}
                    aria-controls={`collapseExample${index}`}
                  >
                    {faq.question}
                  </div>
                  <img
                    src="/src/assets/img/icons/plus.png"
                    className="w-5 h-5 sm:w-[26px] sm:h-[26px] ml-2 cursor-pointer"
                    onClick={() => toggleQuestion(index)}
                    aria-expanded={questions[index]}
                    aria-controls={`collapseExample${index}`}
                  />
                </div>
                <div className="w-full bg-black h-[2px] mt-4 sm:mt-7"></div>
                <div
                  className={`${questions[index] ? "block" : "hidden"
                    } !visible mt-4 text-left font-Navigo font-normal text-base w-full`}
                  id={`collapseExample${index}`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
            <div className="flex justify-center">
              {faqs.length > 9 && (
                <button
                  onClick={controlSeeMore}
                  className="bg-[#E5E5E5] pt-1 text-[#0A0B0A] font-Navigo text-base leading-5 font-medium w-[136px] h-12 rounded-[50px] xl:hidden block"
                >
                  See more
                </button>
              )}
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Help;
