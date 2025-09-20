import { useState } from "react";
import { IconExclamationCircle } from "@tabler/icons-react";
import { CustomModal } from "./modal/CustomModal";

const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between px-4 py-8">
        <h1 className="text-xl sm:text-2xl font-bold text-[#1c1c22]">
          Unilag Aggregate Calculator
        </h1>
        <div className="flex items-center">
          <IconExclamationCircle
            onClick={() => setIsModalOpen(true)}
            className="w-6 h-6 text-gray-500 cursor-pointer"
          />
        </div>
      </div>

      {/* Show modal if state is true */}
      {isModalOpen && <CustomModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default NavBar;
