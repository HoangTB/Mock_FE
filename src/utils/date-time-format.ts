export const calculateNewDate = (checkInDate: string, duration: string) => {
  if (checkInDate && duration) {
    const selectedDateObj = new Date(checkInDate);
    selectedDateObj.setHours(selectedDateObj.getHours() + parseInt(duration));
    const year = selectedDateObj.getFullYear();
    const month = String(selectedDateObj.getMonth() + 1).padStart(2, '0');
    const date = String(selectedDateObj.getDate()).padStart(2, '0');
    const hours = String(selectedDateObj.getHours()).padStart(2, '0');
    const minutes = String(selectedDateObj.getMinutes()).padStart(2, '0');
    const seconds = String(selectedDateObj.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;
  }
  return '';
};
