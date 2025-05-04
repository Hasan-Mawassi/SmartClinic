
export const timeList = (slotsArry) => {
  return slotsArry.map((a, idx) =>
    `${idx + 1}. ${new Date(a).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' , hour12: false, timeZone: 'UTC'})}`
  ).join('\n');
}