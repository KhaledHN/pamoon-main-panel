import React, { useState, useEffect, useRef } from "react";

const Page1 = () => {
  const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] =
    useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  const notificationDropdownRef = useRef(null);
  const userDropdownRef = useRef(null);

  const handleMoreClick = () => {
    setIsNotificationDropdownOpen((prev) => !prev);
    // Close user dropdown if open
    setIsUserDropdownOpen(false);
  };

  const handleUserClick = () => {
    setIsUserDropdownOpen((prev) => !prev);
    // Close notification dropdown if open
    setIsNotificationDropdownOpen(false);
  };

  const handleContentClick = (event) => {
    event.stopPropagation();
  };

  const handleClickOutside = (event) => {
    if (
      notificationDropdownRef.current &&
      !notificationDropdownRef.current.contains(event.target)
    ) {
      setIsNotificationDropdownOpen(false);
    }

    if (
      userDropdownRef.current &&
      !userDropdownRef.current.contains(event.target)
    ) {
      setIsUserDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="w-full md:h-[440px] h-[1010px] duration-200 bg-white text-center flex items-start md:items-center justify-center overflow-hidden mx-auto bg-no-repeat bg-right  "
      style={{ backgroundImage: 'url("/assets/Union.png")' }}
    >
      <div className="w-full md:max-w-[1240px] h-full pt-[40px] duration-200 px-4 md:px-12 ">
        <div className="w-full justify-between items-start flex duration-200 flex-col md:flex-row">
          <div className="md:w-[1240px]">
            <p className="text-left text-slate-800 text-[37.05px] font-medium leading-[51.87px] ">
              Welcome Back, Alexander 🙌✨
            </p>
            <p className="md:w-[580px] w-full pt-[20px] pl-1 text-left text-slate-700 text-[18px] font-light leading-tight">
              Fermentum aenean adipiscing arcu a quis. Nisi est faucibus
              maecenas netus ipsum praesent euismod. Ultrices at tellus eu augue
              ultrices egestas.
            </p>
          </div>

          {/* notification and profile pic */}
          <div className="mt-4 md:mt-0 md:ml-auto">
            <div className="hidden md:flex">
              {/* Render only on larger screens (hidden on mobile) */}
              <div className="w-[104px] h-[52px] px-2 py-1.5 bg-gray-100 rounded-xl shadow-lg justify-center items-center gap-2 inline-flex">
                <div className="flex items-center space-x-4">
                  {/* Notification Icon */}
                  <div
                    className="relative cursor-pointer"
                    onClick={handleMoreClick}
                    ref={notificationDropdownRef}
                  >
                    <div className="w-6 h-[50px] flex relative hover:scale-110 duration-200">
                      <img
                        src="/assets/notification-bing.svg"
                        alt="Notification"
                      />
                    </div>
                    {isNotificationDropdownOpen && (
                      <div
                        className="absolute top-full right-0 bg-gray-200 shadow-lg p-4 w-48 h-[100px] rounded-xl"
                        onClick={handleContentClick}
                        style={{ cursor: "default" }}
                      >
                        <p className="text-sm text-zinc-500 opacity-90">
                          No notification found
                        </p>
                      </div>
                    )}
                  </div>

                  {/* User Image */}
                  <div
                    className="relative cursor-pointer"
                    onClick={handleUserClick}
                    ref={userDropdownRef}
                  >
                    <div className="pb-2 pt-2">
                      <img
                        className="w-9 h-9 flex rounded-[39px] cursor-pointer hover:scale-110 duration-200"
                        src="/assets/black-man.png"
                        alt="User"
                      />
                    </div>
                    {isUserDropdownOpen && (
                      <div
                        className="absolute top-full right-0 bg-gray-200 shadow-lg p-4 w-36 h-[100px] rounded-xl"
                        onClick={handleContentClick}
                        style={{ cursor: "default" }}
                      >
                        {/* User dropdown content */}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="md:hidden">
              {/* Render only on smaller screens (hidden on desktop) */}
              <div className="fixed top-0 right-0 m-4">
                <div className="w-[104px] h-[52px] px-2 py-1.5 bg-gray-100 rounded-xl shadow-lg justify-center items-center gap-2 inline-flex">
                  <div className="flex items-center space-x-4">
                    {/* Notification Icon */}
                    <div
                      className="relative cursor-pointer"
                      onClick={handleMoreClick}
                      ref={notificationDropdownRef}
                    >
                      <div className="w-6 h-[50px] flex relative hover:scale-110 duration-200">
                        <img
                          src="/assets/notification-bing.svg"
                          alt="Notification"
                        />
                      </div>
                      {isNotificationDropdownOpen && (
                        <div
                          className="absolute top-full right-0 bg-gray-200 shadow-lg p-4 w-48 h-[100px] rounded-xl"
                          onClick={handleContentClick}
                          style={{ cursor: "default" }}
                        >
                          <p className="text-sm text-zinc-500 opacity-90">
                            No notification found
                          </p>
                        </div>
                      )}
                    </div>

                    {/* User Image */}
                    <div
                      className="relative cursor-pointer"
                      onClick={handleUserClick}
                      ref={userDropdownRef}
                    >
                      <div className="pb-2 pt-2">
                        <img
                          className="w-9 h-9 flex rounded-[39px] cursor-pointer hover:scale-110 duration-200"
                          src="/assets/black-man.png"
                          alt="User"
                        />
                      </div>
                      {isUserDropdownOpen && (
                        <div
                          className="absolute top-full right-0 bg-gray-200 shadow-lg p-4 w-36 h-[100px] rounded-xl"
                          onClick={handleContentClick}
                          style={{ cursor: "default" }}
                        >
                          {/* User dropdown content */}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" w-full px-2 flex justify-center ">
          <div className=" w-full h-full pt-[48px] md:flex md:justify-between px-4 mx-auto ">
            {/* card 1 */}
            <div className=" w-[295px] h-[180px] hover:scale-105 duration-150 relative shadow-lg rounded-3xl mb-8 md:mb-0">
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
                <div class="w-[29.96px] h-[6.84px] left-[6.78px] top-[38.78px] absolute bg-violet-800 rounded-tl-[40px] rounded-tr-[40px]"></div>
                <div class="w-[46px] h-[46px] left-0 top-0 absolute  bg-opacity-20 rounded-[10px] shadow-inner backdrop-blur-[13.40px]"></div>
                <div class="w-6 h-6 left-[11px] top-[11px] absolute justify-center items-center inline-flex">
                  <div class="w-6 h-6 relative">
                    <img src="/assets/magicpen.svg" />
                  </div>
                </div>
              </div>
            </div>

            {/* card 2 */}
            <div className="w-[295px] h-[180px] hover:scale-105 duration-150 relative shadow-lg rounded-3xl mb-8 md:mb-0">
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
                  <div class="w-6 h-6 relative">
                    <img src="/assets/colorfilter.svg" />
                  </div>
                </div>
              </div>
            </div>

            {/* card 3 */}
            <div className="w-[295px] h-[183px] hover:scale-105 duration-150 relative shadow-lg rounded-3xl">
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
                  <div class="w-6 h-6 relative">
                    <img src="/assets/video-play.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;
