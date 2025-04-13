import React from 'react';
import { FiType, FiImage } from 'react-icons/fi';
import { BsShapes } from 'react-icons/bs';
import { CgFormatText } from "react-icons/cg";
import { FaRegImage } from "react-icons/fa6";
import { BsFiletypeSvg } from "react-icons/bs";




function Sidebar() {
  return (
    <div className="w-24 bg-white border-r p-2 flex flex-col items-center space-y-6">
      {/* Text */}
      <div className="draggable cursor-move flex flex-col items-center hover:scale-110 transition" data-type="text" draggable>
        <CgFormatText className="text-2xl" />
        <span className="text-xs mt-1">Text</span>
      </div>

      {/* Image */}
      <div className="draggable cursor-move flex flex-col items-center hover:scale-110 transition" data-type="image" draggable>
        <FaRegImage className="text-2xl" />
        <span className="text-xs mt-1">Image</span>
      </div>

      {/* Shape */}
      <div className="draggable cursor-move flex flex-col items-center hover:scale-110 transition" data-type="shape" draggable>
        <BsFiletypeSvg className="text-2xl" />
        <span className="text-xs mt-1">Shape</span>
      </div>
    </div>
  );
}

export default Sidebar;
