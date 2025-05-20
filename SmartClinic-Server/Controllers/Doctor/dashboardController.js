import { DoctorKPIsService } from "../../Services/Doctor/dashboardKpi.js";
import { getMonthlyPatientsData ,getGenderStats, getPatientAgeAnalysis} from "../../Services/Doctor/graphData.js";
import { successResponse ,errorResponse } from "../../Traits/response.js";

export const kpiData =async (req, res)=>{
    try {
        const doctorId = parseInt(req.params.id);
        const kpis = await DoctorKPIsService(doctorId);
        successResponse(res, kpis, 'kpi data', 200);
      } catch (error) {
        console.error('KPI error:', error);
        errorResponse(res,error,500)
      }
}

export const graphsData = async (req, res) => {
    try {
        const {id} = req.query;
        const data = await getMonthlyPatientsData(id)
        const genderData = await getGenderStats(id)
        const ageAnalysis = await getPatientAgeAnalysis(id)
        const graphsRecord ={data,genderData,ageAnalysis}
        successResponse(res, graphsRecord, 'graphs Data', 200);
    } catch (error) {
        console.error('graphsData error:', error);
        errorResponse(res,error,500)
    }
}