import React from "react";
import data from "../../req.json";

const ViewReport = () => {
  const assesseeAssignmentAssessmentScore = {
    assesseeAssignmentAssessmentScoreExtremumMaximum: 12.0,
    assesseeAssignmentAssessmentScoreExtremumMinimum: 0.0,
    assesseeAssignmentAssessmentScoreGrade: "",
    assesseeAssignmentAssessmentScorePercentage: 0.0,
    assesseeAssignmentAssessmentScorePercentile: 0.0,
    assesseeAssignmentAssessmentScoreRank: null,
    assesseeAssignmentAssessmentScoreRaw: 0.0,
    assesseeAssignmentAssessmentScoreScaled: null,
    assesseeAssignmentAssessmentScoreStandardTen: 1.0,
    assesseeAssignmentAssessmentQualityOfJudgementScoreStandardTen: null,
    qualityOfJudgementScoreStandardTenOneLabel: null,
    qualityOfJudgementScoreStandardTenOneExplanation: null,
    qualityOfJudgementScoreStandardTenTwoLabel: null,
    qualityOfJudgementScoreStandardTenTwoExplanation: null,
    assesseeAssignmentAssessmentSpeedOfJudgementScoreStandardTen: null,
    speedOfJudgementScoreStandardTenOneLabel: null,
    speedOfJudgementScoreStandardTenOneExplanation: null,
    speedOfJudgementScoreStandardTenTwoLabel: null,
    speedOfJudgementScoreStandardTenTwoExplanation: null,
    assesseeAssignmentAssessmentActionOrientedScoreStandardTen: null,
    actionOrientedScoreStandardTenOneLabel: null,
    actionOrientedScoreStandardTenOneExplanation: null,
    actionOrientedScoreStandardTenTwoLabel: null,
    actionOrientedScoreStandardTenTwoExplanation: null,
    assesseeAssignmentAssessmentScoreTransformed: 20.0,
    assesseeAssignmentAssessmentScoreZ: -3.0,
    assesseeAssignmentAssesssmentSpeedOfJudgementScoreRaw: null,
    assesseeAssignmentAssesssmentActionOrientedScoreRaw: null,
    assessmentScoreOneLabel: null,
    assessmentScoreOneExplanation: null,
    assessmentScoreTwoLabel: null,
    assessmentScoreTwoExplanation: null,
  };
  const data = {
    assesseeAssignmentAssessmentName: "Data Interpretation",
    assesseeAssignmentAssessmentDescription: "Aptitude Test",
  };
  return (
    <div>
      {/* {data.map((dataVal) => {
        return ( */}
      <div>
        <div className="my-2">
          <p className="text-yellow-500">{data.assesseeAssignmentAssessmentName}</p>
          <span className="text-blue-500">{data.assesseeAssignmentAssessmentDescription}</span>
        </div>
        <table className="table-fixed">
          <tbody>
            <tr className="my-1">
              <td className="border border-slate-700 p-2 ">
                assesseeAssignmentAssessmentScoreExtremumMaximum
              </td>
              <td className="border border-slate-700 p-2 ">
                {
                  assesseeAssignmentAssessmentScore.assesseeAssignmentAssessmentScoreExtremumMaximum
                }
              </td>
            </tr>
            <tr className="my-1">
              <td className="border border-slate-700 p-2 ">
                assesseeAssignmentAssessmentScoreExtremumMinimum
              </td>
              <td className="border border-slate-700 p-2 ">
                {
                  assesseeAssignmentAssessmentScore.assesseeAssignmentAssessmentScoreExtremumMinimum
                }
              </td>
            </tr>
            <tr className="my-1">
              <td className="border border-slate-700 p-2 ">
                assesseeAssignmentAssessmentScoreGrade
              </td>
              <td className="border border-slate-700 p-2 ">
                {
                  assesseeAssignmentAssessmentScore.assesseeAssignmentAssessmentScoreGrade
                }
              </td>
            </tr>
            <tr className="my-1">
              <td className="border border-slate-700 p-2 ">
                assesseeAssignmentAssessmentScorePercentage
              </td>
              <td className="border border-slate-700 p-2 ">
                {
                  assesseeAssignmentAssessmentScore.assesseeAssignmentAssessmentScorePercentage
                }
              </td>
            </tr>
            <tr className="my-1">
              <td className="border border-slate-700 p-2 ">
                assesseeAssignmentAssessmentScorePercentile
              </td>
              <td className="border border-slate-700 p-2 ">
                {
                  assesseeAssignmentAssessmentScore.assesseeAssignmentAssessmentScorePercentile
                }
              </td>
            </tr>
            <tr className="my-1">
              <td className="border border-slate-700 p-2 ">
                assesseeAssignmentAssessmentScoreRank
              </td>
              <td className="border border-slate-700 p-2 ">
                {
                  assesseeAssignmentAssessmentScore.assesseeAssignmentAssessmentScoreRank
                }
              </td>
            </tr>
            <tr className="my-1">
              <td className="border border-slate-700 p-2 ">
                assesseeAssignmentAssessmentScoreRaw
              </td>
              <td className="border border-slate-700 p-2 ">
                {
                  assesseeAssignmentAssessmentScore.assesseeAssignmentAssessmentScoreRaw
                }
              </td>
            </tr>
            <tr className="my-1">
              <td className="border border-slate-700 p-2 ">
                assesseeAssignmentAssessmentScoreScaled
              </td>
              <td className="border border-slate-700 p-2 ">
                {
                  assesseeAssignmentAssessmentScore.assesseeAssignmentAssessmentScoreScaled
                }
              </td>
            </tr>
            <tr className="my-1">
              <td className="border border-slate-700 p-2 ">
                assesseeAssignmentAssessmentScoreStandardTen
              </td>
              <td className="border border-slate-700 p-2 ">
                {
                  assesseeAssignmentAssessmentScore.assesseeAssignmentAssessmentScoreStandardTen
                }
              </td>
            </tr>
            <tr className="my-1">
              <td className="border border-slate-700 p-2 ">
                assesseeAssignmentAssessmentQualityOfJudgementScoreStandardTen
              </td>
              <td className="border border-slate-700 p-2 ">
                {
                  assesseeAssignmentAssessmentScore.assesseeAssignmentAssessmentQualityOfJudgementScoreStandardTen
                }
              </td>
            </tr>
            <tr className="my-1">
              <td className="border border-slate-700 p-2 ">
                qualityOfJudgementScoreStandardTenOneLabel
              </td>
              <td className="border border-slate-700 p-2 ">
                {
                  assesseeAssignmentAssessmentScore.qualityOfJudgementScoreStandardTenOneLabel
                }
              </td>
            </tr>
            <tr className="my-1">
              <td className="border border-slate-700 p-2 ">
                qualityOfJudgementScoreStandardTenOneExplanation
              </td>
              <td className="border border-slate-700 p-2 ">
                {
                  assesseeAssignmentAssessmentScore.qualityOfJudgementScoreStandardTenOneExplanation
                }
              </td>
            </tr>
            <tr className="my-1">
              <td className="border border-slate-700 p-2 ">
                qualityOfJudgementScoreStandardTenTwoLabel
              </td>
              <td className="border border-slate-700 p-2 ">
                {
                  assesseeAssignmentAssessmentScore.qualityOfJudgementScoreStandardTenTwoLabel
                }
              </td>
            </tr>
            <tr className="my-1">
              <td className="border border-slate-700 p-2 ">
                qualityOfJudgementScoreStandardTenTwoExplanation
              </td>
              <td className="border border-slate-700 p-2 ">
                {
                  assesseeAssignmentAssessmentScore.qualityOfJudgementScoreStandardTenTwoExplanation
                }
              </td>
            </tr>
            <tr className="my-1">
              <td className="border border-slate-700 p-2 ">
                assesseeAssignmentAssessmentSpeedOfJudgementScoreStandardTen
              </td>
              <td className="border border-slate-700 p-2 ">
                {
                  assesseeAssignmentAssessmentScore.assesseeAssignmentAssessmentSpeedOfJudgementScoreStandardTen
                }
              </td>
            </tr>
            <tr className="my-1">
              <td className="border border-slate-700 p-2 ">
                speedOfJudgementScoreStandardTenOneLabel
              </td>
              <td className="border border-slate-700 p-2 ">
                {
                  assesseeAssignmentAssessmentScore.speedOfJudgementScoreStandardTenOneLabel
                }
              </td>
            </tr>
            <tr className="my-1">
              <td className="border border-slate-700 p-2 ">
                speedOfJudgementScoreStandardTenOneExplanation
              </td>
              <td className="border border-slate-700 p-2 ">
                {
                  assesseeAssignmentAssessmentScore.speedOfJudgementScoreStandardTenOneExplanation
                }
              </td>
            </tr>
            <tr className="my-1">
              <td className="border border-slate-700 p-2 ">
                speedOfJudgementScoreStandardTenTwoLabel
              </td>
              <td className="border border-slate-700 p-2 ">
                {
                  assesseeAssignmentAssessmentScore.speedOfJudgementScoreStandardTenTwoLabel
                }
              </td>
            </tr>
            <tr className="my-1">
              <td className="border border-slate-700 p-2 ">
                speedOfJudgementScoreStandardTenTwoExplanation
              </td>
              <td className="border border-slate-700 p-2 ">
                {
                  assesseeAssignmentAssessmentScore.speedOfJudgementScoreStandardTenTwoExplanation
                }
              </td>
            </tr>
            <tr className="my-1">
              <td className="border border-slate-700 p-2 ">
                assesseeAssignmentAssessmentActionOrientedScoreStandardTen
              </td>
              <td className="border border-slate-700 p-2 ">
                {
                  assesseeAssignmentAssessmentScore.assesseeAssignmentAssessmentActionOrientedScoreStandardTen
                }
              </td>
            </tr>
            <tr className="my-1">
              <td className="border border-slate-700 p-2 ">
                actionOrientedScoreStandardTenOneLabel
              </td>
              <td className="border border-slate-700 p-2 ">
                {
                  assesseeAssignmentAssessmentScore.actionOrientedScoreStandardTenOneLabel
                }
              </td>
            </tr>
            <tr className="my-1">
              <td className="border border-slate-700 p-2 ">
                actionOrientedScoreStandardTenOneExplanation
              </td>
              <td className="border border-slate-700 p-2 ">
                {
                  assesseeAssignmentAssessmentScore.actionOrientedScoreStandardTenOneExplanation
                }
              </td>
            </tr>
            <tr className="my-1">
              <td className="border border-slate-700 p-2 ">
                actionOrientedScoreStandardTenTwoLabel
              </td>
              <td className="border border-slate-700 p-2 ">
                {
                  assesseeAssignmentAssessmentScore.actionOrientedScoreStandardTenTwoLabel
                }
              </td>
            </tr>
            <tr className="my-1">
              <td className="border border-slate-700 p-2 ">
                actionOrientedScoreStandardTenTwoExplanation
              </td>
              <td className="border border-slate-700 p-2 ">
                {
                  assesseeAssignmentAssessmentScore.actionOrientedScoreStandardTenTwoExplanation
                }
              </td>
            </tr>
            <tr className="my-1">
              <td className="border border-slate-700 p-2 ">
                actionOrientedScoreStandardTenTwoExplanation
              </td>
              <td className="border border-slate-700 p-2 ">
                {
                  assesseeAssignmentAssessmentScore.actionOrientedScoreStandardTenTwoExplanation
                }
              </td>
            </tr>
            <tr className="my-1">
              <td className="border border-slate-700 p-2 ">
                assesseeAssignmentAssessmentScoreTransformed
              </td>
              <td className="border border-slate-700 p-2 ">
                {
                  assesseeAssignmentAssessmentScore.assesseeAssignmentAssessmentScoreTransformed
                }
              </td>
            </tr>
            <tr className="my-1">
              <td className="border border-slate-700 p-2 ">
                assesseeAssignmentAssessmentScoreZ
              </td>
              <td className="border border-slate-700 p-2 ">
                {
                  assesseeAssignmentAssessmentScore.assesseeAssignmentAssessmentScoreZ
                }
              </td>
            </tr>
            <tr className="my-1">
              <td className="border border-slate-700 p-2 ">
                assesseeAssignmentAssesssmentSpeedOfJudgementScoreRaw
              </td>
              <td className="border border-slate-700 p-2 ">
                {
                  assesseeAssignmentAssessmentScore.assesseeAssignmentAssesssmentSpeedOfJudgementScoreRaw
                }
              </td>
            </tr>
            <tr className="my-1">
              <td className="border border-slate-700 p-2 ">
                assesseeAssignmentAssesssmentActionOrientedScoreRaw
              </td>
              <td className="border border-slate-700 p-2 ">
                {
                  assesseeAssignmentAssessmentScore.assesseeAssignmentAssesssmentActionOrientedScoreRaw
                }
              </td>
            </tr>
            <tr className="my-1">
              <td className="border border-slate-700 p-2 ">
                assessmentScoreOneLabel
              </td>
              <td className="border border-slate-700 p-2 ">
                {assesseeAssignmentAssessmentScore.assessmentScoreOneLabel}
              </td>
            </tr>
            <tr className="my-1">
              <td className="border border-slate-700 p-2 ">
                assessmentScoreOneExplanation
              </td>
              <td className="border border-slate-700 p-2 ">
                {
                  assesseeAssignmentAssessmentScore.assessmentScoreOneExplanation
                }
              </td>
            </tr>
            <tr className="my-1">
              <td className="border border-slate-700 p-2 ">
                assessmentScoreTwoLabel
              </td>
              <td className="border border-slate-700 p-2 ">
                {assesseeAssignmentAssessmentScore.assessmentScoreTwoLabel}
              </td>
            </tr>
            <tr className="my-1">
              <td className="border border-slate-700 p-2 ">
                assessmentScoreTwoExplanation
              </td>
              <td className="border border-slate-700 p-2 ">
                {
                  assesseeAssignmentAssessmentScore.assessmentScoreTwoExplanation
                }
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* );
      })} */}
    </div>
  );
};

export default ViewReport;
