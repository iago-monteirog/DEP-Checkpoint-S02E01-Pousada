import moment from "moment";

const utils = {
  dateIsValid(date) {
    return /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(
      date
    );
  },
  splitDateStr(date) {
    date = date.split("/");

    return {
      day: parseInt(date[0]),
      month: parseInt(date[1]),
      year: parseInt(date[2]),
    };
  },
  dateIsBeforeToday(date) {
    date = utils.splitDateStr(date);

    return moment(`${date.month}/${date.day}/${date.year}`)
      .add(1, "days")
      .isBefore(moment());
  },
  daysIntervalFromGivenDate(checkoutDate) {
    checkoutDate = utils.splitDateStr(checkoutDate);

    return moment(
      `${checkoutDate.month}/${checkoutDate.day}/${checkoutDate.year}`
    ).diff(moment(), "days");
  },
  daysInterval(checkinDate, checkoutDate) {
    checkoutDate = utils.splitDateStr(checkoutDate);
    checkinDate = utils.splitDateStr(checkinDate);

    return moment(
      `${checkoutDate.month}/${checkoutDate.day}/${checkoutDate.year}`
    ).diff(
      moment(`${checkinDate.month}/${checkinDate.day}/${checkinDate.year}`),
      "days"
    );
  },
  intervalIsInvalid(checkinDate, checkoutDate) {
    return utils.daysInterval(checkoutDate, checkinDate) < 0;
  },
  daysAfterNow(checkoutDate, days) {
    return utils.daysIntervalFromGivenDate(checkoutDate) < days;
  },
};

export default utils;
