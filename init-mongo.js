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

db.users.update(
    {
        _id: new ObjectId("6294d99eae58b78f9e932ee0"),
        email: "user@user.com"
    },
    {
        $setOnInsert: {
            email: "user@user.com",
            full_name: "Regular User",
            password: "$2b$12$XqPqDANHbOk1vck1hZAAhefE2wMQBFSiiUF0yl6TVrenNVpCslmRe",
        }
    },
    {
        upsert: true
    }
)

db.categories.insertMany(
    [
        {
            "name": "Art",
            "sub_categories": [
                { 
                    "_id": new ObjectId(),
                    "name": "Drawings"
                },
                { "name": "Photography" },
                { "name": "Mixed Media & Collages" },
                { "name": "Sculptures" },
                { "name": "Prints & Multiples" },
                { "name": "Scrolls, Screens & Fan paintings" },
                { "name": "Paintings" },
                { "name": "Statues & Statuettes" }
            ]
        },
        {
            "name": "Furniture",
            "sub_categories": [
                { "name": "Bedframes & Headboards" },
                { "name": "Tables" },
                { "name": "Armoires & Wardrobes" },
                { "name": "Sideboards & Buffets" },
                { "name": "Chairs" },
                { "name": "Bookcases, Etageres & Display Cases" },
                { "name": "Sofas & Canapes" },
                { "name": "Seating" },
                { "name": "Benches & Stools" },
                { "name": "Desks & Writing Tables" },
                { "name": "Dining Tables" }
            ]
        },
        {
            "name": "Jewelry",
            "sub_categories": [
                { "name": "Cufflinks, Tie Pins & Tie Clips" },
                { "name": "Necklaces & Pendants" },
                { "name": "Costume Jewelry" },
                { "name": "Brooches & Pins" },
                { "name": "Loose Stones & Beads" },
                { "name": "Earrings" },
                { "name": "Rings" },
                { "name": "Bracelets" },
                { "name": "Watches" }
            ]
        },
        {
            "name": "Collectibles",
            "sub_categories": [
                { "name": "Figurines & Miniatures" },
                { "name": "Home Hardware, Tools & Locks" },
                { "name": "Hunting & Fishing" },
                { "name": "Pens & Writing Instruments" },
                { "name": "Maps,  Globes & Atlases" },
                { "name": "Musical Instruments & Music Stands" },
                { "name": "Coins, Currency & Stamps" },
                { "name": "Cameras" },
                { "name": "Books, Magazines & Papers" },
                { "name": "Banks, Registers & Adding Machines" },
                { "name": "Radios & Audio Equipment" },
                { "name": "Weapons & Armor" },
                { "name": "Scientific Objects" },
                { "name": "Games" },
                { "name": "Advertisements & Signs" }
            ]
        },
        {
            "name": "Fashion",
            "sub_categories": [
                { "name": "Dresses" },
                { "name": "Jackets & Coats" },
                { "name": "Handbags & Purses" },
                { "name": "Belts" },
                { "name": "Wallets" },
                { "name": "Shoes" },
                { "name": "Eyeglasses" },
                { "name": "Sweaters" },
                { "name": "Skirts" },
                { "name": "Suits" },
                { "name": "Shirts & Blouses" },
                { "name": "Pants & Trousers" }
            ]
        },
        {
            "name": "Home & Garden",
            "sub_categories": [
                { "name": "Frames, Shelves & Wall Decors" },
                { "name": "Mirrors" },
                { "name": "Lighting" },
                { "name": "Garden Ornaments" },
                { "name": "Garden Furniture" },
                { "name": "Clocks" },
                { "name": "Fireplaces" },
                { "name": "Fireplace Accessories" },
                { "name": "Baskets & Containers" },
                { "name": "Candle Holders" },
                { "name": "Rugs & Carpets" },
                { "name": "Textiles" },
                { "name": "Umbrella Stands & Coat Stands" },
                { "name": "Vases & Garnitures" },
                { "name": "Plants" }
            ]
        }
    ]
)

db.items.insertMany(
    [
        {
            "title": "Botol Jihyo",
            "description": "botol yang pernah dicipok Jihyo",
            "starting_price": "1000000",
            "min_increase": "1000",
            "start_time": "2022-12-12T19:00:00.000Z",
            "end_time": "2022-12-12T19:05:00.000Z",
            "created_by": ObjectId("6294d99eae58b78f9e932ee0"),
            "pictures": [""],
            "subcategory_id": ""
        },
        {
            "title": "Botol Sana",
            "description": "botol yang pernah dicipok Sana",
            "starting_price": "1000000",
            "min_increase": "1000",
            "start_time": "2022-12-12T19:00:00.000Z",
            "end_time": "2022-12-12T19:05:00.000Z",
            "created_by": ObjectId("6294d99eae58b78f9e932ee0"),
            "pictures": [""],
            "subcategory_id": ""
        },
        {
            "title": "Botol Mina",
            "description": "botol yang pernah dicipok Mina",
            "starting_price": "1000000",
            "min_increase": "1000",
            "start_time": "2022-12-12T19:00:00.000Z",
            "end_time": "2022-12-12T19:05:00.000Z",
            "created_by": ObjectId("6294d99eae58b78f9e932ee0"),
            "pictures": [""],
            "subcategory_id": ""
        },
        {
            "title": "Botol Chaeyoung",
            "description": "botol yang pernah dicipok Chaeyoung",
            "starting_price": "1000000",
            "min_increase": "1000",
            "start_time": "2022-12-12T19:00:00.000Z",
            "end_time": "2022-12-12T19:05:00.000Z",
            "created_by": ObjectId("6294d99eae58b78f9e932ee0"),
            "pictures": [""],
            "subcategory_id": ""
        }
    ]
)