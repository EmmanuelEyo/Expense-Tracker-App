import React, { useContext } from "react";
import { GlobalState } from "../context/GlobalState";

function moneyFormatter(num) {
  let p = num.toFixed(2).split(".");
  return (
    "$ " +
    (p[0].split("")[0] === "-" ? "-" : "") +
    p[0]
      .split("")
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
      }, "") +
    "." +
    p[1]
  );
}

const Balance = () => {
  const { transactions } = useContext(GlobalState);

  const amount = transactions.map((transaction) => transaction.amount);

  const total = amount.reduce((acc, item) => (acc += item), 0);
  return (
    <>
      <h4>Balance</h4>
      <h1>{moneyFormatter(total)}</h1>
    </>
  );
};

export default Balance;
