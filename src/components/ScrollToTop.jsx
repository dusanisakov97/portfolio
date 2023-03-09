import { useEffect, useState } from "react";
import { Link } from "react-scroll";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <Link to="home" smooth={true} duration={500}>
          <button
            type="button"
            data-te-ripple-init
            data-te-ripple-color="light"
            className="fixed bottom-5 right-5 inline-block rounded-full bg-danger p-2 uppercase border-solid border-white border-2 leading-normal bg-[#1b3fab] text-white shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              strokeWidth="2.5"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                fillRule="evenodd"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </Link>
      )}
    </>
  );
}

export default ScrollToTop;
