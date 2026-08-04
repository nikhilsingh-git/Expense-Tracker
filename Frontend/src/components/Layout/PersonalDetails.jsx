import { useContext } from "react"
import { ProfileContext } from "../context/ProfileContext"

const PersonalDetails = () =>{

    const {profileData} = useContext(ProfileContext)
    const {backOnClick} = useContext(ProfileContext)
   return (
  <>
    <div className="w-full max-w-3xl my-10 md:my-20 mx-auto border border-[#132739] rounded-2xl shadow-[0_0_25px_rgba(34,197,94,0.15)] p-5 md:p-8">
      <div className="mb-8 border-b border-[#132739] pb-4">
        <h1 className="text-xl md:text-2xl font-bold text-white">
          Personal Information
        </h1>

        <p className="text-sm text-gray-400 mt-2">
          View your personal profile details and account information.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
        <span className="text-gray-400 font-medium">Name</span>
        <span className="text-white font-semibold capitalize break-words">
          {profileData?.fullName && profileData.fullName}
        </span>

        <span className="text-gray-400 font-medium">Email</span>
        <span className="text-white font-semibold break-all">
          {profileData?.email && profileData.email}
        </span>

        <span className="text-gray-400 font-medium">Gender</span>
        <span className="text-white font-semibold capitalize break-words">
          {profileData?.gender && profileData.gender}
        </span>

        <span className="text-gray-400 font-medium">Date of Birth</span>
        <span className="text-white font-semibold">
          {profileData?.dob
            ? new Date(profileData?.dob).toISOString().split("T")[0]
            : "-"}
        </span>

        <span className="text-gray-400 font-medium">Occupation</span>
        <span className="text-white font-semibold capitalize break-words">
          {profileData?.occupation && profileData.occupation}
        </span>

        <span className="text-gray-400 font-medium">Monthly Budget</span>
        <span className="text-green-400 font-bold break-words">
          ₹ {profileData?.monthlyBudget && profileData.monthlyBudget}
        </span>

        <span className="text-gray-400 font-medium">Address</span>
        <span className="text-white font-semibold capitalize break-words">
          {profileData?.address && profileData.address}
        </span>

        <span className="text-gray-400 font-medium self-start">Bio</span>
        <span className="text-white leading-7 break-words">
          {profileData?.bio && profileData.bio}
        </span>
      </div>

      <div className="flex justify-center sm:justify-end mt-10">
        <button
          className="w-full sm:w-50 h-12 bg-transparent border border-[#132739] text-gray-300 rounded-2xl font-sans font-medium text-lg md:text-xl capitalize
           cursor-pointer hover:bg-gray-400 hover:text-gray-950 hover:font-bold"
          onClick={backOnClick}
        >
          back
        </button>
      </div>
    </div>
  </>
);
}

export default PersonalDetails