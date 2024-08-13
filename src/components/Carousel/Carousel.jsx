import React, {useEffect, useRef, useState} from "react";
import {TECarousel, TECarouselItem} from "tw-elements-react";
import Products from "../../pages/Products/products.json";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router";
import {fetchCategoryList} from "../../store/actions";

export default function CarouselDarkVariant() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [categories, setCategories] = useState(Products.data);
  const ref = useRef(0);
  useEffect(() => {
    console.log(categories);
    if (ref.current === 0) {
      dispatch(fetchCategoryList.REQUEST());
      ref.current = 1;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <TECarousel
        showControls
        showIndicators
        crossfade
        ride="carousel"
        prevBtnIcon={
          <>
            <span className="inline-block text-black h-8 w-8 [&>svg]:h-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </span>
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Previous
            </span>
          </>
        }
        nextBtnIcon={
          <>
            <span className="inline-block text-black h-8 w-8 [&>svg]:h-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Next
            </span>
          </>
        }
        theme={{
          indicator:
            "mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none",
        }}>
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          <TECarouselItem
            itemID={1}
            className="relative float-left -mr-[100%] hidden w-full !transform-none transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none">
            <img
              src="https://img.freepik.com/free-photo/still-life-cmyk-toners-arrangement_23-2149120707.jpg?t=st=1722666038~exp=1722669638~hmac=47454cd9d51a5a924671417dec6035c9b03fb37c27d560cc1fde3681ceda8c74&w=1480"
              className="block w-full"
              style={{height: "600px"}}
              alt="..."
            />
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-black md:block">
              <h5 className="text-xl">First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={1}
            style={{height: "600px"}}
            className="relative float-left -mr-[100%] hidden w-full !transform-none transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none">
            <img
              src="https://img.freepik.com/free-vector/flat-printing-industry-illustrated_23-2148911710.jpg?t=st=1722666105~exp=1722669705~hmac=a3905eaf54ab6f369f84c42f0a232369a434649ec09da17d32ebc6fc3ea570f8&w=1060"
              className="block w-full"
              //   style={{height: "100%"}}
              alt="..."
            />
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-black md:block">
              <a href="#" className="text-xl">
                Screen Making Auxillaries
              </a>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </TECarouselItem>
        </div>
      </TECarousel>
    </>
  );
}
