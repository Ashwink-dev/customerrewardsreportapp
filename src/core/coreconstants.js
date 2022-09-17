const calculateRewards = (transactionRate) => {
    let rewardPoints = 0;
    if (transactionRate > 100) {
        rewardPoints = 2 * transactionRate
    } else if (transactionRate > 50) {
        rewardPoints = 1 * transactionRate
    }
    return rewardPoints
}

const GroupMonthWise = (transactions) => {
    const GroupedResults = [];
    transactions.reduce(function (res, value) {
        if (!res[value.transactionMonth]) {
            res[value.transactionMonth] = {
                rewardPoints: 0,
                transactionMonth: value.transactionMonth
            };
            GroupedResults.push(res[value.transactionMonth])
        }
        res[value.transactionMonth].rewardPoints += value.rewardPoints
        return res;
    }, {});
    return GroupedResults
}

export { calculateRewards, GroupMonthWise }