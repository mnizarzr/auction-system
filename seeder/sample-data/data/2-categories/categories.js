const { getObjectId } = require('../../helpers/index');

const categories = [
    {
        "name": "Art",
        "sub_categories": [
            { "name": "Drawings" },
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

const mappedCategories = categories => {
    return categories.map(category => {
        const sub_categories = category.sub_categories.map(sub => {
            console.log(sub)
            const id = getObjectId(sub.name)

            return {
                id,
                name: sub.name
            }
        })
        return {
            name: category.name,
            sub_categories: sub_categories
        }
    })
}

module.exports = mappedCategories(categories);
