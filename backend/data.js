const allProducts = [
    {
        _id: "1",
        name: "Tricolore Pizza",
        price: "10.99",
        category: "Pizza",
        imageUrl:
            "https://img.freepik.com/free-photo/vegetarian-pizza-with-zucchini-tomato-peppers-mushrooms_123827-21721.jpg?w=1380&t=st=1691626262~exp=1691626862~hmac=bfab498087c275639c78fb00120fd09c77154b74988d28c13175d9aecff0544e",
        "description": "A colorful and vibrant pizza with the flavors of fresh tomatoes, creamy mozzarella, and fragrant basil leaves.",
        options: [
            {
                name: "Size",
                choices: ["Small", "Medium", "Large"],
                default: "Medium",
            },
            {
                name: "Crust",
                choices: ["Thin Crust", "Thick Crust", "Stuffed Crust"],
                default: "Thin Crust",
            },
        ],
    },
    {
        "_id": "2",
        "name": "Pepperoni Pizza",
        "price": "12.99",
        "category": "Pizza",
        "imageUrl": "https://img.freepik.com/free-photo/thinly-sliced-pepperoni-is-popular-pizza-topping-american-style-pizzerias-isolated-white-background-still-life_639032-229.jpg?w=740&t=st=1691625974~exp=1691626574~hmac=51e3c5084059246184f3c828a2b052b2e4b17ccf24a73572992ecf136efe0376",
        "description": "Classic pizza topped with spicy pepperoni slices and melted cheese.",
        "options": [
            {
                "name": "Size",
                "choices": ["Small", "Medium", "Large"],
                "default": "Medium"
            },
            {
                "name": "Crust",
                "choices": ["Thin Crust", "Thick Crust", "Stuffed Crust"],
                "default": "Thin Crust"
            }
        ]
    },
    {
        "_id": "3",
        "name": "Chocolate Pancake",
        "price": "6.99",
        "category": "Pancake",
        "imageUrl": "https://img.freepik.com/premium-photo/pancakes-with-fresh-berry_770606-2577.jpg?w=996",
        "description": "Delicious pancake made with cocoa powder and topped with chocolate sauce.",
        "options": [
            {
                "name": "Size",
                "choices": ["Small", "Regular", "Large"],
                "default": "Regular"
            },
            {
                "name": "Toppings",
                "choices": ["Maple Syrup", "Whipped Cream", "Banana Slices", "Chopped Nuts"],
                "default": "Maple Syrup"
            }
        ]
    },
    {
        _id: "4",
        name: "Bacon Cheeseburger",
        price: "10.99",
        category: "Burger",
        imageUrl:
            "https://www.mashed.com/img/gallery/fast-food-bacon-burgers-ranked-worst-to-best/intro-1655922152.webp",
        "description": "Classic cheeseburger featuring a juicy beef patty, melted cheese, and crispy bacon.",
        options: [
            {
                name: "Size",
                choices: ["Single Patty", "Double Patty"],
                default: "Single Patty",
            },
            {
                name: "Add-ons",
                choices: ["Bacon", "Avocado", "Extra Cheese", "Fried Egg"],
                default: "Bacon",
            },
        ],
    },
    {
        _id: "5",
        name: "Classic Pancake",
        price: "5.99",
        category: "Pancake",
        imageUrl:
            "https://diznipalacinke.com/assets/img/gallery/tiramisu-palacinka-dizni.jpg",
        "description": "A timeless classic, our fluffy pancake served with your choice of maple syrup or butter.",
        options: [
            {
                name: "Size",
                choices: ["Small", "Regular", "Large"],
                default: "Regular",
            },
            {
                name: "Toppings",
                choices: [
                    "Maple Syrup",
                    "Chocolate Chips",
                    "Whipped Cream",
                    "Fresh Berries",
                ],
                default: "Maple Syrup",
            },
        ],
    },
    {
        _id: "6",
        name: "Blueberry Pancake",
        price: "7.99",
        category: "Pancake",
        imageUrl:
            "https://thestayathomechef.com/wp-content/uploads/2019/01/Perfect-Blueberry-Pancakes-800x450.jpg",
        "description": "Fluffy pancakes studded with juicy blueberries and served with maple syrup.",
        options: [
            {
                name: "Size",
                choices: ["Small", "Regular", "Large"],
                default: "Regular",
            },
            {
                name: "Toppings",
                choices: [
                    "Maple Syrup",
                    "Chocolate Chips",
                    "Whipped Cream",
                    "Fresh Berries",
                ],
                default: "Maple Syrup",
            },
        ],
    },
    {
        "_id": "7",
        "name": "Cheeseburger",
        "price": "8.99",
        "category": "Burger",
        "imageUrl": "https://img.freepik.com/premium-photo/delicious-beef-burger-with-cucumbers-tomatoes-isolated_524291-2255.jpg?w=1380",
        "description": "Classic cheeseburger with juicy beef patty and melted cheese.",
        "options": [
            {
                "name": "Size",
                "choices": ["Single Patty", "Double Patty"],
                "default": "Single Patty"
            },
            {
                "name": "Add-ons",
                "choices": ["Bacon", "Avocado", "Extra Cheese", "Fried Egg"],
                "default": "Bacon"
            }
        ]
    },
    {
        "_id": "8",
        "name": "Mushroom Swiss Burger",
        "price": "9.49",
        "category": "Burger",
        "imageUrl": "https://example.com/mushroom_swiss_burger.jpg",
        "description": "Savory burger topped with sautéed mushrooms and melted Swiss cheese.",
        "options": [
            {
                "name": "Size",
                "choices": ["Single Patty", "Double Patty"],
                "default": "Single Patty"
            },
            {
                "name": "Add-ons",
                "choices": ["Bacon", "Onion Rings", "Jalapeños", "Truffle Mayo"],
                "default": "Bacon"
            }
        ]
    },
    {
        "_id": "9",
        "name": "BBQ Bacon Burger",
        "price": "10.99",
        "category": "Burger",
        "imageUrl": "https://img.freepik.com/free-photo/hamburger-with-cheese-lettuce-bacon_1203-2214.jpg?w=1380&t=st=1691626128~exp=1691626728~hmac=bcbd2172cd1b30323bff5e69a7ca40a3a1eef7561ba993f7f5ae6ec21ae07c46",
        "description": "Delicious burger topped with crispy bacon and tangy BBQ sauce.",
        "options": [
            {
                "name": "Size",
                "choices": ["Single Patty", "Double Patty"],
                "default": "Single Patty"
            },
            {
                "name": "Add-ons",
                "choices": ["Avocado", "Onion Rings", "Cheddar Cheese", "Pickles"],
                "default": "Bacon"
            }
        ]
    },
    {
        "_id": "10",
        "name": "Spicy Jalapeño Burger",
        "price": "9.99",
        "category": "Burger",
        "imageUrl": "https://example.com/spicy_jalapeno_burger.jpg",
        "description": "Zesty burger topped with fiery jalapeños and pepper jack cheese.",
        "options": [
            {
                "name": "Size",
                "choices": ["Single Patty", "Double Patty"],
                "default": "Single Patty"
            },
            {
                "name": "Add-ons",
                "choices": ["Bacon", "Avocado", "Extra Cheese", "Onion Rings"],
                "default": "Bacon"
            }
        ]
    },
    {
        "_id": "11",
        "name": "Hawaiian Pizza",
        "price": "11.99",
        "category": "Pizza",
        "imageUrl": "https://example.com/hawaiian_pizza.jpg",
        "description": "Classic Hawaiian pizza with ham, pineapple, and mozzarella cheese.",
        "options": [
            {
                "name": "Size",
                "choices": ["Small", "Medium", "Large"],
                "default": "Medium"
            },
            {
                "name": "Crust",
                "choices": ["Thin Crust", "Thick Crust", "Stuffed Crust"],
                "default": "Thin Crust"
            }
        ]
    },
    {
        "_id": "12",
        "name": "Veggie Supreme Pizza",
        "price": "12.49",
        "category": "Pizza",
        "imageUrl": "https://example.com/veggie_supreme_pizza.jpg",
        "description": "Loaded with a variety of fresh vegetables and a blend of cheeses.",
        "options": [
            {
                "name": "Size",
                "choices": ["Small", "Medium", "Large"],
                "default": "Medium"
            },
            {
                "name": "Crust",
                "choices": ["Thin Crust", "Thick Crust", "Stuffed Crust"],
                "default": "Thin Crust"
            }
        ]
    },
    {
        "_id": "13",
        "name": "Meat Lover's Pizza",
        "price": "13.99",
        "category": "Pizza",
        "imageUrl": "https://example.com/meat_lovers_pizza.jpg",
        "description": "For meat enthusiasts - loaded with a variety of savory meats and cheese.",
        "options": [
            {
                "name": "Size",
                "choices": ["Small", "Medium", "Large"],
                "default": "Medium"
            },
            {
                "name": "Crust",
                "choices": ["Thin Crust", "Thick Crust", "Stuffed Crust"],
                "default": "Thin Crust"
            }
        ]
    },
    {
        "_id": "14",
        "name": "Margarita Pizza",
        "price": "10.99",
        "category": "Pizza",
        "imageUrl": "https://example.com/margarita_pizza.jpg",
        "description": "Simple and classic pizza with tomato, mozzarella, and basil.",
        "options": [
            {
                "name": "Size",
                "choices": ["Small", "Medium", "Large"],
                "default": "Medium"
            },
            {
                "name": "Crust",
                "choices": ["Thin Crust", "Thick Crust", "Stuffed Crust"],
                "default": "Thin Crust"
            }
        ]
    },
    {
        "_id": "15",
        "name": "Supreme Pizza",
        "price": "12.99",
        "category": "Pizza",
        "imageUrl": "https://example.com/supreme_pizza.jpg",
        "description": "The ultimate pizza experience with a variety of toppings.",
        "options": [
            {
                "name": "Size",
                "choices": ["Small", "Medium", "Large"],
                "default": "Medium"
            },
            {
                "name": "Crust",
                "choices": ["Thin Crust", "Thick Crust", "Stuffed Crust"],
                "default": "Thin Crust"
            }
        ]
    },
    {
        "_id": "16",
        "name": "Mushroom Pizza",
        "price": "11.49",
        "category": "Pizza",
        "imageUrl": "https://example.com/mushroom_pizza.jpg",
        "description": "Pizza loaded with flavorful sautéed mushrooms and melted cheese.",
        "options": [
            {
                "name": "Size",
                "choices": ["Small", "Medium", "Large"],
                "default": "Medium"
            },
            {
                "name": "Crust",
                "choices": ["Thin Crust", "Thick Crust", "Stuffed Crust"],
                "default": "Thin Crust"
            }
        ]
    },
    {
        "_id": "17",
        "name": "Four Cheese Pizza",
        "price": "11.99",
        "category": "Pizza",
        "imageUrl": "https://example.com/four_cheese_pizza.jpg",
        "description": "Indulge in a pizza loaded with a blend of four delicious cheeses.",
        "options": [
            {
                "name": "Size",
                "choices": ["Small", "Medium", "Large"],
                "default": "Medium"
            },
            {
                "name": "Crust",
                "choices": ["Thin Crust", "Thick Crust", "Stuffed Crust"],
                "default": "Thin Crust"
            }
        ]
    },
    {
        "_id": "18",
        "name": "Vegan Veggie Pizza",
        "price": "12.49",
        "category": "Pizza",
        "imageUrl": "https://img.freepik.com/free-photo/delicious-italian-pizza-with-tomato-olives-pepperoni-mushrooms-top-view-isolated-white-background-still-life-copy-space_639032-299.jpg?w=740&t=st=1691626502~exp=1691627102~hmac=ab39dce50906bce05fec621d27fb4b109bb4c0c8a09c160f767d50e925295f35",
        "description": "A plant-based delight featuring a variety of fresh vegetables and vegan cheese.",
        "options": [
            {
                "name": "Size",
                "choices": ["Small", "Medium", "Large"],
                "default": "Medium"
            },
            {
                "name": "Crust",
                "choices": ["Thin Crust", "Thick Crust", "Stuffed Crust"],
                "default": "Thin Crust"
            }
        ]
    },
    {
        "_id": "19",
        "name": "Meat Lover's Burger",
        "price": "11.99",
        "category": "Burger",
        "imageUrl": "https://example.com/meat_lovers_burger.jpg",
        "description": "A carnivore's delight - packed with an assortment of savory meats.",
        "options": [
            {
                "name": "Size",
                "choices": ["Single Patty", "Double Patty"],
                "default": "Single Patty"
            },
            {
                "name": "Add-ons",
                "choices": ["Bacon", "Extra Cheese", "Onion Rings", "BBQ Sauce"],
                "default": "Bacon"
            }
        ]
    },
    {
        "_id": "20",
        "name": "Jalapeño Popper Burger",
        "price": "10.49",
        "category": "Burger",
        "imageUrl": "https://example.com/jalapeno_popper_burger.jpg",
        "description": "Spicy burger topped with jalapeño poppers and cream cheese.",
        "options": [
            {
                "name": "Size",
                "choices": ["Single Patty", "Double Patty"],
                "default": "Single Patty"
            },
            {
                "name": "Add-ons",
                "choices": ["Bacon", "Avocado", "Extra Cheese", "Fried Egg"],
                "default": "Bacon"
            }
        ]
    },
    {
        "_id": "21",
        "name": "Western BBQ Burger",
        "price": "12.99",
        "category": "Burger",
        "imageUrl": "https://example.com/western_bbq_burger.jpg",
        "description": "Burger infused with BBQ flavors, topped with onion rings and cheddar cheese.",
        "options": [
            {
                "name": "Size",
                "choices": ["Single Patty", "Double Patty"],
                "default": "Single Patty"
            },
            {
                "name": "Add-ons",
                "choices": ["Bacon", "BBQ Sauce", "Pickles", "Lettuce"],
                "default": "Bacon"
            }
        ]
    },
    {
        "_id": "22",
        "name": "Portobello Mushroom Burger",
        "price": "10.99",
        "category": "Burger",
        "imageUrl": "https://example.com/portobello_mushroom_burger.jpg",
        "description": "Delicious burger with a grilled Portobello mushroom cap and Swiss cheese.",
        "options": [
            {
                "name": "Size",
                "choices": ["Single Patty", "Double Patty"],
                "default": "Single Patty"
            },
            {
                "name": "Add-ons",
                "choices": ["Caramelized Onions", "Avocado", "Truffle Mayo", "Arugula"],
                "default": "Caramelized Onions"
            }
        ]
    },
    {
        "_id": "23",
        "name": "Double Bacon Burger",
        "price": "11.49",
        "category": "Burger",
        "imageUrl": "https://example.com/double_bacon_burger.jpg",
        "description": "Double the bacon goodness on this mouthwatering burger.",
        "options": [
            {
                "name": "Size",
                "choices": ["Single Patty", "Double Patty"],
                "default": "Double Patty"
            },
            {
                "name": "Add-ons",
                "choices": ["Extra Cheese", "Lettuce", "Tomato", "Pickles"],
                "default": "Extra Cheese"
            }
        ]
    },
    {
        "_id": "24",
        "name": "Serbian Pljeskavica",
        "price": "9.99",
        "category": "Burger",
        "imageUrl": "https://example.com/serbian_pljeskavica.jpg",
        "description": "Authentic Serbian burger made from a blend of meats, seasoned with Balkan spices.",
        "options": [
            {
                "name": "Size",
                "choices": ["Regular", "Large"],
                "default": "Regular"
            },
            {
                "name": "Add-ons",
                "choices": ["Kajmak", "Ajvar", "Onions", "Lettuce"],
                "default": "Kajmak"
            }
        ]
    },
    {
        "_id": "25",
        "name": "Nutella Banana Crepe",
        "price": "7.99",
        "category": "Pancakes",
        "imageUrl": "https://example.com/nutella_banana_crepes.jpg",
        "description": "Delicate crepes filled with Nutella and fresh banana slices.",
        "options": [
            {
                "name": "Size",
                "choices": ["Single", "Double"],
                "default": "Single"
            },
            {
                "name": "Toppings",
                "choices": ["Whipped Cream", "Chocolate Drizzle", "Chopped Nuts", "Powdered Sugar"],
                "default": "Whipped Cream"
            }
        ]
    },
    {
        "_id": "26",
        "name": "Strawberry Cheesecake Crepe",
        "price": "8.49",
        "category": "Pancakes",
        "imageUrl": "https://example.com/strawberry_cheesecake_crepes.jpg",
        "description": "Crepes filled with creamy cheesecake mixture and fresh strawberry slices.",
        "options": [
            {
                "name": "Size",
                "choices": ["Single", "Double"],
                "default": "Single"
            },
            {
                "name": "Toppings",
                "choices": ["Whipped Cream", "Strawberry Sauce", "Graham Cracker Crumbs", "Mint Leaves"],
                "default": "Whipped Cream"
            }
        ]
    },
    {
        "_id": "27",
        "name": "Mixed Berry Crepe",
        "price": "7.99",
        "category": "Pancakes",
        "imageUrl": "https://example.com/mixed_berry_crepes.jpg",
        "description": "Crepes filled with a medley of fresh mixed berries and a drizzle of berry sauce.",
        "options": [
            {
                "name": "Size",
                "choices": ["Single", "Double"],
                "default": "Single"
            },
            {
                "name": "Toppings",
                "choices": ["Whipped Cream", "Berry Sauce", "Powdered Sugar", "Mint Leaves"],
                "default": "Whipped Cream"
            }
        ]
    },
    {
        "_id": "28",
        "name": "Banana Nut Pancakes",
        "price": "8.49",
        "category": "Pancake",
        "imageUrl": "https://example.com/banana_nut_pancakes.jpg",
        "description": "Delicious pancakes made with ripe bananas and crunchy walnuts.",
        "options": [
            {
                "name": "Size",
                "choices": ["Short Stack", "Full Stack"],
                "default": "Short Stack"
            },
            {
                "name": "Toppings",
                "choices": ["Maple Syrup", "Whipped Cream", "Caramel Sauce", "Sliced Bananas"],
                "default": "Maple Syrup"
            }
        ]
    },
    {
        "_id": "29",
        "name": "Chocolate Chip Pancakes",
        "price": "7.99",
        "category": "Pancake",
        "imageUrl": "https://example.com/chocolate_chip_pancakes.jpg",
        "description": "Indulgent pancakes filled with chocolate chips and drizzled with chocolate sauce.",
        "options": [
            {
                "name": "Size",
                "choices": ["Short Stack", "Full Stack"],
                "default": "Short Stack"
            },
            {
                "name": "Toppings",
                "choices": ["Whipped Cream", "Chocolate Syrup", "Banana Slices", "Chopped Nuts"],
                "default": "Whipped Cream"
            }
        ]
    },
    {
        "_id": "30",
        "name": "Strawberry Pancakes",
        "price": "8.49",
        "category": "Pancake",
        "imageUrl": "https://example.com/strawberry_pancakes.jpg",
        "description": "Fluffy pancakes topped with fresh strawberries and a dollop of whipped cream.",
        "options": [
            {
                "name": "Size",
                "choices": ["Short Stack", "Full Stack"],
                "default": "Short Stack"
            },
            {
                "name": "Toppings",
                "choices": ["Maple Syrup", "Whipped Cream", "Strawberry Sauce", "Chocolate Shavings"],
                "default": "Maple Syrup"
            }
        ]
    },
    {
        "_id": "31",
        "name": "Cinnamon Roll Pancakes",
        "price": "9.49",
        "category": "Pancake",
        "imageUrl": "https://example.com/cinnamon_roll_pancakes.jpg",
        "description": "Pancakes infused with the flavors of a cinnamon roll, topped with cream cheese glaze.",
        "options": [
            {
                "name": "Size",
                "choices": ["Short Stack", "Full Stack"],
                "default": "Short Stack"
            },
            {
                "name": "Toppings",
                "choices": ["Cream Cheese Glaze", "Cinnamon Sugar", "Butter", "Pecans"],
                "default": "Cream Cheese Glaze"
            }
        ]
    }

]

module.exports = allProducts;