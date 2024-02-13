import React from "react";

const ReviewList = () => {
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

  const onClickStart = (e) => {
    
  }

  return (
    <div>
      {arr.map((data) => {
        return (
          <div className="w-96 flex align-middle justify-between p-2 border-[1px] rounded-md" key={data.id} >
            <div className="flex justify-center font-semibold flex-col">
              <p>{data.assignmentName}</p>
              <div className="p-1"></div>
              <span className="text-sm">{data.assignmentDesc}</span>
            </div>
            <div className="h-auto flex place-items-center" onClick={onClickStart}><span>{data.assignmentStatus}  &#9654;</span></div>
          </div>
        );
      })}
    </div>
  );
};

export default ReviewList;
