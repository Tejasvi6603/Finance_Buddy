import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext';
import History from '../../History/History';
import { InnerLayout } from '../../styles/Layout';
import { dollar } from '../../utils/icons';
import Chart from '../Chart/Chart';

function Dashboard() {
    const {totalExpenses,incomes, expenses, totalIncome, totalBalance, getIncomes, getExpenses } = useGlobalContext()

    useEffect(() => {
        getIncomes()
        getExpenses()
    }, [])

    return (
        <DashboardStyled>
            <InnerLayout>
                <div className="stats-con">
                    <div className="chart-con">
                        <Chart />
                        <div className="amount-con">
                            <div className="income">
                                <h2>Total Income</h2>
                                <p>
                                    {dollar} {totalIncome()}
                                </p>
                            </div>
                            <div className="expense">
                                <h2>Total Expense</h2>
                                <p>
                                    {dollar} {totalExpenses()}
                                </p>
                            </div>
                            <div className="balance">
                                <h2>Total Balance</h2>
                                <p>
                                    {dollar} {totalBalance()}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="history-con">
                        <History />
                        <h2 className="salary-title">Min <span>Salary</span> Max</h2>
                        <div className="salary-item">
                            <p>
                                ${Math.min(...incomes.map(item => item.amount))}
                            </p>
                            <p>
                                ${Math.max(...incomes.map(item => item.amount))}
                            </p>
                        </div>
                        <h2 className="salary-title">Min <span>Expenses</span> Max</h2>
                        <div className="salary-item">
                            <p>
                                ${Math.min(...expenses.map(item => item.amount))}
                            </p>
                            <p>
                                ${Math.max(...expenses.map(item => item.amount))}
                            </p>
                        </div>
                    </div>
                </div>
            </InnerLayout>
        </DashboardStyled>
    )
}

const DashboardStyled = styled.div`
.stats-con {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
}

.stats-con .chart-con {
  grid-column: 1 / 4;
  height: 300px;
}

.stats-con .amount-con {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-top: 1rem;
}

.stats-con .income,
.stats-con .expense,
.stats-con .balance {
  background: #FCF6F9;
  border: 1px solid #FFFFFF;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.06);
  border-radius: 10px;
  padding: 0.5rem;
}

.stats-con .balance {
  grid-column: 2 / 4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.stats-con .balance p {
  color: green;
  opacity: 0.6;
  font-size: 1.4rem;
}

.stats-con .history-con {
  grid-column: 4 / -1;
}

.stats-con h2 {
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  gap:5rem;
  
}

.stats-con .salary-title span {
  font-size:1.4rem;

}

.stats-con .salary-item {
  background: #FCF6F9;
  border: 1px solid #FFFFFF;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.06);
  padding: 0.5rem;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width:18rem;
}

.stats-con .salary-item p {
  font-weight: 600;
  font-size: 1.2rem;
}



`;

export default Dashboard;