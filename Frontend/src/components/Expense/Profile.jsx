import profile from "../../assets/profile.png";

import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { ProfileContext } from "../context/ProfileContext";
import { useNavigate } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdArrowBack } from "react-icons/io";

import { CiUser } from "react-icons/ci";
import { TbLockPassword } from "react-icons/tb";
import { MdOutlineLogout } from "react-icons/md";

const Profile = () => {
  const { profileData } = useContext(ProfileContext);
  const { logoutOnClick } = useContext(ProfileContext);
  const { setShowDetails } = useContext(ProfileContext);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const editProfileChange = (e) => {
    navigate("/edit-profile");
  };

  return (
    <>
      <div className="md:flex justify-between md:py-8   px-10 ">
        <div className="text-gray-300 px-25 text-center mt-10 hidden md:block">
          <h1 className="text-4xl font-sans font-medium text-cyan-300">
            Welcome,
            <span className="uppercase font-bold ">
              &nbsp;{profileData?.fullName ? profileData.fullName : ""}👋
            </span>
          </h1>
          <p className="pt-3 font-sans md:text-lg text-md font-light">
            Track your money smarter.
          </p>
          <p>See where your money goes and stay on budget.</p>
        </div>

        <div className="md:px-15 mt-5 text-gray-300 flex justify-between gap-5">
          <div className=" md:w-40 md:h-40 w-40 h-40 rounded-full overflow-hidden">
            <img
              src={profileData?.inputFile ? profileData?.inputFile : profile}
              alt="Profile icon"
            />
          </div>
          <div className="md:pt-5 md:ps-5  font-sans font-medium ">
            <div>
              <h1 className="text-3xl font-bold font-sans capitalize">
                {profileData?.fullName && profileData.fullName}
              </h1>
              <h1 className="text-xl capitalize font-sans font-medium py-1 px-2">
                {profileData?.occupation && profileData.occupation}
              </h1>
              <h1 className="text-xs mx-2">
                {profileData?.bio && profileData.bio}
              </h1>
            </div>

            <div className="flex justify-around md:gap-3 gap-1.5 ">
              <button
                className="bg-transparent mt-5 w-40 h-12 rounded-xl border border-[#132739] cursor-pointer text-md font-sans font-medium
                        hover:bg-gray-400 hover:text-gray-950 "
                onClick={(e) => editProfileChange(e)}
              >
                Edit Profile
              </button>
              <button
                className="border border-[#132739] w-15 h-12 mt-5 rounded-xl text-center text-3xl"
                onClick={() => setShow((prev) => !prev)}
              >
                {" "}
                <MdKeyboardArrowDown className="ms-3" />
              </button>
            </div>

            {show === false ? null : (
              <div className="w-52 bg-[#071321] border border-[#132739] rounded-xl shadow-[0_0_20px_rgba(34,197,94,0.15)] text-gray-300 font-sans overflow-hidden">
                <ul className="py-2">
                  <li
                    className="flex items-center gap-3 px-4 py-3 hover:bg-[#132230] hover:text-orange-400 cursor-pointer transition-all duration-300"
                    onClick={() => setShow(false)}
                  >
                    <IoMdArrowBack className="text-xl" />
                    <span>Back</span>
                  </li>

                  <li
                    className="flex items-center gap-3 px-4 py-3 hover:bg-[#132230] hover:text-cyan-400 cursor-pointer transition-all duration-300"
                    onClick={() => setShowDetails(true)}
                  >
                    <CiUser className="text-xl" />
                    <span>View Details</span>
                  </li>

                  <Link to={"/change-password"}>
                    <li className="flex items-center gap-3 px-4 py-3 hover:bg-[#132230] hover:text-yellow-400 cursor-pointer transition-all duration-300">
                      <TbLockPassword className="text-xl" />
                      <span>Change Password</span>
                    </li>
                  </Link>

                  <li
                    className="flex border border-[#132769] items-center gap-3 px-4 py-3 hover:bg-red-500/20 hover:text-red-400 cursor-pointer transition-all duration-300"
                    onClick={logoutOnClick}
                  >
                    <MdOutlineLogout className="text-xl" />
                    <span>Logout</span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
