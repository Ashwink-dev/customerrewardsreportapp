import React, { useEffect, useState } from "react";
import APIWrapper from "../../core/apiwrapper";
import { calculateRewards, GroupMonthWise } from "../../core/coreconstants";
import moment from "moment";



const HomePage = (props) => {
    const [userDetails, setuserDetails] = useState(null)
    const [totalSpent, settotalSpent] = useState(0)
    const [totalRewardsPoint, settotalRewardsPoint] = useState(0)
    const [customerTransactions, setCustomerTransactions] = useState([])
    const [customerTransactionMonthWise, setcustomerTransactionMonthWise] = useState([])

    useEffect(() => {
        const userdetails = JSON.parse(localStorage.getItem('userdetails') ? localStorage.getItem('userdetails') : null)
        if (userdetails) {
            fetchCustomerTransactions(userdetails.username)
            setuserDetails(userdetails)
        }
    }, [])

    const fetchCustomerTransactions = (username) => {
        APIWrapper('GET', `customertransactions?username=${username}`).then((response) => {
            if (response.status === 200) {
                if (response.data.length) {
                    let transactions = response.data[0].transactions
                        .map((details) => Object.assign({ ...details, transactionMonth: moment(details.transactionDate).format('MMMM YYYY'), rewardPoints: calculateRewards(details.spent) })) // Calculate Reward Based On Transaction Rate
                        .filter((details) => moment(details.transactionDate).isBetween(moment().subtract(3, 'months'), moment(), undefined, '[]')) // Filtering last 3 months transaction 
                    const TotalAmountSpent = transactions.reduce((accumulator, object) => accumulator + object.spent, 0); // calculating total spent by customer
                    const TotalRewardPoints = transactions.reduce((accumulator, object) => accumulator + object.rewardPoints, 0); // calculating total reward points by customer
                    setCustomerTransactions(transactions)
                    settotalSpent(TotalAmountSpent)
                    settotalRewardsPoint(TotalRewardPoints)
                     setcustomerTransactionMonthWise(GroupMonthWise(transactions)) // grouping transaction based on month
                } else {
                    alert('No Transaction were found for the customer !!!')
                }
            } else {
                alert(process.env.REACT_APP_MESSAGE)
            }
        })
    }

    return (<div>
        <div className="userdetails">
            <h4>Hi, {userDetails ? userDetails.username : ''}</h4>
            <h5>Total Spent - $ {totalSpent}</h5>
            <h5>Total Reward Points - $ {totalRewardsPoint}</h5>
        </div>
        <h2 className="tableTitle">Transaction &amp; Reward Points Data - Month Wise</h2>
        <table id="customers" style={{ width: '40%' }}>
        <thead>
            <tr>
                <th>S. No</th>
                <th>Transaction Month</th>
                <th>Total Reward Points</th>
            </tr>
        </thead>
            <tbody>
            {customerTransactionMonthWise.map((transaction, index) => {
                return (<tr key={index + 1}>
                    <td>{index + 1}</td>
                    <td>{transaction.transactionMonth}</td>
                    <td className="textAlignRight">{transaction.rewardPoints}</td>
                </tr>)
            })}
            </tbody>
        </table>
        <h2 className="tableTitle">Transaction &amp; Reward Points Data - Day Wise</h2>
        <table id="customers">
        <thead>
            <tr>
                <th>Transaction ID</th>
                <th>Transaction Name</th>
                <th>Spent (CAD)</th>
                <th>Rewards Collected</th>
                <th>Transaction Date</th>
                <th>Transaction Type</th>
            </tr>
        </thead>
            <tbody>
            {customerTransactions.map((transaction) => {
                return (<tr key={transaction.transactionId}>
                    <td>{transaction.transactionId}</td>
                    <td>{transaction.transactionName}</td>
                    <td className="textAlignRight">$ {transaction.spent}</td>
                    <td className="textAlignRight">{transaction.rewardPoints}</td>
                    <td>{transaction.transactionDate}</td>
                    <td>{transaction.transactionType}</td>
                </tr>)
            })}
            </tbody>
        </table>
    </div >
    )
}

export default HomePage