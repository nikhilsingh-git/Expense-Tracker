const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Income = require("../models/incom.model");
const Wallet = require("../models/wallet.model");
const mongoose = require("mongoose");

const register = async (req, res) => {
  try {
    const { username, email, password, ConfirmPassword } = req.body;

    const isUserAlreadyExists = await userModel.findOne({
      $or: [{ username }, { email }],
    });

    if (isUserAlreadyExists) {
      return res.status(400).json({
        message: "User is already Exists.",
      });
    }

    if (password !== ConfirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Password or Confirm Password do not match ",
      });
    }

    const hash = await bcrypt.hash(password, 10);

    const user = await userModel.create({
      username,
      email,
      password: hash,
    });

    const accessToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(201).json({
      message: "regester successfully!",
      user,
      accessToken: accessToken,
      refershTokan: refershTokan,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "User data not found",
      error: error.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const { userOrEmail, password } = req.body;

    const user = await userModel.findOne({
      $or: [{ username: userOrEmail }, { email: userOrEmail }],
    });

    if (!user) {
      return res.status(400).json({
        message: "User not found!.",
      });
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(400).json({
        message: "Incorrect Password",
      });
    }

    const accessToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      message: "Login successFully!",
      user,
      accessToken: accessToken,
      refershTokan: refershTokan,
    });
  } catch (error) {
    console.log("error:", error);
    res.status(400).json({
      success: false,
      messege: "somthing want worng!",
      error: error.message,
    });
  }
};

const logout = async (req, res) => {
  try {
    const userId = req.user.id;
    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "User is not login!",
      });
    }

    res.cookie("accessToken");
    res.cookie("refershTokan");

    res.status(200).json({
      success: true,
      message: "User logout Successfull!",
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      success: false,
      message: "Somthing want worng!",
      error: error.message,
    });
  }
};

const viweDetails = async (req, res) => {
  const userId = req.user.id;
  try {
    const user = await userModel.findById(userId).select("-password -__v -_id");

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "user not found!",
      });
    }
    return res.status(202).json({
      message: "Fatch successfully!",
      user,
    });
  } catch (err) {
    console.log(`Details not found! ${err}`);
    res.status(401).json({
      success: false,
      message: "Details not found!",
      error: err.message,
    });
  }
};

const changePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword, confirmNewPassword } = req.body;
    const userId = req.user?.id;

    if (!oldPassword || !newPassword || !confirmNewPassword) {
      return res.status(404).json({
        success: false,
        message: "Details not found!",
      });
    }

    const user = await userModel.findById(userId);

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "user not found \n Password is invailid",
      });
    }

    if (newPassword !== confirmNewPassword) {
      return res.status(400).json({
        success: false,
        message: "New passeord or Confirm new password are not match",
      });
    }

    const isMatch = await bcrypt.compare(oldPassword, user.password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Password is incorrect!",
      });
    }

    const samePassword = await bcrypt.compare(newPassword, user.password);

    if (samePassword) {
      return res.status(400).json({
        success: false,
        message: "your password are same!",
      });
    }

    const hashNewPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashNewPassword;
    await user.save();

    res.status(200).json({
      success: true,
      message: "password updated successfully!",
    });
  } catch (error) {
    console.log(`Server error: ${error}`);
    return res.status(500).json({
      success: false,
      message: "Something went wrong on the server!",
      error: error.message,
    });
  }
};

const isUserLogin = async (req, res) => {
  try {
    const userId = req.user.id;
    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "User is not login",
      });
    }
    const loginUser = await userModel.findById(userId);

    if (!loginUser) {
      return res.status(400).json({
        success: false,
        message: "User not found!",
      });
    }

    res.status(200).json({
      success: true,
      message: "User Login!",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Somthing want worng!",
      error: error.message,
    });
  }
};

// const viewUsers = async(req,res)=>{
// try {
//     const alluser = await userModel.find()
//     if(!alluser){
//         return res.status(400).json({
//             message:"error"
//         })
//     }

//     res.status(200).json({
//         message:"successfully!",
//         alluser
//     })
// } catch (error) {
//     res.status(404).json({
//         message:"user not found"
//     })
// }
// }

