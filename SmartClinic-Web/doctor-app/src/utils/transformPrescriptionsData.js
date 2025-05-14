export const transformPrescriptionsData = (rawData) => {
  const medicinesByDate = {};
  const availableDates = [];

  rawData.forEach((entry) => {
    const formattedDate = new Date(entry.date).toISOString().split('T')[0];

    if (!availableDates.includes(formattedDate)) {
      availableDates.push(formattedDate);
    }

    medicinesByDate[formattedDate] = entry.prescriptions.map((p) => p.medicineName);
  });

  return { availableDates, medicinesByDate };
};
