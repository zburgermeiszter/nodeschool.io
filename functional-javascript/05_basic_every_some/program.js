function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        return submittedUsers.every(function (submittedUser) {
            return goodUsers.some(function(goodUser) {
                return submittedUser === goodUser;
            });
        });
    };
}

module.exports = checkUsersValid;