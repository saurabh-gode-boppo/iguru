import React from "react";

const AssesseeData = ({ name, assesseeId, email, gender }) => {
  return (
    <div>
      <div className="w-auto p-4 h-48 border-[1px] border-slate-600 rounded-md">
        <h1 className="text-yellow-500">Assessee Information</h1>
        <p className="text-blue-600">assesseeId: <span className="text-slate-300">{assesseeId || ""}</span></p>
        <p className="text-blue-600">name: <span className="text-slate-300">{name || ""}</span></p>
        <p className="text-blue-600">assesseeAddressEmailPrimary:  <span className="text-slate-300">{email || ""}</span></p>
        <p className="text-blue-600">gender:  <span className="text-slate-300">{gender || ""}</span></p>
      </div>
    </div>
  );
};

export default AssesseeData;
