import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-[3.5rem] w-[9rem] mx-auto bg-primary-600 hover:bg-primary-700 text-white rounded-full outline-none transition-all duration-300 focus:scale-110 hover:scale-110 active:scale-105 shadow-lg disabled:scale-100 disabled:opacity-70 disabled:cursor-not-allowed font-medium"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-sm opacity-80 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </>
      )}
    </button>
  );
}
