import { DoctorKPIsService } from "../../Services/Doctor/dashboardKpi.js";
import { successResponse ,errorResponse } from "../../Traits/response.js";
export const kpiData =async (req, res)=>{
    try {
        const doctorId = parseInt(req.params.id);
        const kpis = await DoctorKPIsService(doctorId);
        successResponse(res, kpis, 'kpi data', 200);
      } catch (error) {
        console.error('KPI error:', error);
        errorResponse(res,error,500)
        // res.status(500).json({ error: 'Internal server error' });
      }
}