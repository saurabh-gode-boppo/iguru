import React, { useEffect, useState } from "react";
import data from "../../req.json";
import ReviewList from "./ReviewList";
import { useNavigate } from "react-router-dom";
import AssesseeData from "./AssesseeData";
import ViewReport from "./ViewReport";

const AssesseeDataPage = () => {
  const [responseObject, setResponseObject] = useState();

  const [viewReport, setViewReport] = useState(false);
  const [viewAssessment, setViewAssessment] = useState(false);
  const [assessment, setAssessment] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [reportId, setReportId] = useState("");

  useEffect(() => {
    const payload = {
      assesseeId: localStorage.getItem("assesseeId"),
      associateId: localStorage.getItem("associateId"),
      filterTypeName: "iGuru_Assignment",
      assesseeAssignmentStatus: ["STARTED", "UNSTARTED", "ADMINISTERED"],
      countPage: -1,
      numberPage: 0,
      filter: true,
      orderBy: {
        columnName: "assesseeAssignmentName",
        order: "asc",
      },
      searchCondition: "AND",
      search: [
        {
          condition: "and",
          searchBy: [
            {
              dataType: "string",
              conditionColumn: "assesseeAssignmentStatus",
              conditionValue: {
                condition: "in",
                value: {
                  in: [
                    "STARTED",
                    "UNSTARTED",
                    "ABORTED",
                    "FINISHED",
                    "UNFINISHED",
                    "SUSPENDED",
                    "TERMINATED",
                    "ARCHIVED",
                  ],
                },
              },
            },
          ],
        },
      ],
    };
    fetch(
      // `${
      //   import?.meta.env.VITE_API_BASE_URL + import?.meta.env.VITE_ENVIRONMENT
      // }/insight-guru/api/assignment`,
      "https://isdl4c2gae.execute-api.ap-southeast-1.amazonaws.com/dev/insight-guru/api/assessee/reviewList",
      {
        method: "POST",
        headers: new Headers({
          Authorization:
            "eyJraWQiOiJYdkZEN1wvakVWVktxRWxWblZkc3BZWEhkeWszTzMxQWlJd2FKRHFYNkJGVT0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI3Y2JhODBjZi0xYTE0LTQ4ZWMtODk0My0zM2E4NTdhMGNkOGYiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGhlYXN0LTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGhlYXN0LTFfUTRUak53Ukp6IiwiY2xpZW50X2lkIjoiN3B2ZmQ1djNzNTFwYmZkODNrMzkwZTNqYSIsIm9yaWdpbl9qdGkiOiI3ZTVjZDlkNy1kNWI0LTRjNDQtOWU1MS1iZTgyOGYzODc1ZTAiLCJldmVudF9pZCI6ImRlYzc1MzA1LWNkZjItNDAwZS1hMDY4LTBjNGQ5ZDAyMDk0OSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE3MDY4NTgwMjYsImV4cCI6MTcwNzczNzM3NiwiaWF0IjoxNzA3NzMzNzc2LCJqdGkiOiI0MzhhM2EzMy04ZDNkLTQwNzUtYTJhZS1kY2NlYWM3NjAwYzEiLCJ1c2VybmFtZSI6IjY0ODFhYmExOWU1NWE2NmM2YjRmYjJiZCJ9.vIOxA1_uxUD5K9Mo2oF0MurVswN0SvP-tIfu1DGCZQSn7pDOO0xaNnrxsD_cPBmEEjHckjPAdUneoCS5jtNCpMAShyN-ZFQ5GnJaVPTn-0cgA6gcbRDD5QR1Dd0m6CBJBJVHaQ1kljXlrItIL1crPjC1HMz1_WvBmkMOj-oY6s7uk7ishqsPT-TPJEF_vMv-iHA5t04P-4PU3Nhdo2HGCezVrqxDONituU7y_ZNi5kEFF5ee7dSUg0wypRPcndaTxAFB8_emmPQRNphbQgtytnp4ynZumRhFl0pqgdIJkwTpOzQH7qlAOxBNAKsW804becrcgnZM1XT3sLIqk7ULIA",
        }),
        body: JSON.stringify(payload),
      }
    )
      .then(async (data) => {
        let resp = await data.json();
        setResponseObject(resp.responseObject);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        console.log(e);
      });
  }, []);


  return (
    <>
      {isLoading && (
        <div role="status">
          <svg
            aria-hidden="true"
            className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      )}

      {!isLoading && !viewReport && (
        <>
          <AssesseeData
            name={
              responseObject?.assesseeInformation?.informationBasic
                ?.assesseeNameFirst +
              " " +
              responseObject?.assesseeInformation?.informationBasic
                ?.assesseeNameOther +
              " " +
              responseObject?.assesseeInformation?.informationBasic
                ?.assesseeNameLast
            }
            email={
              responseObject?.assesseeInformation?.assesseeAddressEmailPrimary
                .assesseeAddressEmail
            }
            assesseeId={
              responseObject?.assesseeInformation?.assesseeTag
                .assesseeTagPrimary
            }
            gender={
              responseObject?.assesseeInformation?.informationPersonal
                .assesseeGender
            }
          />
          <div className="flex align-middle justify-center">
            <div className="mx-5 border[1px] border-slate-400">
              <h2 className="my-2 text-yellow-500">Assesee Report</h2>
              {responseObject?.assesseeReport?.map((data, index) => {
                return (
                  <ReviewList
                    name={data?.assesseeAssignmentName}
                    desc={data?.assesseeAssignmentDescription}
                    id={index}
                    status={data?.assesseeAssignmentStatus}
                    onClickFn={(e) => {
                      let idx = e.currentTarget?.getAttribute("data-id");
                      setReportId(idx);
                      setViewReport(true);
                      // navigate("/report");
                    }}
                  />
                );
              })}
              <div className="">
                <h2 className="my-2 text-yellow-500">certificates</h2>
                {responseObject?.assesseeCertificate?.map((data, index) => {
                  return (
                    <ReviewList
                      name={"certificate1"}
                      desc={""}
                      id={index}
                      status={"view certificate"}
                      onClickFn={(e) => {
                        window.open(data);
                      }}
                    />
                  );
                })}
              </div>
            </div>

            {!viewAssessment && (
              <div className="">
                <h2 className="my-2 text-yellow-500">assesseeAssignment</h2>
                {responseObject?.assesseeAssignment?.map((data, index) => {
                  return (
                    <ReviewList
                      name={data?.assesseeAssignmentName}
                      desc={data?.assesseeAssignmentDescription}
                      id={data?.assesseeAssignmentId}
                      status={data?.assesseeAssignmentStatus}
                      onClickFn={(e) => {
                        let idx = e.currentTarget?.getAttribute("data-id");
                        let assessmentdata = [];
                        responseObject?.assesseeAssignment?.forEach((data) => {
                          if (idx === data?.assesseeAssignmentId)
                            assessmentdata?.push(
                              data?.assesseeAssignmentAssessmentDistinct
                            );
                        });
                        setAssessment(assessmentdata);
                        setViewAssessment(true);
                      }}
                    />
                  );
                })}
              </div>
            )}
            {viewAssessment && (
              <div className="">
                <h2 className="my-2 text-yellow-500">
                  assesseeAssignmentAssessment
                </h2>
                {assessment?.length > 0 &&
                  assessment[0]?.map((data, index) => {
                    return (
                      <ReviewList
                        name={data?.assesseeAssignmentAssessmentName}
                        desc={data?.assesseeAssignmentAssessmentDescription}
                        id={data?.assesseeAssignmentAssessmentId}
                        status={data?.assesseeAssignmentAssessmentStatus}
                        onClickFn={(e) => {
                          setViewAssessment(false);
                        }}
                      />
                    );
                  })}
              </div>
            )}
          </div>
        </>
      )}

      {!isLoading && viewReport && (
        <>
          {responseObject?.assesseeReport[
            reportId
          ].assesseeAssignmentAssessmentDistinct?.map((data) => {
            return (
              <ViewReport
                backBtn={() => {
                  setViewReport((prevState) => !prevState);
                }}
                assesseeAssignmentAssessmentScore={
                  data.assesseeAssignmentAssessmentScore
                }
                data={data}
              />
            );
          })}
        </>
      )}
    </>
  );
};

export default AssesseeDataPage;
