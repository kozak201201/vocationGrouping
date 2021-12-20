const usersArr = require('./users');

function vocationGroupingFunc(usersArr) {
    const resultObj = {}

    usersArr.forEach(userObj => {
        const userId = userObj.user._id;

        if (!resultObj[userId]) {
            const name = userObj.user.name;
            resultObj[userId] = {};
            resultObj[userId].userId = userId;
            resultObj[userId].name = name;
            resultObj[userId].weekendDates = []
        }

        const startDate = userObj.startDate;
        const endDate = userObj.endDate;
        const weekend = {startDate, endDate}
        resultObj[userId].weekendDates.push(weekend);
    });

    return Object.values(resultObj)
}

const vocationGroupingJson = vocationGroupingFunc(usersArr);
console.log(vocationGroupingJson);