import React from "react";
const ReviewList = ({ name, desc, id, status, onClickFn }) => {
  let arr = [
    {
      id: 1,
      assignmentName: "somename",
      assignmentDesc: "somedesc",
      assignmentStatus: "unstarted",
    },
    {
      id: 2,
      assignmentName: "somename",
      assignmentDesc: "somedesc",
      assignmentStatus: "unstarted",
    },
    {
      id: 3,
      assignmentName: "somename",
      assignmentDesc: "somedesc",
      assignmentStatus: "unstarted",
    },
    {
      id: 4,
      assignmentName: "somename",
      assignmentDesc: "somedesc",
      assignmentStatus: "unstarted",
    },
    {
      id: 5,
      assignmentName: "somename",
      assignmentDesc: "somedesc",
      assignmentStatus: "unstarted",
    },
    {
      id: 6,
      assignmentName: "somename",
      assignmentDesc: "somedesc",
      assignmentStatus: "unstarted",
    },
    {
      id: 7,
      assignmentName: "somename",
      assignmentDesc: "somedesc",
      assignmentStatus: "unstarted",
    },
    {
      id: 8,
      assignmentName: "somename",
      assignmentDesc: "somedesc",
      assignmentStatus: "unstarted",
    },
  ];

  const onClickStart = (e) => {};
  return (
    <div data-id={id}>
      {/* {arr.map((data) => { */}
      {/* return ( */}
      <div
        className="w-96 flex align-middle justify-between p-2 border-[1px] rounded-md"
        key={id}
        data-id={id}
      >
        <div className="flex justify-center font-semibold flex-col">
          <p>{name || ""}</p>
          <div className="p-1"></div>
          <span className="text-sm">{desc || ""}</span>
        </div>
        <div data-id={id} className="h-auto flex place-items-center" onClick={onClickFn}>
          <span>{status || ""} &#9654;</span>
        </div>
      </div>
      {/* ); */}
      {/* })} */}
    </div>
  );
};

export default ReviewList;
