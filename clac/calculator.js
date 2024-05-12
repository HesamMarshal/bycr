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

const valueChange = () => {
  //   dollarPrice = document.querySelector("#dollar_price");
  const invsetAmount = parseInt(invsetAmountTag.value);
  const dollarPrice = parseFloat(dollarPriceTag.value);

  if (dollarPrice <= 0) {
    // error.visible = false;
    console.log("dollar price can not be zero");
  } else {
    investAmountTomanTag.innerHTML = invsetAmount;
    const investAmountDollar = (invsetAmount / dollarPrice).toFixed(2);
    // const investAmountDollar = invsetAmount / dollarPrice;
    console.log("investAmountDollar", investAmountDollar);
    investAmountDollarTag.innerHTML = investAmountDollar;

    ///////////
    if (investAmountDollar < 50) {
      console.log("cant invest");
      interestMonthTomanTag.innerHTML = 0;
      interestMonthDollarTag.innerHTML = 0;
      interestDayTomanTag.innerHTML = 0;
      interestDayDollarTag.innerHTML = 0;
    } else {
      if (investAmountDollar >= 50 && investAmountDollar <= 499) {
        const interestMonthDollar = (investAmountDollar * 2) / 100;
        const interestDayDollar = (investAmountDollar * 0.07) / 100;
        // month
        interestMonthTomanTag.innerHTML = Math.round(
          interestMonthDollar * dollarPrice
        );
        interestMonthDollarTag.innerHTML = interestMonthDollar.toFixed(2);
        // Day
        interestDayTomanTag.innerHTML = Math.round(
          interestDayDollar * dollarPrice
        );
        interestDayDollarTag.innerHTML = interestDayDollar.toFixed(2);
      } else if (investAmountDollar >= 500 && investAmountDollar <= 4999) {
        const interestMonthDollar = (investAmountDollar * 4) / 100;
        const interestDayDollar = (investAmountDollar * 0.13) / 100;
        // month
        interestMonthTomanTag.innerHTML = Math.round(
          interestMonthDollar * dollarPrice
        );
        interestMonthDollarTag.innerHTML = interestMonthDollar.toFixed(2);
        // Day
        interestDayTomanTag.innerHTML = Math.round(
          interestDayDollar * dollarPrice
        );
        interestDayDollarTag.innerHTML = interestDayDollar.toFixed(2);
      } else if (investAmountDollar >= 5000 && investAmountDollar <= 9999) {
        const interestMonthDollar = (investAmountDollar * 5) / 100;
        const interestDayDollar = (investAmountDollar * 0.17) / 100;
        // month
        interestMonthTomanTag.innerHTML = Math.round(
          interestMonthDollar * dollarPrice
        );
        interestMonthDollarTag.innerHTML = interestMonthDollar.toFixed(2);
        // Day
        interestDayTomanTag.innerHTML = Math.round(
          interestDayDollar * dollarPrice
        );
        interestDayDollarTag.innerHTML = interestDayDollar.toFixed(2);
      } else if (investAmountDollar >= 10000 && investAmountDollar <= 49000) {
        const interestMonthDollar = (investAmountDollar * 7) / 100;
        const interestDayDollar = (investAmountDollar * 0.23) / 100;
        // month
        interestMonthTomanTag.innerHTML = Math.round(
          interestMonthDollar * dollarPrice
        );
        interestMonthDollarTag.innerHTML = interestMonthDollar.toFixed(2);
        // Day
        interestDayTomanTag.innerHTML = Math.round(
          interestDayDollar * dollarPrice
        );
        interestDayDollarTag.innerHTML = interestDayDollar.toFixed(2);
      } else if (investAmountDollar >= 50000 && investAmountDollar <= 1000000) {
        const interestMonthDollar = (investAmountDollar * 8) / 100;
        const interestDayDollar = (investAmountDollar * 0.26) / 100;
        // month
        interestMonthTomanTag.innerHTML = Math.round(
          interestMonthDollar * dollarPrice
        );
        interestMonthDollarTag.innerHTML = interestMonthDollar.toFixed(2);
        // Day
        interestDayTomanTag.innerHTML = Math.round(
          interestDayDollar * dollarPrice
        );
        interestDayDollarTag.innerHTML = interestDayDollar.toFixed(2);
      }
    }
  }
};

dollarPriceTag.addEventListener("change", valueChange);
invsetAmountTag.addEventListener("change", valueChange);
