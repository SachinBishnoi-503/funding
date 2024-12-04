import React, { useState } from 'react';

const Faq = () => {
    // Manage active accordion state
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        // Toggle between opening and closing the current accordion section
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className='bg-eggshell w-full min-h-[560px] pb-[60px]'>
            <div className="container">
                <div className='flex-col flex justify-center items-center mx-auto pt-[70px]'>
                    <p className='text-off-grey text-sm font-poppins font-medium '>STILL HAVE QUESTIONS?</p>
                    <h2 className='text-custom-lg leading-custom-lg text-charcoal mt-5 font-semibold font-abril'>Learn more with FAQ</h2>
                </div>
                <div id="accordion-flush" className='mt-[24px]'>
                    {/* 1th accordian */}
                    <h2 id="accordion-flush-heading-1">
                        <button
                            type="button"
                            className="flex items-center justify-between w-full py-5 font-medium font-poppins font-midium text-xl text-charcoal border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
                            onClick={() => toggleAccordion(1)}
                            aria-expanded={activeIndex === 1 ? "true" : "false"}
                            aria-controls="accordion-flush-body-1"
                        >
                            <span>Who is eligible for a Growth Plan?</span>
                            <svg
                                data-accordion-icon
                                className={`w-3 h-3 ${activeIndex === 1 ? 'rotate-180' : ''} shrink-0`}
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 10 6"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 5 5 1 1 5"
                                />
                            </svg>
                        </button>
                    </h2>
                    <div
                        id="accordion-flush-body-1"
                        className={`${activeIndex === 1 ? 'block' : 'hidden'} py-5 border-b border-gray-200 dark:border-gray-700`}
                        aria-labelledby="accordion-flush-heading-1"
                    >
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.
                        </p>
                    </div>
                    {/* 2th accordian */}

                    <h2 id="accordion-flush-heading-2">
                        <button
                            type="button"
                            className="flex items-center justify-between w-full py-5 font-medium font-poppins font-midium text-xl text-charcoal border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
                            onClick={() => toggleAccordion(2)}
                            aria-expanded={activeIndex === 2 ? "true" : "false"}
                            aria-controls="accordion-flush-body-2"
                        >
                            <span>How much funding can I qualify for?</span>
                            <svg
                                data-accordion-icon
                                className={`w-3 h-3 ${activeIndex === 2 ? 'rotate-180' : ''} shrink-0`}
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 10 6"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 5 5 1 1 5"
                                />
                            </svg>
                        </button>
                    </h2>
                    <div
                        id="accordion-flush-body-2"
                        className={`${activeIndex === 2 ? 'block' : 'hidden'} py-5 border-b border-gray-200 dark:border-gray-700`}
                        aria-labelledby="accordion-flush-heading-2"
                    >
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.
                        </p>
                    </div>
                    {/* 3th accordian */}
                    <h2 id="accordion-flush-heading-3">
                        <button
                            type="button"
                            className="flex items-center justify-between w-full py-5 font-medium font-poppins font-midium text-xl text-charcoal border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
                            onClick={() => toggleAccordion(3)}
                            aria-expanded={activeIndex === 3 ? "true" : "false"}
                            aria-controls="accordion-flush-body-3"
                        >
                            <span>What is the cost of the Growth Plan?</span>
                            <svg
                                data-accordion-icon
                                className={`w-3 h-3 ${activeIndex === 3 ? 'rotate-180' : ''} shrink-0`}
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 10 6"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 5 5 1 1 5"
                                />
                            </svg>
                        </button>
                    </h2>
                    <div
                        id="accordion-flush-body-3"
                        className={`${activeIndex === 3 ? 'block' : 'hidden'} py-5 border-b border-gray-200 dark:border-gray-700`}
                        aria-labelledby="accordion-flush-heading-3"
                    >
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product.
                        </p>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Learn more about these technologies:
                        </p>
                    </div>
                    {/* 4th accordian */}
                    <h2 id="accordion-flush-heading-4">
                        <button
                            type="button"
                            className="flex font-poppins font-midium text-xl text-charcoal items-center justify-between w-full py-5 font-medium  border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
                            onClick={() => toggleAccordion(4)}
                            aria-expanded={activeIndex === 4 ? "true" : "false"}
                            aria-controls="accordion-flush-body-3"
                        >
                            <span>Does 8fig charge money for its services?</span>
                            <svg
                                data-accordion-icon
                                className={`w-3 h-3 ${activeIndex === 4 ? 'rotate-180' : ''} shrink-0`}
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 10 6"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 5 5 1 1 5"
                                />
                            </svg>
                        </button>
                    </h2>
                    <div
                        id="accordion-flush-body-4"
                        className={`${activeIndex === 4 ? 'block' : 'hidden'} py-5 border-b border-gray-200 dark:border-gray-700`}
                        aria-labelledby="accordion-flush-heading-4"
                    >
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product.
                        </p>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Learn more about these technologies:
                        </p>
                    </div>
                </div>
            </div>
       </div>
    );
};

export default Faq;
