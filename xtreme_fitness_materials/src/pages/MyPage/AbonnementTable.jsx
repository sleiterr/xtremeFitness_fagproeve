import React from "react";

const AbonnementTable = ({ headers, children }) => {
  return (
    <table className="table-auto w-full border-separate border-spacing-0 border border-zinc-900">
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody className="[&>tr:nth-child(2n)]:bg-gray-100 [&>tr:nth-child(2n+1)]:bg-white">
        {children}
      </tbody>
    </table>
  );
};

export default AbonnementTable;
