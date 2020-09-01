import moment from "moment";
moment.locale("pt-br");
const utils = {
  dateIsValid(date) {
    return /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(
      date
    );
  },
  splitDateStr(date) {
    date = date.split("-");
    return {
      year: date[0],
      month: date[1],
      day: date[2],
    };
  },
  dateIsBeforeToday(date) {
    date = utils.splitDateStr(date);

    return moment(`${date.month}/${date.day}/${date.year}`)
      .add(1, "days")
      .isBefore(moment());
  },
  formatToBRDate(date) {
    date = date.split("-");
    return `${date[2]}/${date[1]}/${date[0]}`;
  },
  daysIntervalFromGivenDate(checkoutDate) {
    checkoutDate = utils.splitDateStr(checkoutDate);

    return (
      moment(
        `${checkoutDate.month}/${checkoutDate.day}/${checkoutDate.year}`
      ).diff(moment(), "days") + 1
    );
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
  emailIsValid(email) {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
  },
  formatMoney(number, decimals, dec_point, thousands_sep, symbol = "") {
    if (number === undefined || !decimals || !dec_point || !thousands_sep)
      return;

    number = (number + "").replace(",", "").replace(" ", "");

    let n = !isFinite(+number) ? 0 : +number,
      prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
      sep = typeof thousands_sep === "undefined" ? "," : thousands_sep,
      dec = typeof dec_point === "undefined" ? "." : dec_point,
      s = "",
      toFixedFix = function (n, prec) {
        let k = Math.pow(10, prec);
        return "" + Math.round(n * k) / k;
      };
    // Fix for IE parseFloat(0.55).toFixed(0) = 0;
    s = (prec ? toFixedFix(n, prec) : "" + Math.round(n)).split(".");
    if (s[0].length > 3) {
      s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || "").length < prec) {
      s[1] = s[1] || "";
      s[1] += new Array(prec - s[1].length + 1).join("0");
    }

    return symbol + " " + s.join(dec);
  },
};

export default utils;
