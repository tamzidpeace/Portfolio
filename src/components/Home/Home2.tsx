import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Home2() {
  return (
    <section
      className="py-16 bg-slate-900/50"
      id="about"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center mb-16">
          {/* Text Content */}
          <div className="lg:col-span-2 space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              LET ME <span className="text-purple-400">INTRODUCE</span> MYSELF
            </h1>

            <div className="text-lg text-slate-300 leading-relaxed space-y-4">
              <p>
                I fell in love with programming and I like to explore new
                technologies.
              </p>

              <p>
                I am fluent in
                <span className="text-purple-400 font-semibold">
                  {" "}
                  PHP, Javascript & Dart.
                </span>
              </p>

              <p>
                My field of Interest's are building new
                <span className="text-purple-400 font-semibold">
                  {" "}
                  Mobile, Web Technologies and Products
                </span>
              </p>

              <p>
                Whenever possible, I apply my passion for developing products
                with{" "}
                <span className="text-purple-400 font-semibold">
                  Laravel, React, Vue
                </span>{" "}
                and
                <span className="text-purple-400 font-semibold">
                  {" "}
                  Modern Javascript Library and Flutter
                </span>
              </p>
            </div>
          </div>

          {/* Avatar Image */}
          <div className="flex justify-center lg:justify-end">
            <Tilt className="w-full max-w-sm">
              <img
                src={myImg}
                className="w-full h-auto rounded-full shadow-2xl border-4 border-purple-400/30 hover:border-purple-400 transition-colors duration-300"
                alt="avatar"
              />
            </Tilt>
          </div>
        </div>

        {/* Social Links Section */}
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            FIND ME ON
          </h1>
          <p className="text-lg text-slate-300 mb-8">
            Feel free to <span className="text-purple-400">connect</span> with
            me
          </p>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/tamzidpeace"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full text-white hover:text-purple-400 transition-all duration-200 hover:scale-110"
              aria-label="GitHub"
            >
              <AiFillGithub className="text-2xl" />
            </a>

            <a
              href="mailto:tamjedpeace@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full text-white hover:text-purple-400 transition-all duration-200 hover:scale-110"
              aria-label="Email"
            >
              <SiGmail className="text-2xl" />
            </a>

            <a
              href="https://www.linkedin.com/in/arafat-kamal-3637b4122/"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full text-white hover:text-purple-400 transition-all duration-200 hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home2;