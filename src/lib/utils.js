export function convertToUTC(inputDateStr) {
  const regex = /^(\d{4})-(\d{2})-(\d{2})$/;
  const match = inputDateStr.match(regex);

  if (match) {
    const year = match[1];
    const month = match[2];
    const day = match[3];

    const utc = new Date(Date.UTC(year, month, day));
    return utc.toUTCString();
  } else {
    return null; // Return null for an invalid date format
  }
}
