import prisma from "../lib/prisma.js";

export class Perscription {

    
 static async getPrescriptions(patientId) {
    const prescriptions = await prisma.$queryRaw`
      SELECT 
        DATE("createdAt") AS "date",
        JSON_AGG(
          JSON_BUILD_OBJECT(
            'id', p.id,
            'doctorId', p."doctorId",
            'medicineName', p."medicineName",
            'duration', p.duration,
            'frequency', p.frequency,
            'quantity', p.quantity,
            'createdAt', p."createdAt"
          )
        ) AS prescriptions
      FROM prescriptions p
      WHERE p."patientId" = ${patientId}
      GROUP BY DATE(p."createdAt")
      ORDER BY DATE(p."createdAt") DESC;
    `;

    return prescriptions;
  }
    
}