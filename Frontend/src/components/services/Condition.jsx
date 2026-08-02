import { FaUserShield, FaUserCheck } from "react-icons/fa";
import { HiChartBar } from "react-icons/hi";

import { MdSecurity, MdBlock, MdUpdate } from "react-icons/md";

const Condition = () => {
  return (
    <>
      <div className="w-full h-auto  bg-[#131c28]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="bg-[#111827] rounded-3xl shadow-2xl p-10">
            <h1 className="text-4xl font-bold text-center text-white">
              Terms & <span className="text-cyan-400">Conditions</span>
            </h1>
            <p className="text-center text-gray-400 mt-4 max-w-3xl mx-auto leading-8">
              By using Expense Tracker, you agree to the following terms and
              conditions. These guidelines are designed to ensure a secure,
              reliable, and seamless experience for every user.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-[#1F2937] rounded-2xl p-6 border border-gray-700 hover:border-cyan-400 duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <FaUserShield className="text-3xl text-cyan-400" />
                  </div>

                  <h2 className="text-cyan-400 text-xl font-semibold">
                    Account Security
                  </h2>
                </div>

                <p className="text-gray-300 leading-7">
                  Users are responsible for keeping their login credentials
                  secure. Do not share your password with anyone. Expense
                  Tracker is not responsible for unauthorized access caused by
                  shared credentials.
                </p>
              </div>

              <div className="bg-[#1F2937] rounded-2xl p-6 border border-gray-700 hover:border-cyan-400 duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <HiChartBar className="text-3xl text-cyan-400" />
                  </div>

                  <h2 className="text-cyan-400 text-xl font-semibold">
                    Financial Records
                  </h2>
                </div>

                <p className="text-gray-300 leading-7">
                  All income and expense records are managed by the user. Please
                  verify your entries before saving, as incorrect information
                  may affect your financial reports and analytics.
                </p>
              </div>

              <div className="bg-[#1F2937] rounded-2xl p-6 border border-gray-700 hover:border-cyan-400 duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <MdSecurity className="text-3xl text-cyan-400" />
                  </div>

                  <h2 className="text-cyan-400 text-xl font-semibold">
                    Data Privacy
                  </h2>
                </div>

                <p className="text-gray-300 leading-7">
                  Your personal information is stored securely and is never
                  shared with third parties without your permission.
                </p>
              </div>

              <div className="bg-[#1F2937] rounded-2xl p-6 border border-gray-700 hover:border-cyan-400 duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <FaUserCheck className="text-3xl text-cyan-400" />
                  </div>

                  <h2 className="text-cyan-400 text-xl font-semibold">
                    User Responsibility
                  </h2>
                </div>

                <p className="text-gray-300 leading-7">
                  Users are responsible for maintaining accurate financial
                  records. Expense Tracker should not be considered professional
                  financial advice.
                </p>
              </div>

              <div className="bg-[#1F2937] rounded-2xl p-6 border border-gray-700 hover:border-cyan-400 duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <MdBlock className="text-3xl text-cyan-400" />
                  </div>

                  <h2 className="text-cyan-400 text-xl font-semibold">
                    Misuse Policy
                  </h2>
                </div>

                <p className="text-gray-300 leading-7">
                  Unauthorized activities, abuse, or attempts to exploit the
                  application may result in account suspension or permanent
                  removal.
                </p>
              </div>

              <div className="bg-[#1F2937] rounded-2xl p-6 border border-gray-700 hover:border-cyan-400 duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <MdUpdate className="text-3xl text-cyan-400" />
                  </div>

                  <h2 className="text-cyan-400 text-xl font-semibold">
                    Updates & Improvements
                  </h2>
                </div>

                <p className="text-gray-300 leading-7">
                  Expense Tracker may receive regular updates, bug fixes, and
                  new features to improve performance and user experience.
                </p>
              </div>
            </div>

            <div className="mt-12 border-t border-gray-700 pt-8">
              <p className="text-center text-gray-400 leading-8 max-w-4xl mx-auto">
                By creating an account and using Expense Tracker, you
                acknowledge that you have read, understood, and agreed to these
                Terms & Conditions. If you do not agree with any part of these
                terms, please discontinue using the application.
              </p>

              <h2 className="text-center text-cyan-400 text-2xl font-bold mt-8 italic">
                "Your Data, Your Responsibility, Our Commitment."
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Condition;
