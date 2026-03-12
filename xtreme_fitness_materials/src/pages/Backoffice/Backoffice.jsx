import React from "react";
import { useNavigate } from "react-router-dom";
import ProjectNav from "./NavMenu";
import BlogFormEditor from "./BlogFormEditor";
import DashboardView from "./DashboardView";

const Backoffice = ({ token, onLogout }) => {
  return (
    <section className="flex flex-col w-full h-auto min-h-0 bg-slate-400">
      <ProjectNav token={token} onLogout={onLogout} />
      <div className="w-full py-12 px-0 md:px-0 mx-auto md:max-w-7xl">
        <div className="flex items-center justify-start w-full mb-6">
          <h4 className="font-normal text-3xl text-zinc-800">Backoffice</h4>
        </div>
        <div className="grid grid-rows-2 gap-22">
          <DashboardView />
          <BlogFormEditor />
        </div>
      </div>
    </section>
  );
};

export default Backoffice;
