import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Footer = () => {
  const { page, setPage, totalPages } = useContext(AppContext);

  return (
    <div className="h-16 border-t-2 border-black/[0.45] flex items-center fixed bottom-0 w-full bg-white">
      <div className="flex justify-between items-center pr-4 max-w-[700px] mx-auto w-11/12">
        <div className="flex gap-x-2">
          {page > 1 && (
            <button
              className="px-4 py-1 border-2 border-black/[0.27] rounded-md cursor-pointer "
              onClick={() => setPage(page - 1)}>
              Previous
            </button>
          )}
          {page < totalPages && (
            <button
              className="px-4 py-1 border-2 border-black/[0.27]  rounded-md cursor-pointer"
              onClick={() => setPage(page + 1)}>
              Next
            </button>
          )}
        </div>
        <div>
          <p className="font-semibold">
            Page <span>{page}</span> of <span>{totalPages}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
