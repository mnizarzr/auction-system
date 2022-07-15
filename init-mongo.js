db.createUser({
    user: "admin",
    pwd: "admin",
    roles: [
        {
            role: "readWrite",
            db: "auct"
        }
    ]
});

db.createCollection("users");

db.admins.update(
    {
        email: "admin@admin.com"
    },
    {
        $setOnInsert: { email: "admin@admin.com", name: "Administrator", password: "$2b$12$lOrFtpzzlWKtxV06Nhw1GOdCCMwVY.OU9iI3SU.L7PQpnbRVD9CNK" }
    },
    {
        upsert: true
    }
)