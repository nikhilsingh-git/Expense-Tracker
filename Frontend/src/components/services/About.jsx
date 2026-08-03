import about from "../../assets/about.png";
import { FaWallet, FaChartPie, FaBullseye, FaShieldAlt } from "react-icons/fa";
import { HiChartBar } from "react-icons/hi";
import {
  FaStar,
  FaCheckCircle,
  FaReact,
  FaNodeJs,
  FaRocket,
  FaMoon,
  FaFilePdf,
  FaCloud,
  FaLightbulb,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiJsonwebtokens,
  SiTailwindcss,
  SiAxios,
} from "react-icons/si";
import {
  MdEmail,
  MdOutlineCurrencyExchange,
  MdAnalytics,
} from "react-icons/md";
import { AiOutlineFileExcel } from "react-icons/ai";

const About = () => {
  return (
    <>
      <div className="bg-[#131c28] w-full px-5 py-5 ">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 text-white">
              <span className="text-cyan-400 text-3xl font-semibold font-sans uppercase tracking-widest">
                About
              </span>

              <h1 className="text-4xl md:text-5xl font-bold mt-3 leading-tight">
                Expense <span className="text-cyan-400">Tracker</span>
              </h1>

              <p className="text-gray-300 mt-6 text-lg leading-8">
                Expense Tracker is a simple and smart personal finance
                management application designed to help you take control of your
                money and build a better financial future.
              </p>

              <p className="text-gray-400 mt-5 text-lg leading-8">
                Whether you want to track your daily expenses, manage your
                income, or analyze your spending, Expense Tracker makes it easy,
                secure, and effortless.
              </p>

              <button className="mt-8 px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 transition duration-300 font-semibold shadow-lg shadow-cyan-500/30">
                Learn More
              </button>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <img
                src={about} // Apni image ka path yaha do
                alt="Expense Tracker"
                className="w-full max-w-md rounded-2xl shadow-2xl shadow-cyan-500/20 hover:scale-105 transition duration-300"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-8 px-10 py-16">
          <div className="w-80 h-52 bg-[#111827] border border-[#132739] rounded-2xl shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-2 transition-all duration-300 p-6">
            <div className="w-14 h-14 rounded-full bg-cyan-500 flex justify-center items-center text-white text-2xl">
              <FaWallet />
            </div>

            <h1 className="text-white text-xl font-semibold mt-5">
              Expense Management
            </h1>

            <p className="text-gray-400 text-sm mt-0.5 leading-6">
              Easily record your daily expenses and keep every transaction
              organized in one secure place.
            </p>
          </div>

          <div className="w-80 h-52 bg-[#111827] border border-[#132739] rounded-2xl shadow-lg hover:shadow-green-500/20 hover:-translate-y-2 transition-all duration-300 p-6">
            <div className="w-14 h-14 rounded-full bg-green-500 flex justify-center items-center text-white text-2xl">
              <FaChartPie />
            </div>

            <h1 className="text-white text-xl font-semibold mt-5">
              Smart Analytics
            </h1>

            <p className="text-gray-400 text-sm mt-0.5 leading-6">
              Visualize your income and expenses with interactive charts to
              understand your spending habits.
            </p>
          </div>

          <div className="w-80 h-52 bg-[#111827] rounded-2xl shadow-lg hover:shadow-yellow-500/20 hover:-translate-y-2 transition-all duration-300 p-6">
            <div className="w-14 h-14 rounded-full bg-yellow-500 flex justify-center items-center text-white text-2xl">
              <FaBullseye />
            </div>

            <h1 className="text-white text-xl font-semibold mt-5">
              Budget Planning
            </h1>

            <p className="text-gray-400 text-sm mt-3 leading-6">
              Set monthly budgets and monitor your progress to achieve better
              financial control.
            </p>
          </div>

          <div className="w-80 h-52 bg-[#111827] rounded-2xl shadow-lg hover:shadow-red-500/20 hover:-translate-y-2 transition-all duration-300 p-6">
            <div className="w-14 h-14 rounded-full bg-red-500 flex justify-center items-center text-white text-2xl">
              <FaShieldAlt />
            </div>

            <h1 className="text-white text-xl font-semibold mt-5">
              Secure Data
            </h1>

            <p className="text-gray-400 text-sm mt-1 leading-6">
              Your financial information is stored securely, giving you
              confidence and peace of mind while managing your money.
            </p>
          </div>

          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="bg-[#111827] rounded-3xl p-10 shadow-2xl">
              <h1 className="text-4xl font-bold text-center text-white">
                Why Choose{" "}
                <span className="text-cyan-400">Expense Tracker?</span>
              </h1>

              <p className="text-gray-400 text-center mt-5 max-w-3xl mx-auto leading-8">
                Expense Tracker is designed to simplify personal finance
                management. Whether you want to monitor your daily expenses,
                manage your income, or achieve your savings goals, our
                application provides everything you need in one secure and
                user-friendly platform.
              </p>

              <div className="grid md:grid-cols-2 gap-10 mt-12">
                <div>
                  <h2 className="text-2xl font-semibold text-cyan-400 mb-5 flex items-center gap-3">
                    <FaBullseye className="text-3xl" />
                    Our Mission
                  </h2>

                  <p className="text-gray-300 leading-8">
                    Our mission is to help users build better financial habits
                    by making expense tracking simple, secure, and accessible.
                    Every feature is carefully designed to provide a smooth and
                    efficient experience for managing personal finances.
                  </p>
                </div>

                {/* Why Choose */}
                <div>
                  <h2 className="text-2xl font-semibold text-cyan-400 mb-5 flex items-center gap-3">
                    <FaStar className="text-3xl" />
                    Why Choose Us
                  </h2>

                  <ul className="text-gray-300 space-y-4">
                    <li className="flex items-center gap-3">
                      <FaCheckCircle className="text-cyan-400" />
                      Easy & User-Friendly Interface
                    </li>

                    <li className="flex items-center gap-3">
                      <FaCheckCircle className="text-cyan-400" />
                      Secure User Authentication
                    </li>

                    <li className="flex items-center gap-3">
                      <FaCheckCircle className="text-cyan-400" />
                      Real-Time Expense Tracking
                    </li>

                    <li className="flex items-center gap-3">
                      <FaCheckCircle className="text-cyan-400" />
                      Smart Analytics Dashboard
                    </li>

                    <li className="flex items-center gap-3">
                      <FaCheckCircle className="text-cyan-400" />
                      Monthly Budget Planning
                    </li>

                    <li className="flex items-center gap-3">
                      <FaCheckCircle className="text-cyan-400" />
                      Responsive on All Devices
                    </li>

                    <li className="flex items-center gap-3">
                      <FaCheckCircle className="text-cyan-400" />
                      Fast & Reliable Performance
                    </li>

                    <li className="flex items-center gap-3">
                      <FaCheckCircle className="text-cyan-400" />
                      Clean & Modern Design
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-10 mt-12">
                {/* Technologies */}
                <div>
                  <h2 className="text-2xl font-semibold text-cyan-400 mb-5 flex items-center gap-3">
                    <FaReact className="text-3xl" />
                    Technologies Used
                  </h2>

                  <div className="flex flex-wrap gap-3">
                    <span className="flex items-center gap-2 bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full">
                      <FaReact /> React
                    </span>

                    <span className="flex items-center gap-2 bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full">
                      <FaNodeJs /> Node.js
                    </span>

                    <span className="flex items-center gap-2 bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full">
                      <SiExpress /> Express.js
                    </span>

                    <span className="flex items-center gap-2 bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full">
                      <SiMongodb /> MongoDB
                    </span>

                    <span className="flex items-center gap-2 bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full">
                      <SiJsonwebtokens /> JWT
                    </span>

                    <span className="flex items-center gap-2 bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full">
                      <SiTailwindcss /> Tailwind CSS
                    </span>

                    <span className="flex items-center gap-2 bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full">
                      <SiAxios /> Axios
                    </span>

                    <span className="flex items-center gap-2 bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full">
                      <HiChartBar /> Recharts
                    </span>
                  </div>
                </div>

                {/* Future Updates */}
                <div>
                  <h2 className="text-2xl font-semibold text-cyan-400 mb-5 flex items-center gap-3">
                    <FaRocket className="text-3xl" />
                    Future Updates
                  </h2>

                  <ul className="text-gray-300 space-y-4">
                    <li className="flex items-center gap-3">
                      <FaFilePdf className="text-cyan-400" />
                      Export Reports (PDF)
                    </li>

                    <li className="flex items-center gap-3">
                      <AiOutlineFileExcel className="text-cyan-400" />
                      Export Reports (Excel)
                    </li>

                    <li className="flex items-center gap-3">
                      <FaMoon className="text-cyan-400" />
                      Dark / Light Theme
                    </li>

                    <li className="flex items-center gap-3">
                      <MdEmail className="text-cyan-400" />
                      Email Notifications
                    </li>

                    <li className="flex items-center gap-3">
                      <MdOutlineCurrencyExchange className="text-cyan-400" />
                      Multi Currency Support
                    </li>

                    <li className="flex items-center gap-3">
                      <MdAnalytics className="text-cyan-400" />
                      Advanced Analytics
                    </li>

                    <li className="flex items-center gap-3">
                      <FaCloud className="text-cyan-400" />
                      Cloud Backup
                    </li>

                    <li className="flex items-center gap-3">
                      <FaRocket className="text-cyan-400" />
                      AI Expense Insights
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-16 border-t border-gray-700 pt-10">
                <h2 className="text-2xl font-semibold text-center text-white flex justify-center items-center gap-3">
                  <FaLightbulb className="text-yellow-400 text-3xl" />
                  Developer Note
                </h2>

                <p className="text-gray-400 text-center mt-5 max-w-4xl mx-auto leading-8">
                  This Expense Tracker project has been developed with a focus
                  on simplicity, performance, and security. It helps users
                  monitor their financial activities efficiently while providing
                  a clean, modern, and responsive user experience.
                </p>

                <h3 className="text-center text-cyan-400 text-2xl font-bold mt-10 italic">
                  "Track Every Rupee. Build a Better Tomorrow."
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
