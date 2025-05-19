import { getPatientReport } from "../Services/Doctor/patientReport.js";
import { generateOverviewReport } from "../Services/openAi/reportAiGenerator.js";
import { successResponse ,errorResponse } from "../Traits/response.js";


export const generatePatientReportAi = async (req, res) => {
  const { patientId } = req.body;

  try {
    const report = await getPatientReport(patientId);
   const generatedReport = await generateOverviewReport(report)
   successResponse(res,generatedReport, "report generated" , 200)
  } catch (err) {
    console.log(err)
   errorResponse(res,err, 500)
  }
};