const { getObjectId } = require('../../helpers/index');

let fullNames = []

for (var i = 1; i <= 5; i++) {
    fullNames.push("Regular User " + i)
}

const mappedUsers = names => {
    return names.map((name, index) => {
        const id = getObjectId(name);

        return {
            id,
            full_name: name,
            email: "user" + index + "@user.com",
            password: "$2b$12$XqPqDANHbOk1vck1hZAAhefE2wMQBFSiiUF0yl6TVrenNVpCslmRe"
        };
    })
}

module.exports = mappedUsers(fullNames);