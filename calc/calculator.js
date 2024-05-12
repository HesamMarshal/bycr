const invsetAmountTag = document.querySelector("#invest_amount");
const dollarPriceTag = document.querySelector("#dollar_price");
// const error = document.querySelector("#error");
// error.visible = false;
const investAmountTomanTag = document.querySelector("#invest_amount_toman");
const investAmountDollarTag = document.querySelector("#invest_amount_dollar");
const interestMonthTomanTag = document.querySelector("#interest_month_toman");
const interestMonthDollarTag = document.querySelector("#interest_month_dollar");
const interestDayTomanTag = document.querySelector("#interest_day_toman");
const interestDayDollarTag = document.querySelector("#interest_day_dollar");

function addCommas(nStr) {
  nStr += "";
  var x = nStr.split(".");
  var x1 = x[0];
  var x2 = x.length > 1 ? "." + x[1] : "";
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, "$1" + "," + "$2");
  }
  return x1 + x2;
}

const valueChange = () => {
  //   dollarPrice = document.querySelector("#dollar_price");
  const invsetAmount = parseInt(invsetAmountTag.value);
  const dollarPrice = parseFloat(dollarPriceTag.value);
  if (dollarPrice <= 0) {
    console.log("dollar price can not be zero");
  } else {
    investAmountTomanTag.innerHTML = addCommas(invsetAmount);
    const investAmountDollar = (invsetAmount / dollarPrice).toFixed(2);

    investAmountDollarTag.innerHTML = addCommas(investAmountDollar);

    if (investAmountDollar < 50) {
      console.log("cant invest");
      interestMonthTomanTag.innerHTML = 0;
      interestMonthDollarTag.innerHTML = 0;
      interestDayTomanTag.innerHTML = 0;
      interestDayDollarTag.innerHTML = 0;
    } else {
      var interestMonthDollar = 0;
      var interestMonthToman = 0;
      var interestDayDollar = 0;
      var interestDayToman = 0;
      // 50 <= invest <=499
      if (investAmountDollar >= 50 && investAmountDollar <= 499) {
        interestMonthDollar = (investAmountDollar * 2) / 100;
        interestMonthToman = (interestMonthDollar * dollarPrice).toFixed(0);
        interestDayDollar = (investAmountDollar * 0.07) / 100;
        interestDayToman = (interestDayDollar + dollarPrice).toFixed(0);
      }
      // 500 <= invest <= 4,999
      else if (investAmountDollar >= 500 && investAmountDollar <= 4999) {
        interestMonthDollar = (investAmountDollar * 4) / 100;
        interestMonthToman = (interestMonthDollar * dollarPrice).toFixed(0);
        interestDayDollar = (investAmountDollar * 0.13) / 100;
        interestDayToman = (interestDayDollar * dollarPrice).toFixed(0);
      }
      // 5,000 <= invest <= 9,999
      else if (investAmountDollar >= 5000 && investAmountDollar <= 9999) {
        interestMonthDollar = (investAmountDollar * 5) / 100;
        interestMonthToman = (interestMonthDollar * dollarPrice).toFixed(0);
        interestDayDollar = (investAmountDollar * 0.17) / 100;
        interestDayToman = (interestDayDollar * dollarPrice).toFixed(0);
      }
      // 10,000 <= invest <= 49,999
      else if (investAmountDollar >= 10000 && investAmountDollar <= 49000) {
        interestMonthDollar = (investAmountDollar * 7) / 100;
        interestMonthToman = (interestMonthDollar * dollarPrice).toFixed(0);
        interestDayDollar = (investAmountDollar * 0.23) / 100;
        interestDayToman = (interestDayDollar * dollarPrice).toFixed(0);
      }
      // 50,000 <= invest <= 1,000,000
      else if (investAmountDollar >= 50000 && investAmountDollar <= 1000000) {
        interestMonthDollar = (investAmountDollar * 8) / 100;
        interestMonthToman = (interestMonthDollar * dollarPrice).toFixed(0);
        interestDayDollar = (investAmountDollar * 0.26) / 100;
        interestDayToman = (interestDayDollar * dollarPrice).toFixed(0);
      }
      // Month
      interestMonthTomanTag.innerHTML = addCommas(interestMonthToman);
      interestMonthDollarTag.innerHTML = addCommas(
        interestMonthDollar.toFixed(2)
      );
      // Day
      interestDayTomanTag.innerHTML = addCommas(interestDayToman);
      interestDayDollarTag.innerHTML = addCommas(interestDayDollar.toFixed(2));
    }
  }
};

dollarPriceTag.addEventListener("change", valueChange);
invsetAmountTag.addEventListener("change", valueChange);
