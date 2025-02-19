import React, { useState } from "react";
import "./tracker.css";
const Tracker = () => {
  const [Amount, setAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const [type, setType] = useState("Income");

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  //   const handleExpense = () => {
  //     setTotal((prev) => {
  //       if (prev >= Amount) {
  //         return prev - Amount;
  //       } else {
  //         alert("less balance");
  //       }
  //     });
  //   };

  //   const handleIncome = () => {
  //     setTotal((prev) => prev + Amount);
  //   };

  const handlechange = (e) => {
    setAmount(+e.target.value);
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    if (type === "Income") {
      setTotal((prev) => prev + Amount);
      setTransactions((prev) => [{ amount: Amount, type: type }, ...prev]);
    } else {
      setTotal((prev) => {
        if (prev >= Amount) {
          prev = prev - Amount;
          setTransactions((prev) => [{ amount: Amount, type: type }, ...prev]);
        } else {
          alert("Insufficient funds");
        }
        return prev;
      });
    }
    setAmount(0);
  };
  return (
    <div>
      <div className="main_section">
        <div className="section_1">
          <h1>Amount:{total}</h1>
          <form onSubmit={handlesubmit}>
            <input name="Amount" value={Amount} onChange={handlechange} />
            <select value={type} onChange={handleTypeChange}>
              <option value="Income">Income</option>
              <option value="Expense">Expense</option>
            </select>
            <button type="submit">submit</button>
          </form>
        </div>
        <div className="section_2">
          <div className="section_3">
            {transactions.map((item, index) => {
              return (
                <>
                  <div
                    className={`${
                      item.type == "Income" ? "green" : "red"
                    } list`}
                  >
                    <li>{item.type == "Income" ? "+" : "-"}</li>
                    <li>{item["amount"]}</li>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracker;
