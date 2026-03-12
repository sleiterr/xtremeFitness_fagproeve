import React from "react";
import { useNavigate } from "react-router-dom";
import ProjectNav from "./NavMenu";

const Backoffice = ({ token, onLogout }) => {
  return (
    <section className="h-screen flex flex-col items-start justify-start pt-8 bg-slate-400">
      <ProjectNav token={token} onLogout={onLogout} />
      <div className="w-full py-24 px-0 md:px-0 mx-auto md:max-w-7xl">
        <div className="flex items-center justify-center w-full">
          <h4 className="font-medium text-3xl text-gray-900">Backoffice</h4>
        </div>
        <div className="">
          
        </div>
      </div>
    </section>
  );
};

export default Backoffice;
