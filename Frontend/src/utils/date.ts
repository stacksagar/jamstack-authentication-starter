export function getDate(providedDate: string, hideTime?: boolean) {
  const date = new Date(providedDate);
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const monthName = monthNames[date.getMonth()];
  const today = `${date.getDate()} ${monthName} ${date.getFullYear()}`;

  return `${today} ${
    hideTime
      ? ""
      : ", " +
        date.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        })
  }`;
  // var time = hour + ":" + min + ":" + sec;
  // myDiv.innerText = `Today is  ${today}. Time is ${time}`;
}
