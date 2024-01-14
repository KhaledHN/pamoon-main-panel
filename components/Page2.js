import { React, useState } from "react";

const Page2 = () => {
  const [activeButton, setActiveButton] = useState("button1");

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  return (
    <div className=" w-full h-[750px] bg-slate-50 text-center flex items-start md:items-center justify-center relative overflow-hidden ">
      <div className=" w-[1240px] h-full pt-[40px] px-12 ">
        <div class="w-[360px] md:w-full h-10 justify-between items-center inline-flex">
          <div class="text-slate-800 text-xl font-semibold leading-snug">
            All
          </div>
          <div class="justify-start items-center gap-2 flex">
            <div className="w-[72px] h-10 relative bg-gray-100 rounded-xl">
              <div className="h-7 left-[8px] top-[6px] absolute justify-center items-start gap-0.5 inline-flex">
                <button
                  className={`w-7 self-stretch p-[5px] hover:bg-zinc-200 rounded-md justify-center items-center inline-flex ${
                    activeButton === "button1" ? "active" : ""
                  }`}
                  onClick={() => handleButtonClick("button1")}
                >
                  <div className="grow shrink basis-0 self-stretch justify-center items-center inline-flex">
                    <div className="w-[18px] h-[18px] relative">
                      <img src="/assets/element-3.svg" alt="Button 1" />
                    </div>
                  </div>
                </button>
                <button
                  className={`self-stretch p-[5px] justify-start items-start gap-2 inline-flex ${
                    activeButton === "button2" ? "active" : ""
                  }`}
                  onClick={() => handleButtonClick("button2")}
                >
                  <div className="w-[18px] h-[18px] justify-center items-center flex">
                    <div className="w-[18px] h-[18px] relative">
                      <img src="/assets/row-vertical.svg" alt="Button 2" />
                    </div>
                  </div>
                </button>
              </div>
            </div>
            <button class="px-3 py-2 bg-violet-500 hover:scale-105 duration-200 rounded-xl shadow justify-start items-center gap-2 flex">
              <div class="w-6 h-6 justify-center items-center flex">
                <div class="w-6 h-6 relative">
                  <img src="/assets/add.svg" />
                </div>
              </div>
              <div class="text-gray-50 text-base font-normal leading-snug">
                New
              </div>
            </button>
          </div>
        </div>
        <div className=" w-full pt-[37px] justify-center items-center flex ">
          <div
            id="content1"
            className={`content ${
              activeButton === "button1" ? "visible" : "hidden"
            }`}
          >
            {/* Content for button 1 */}
            <div class="w-[1160px] h-[554px] flex-col justify-center items-center gap-8 inline-flex">
              <div class="w-[931px] justify-start items-start gap-6 inline-flex">
                <div class="flex-col justify-start items-start gap-3 inline-flex">
                  <div class="w-[214.75px] h-[213px] bg-gray-200 rounded-[20px]"></div>
                  <div class="flex-col justify-start items-start gap-2 flex">
                    <div class="text-slate-800 text-base font-semibold leading-[14px]">
                      Untitled
                    </div>
                    <div class="text-slate-600 text-sm font-normal leading-[14px]">
                      Edited 23 min ago
                    </div>
                  </div>
                </div>
                <div class="flex-col justify-start items-start gap-3 inline-flex">
                  <div class="w-[214.75px] h-[213px] bg-gray-200 rounded-[20px]"></div>
                  <div class="flex-col justify-start items-start gap-2 flex">
                    <div class="text-slate-800 text-base font-semibold leading-[14px]">
                      Untitled
                    </div>
                    <div class="text-slate-600 text-sm font-normal leading-[14px]">
                      Edited 23 min ago
                    </div>
                  </div>
                </div>
                <div class="flex-col justify-start items-start gap-3 inline-flex">
                  <div class="w-[214.75px] h-[213px] bg-gray-200 rounded-[20px]"></div>
                  <div class="flex-col justify-start items-start gap-2 flex">
                    <div class="text-slate-800 text-base font-semibold leading-[14px]">
                      Untitled
                    </div>
                    <div class="text-slate-600 text-sm font-normal leading-[14px]">
                      Edited 23 min ago
                    </div>
                  </div>
                </div>
                <div class="flex-col justify-start items-start gap-3 inline-flex">
                  <div class="w-[214.75px] h-[213px] bg-gray-200 rounded-[20px]"></div>
                  <div class="flex-col justify-start items-start gap-2 flex">
                    <div class="text-slate-800 text-base font-semibold leading-[14px]">
                      Untitled
                    </div>
                    <div class="text-slate-600 text-sm font-normal leading-[14px]">
                      Edited 23 min ago
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-[931px] justify-start items-start gap-6 inline-flex">
                <div class="flex-col justify-start items-start gap-3 inline-flex">
                  <div class="w-[214.75px] h-[213px] bg-gray-200 rounded-[20px]"></div>
                  <div class="flex-col justify-start items-start gap-2 flex">
                    <div class="text-slate-800 text-base font-semibold leading-[14px]">
                      Untitled
                    </div>
                    <div class="text-slate-600 text-sm font-normal leading-[14px]">
                      Edited 23 min ago
                    </div>
                  </div>
                </div>
                <div class="flex-col justify-start items-start gap-3 inline-flex">
                  <div class="w-[214.75px] h-[213px] bg-gray-200 rounded-[20px]"></div>
                  <div class="flex-col justify-start items-start gap-2 flex">
                    <div class="text-slate-800 text-base font-semibold leading-[14px]">
                      Untitled
                    </div>
                    <div class="text-slate-600 text-sm font-normal leading-[14px]">
                      Edited 23 min ago
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            id="content2"
            className={`content ${
              activeButton === "button2" ? "visible" : "hidden"
            }`}
          >
            {/* Content for button 2 */}
            <div class="w-[1160px] h-[396px] flex-col justify-start items-start gap-3 inline-flex">
              <button class=" w-full pl-2 pr-4 py-2 bg-white rounded-[20px] justify-between items-center inline-flex">
                <div class="justify-start items-center gap-3 flex">
                  <div class="p-2 bg-gray-100 rounded-[10px] justify-start items-center gap-2 flex">
                    <div class="justify-start items-center gap-[13.33px] flex">
                      <div class="w-6 h-6 justify-center items-center flex">
                        <div class="w-6 h-6 relative">
                          <img src="/assets/global.svg" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="text-slate-800 text-base font-semibold leading-[14px]">
                    Untitled.
                  </div>
                </div>
                <div class="justify-start items-center gap-2 flex">
                  <div class="text-slate-600 text-sm font-normal leading-[14px]">
                    Edited 23 min ago
                  </div>
                  <div class="w-[18px] h-[18px] justify-center items-center flex">
                    <button class="w-[18px] h-[18px] relative">
                      <img src="/assets/more.svg" />
                    </button>
                  </div>
                </div>
              </button>
              <button class=" w-full pl-2 pr-4 py-2 bg-white rounded-[20px] justify-between items-center inline-flex">
                <div class="justify-start items-center gap-3 flex">
                  <div class="p-2 bg-gray-100 rounded-[10px] justify-start items-center gap-2 flex">
                    <div class="justify-start items-center gap-[13.33px] flex">
                      <div class="w-6 h-6 justify-center items-center flex">
                        <div class="w-6 h-6 relative">
                          <img src="/assets/global.svg" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="text-slate-800 text-base font-semibold leading-[14px]">
                    Untitled
                  </div>
                </div>
                <div class="justify-start items-center gap-2 flex">
                  <div class="text-slate-600 text-sm font-normal leading-[14px]">
                    Edited 23 min ago
                  </div>
                  <div class="w-[18px] h-[18px] justify-center items-center flex">
                    <div class="w-[18px] h-[18px] relative">
                      <img src="/assets/more.svg" />
                    </div>
                  </div>
                </div>
              </button>
              <button class="self-stretch pl-2 pr-4 py-2 bg-white rounded-[20px] justify-between items-center inline-flex">
                <div class="justify-start items-center gap-3 flex">
                  <img class=" rounded-[10px]" src="/assets/elecLogo.png" />
                  <div class="text-slate-800 text-base font-semibold leading-[14px]">
                    Untitled
                  </div>
                </div>
                <div class="justify-start items-center gap-2 flex">
                  <div class="text-slate-600 text-sm font-normal leading-[14px]">
                    Edited 23 min ago
                  </div>
                  <div class="w-[18px] h-[18px] justify-center items-center flex">
                    <button class="w-[18px] h-[18px] relative">
                      <img src="/assets/more.svg" />
                    </button>
                  </div>
                </div>
              </button>
              <button class=" w-full pl-2 pr-4 py-2 bg-white rounded-[20px] justify-between items-center inline-flex">
                <div class="justify-start items-center gap-3 flex">
                  <div class="p-2 bg-gray-100 rounded-[10px] justify-start items-center gap-2 flex">
                    <div class="justify-start items-center gap-[13.33px] flex">
                      <div class="w-6 h-6 justify-center items-center flex">
                        <div class="w-6 h-6 relative">
                          <img src="/assets/global.svg" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="text-slate-800 text-base font-semibold leading-[14px]">
                    Untitled
                  </div>
                </div>
                <div class="justify-start items-center gap-2 flex">
                  <div class="text-slate-600 text-sm font-normal leading-[14px]">
                    Edited 23 min ago
                  </div>
                  <div class="w-[18px] h-[18px] justify-center items-center flex">
                    <button class="w-[18px] h-[18px] relative">
                      <img src="/assets/more.svg" />
                    </button>
                  </div>
                </div>
              </button>
              <button class=" w-full pl-2 pr-4 py-2 bg-white rounded-[20px] justify-between items-center inline-flex">
                <div class="justify-start items-center gap-3 flex">
                  <div class="p-2 bg-gray-100 rounded-[10px] justify-start items-center gap-2 flex">
                    <div class="justify-start items-center gap-[13.33px] flex">
                      <div class="w-6 h-6 justify-center items-center flex">
                        <div class="w-6 h-6 relative">
                          <img src="/assets/global.svg" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="text-slate-800 text-base font-semibold leading-[14px]">
                    Untitled
                  </div>
                </div>
                <div class="justify-start items-center gap-2 flex">
                  <div class="text-slate-600 text-sm font-normal leading-[14px]">
                    Edited 23 min ago
                  </div>
                  <div class="w-[18px] h-[18px] justify-center items-center flex">
                    <button class="w-[18px] h-[18px] relative">
                      <img src="/assets/more.svg" />
                    </button>
                  </div>
                </div>
              </button>
              <button class="self-stretch pl-2 pr-4 py-2 bg-white rounded-[20px] justify-between items-center inline-flex">
                <div class="justify-start items-center gap-3 flex">
                  <img class=" rounded-[10px]" src="/assets/CirLogo.png" />
                  <div class="text-slate-800 text-base font-semibold leading-[14px]">
                    Untitled
                  </div>
                </div>
                <div class="justify-start items-center gap-2 flex">
                  <div class="text-slate-600 text-sm font-normal leading-[14px]">
                    Edited 23 min ago
                  </div>
                  <div class="w-[18px] h-[18px] justify-center items-center flex">
                    <button class="w-[18px] h-[18px] relative">
                      <img src="/assets/more.svg" />
                    </button>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
