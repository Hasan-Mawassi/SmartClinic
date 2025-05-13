import { Patient } from "../../Models/Patient";


export const  getPatientInfo =  async (req , res)=>{
    try {
         const {id} = req.params;
        const patient = await Patient.findPatientById(id);
        res.json(patient)
    } catch (error) {
        res.send(error)
    }
       

}