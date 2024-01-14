import { React, useState } from "react";

const Page1 = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMoreClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="w-full md:h-[428px] h-[1000px] bg-white text-center flex items-start md:items-center justify-center overflow-hidden mx-auto ">
      <div className="w-full md:w-[80%] h-full pt-[40px] px-4 md:px-12 ">
        <div className="w-full justify-between items-start flex flex-col md:flex-row">
          <div className="md:w-[1240px]">
            <p className="text-left text-slate-800 text-[37.05px] font-medium leading-[51.87px] ">
              Welcome Back, Alexander 🙌✨
            </p>
            <p className="md:w-[580px] w-full pt-[20px] text-left text-slate-700 text-base font-light leading-tight">
              Fermentum aenean adipiscing arcu a quis. Nisi est faucibus
              maecenas netus ipsum praesent euismod. Ultrices at tellus eu augue
              ultrices egestas.
            </p>
          </div>
          <div className=" mt-4 md:mt-0">
            <div className="w-[104px] h-[52px] px-2 py-1.5 bg-gray-100 rounded-xl shadow-lg justify-center items-center gap-2 inline-flex">
              <div
                className="relative cursor-pointer"
                onClick={handleMoreClick}
              >
                <div className="justify-center items-center flex">
                  <div className="p-2 rounded-[40px] justify-center items-center gap-2 flex">
                    <div className="justify-start items-center gap-[13.33px] flex">
                      <div className="w-6 h-6 justify-center items-center flex">
                        <div className="w-6 h-6 relative hover:scale-110 duration-200 ">
                          <img
                            src="/assets/notification-bing.svg"
                            alt="Notification"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {isDropdownOpen && (
                  <div className="absolute top-full right-0 bg-gray-200 shadow-lg p-4 w-48 h-[100px] rounded-xl">
                    <p className="text-sm text-zinc-500 opacity-90 ">
                      No notification found
                    </p>
                  </div>
                )}
              </div>
              <img
                className="w-10 h-10 rounded-[39px]"
                src="/assets/black-man.png"
                alt="User"
              />
            </div>
          </div>
        </div>

        <div className="w-full h-full pt-[48px] md:flex md:justify-between mx-auto ">
          <div className="w-[295px]  h-[180px] relative shadow-lg rounded-3xl mb-8 md:mb-0">
            <div class="w-[298px] h-[185px] left-0 top-0 absolute bg-violet-200 rounded-[20px] border border-white"></div>
            <div class="left-[20px] top-[117px] absolute flex-col justify-start items-start gap-2 inline-flex">
              <div class="text-slate-800 text-base font-semibold leading-[14px]">
                Pamoon AI
              </div>
              <div class="text-slate-600 text-sm font-normal leading-[14px]">
                Lorem ipsum
              </div>
            </div>
            <div class="px-3 py-2 left-[168px] top-[19px] absolute bg-white bg-opacity-10 rounded-[10px] shadow-lg justify-center items-center gap-2 inline-flex">
              <div class="text-violet-500 text-sm font-normal leading-[14px]">
                Coming Soon
              </div>
            </div>
            <div class="w-[46px] h-[46px] left-[17px] top-[19px] absolute">
              <div class="w-[29.96px] h-[6.84px] left-[6.78px] top-[38.78px] absolute bg-violet-600 rounded-tl-[40px] rounded-tr-[40px]"></div>
              <div class="w-[46px] h-[46px] left-0 top-0 absolute  bg-opacity-20 rounded-[10px] shadow-inner backdrop-blur-[13.40px]"></div>
              <div class="w-6 h-6 left-[11px] top-[11px] absolute justify-center items-center inline-flex">
                <div class="w-6 h-6 relative"></div>
              </div>
            </div>
          </div>

          <div className="w-[295px] h-[180px] relative shadow-lg rounded-3xl mb-8 md:mb-0">
            <div class="w-[296px] h-[183px] left-0 top-0 absolute bg-emerald-200 rounded-[20px] border border-white"></div>
            <div class="left-[20px] top-[117px] absolute flex-col justify-start items-start gap-2 inline-flex">
              <div class="text-slate-800 text-base font-semibold leading-[14px]">
                Template Library
              </div>
              <div class="text-slate-600 text-sm font-normal leading-[14px]">
                Explore web site
              </div>
            </div>
            <div class="w-[46px] h-[46px] left-[17.33px] top-[19px] absolute">
              <div class="w-[29.96px] h-[6.84px] left-[7.44px] top-[38.78px] absolute bg-emerald-500 rounded-tl-[40px] rounded-tr-[40px]"></div>
              <div class="w-[46px] h-[46px] left-0 top-0 absolute bg-opacity-20 rounded-[10px] shadow-inner backdrop-blur-[10px]"></div>
              <div class="w-6 h-6 left-[11px] top-[11px] absolute justify-center items-center inline-flex">
                <div class="w-6 h-6 relative"></div>
              </div>
            </div>
          </div>

          <div className="w-[295px] h-[183px] relative shadow-lg rounded-3xl">
            <div class="w-[296px] h-[183px] left-0 top-0 absolute bg-amber-100 rounded-[20px]"></div>
            <div class="left-[20px] top-[117px] absolute flex-col justify-start items-start gap-2 inline-flex">
              <div class="text-slate-800 text-base font-semibold leading-[14px]">
                Watch Tutorials
              </div>
              <div class="text-slate-600 text-sm font-normal leading-[14px]">
                Learn Pammon
              </div>
            </div>
            <div class="w-[46px] h-[46px] left-[16.67px] top-[19px] absolute">
              <div class="w-[29.96px] h-[6.84px] left-[7.11px] top-[38.78px] absolute bg-orange-500 rounded-tl-[40px] rounded-tr-[40px]"></div>
              <div class="w-[46px] h-[46px] left-0 top-0 absolute bg-white bg-opacity-10 rounded-[10px] shadow-inner backdrop-blur-[9.90px]"></div>
              <div class="w-6 h-6 left-[11px] top-[11px] absolute justify-center items-center inline-flex">
                <div class="w-6 h-6 relative"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;
