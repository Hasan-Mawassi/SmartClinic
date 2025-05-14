import { getPatientReport } from "../Services/Doctor/patientReport.js";
import { generateOverviewReport } from "../Services/openAi/reportAiGenerator.js";



export const generatePatientReportAi = async (req, res) => {
  const { patientId } = req.body;

  try {
    const report = await getPatientReport(patientId);
   const generatedReport = await generateOverviewReport(report)
   res.send(generatedReport)
  } catch (err) {
    console.log(err)
    res.status(404).json({ success: false, message: err.message });
  }
};