const addIncome = async (req, res) => {
  try {
    const { addIncome, title, date, paymentMode, description } = req.body;

    if (!addIncome || !title) {
      return res.status(404).json({
        success: false,
        message: "Incomes not found , Please send Income",
      });
    }

    if (!paymentMode) {
      return res.status(400).json({
        success: false,
        message: "Payment Method are REQUIRED!",
      });
    }

    const income = Number(addIncome) || 0;
    const userId = req.user.id;

    const incomeData = await Income.create({
      addIncome: income,
      title,
      date: date ? new Date(date) : Date.now(),
      userId,
      paymentMode,
      description,
    });

    const walletUpdate = await Wallet.findOneAndUpdate(
      { userId },
      {
        $inc: { totalWallet: Number(income) },
        $set: { title, date: date || Date.now() },
      },
      { returnDocument: "after", upsert: true },
    );

    res.status(201).json({
      success: true,
      message: "Income record saved and total wallet incremented!",
      incomeData: incomeData,
      walletUpdate: walletUpdate,
    });
  } catch (error) {
    console.log("erroe", error);
    res.status(400).json({
      success: false,
      message: "Details nor found!",
      error: error.message,
    });
  }
};

const getAllIncome = async (req, res) => {
  try {
    const userId = req.user.id;
    const allIncome = await Income.find({ userId }).sort({ createdAt: -1 });

    if (!allIncome) {
      return res.status(404).json({
        success: false,
        message: "Zero Incomes",
      });
    }

    res.status(202).json({
      success: true,
      message: "Message are there!",
      allIncome,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Incomes are not found!",
      error: error.message,
    });
  }
};

const deteleIncome = async (req, res) => {
  try {
    const id = req.params.id;
    const userId = req.user.id;

    const deleteIncome = await Income.findOneAndDelete({
      _id: id,
      userId: userId,
    });

    if (!deleteIncome) {
      return res.status(404).json({
        success: false,
        message: "Income not found!",
      });
    }

    res.status(200).json({
      success: true,
      message: "Income Delete Successfully!",
      deleteIncome,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Somthing want worng!",
      error: error.message,
    });
  }
};

const editIncome = async (req, res) => {
  try {
    const id = req.params.id;
    const userId = req.user.id;

    const oldIncome = await Income.findOne({
      _id: id,
      userId: userId,
    });

    if (!oldIncome) {
      return res.status(400).json({
        success: false,
        message: "Incom not found!",
      });
    }
    if (req.body.addIncome !== undefined) {
      const difference = Number(addIncome) - oldIncome.addIncome;

      const walletUpdate = await Wallet.findOneAndUpdate(
        { userId },
        {
          $inc: {
            totalWallet: difference,
          },
        },
        { new: true },
      );

      if (!walletUpdate) {
        return res.status(400).json({
          success: false,
          message: "Wallet not found!",
        });
      }
    }

    const updatedIncome = await Income.findOneAndUpdate(
      {
        _id: id,
        userId: userId,
      },
      {
        $set: req.body,
      },
      {
        new: true,
        runValidators: true,
      },
    );

    if (!updatedIncome) {
      return res.status(400).json({
        success: false,
        message: "Income not found!",
      });
    }

    res.status(201).json({
      success: true,
      message: "Income updated successfully!",
      updatedIncome,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something want worng!",
      error: error.message,
    });
  }
};

const monthlyIncome = async (req, res) => {
  try {
    const userId = req.user.id;

    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "User not login!",
      });
    }

    const today = new Date();

    const firstDate = new Date(today.getFullYear(), today.getMonth(), 1);

    const lastDate = new Date(today.getFullYear(), today.getMonth() + 1, 1);

    const monthlyResult = await Income.aggregate([
      {
        $match: {
          userId: new mongoose.Types.ObjectId(userId),
          date: {
            $gte: firstDate,
            $lt: lastDate,
          },
        },
      },
      {
        $group: {
          _id: null,
          totalIncome: {
            $sum: "$addIncome",
          },
        },
      },
    ]);

    const monthlyIncomeAmount =
      monthlyResult.length > 0 ? monthlyResult[0].totalIncome : 0;

    res.status(200).json({
      success: true,
      message: "Monthly Income are there!",
      monthlyIncomeAmount,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      success: false,
      message: "Somthing want worng!",
      error: error.message,
    });
  }
};

module.exports = {
  register,
  addIncome,
  login,
  logout,
  viweDetails,
  changePassword,
  getAllIncome,
  deteleIncome,
  editIncome,
  monthlyIncome,
  isUserLogin,
};
