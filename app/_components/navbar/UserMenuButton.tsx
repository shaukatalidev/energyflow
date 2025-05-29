import profilePicPlaceholder from "@/public/profile-pic-placeholder.png";
import threedashed from "@/public/three-dashed.png"


import Image from "next/image";

import toast from "react-hot-toast";
import { logout } from "@/action/logout";

const useCurrentUser = () => {
  return {
    id: 8239581294,
    name: "John Doe",
    email: "john@gmail.com",
    image: "/three-dashed.png",
  };
};
export function UserMenuButton() {
  const user = useCurrentUser();
  return (
    <>
      {user ? (
   
          <Image
            src={user?.image || threedashed}
            alt="Profile picture"
            width={40}
            height={40}
            className="w-10 rounded-full"
          />
    
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block h-5 w-5 stroke-mainColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
          />
        </svg>
      )}
    </>
  );
}
