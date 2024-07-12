import React, { useEffect, useRef } from 'react';

const Testimonials = () => {
  const testimonialRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (testimonialRef.current) {
        testimonialRef.current.scrollLeft += testimonialRef.current.offsetWidth;
        if (testimonialRef.current.scrollLeft + testimonialRef.current.offsetWidth >= testimonialRef.current.scrollWidth) {
          testimonialRef.current.scrollLeft = 0;
        }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container flex my-16 md:flex-row flex-col shadow-testimonialHeaderSection shrink-0 bg-no-repeat  bg-cover bg-center">
      <div className="md:flex md:w-4/12 items-center hidden bg-cover">
        <div className="flex flex-col">
          <div className="shrink-0 text-positive text-gray-800 text-4xl non-italic font-semibold tracking-8 pb-6">
            TESTIMONIALS
          </div>
          <div className="shrink-0 text-[#31baa0] max-sm:text-base text-28 fs-2 italic font-large pb-14" data-testid="TestimonialsTitle">
            Here's what students are saying...
          </div>
          <div className="flex pt-4 justify-start">
            <div className="flex justify-between gap-x-4 items-center">
              <div className="rounded-full cursor-pointer bg-neutral-light w-2 h-2" data-testid="testimonials-card-dots"></div>
              <div className="rounded-full cursor-pointer bg-neutral-light w-2 h-2" data-testid="testimonials-card-dots"></div>
              <div className="rounded-full cursor-pointer bg-neutral-light w-2 h-2" data-testid="testimonials-card-dots"></div>
              <div className="rounded-full cursor-pointer bg-primary-inverse w-3 h-3" data-testid="testimonials-card-dots"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-[#31baa0] no-scrollbar text-base md:text-xxl sm:text-3xl non-italic font-bold md:hidden block">
        Here's what students are saying
      </div>
      <div ref={testimonialRef} className="no-scrollbar flex gap-x-6 md:gap-x-10 overflow-x-auto w-full scroll-smooth">
        <div className="w-96 md:w-80 no-scrollbar mt-8 bg-[#31baa0] border shadow-lg md:mt-5 md:pt-4 shrink-0 rounded-2xl">
          <div className="md:px-8 no-scrollbar md:pb-8 bg-white px-4 pb-4 flex flex-col justify-between h-80">
            <div>
              <div className="text-gray-800 text-base md:text-lg md:italic font-normal md:leading-7 leading-6 mb-8 md:mb-10">
                Apple was a game-changer in my JEE prep journey. The experienced faculty, comprehensive modules, and constant motivation made a significant impact. Grateful for the guidance and emotional support during this crucial phase!
              </div>
            </div>
            <div className="flex justify-start items-center">
              <div className="w-14 h-14 rounded-full flex justify-center items-center bg-gray-800 md:mr-6 mr-5">
                <img alt="Mridul Agrawal" loading="lazy" width="64" height="64" decoding="async" className="w-full h-full rounded-full" src="https://i.pinimg.com/564x/c5/07/8e/c5078ec7b5679976947d90e4a19e1bbb.jpg" />
              </div>
              <div className="flex flex-col">
                <div className="text-[#31baa0] text-lg font-bold">Raghav Goyal</div>
                <div className="text-gray-400 text-xs font-normal">AIR 4 , NDA</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-96 md:w-80 no-scrollbar mt-8 bg-[#31baa0] border shadow-lg md:mt-5 md:pt-4 shrink-0 rounded-2xl">
          <div className="md:px-8 no-scrollbar md:pb-8 bg-white px-4 pb-4 flex flex-col justify-between h-80">
            <div>
              <div className="text-gray-800 text-base md:text-lg md:italic font-normal md:leading-7 leading-6 mb-8 md:mb-10">
                Apple was a game-changer in my JEE prep journey. The experienced faculty, comprehensive modules, and constant motivation made a significant impact. Grateful for the guidance and emotional support during this crucial phase!
              </div>
            </div>
            <div className="flex justify-start items-center">
              <div className="w-14 h-14 rounded-full flex justify-center items-center bg-gray-800 md:mr-6 mr-5">
                <img alt="Mridul Agrawal" loading="lazy" width="64" height="64" decoding="async" className="w-full h-full rounded-full" src="https://i.pinimg.com/564x/c5/07/8e/c5078ec7b5679976947d90e4a19e1bbb.jpg" />
              </div>
              <div className="flex flex-col">
                <div className="text-[#31baa0] text-lg font-bold">Raghav Goyal</div>
                <div className="text-gray-400 text-xs font-normal">AIR 4 , NDA</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-96 md:w-80 no-scrollbar mt-8 bg-[#31baa0] border shadow-lg md:mt-5 md:pt-4 shrink-0 rounded-2xl">
          <div className="md:px-8 no-scrollbar md:pb-8 bg-white px-4 pb-4 flex flex-col justify-between h-80">
            <div>
              <div className="text-gray-800 text-base md:text-lg md:italic font-normal md:leading-7 leading-6 mb-8 md:mb-10">
                Apple was a game-changer in my JEE prep journey. The experienced faculty, comprehensive modules, and constant motivation made a significant impact. Grateful for the guidance and emotional support during this crucial phase!
              </div>
            </div>
            <div className="flex justify-start items-center">
              <div className="w-14 h-14 rounded-full flex justify-center items-center bg-gray-800 md:mr-6 mr-5">
                <img alt="Mridul Agrawal" loading="lazy" width="64" height="64" decoding="async" className="w-full h-full rounded-full" src="https://i.pinimg.com/564x/c5/07/8e/c5078ec7b5679976947d90e4a19e1bbb.jpg" />
              </div>
              <div className="flex flex-col">
                <div className="text-[#31baa0] text-lg font-bold">Raghav Goyal</div>
                <div className="text-gray-400 text-xs font-normal">AIR 4 , NDA</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-96 md:w-80 no-scrollbar mt-8 bg-[#31baa0] border shadow-lg md:mt-5 md:pt-4 shrink-0 rounded-2xl">
          <div className="md:px-8 no-scrollbar md:pb-8 bg-white px-4 pb-4 flex flex-col justify-between h-80">
            <div>
              <div className="text-gray-800 text-base md:text-lg md:italic font-normal md:leading-7 leading-6 mb-8 md:mb-10">
                Apple was a game-changer in my JEE prep journey. The experienced faculty, comprehensive modules, and constant motivation made a significant impact. Grateful for the guidance and emotional support during this crucial phase!
              </div>
            </div>
            <div className="flex justify-start items-center">
              <div className="w-14 h-14 rounded-full flex justify-center items-center bg-gray-800 md:mr-6 mr-5">
                <img alt="Mridul Agrawal" loading="lazy" width="64" height="64" decoding="async" className="w-full h-full rounded-full" src="https://i.pinimg.com/564x/c5/07/8e/c5078ec7b5679976947d90e4a19e1bbb.jpg" />
              </div>
              <div className="flex flex-col">
                <div className="text-[#31baa0] text-lg font-bold">Raghav Goyal</div>
                <div className="text-gray-400 text-xs font-normal">AIR 4 , NDA</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Add more testimonial cards as needed */}
        
      </div>
    </div>
  );
};

export default Testimonials;
