import React, { useContext,useState,useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import AboveNav from "../components/AboveNav"
import Navbar from "../components/Navbar"

import TransitionContext from "../context/TransitionContext";
import Footer from "../components/Footer";
import Spinner from "../components/Spinner";
export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate a network request or some async operation
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });
  const main = useRef();
  const { completed } = useContext(TransitionContext);
  const scrollTween = useRef();
  const snapTriggers = useRef([]);
  const { contextSafe } = useGSAP(
    () => {
      if (!completed) return;
      let panels = gsap.utils.toArray(".panel"),
        scrollStarts = [0],
        snapScroll = (value) => value; // for converting a pixel-based scroll value to the closest panel scroll position

      // create a ScrollTrigger for each panel that's only concerned about figuring out when its top hits the top of the viewport. We'll use the "start" of that ScrollTrigger to figure out snapping positions.
      panels.forEach((panel, i) => {
        snapTriggers.current[i] = ScrollTrigger.create({
          trigger: panel,
          start: "top top",
        });
      });

      // once all the triggers have calculated their start/end, create the snap function that'll accept an overall progress value for the overall page, and then return the closest panel snapping spot based on the direction of scroll
      ScrollTrigger.addEventListener("refresh", () => {
        scrollStarts = snapTriggers.current.map((trigger) => trigger.start); // build an Array with just the starting positions where each panel hits the top of the viewport
        snapScroll = ScrollTrigger.snapDirectional(scrollStarts); // get a function that we can feed a pixel-based scroll value to and a direction, and then it'll spit back the closest snap position (in pixels)
      });

      ScrollTrigger.observe({
        type: "wheel,touch",
        onChangeY(self) {
          if (!scrollTween.current) {
            // find the closest snapping spot based on the direction of scroll
            let scroll = snapScroll(
              self.scrollY() + self.deltaY,
              self.deltaY > 0 ? 1 : -1
            );
            goToSection(scrollStarts.indexOf(scroll)); // scroll to the index of the associated panel
          }
        },
      });

      ScrollTrigger.refresh();
    },
    {
      dependencies: [completed],
      scope: main,
      revertOnUpdate: true,
    }
  );

  const goToSection = contextSafe((i) => {
    console.log("scroll to", i);
    scrollTween.current = gsap.to(window, {
      scrollTo: { y: snapTriggers.current[i].start, autoKill: false },
      duration: 1,
      onComplete: () => (scrollTween.current = null),
      overwrite: true,
    });
  });

  return (
    <>
          
            
      <main ref={main}>
       
            <div>
              <div
                id="carouselExampleAutoplaying"
                className="carousel slide  h-screen  z-[0] "
                data-bs-ride="carousel"
              >
                <div className="carousel-inner ">
                  <div className="carousel-item active">
                    <img
                      src="./crousel3-2.jpg"
                      class="d-block  w-100 "
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img src="./clg.jpg" class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src="./crousel1.jpg" class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src="./crousel4.jpg" class="d-block w-100" alt="..." />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleAutoplaying"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleAutoplaying"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>

              {/* SECTION 1 */}
              <section className="panel light bg-[url('./section1-4.png')] bg-cover ">
                <div className="w-full h-full flex flex-col mt-16 ">
                  {/* SHAPE DIVIDER */}
                  <div className="custom-shape-divider-top-1727061075 absolute top-0 left-0 w-full overflow-hidden leading-none">
                    <svg
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1200 120"
                      preserveAspectRatio="none"
                      className="relative block w-[calc(100%+1.3px)] h-[131px]"
                    >
                      <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        className="shape-fill fill-[#172554]"
                      ></path>
                    </svg>
                  </div>
                  <div className="h-10 font-custom   ">
                    <h1 className="text-black   text-4xl  ">
                      About The Conference
                    </h1>
                    <span className="relative inline-block  left-0 bottom-0 w-72 h-1 bg-red-900"></span>
                  </div>
                  <div className="flex felx-row  flex-grow items-center justify-center">
                    <div className="h-80 w-2/3 items-center justify-center text-center border-r-4 border-dotted border-black">
                      <h1 className="font-bold">DATA</h1>
                    </div>
                    <div className="items-center gap-2  mt-4 ml-2 flex flex-col">
                      {/* CARD 1 */}
                      <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
                        <div class="shrink-0">
                          <img
                            class="h-12 w-12 rounded-full"
                            src="..."
                            alt="Profile Photo"
                          />
                        </div>
                        <div>
                          <div class="text-xl  text-black font-bold">
                            Dr. Harsh Vikram Singh
                          </div>
                          <p class="text-gray-500 text-center">
                            <h1 className="font-bold">Coordinator</h1>
                            <hr className="border-t-2 border-black  " />
                            <h2 className="">
                              Professor & Head of Electronics Engineering
                              Department
                            </h2>
                            <br />
                            <h1 className="text-left font-bold">
                              Mobile: 9415763939
                            </h1>
                            <h1 className="text-left font-bold">
                              Email: icevet24@gmail.com
                            </h1>
                          </p>
                        </div>
                      </div>

                      {/* CARD 2 */}
                      <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
                        <div class="shrink-0">
                          <img
                            class="h-12 w-12 rounded-full"
                            src="..."
                            alt="Profile Photo"
                          />
                        </div>
                        <div>
                          <div class="text-xl  text-black font-bold">
                            Dr. Som Pal Gangwar
                          </div>
                          <p class="text-gray-500 text-center">
                            <h1 className="font-bold">Co-Coordinator</h1>
                            <hr className="border-t-2 border-black  " />
                            <h2 className="">
                              Associate Professor, Electronics Engineering
                              Department
                            </h2>
                            <br />
                            <h1 className="text-left font-bold">
                              Mobile: 8765890822
                            </h1>
                            <h1 className="text-left font-bold">
                              Email: sompalgangwar@knit.ac.in
                            </h1>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* SECTION 2 */}
              <section className="panel light">
                <div className="w-full h-full flex flex-col mt-16 ">
                  {/* SHAPE DIVIDER */}
                  <div className="custom-shape-divider-top-1727064263 absolute top-0 left-0 w-full overflow-hidden leading-none">
                    <svg
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1200 120"
                      preserveAspectRatio="none"
                      className="relative block w-[calc(100%+1.3px)] h-[60px] [transform:rotateY(180deg)]"
                    >
                      <path
                        d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
                        class="shape-fill fill-[#172554]"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h1 className="text-black   text-4xl  ">
                      Paper Submission
                    </h1>
                    <span className="relative inline-block  left-0 bottom-0 w-72 h-1 bg-red-900"></span>
                  </div>
                  <div className="flex felx-row  flex-grow ">
                    <div className="h-full font-semibold w-2/3 items-center justify-center text-center   border-black">
                      <h1 className="bg-blue-500 flex justify-center items-center text-white font-bold p-2 mx-2 my-4  rounded  ">
                        PAPER SUBMISSION GUIDELINES
                      </h1>
                      <h2
                        className="p-1 m-1 flex justify-start text-start
              "
                      >
                        1. Full Text Manuscripts (limited to 6-pages) should be
                        submitted by one of the authors of the manuscript either
                        through e-mail OR through Easy Chair . Only PDF (*.pdf)
                        / Word (*.doc/.docx) files will be considered for review
                      </h2>
                      <h2 className="p-2 m-1 flex justify-start text-start">
                        2. Full text paper submissions will be peer-reviewed by
                        the members of the Technical Committee & Editorial Board
                        to assess their quality and relevance in 1st stage. The
                        reviewers' recommendations will be final and binding.
                      </h2>
                      <h2 className="p-1 m-1 flex justify-start text-start">
                        3. Hard bound full length paper proceedings with ISSN
                        number will be provided to all the registered candidates
                        (in 1st stage) along with the certificate and conference
                        kit.
                      </h2>
                      <h2 className="p-1 m-1 flex justify-start text-start">
                        4. Some of selected papers will be published in
                        Scopus/Web of Science conference series after 2 nd stage
                        review.
                      </h2>
                      <h2 className="p-1 m-1 flex justify-start text-start">
                        5. Two papers with substantial quality contribution from
                        the authors will be selected for the BEST PAPER AWARD,
                        to be given in the conference
                      </h2>
                      <h2 className="p-1 m-1 flex justify-start ">
                        6. Conference will be organized in hybrid mode
                        (Online/Offline)
                      </h2>
                    </div>
                    <div className="w-1/3 ">
                      <div class="container mx-auto p-4">
                        <div class="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                          <div class="px-6 py-4">
                            <button class="text-l bg-red-950 font-bold mb-4 text-center text-white px-3 py-1 m-1">
                              Important Dates
                            </button>
                            <div class="border-t border-gray-300">
                              <div class="flex justify-between py-2">
                                <span class="font-semibold">Event</span>
                                <span class="font-semibold">Date</span>
                              </div>
                              <div class="border-t border-gray-200">
                                <div class="flex justify-between py-2">
                                  <span class="text-gray-700">
                                    Last Date for Paper Submission
                                  </span>
                                  <span class="text-gray-700">
                                    Oct 20, 2024
                                  </span>
                                </div>
                                <div class="flex justify-between py-2">
                                  <span class="text-gray-700">
                                    Notification for Selection
                                  </span>
                                  <span class="text-gray-700">
                                    Nov 10, 2024
                                  </span>
                                </div>
                                <div class="flex justify-between py-2">
                                  <span class="text-gray-700">
                                    Last Date for Registration
                                  </span>
                                  <span class="text-gray-700">
                                    Nov 20, 2024
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* SECTION 3 */}
              <section className="panel light">
                <div className="w-full h-full flex flex-col mt-16 ">
                  {/* SHAPE DIVIDER */}
                  <div className="custom-shape-divider-top-1727064263 absolute top-0 left-0 w-full overflow-hidden leading-none">
                    <svg
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1200 120"
                      preserveAspectRatio="none"
                      className="relative block w-[calc(100%+1.3px)] h-[60px] [transform:rotateY(180deg)]"
                    >
                      <path
                        d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
                        class="shape-fill fill-[#172554]"
                      ></path>
                    </svg>
                  </div>
                  <div className="h-10 border-b-4 border-solid border-red-500">
                    <h1 className="text-black  font-bold text-4xl font-mono ">
                      Speakers
                    </h1>
                  </div>
                  <div className="flex felx-row  flex-grow border-8 border-yellow-300 "></div>
                </div>
              </section>

              {/* SECTION 4 */}
              <section className="panel light">
                <div className="w-full h-full flex flex-col mt-16 ">
                  {/* SHAPE DIVIDER */}
                  <div className="custom-shape-divider-top-1727064263 absolute top-0 left-0 w-full overflow-hidden leading-none">
                    <svg
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1200 120"
                      preserveAspectRatio="none"
                      className="relative block w-[calc(100%+1.3px)] h-[60px] [transform:rotateY(180deg)]"
                    >
                      <path
                        d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
                        class="shape-fill fill-[#172554]"
                      ></path>
                    </svg>
                  </div>
                  <div className="h-10 border-b-4 border-solid border-red-500">
                    <h1 className="text-black  font-bold text-4xl font-mono ">
                      ABOUT THE CONFERENCE
                    </h1>
                  </div>
                  <div className="flex felx-row  flex-grow ">
                    <div className="h-full  w-2/3 items-center justify-center text-center border-r-4 border-dotted border-black">
                      <h1 className="font-bold">DATA</h1>
                    </div>
                    <div>
                      <h1>hiiiii</h1>
                    </div>
                  </div>
                </div>
              </section>
            </div>
        
      </main>
       
      <Footer className=" mt-10" />



    </>
  );
}
