const { getObjectId } = require('../../helpers/index');

const items = [
  {
    "title": "Sandal Firaun",
    "description": "Sandal yang pernah dilemparkan kepada budak-budak firaun",
    "starting_price": "1000000",
    "min_increase": "1000",
    "start_time": "2022-12-12T19:00:00.000Z",
    "end_time": "2022-12-12T19:05:00.000Z",
    "created_by": getObjectId("Regular User 1"),
    "pictures": [""],
    "subcategory_id": getObjectId("Shoes")
  },
  {
    "title": "K***la Louis XVI",
    "description": "XIXIXIXI kasian",
    "starting_price": "1000000",
    "min_increase": "1000",
    "start_time": "2022-12-12T19:00:00.000Z",
    "end_time": "2022-12-12T19:05:00.000Z",
    "created_by": getObjectId("Regular User 2"),
    "pictures": [""],
    "subcategory_id": getObjectId("Figurines & Miniatures")
  },
  {
    "title": "Topi Thomas Slebew",
    "description": "dingin sekali bos🥶🥶🥶",
    "starting_price": "1000000",
    "min_increase": "1000",
    "start_time": "2022-12-12T19:00:00.000Z",
    "end_time": "2022-12-12T19:05:00.000Z",
    "created_by": getObjectId("Suits"),
    "pictures": [""],
    "subcategory_id": getObjectId("Regular User 3")
  }
];

module.exports = items;
