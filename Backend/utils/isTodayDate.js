function isTodayDate(date) {
  return new Date().toDateString() === new Date(date).toDateString();
}
module.exports = isTodayDate