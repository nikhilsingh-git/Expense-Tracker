import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ExpenseContext } from "../context/ExpenseContext";
import EditExpense from "../Expense/EditExpense";
import EditIncome from "../Expense/EditIncome";

import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { IoChevronBackCircle } from "react-icons/io5";
import { ProfileContext } from "../context/ProfileContext";
import { WalletContext } from "../context/WalletContext";

const View = () => {
  const { loading } = useContext(ExpenseContext);
  const { expense } = useContext(ExpenseContext);
  const { income } = useContext(ExpenseContext);
  const { handelOnBack } = useContext(ExpenseContext);
  const { getExpenseId } = useContext(ExpenseContext);
  const { getIncomeId } = useContext(ExpenseContext);
  const { setGetExpenseId } = useContext(ExpenseContext);
  const { setGetIncomeId } = useContext(ExpenseContext);
  const { handelOnExpenseEdit } = useContext(ExpenseContext);
  const { haldelOnIncomeEdit } = useContext(ExpenseContext);
  const { page } = useContext(ExpenseContext);

  const { fatchProfile } = useContext(ProfileContext);
  const { fatchMonthlyExpense } = useContext(ProfileContext);
  const { fatchMonthlyIncome } = useContext(ProfileContext);
  const { fatchIncome } = useContext(ExpenseContext);
  const { fatchExpense } = useContext(ExpenseContext);
  const { fatchWalletData } = useContext(WalletContext);

  const [showDeleteTogle, setShowDeleteTogel] = useState(false);
  const [showIncomeDelete, setShowIncomeDelete] = useState(false);

  const [expenseId, setExpenseId] = useState(null);
  const [incomeId, setIncomeId] = useState(null);

  const handelOnExpenseDelete = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/expense/deleteExpense/${expenseId}`,
        { withCredentials: true },
      );
      await fatchProfile();
      await fatchMonthlyExpense();
      await fatchMonthlyIncome();
      await fatchIncome();
      await fatchExpense();
      await fatchWalletData();
      alert("Your Expense Deleted!");
      setShowDeleteTogel(false);
    } catch (error) {
      const errorMsg = error.response?.data?.message || error.message;
      alert(errorMsg);
    }
  };

  const handelOnIncomeDelete = async () => {
    try {
      console.log("Income delete Click!");
      const response = await axios.delete(
        `http://localhost:3000/api/auth/deleteIncome/${incomeId}`,
        { withCredentials: true },
      );
      alert("Your Income Deleted!");
      setShowIncomeDelete(false);
    } catch (error) {
      const errorMsg = error.response?.data?.message || error.message;
      alert(errorMsg);
    }
  };

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-950 text-cyan-400 text-xl font-bold">
        Loading Transaction...
      </div>
    );
  }

  return (
    <>
      {showIncomeDelete === true && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="w-100 bg-[#071321] border mt-40 border-[#132739] rounded-xl shadow-2xl p-6">
            <div className="flex justify-center">
              <div className="w-14 h-14 rounded-full bg-red-500/20 flex items-center justify-center">
                <span className="text-3xl text-red-500">
                  <MdDelete />
                </span>
              </div>
            </div>
            <h2 className="text-white text-2xl font-semibold text-center mt-4">
              Delete Income?
            </h2>
            <p className="text-gray-400 text-center mt-2">
              Are you sure you want to delete this income?
              <br />
              This action cannot be undone.
            </p>
            <div className="flex justify-center gap-4 mt-6">
              <button
                className="px-6 py-2 rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-700 transition"
                onClick={() => setShowIncomeDelete(false)}
              >
                Cancel
              </button>

              <button
                className="px-6 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white transition"
                onClick={handelOnIncomeDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
      {showDeleteTogle === true ? (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="w-100 bg-[#071321] border mt-40 border-[#132739] rounded-xl shadow-2xl p-6">
            <div className="flex justify-center">
              <div className="w-14 h-14 rounded-full bg-red-500/20 flex items-center justify-center">
                <span className="text-3xl text-red-500">
                  <MdDelete />
                </span>
              </div>
            </div>
            <h2 className="text-white text-2xl font-semibold text-center mt-4">
              Delete Expense?
            </h2>
            <p className="text-gray-400 text-center mt-2">
              Are you sure you want to delete this expense?
              <br />
              This action cannot be undone.
            </p>
            <div className="flex justify-center gap-4 mt-6">
              <button
                className="px-6 py-2 rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-700 transition"
                onClick={() => setShowDeleteTogel(false)}
              >
                Cancel
              </button>

              <button
                className="px-6 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white transition"
                onClick={handelOnExpenseDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ) : null}
      {page === "income" ? (
        <EditIncome />
      ) : page === "expense" ? (
        <EditExpense />
      ) : (
        <div>
          <div>
            <div className="ms-10 md:mt-10">
              <h1 className="text-cyan-400/60 md:text-4xl text-3xl font-sans font-bold">
                View Transaction
              </h1>
              <p className="text-gray-400 md:text-xl text-sm">
                See and manage all transactions.
              </p>
            </div>
            <div>
              <div className=" text-gray-200 bg-[#071321] h-140 md:my-20 my-10 md:mx-20 mx-8 overflow-scroll scrollbar-hide rounded-2xl shadow-[0_0_20px_rgba(100,102,50,0.3)]">
                {expense.length === 0 && income.length === 0 ? (
                  <div
                    className="text-center m-auto mt-53 h-30 w-60 border border-[#132739] flex justify-center items-center
                flex-col rounded-2xl shadow-[0_0_20px_rgba(100,102,50,0.3)] cursor-pointer"
                  >
                    <h1 className="md:text-2xl text-md text-gray-300 ">
                      No Expense Yet!
                    </h1>
                    <p className="md:text-md text-sm text-gray-400 ">
                      Add Expense...
                    </p>
                  </div>
                ) : (
                  <div className="w-full overflow-x-auto">
                    <table className="min-w-[900px] w-full text-xs table-fixed border border-[#132739]">
                      <thead className="h-15 px-8 bg-slate-700 border-b border-[#132739] sticky top-0 z-100  ">
                        <tr>
                          <th className="text-left px-10">Date</th>
                          <th className="text-left px-10">Category</th>
                          <th className="text-left px-10">Amount</th>
                          <th className="text-left px-10">Payment</th>
                          <th className="text-left px-10">Description</th>
                        </tr>
                      </thead>

                      <tbody className="cursor-grabbing">
                        {expense.map((item) => (
                          <tr
                            className="border-b border-[#132739] hover:bg-[#132230] px-8 h-15 rounded-2xl transition duration-500 ease-in-out"
                            key={item._id}
                            onClick={() => {
                              (setGetExpenseId(
                                getExpenseId === item._id ? null : item._id,
                              ),
                                setExpenseId(item._id));
                            }}
                          >
                            <td className="text-left px-10">
                              {item.date
                                ? new Date(item.date).toLocaleDateString(
                                    "en-IN",
                                  )
                                : new Date().toLocaleDateString("en-IN")}
                            </td>

                            <td className="text-left px-10">{item.category}</td>
                            <td className="text-left px-10 text-red-400">
                              -{item.amount}
                            </td>
                            <td className="text-left px-10">
                              {item.paymentMode}
                            </td>
                            <td className="text-left px-10 relative">
                              {item.description}

                              {getExpenseId === item._id && (
                                <div className="absolute right-45 text-gray-950 bg-gray-300 w-30 h-49 rounded-2xl text-center text-xl font-medium font-sans">
                                  <ul>
                                    <li
                                      className="my-7 relative cursor-pointer"
                                      onClick={handelOnBack}
                                    >
                                      <h1 className="absolute top-1 left-3 text-2xl">
                                        {""}
                                        <IoChevronBackCircle />
                                      </h1>
                                      <h1>back</h1>
                                    </li>
                                    <li
                                      className="my-7 relative text-blue-500 cursor-pointer"
                                      onClick={handelOnExpenseEdit}
                                    >
                                      <h1 className="absolute top-1 left-3 text-2xl">
                                        <CiEdit />
                                      </h1>
                                      <h1>Edit</h1>
                                    </li>
                                    <li
                                      className="my-7 relative text-red-500 cursor-pointer"
                                      onClick={() => setShowDeleteTogel(true)}
                                    >
                                      <h1 className="absolute top-0.5 left-2 text-2xl">
                                        <MdDelete />
                                      </h1>
                                      <h1>Delete</h1>
                                    </li>
                                  </ul>
                                </div>
                              )}
                            </td>
                          </tr>
                        ))}

                        {income.map((value) => (
                          <tr
                            className="border-b border-[#132739] hover:bg-[#132230] px-8 h-15 rounded-2xl transition duration-500 ease-in-out"
                            key={value._id}
                            onClick={() => {
                              setGetIncomeId(
                                getIncomeId === value._id ? null : value._id,
                              );
                              setIncomeId(value._id);
                            }}
                          >
                            <td className="text-left px-10">
                              {value.date
                                ? new Date(value.date).toLocaleDateString(
                                    "en-IN",
                                  )
                                : new Date().toLocaleDateString("en-IN")}
                            </td>
                            <td className="text-left px-10">{value.title}</td>
                            <td className="text-left px-10 text-emerald-400">
                              +{value.addIncome}
                            </td>
                            <td className="text-left px-10">
                              {value.paymentMode}
                            </td>
                            <td className="text-left px-10 relative ">
                              {value.description}
                              {getIncomeId === value._id && (
                                <div className="absolute right-45 text-gray-950 bg-gray-300 w-30 h-49 rounded-2xl text-center text-xl font-medium font-sans">
                                  <ul className="">
                                    <li
                                      className="my-7 relative cursor-pointer"
                                      onClick={handelOnBack}
                                    >
                                      <h1 className="absolute top-1 left-3 text-2xl">
                                        {" "}
                                        <IoChevronBackCircle />
                                      </h1>
                                      <h1> back</h1>
                                    </li>
                                    <li
                                      className="my-7 relative text-blue-500 cursor-pointer"
                                      onClick={haldelOnIncomeEdit}
                                    >
                                      <h1 className="absolute top-1 left-3 text-2xl">
                                        <CiEdit />
                                      </h1>
                                      <h1>Edit</h1>
                                    </li>
                                    <li
                                      className="my-7 relative text-red-500 cursor-pointer"
                                      onClick={() => setShowIncomeDelete(true)}
                                    >
                                      <h1 className="absolute top-0.5 left-2 text-2xl">
                                        <MdDelete />
                                      </h1>
                                      <h1>Delete</h1>
                                    </li>
                                  </ul>
                                </div>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default View;
