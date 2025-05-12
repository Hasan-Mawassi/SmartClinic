import { DoctorKPIsService } from "../../Services/Doctor/dashboardKpi.js";

export const kpiData =async (req, res)=>{
    try {
        const doctorId = parseInt(req.params.id);
        const kpis = await DoctorKPIsService(doctorId);
        res.json(kpis);
      } catch (error) {
        console.error('KPI error:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
}