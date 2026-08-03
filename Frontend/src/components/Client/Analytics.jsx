import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import { WalletContext } from "../context/WalletContext";
import { ResponsiveContainer, BarChart, Bar } from "recharts";
import { HiOutlineChartBar } from "react-icons/hi";
import { HiOutlinePresentationChartBar } from "react-icons/hi2";

import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ProfileContext } from "../context/ProfileContext";

const Analytics = () => {
  const { expense } = useContext(ExpenseContext);
  const { wallet } = useContext(WalletContext);

  return (
    <>
      <div>
        <div className="ms-10 mt-10">
          <h1 className="text-cyan-400/60 text-4xl font-sans font-bold">
            Analytics
          </h1>
          <p className="text-gray-400 text-xl">
            Insights about your income,expenses and savings.
          </p>
        </div>
        {expense.length === 0 ? (
          <div className="m-auto mt-50 w-100 h-10 text-center">
            <h1 className="text-gray-50 text-3xl font-bold font-sans">
              No Expenses
            </h1>
            <p className="text-gray-300 mt-2 text-md leading-6 font-sans font-medium">
              Your expense list is empty. Add your first expense to begin
              tracking your spending.
            </p>
          </div>
        ) : (
          <div className="mx-10 md:mx-0">
            <div className="md:ms-10 mt-10 mb-8">
              <div className="flex items-center gap-4 md:mt-15 " >
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/15 border border-cyan-500/20 flex items-center justify-center shadow-lg shadow-cyan-500/10">
                  <HiOutlinePresentationChartBar className="text-cyan-400 text-3xl" />
                </div>

                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-white tracking-wide">
                    Analytics <span className="text-cyan-400">Dashboard</span>
                  </h1>

                  <p className="text-gray-400 text-sm md:text-base mt-2 max-w-xl leading-7">
                    Explore detailed insights into your income, expenses,
                    savings, and spending trends with interactive financial
                    analytics.
                  </p>
                </div>
              </div>

              <div className="w-28 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 mt-6"></div>
            </div>
            <div className="w-full mt-20 max-h-screen border border-[#132739]  bg-[#071321]  ">
              <AreaChart
                className="w-full max-w-[1009px] max-h-[70vh] aspect-[1.618]"
                responsive
                data={expense}
                margin={{ top: 50, right: 30, left: 30, bottom: 30 }}
              >
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="category" />
                <YAxis width="auto" dataKey="amount" />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="category"
                  stroke="#8884d8"
                  fillOpacity={1}
                  fill="url(#colorUv)"
                />
                <Area
                  type="monotone"
                  dataKey="amount"
                  stroke="#82ca9d"
                  fillOpacity={1}
                  fill="url(#colorPv)"
                />
              </AreaChart>
            </div>
            <div className="mt-30">
        <div className=" mb-8">
          <div className="flex items-center gap-3 md:mx-15">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/15 flex items-center justify-center">
              <HiOutlineChartBar className="text-cyan-400 text-2xl" />
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Expense <span className="text-cyan-400">Breakdown</span>
              </h2>

              <p className="text-gray-400 text-sm md:text-base mt-1">
                Analyze your spending across different categories and monitor
                your financial habits with interactive visual insights.
              </p>
            </div>
          </div>

          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full ms-15 mt-5"></div>
        </div>
        <div>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={expense}>
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="category" />

              <YAxis />

              <Tooltip />

              <Bar dataKey="amount" fill="#06B6D4" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
          </div>
        )}
      </div>
      
    </>
  );
};

export default Analytics;
