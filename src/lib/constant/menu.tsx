/* eslint-disable sonarjs/no-duplicate-string */
const SUSHI = [
  {
    name: "Albacore Tuna (2pcs)",
    desc: "Japanese: Shiro Maguro",
    price: 6,
    isRaw: true,
  },
  {
    name: "Escolar (2pcs)",
    desc: "Japanese: Aburasokomutsu",
    price: 7,
    isRaw: true,
  },
  {
    name: "Flounder (2pcs)",
    desc: "Japanese: Hirame",
    price: 6,
    isRaw: true,
  },
  {
    name: "Flying Fish Roe (2pcs)",
    desc: "Japanese: Tobiko",
    price: 6,
    isRaw: true,
  },
  {
    name: "Fresh Salmon (2pcs)",
    desc: "Japanese: Sake",
    badge: "Recommended",
    price: 7,
    isRaw: true,
  },
  {
    name: "Fresh Water Eel (2pcs)",
    desc: "Japanese: Unagi",
    price: 7,
  },
  {
    name: "Mackerel (2pcs)",
    desc: "Japanese: Saba",
    price: 6,
    isRaw: true,
  },
  {
    name: "Octopus (2pcs)",
    desc: "Japanese: Tako",
    price: 5,
  },
  {
    name: "Red Snapper (2pcs)",
    desc: "Japanese: Tai",
    price: 7,
    isRaw: true,
  },
  {
    name: "Salmon Roe (2pcs)",
    desc: "Japanese: Ikura",
    price: 6,
    isRaw: true,
  },
  {
    name: "Scallop (2pcs)",
    desc: "Japanese: Kobashira",
    price: 7,
    isRaw: true,
  },
  {
    name: "Sea Urchin (2pcs)",
    desc: "Japanese: Uni",
    price: "MKT",
    badge: "Featured",
    isRaw: true,
  },
  {
    name: "Shrimp (2pcs)",
    desc: "Japanese: Ebi",
    price: 5,
  },
  {
    name: "Smelt Fish Roe (2pcs)",
    desc: "Japanese: Masago",
    price: 5,
    isRaw: true,
  },
  {
    name: "Smoked Salmon (2pcs)",
    desc: "Japanese: Smoked Sake",
    price: 7,
  },
  {
    name: "Snow Crab (2pcs)",
    desc: "Japanese: Zuwaigani",
    price: 8,
  },
  {
    name: "Squid (2pcs)",
    desc: "Japanese: Ika",
    price: 5,
    isRaw: true,
  },
  {
    name: "Sweet Shrimp (2pcs)",
    desc: "Japanese: Ama Ebi",
    price: 9,
    isRaw: true,
  },
  {
    name: "Tuna (2pcs)",
    desc: "Japanese: Maguro",
    price: 7,
    badge: "Recommended",
    isRaw: true,
  },
  {
    name: "Yellowtail (2pcs)",
    desc: "Japanese: Hamachi",
    price: 7,
    badge: "Recommended",
    isRaw: true,
  },
];

const SASHIMI = [
  {
    name: "Albacore Tuna (5pcs)",
    desc: "Japanese: Shiro Maguro",
    price: 15,
    isRaw: true,
  },
  {
    name: "Escolar (5pcs)",
    desc: "Japanese: Aburasokomutsu",
    price: 16,
    isRaw: true,
  },
  {
    name: "Flounder (5pcs)",
    desc: "Japanese: Hirame",
    price: 15,
    isRaw: true,
  },
  {
    name: "Flying Fish Roe (5pcs)",
    desc: "Japanese: Tobiko",
    price: 12,
    isRaw: true,
  },
  {
    name: "Fresh Salmon (5pcs)",
    desc: "Japanese: Sake",
    price: 15,
    badge: "Recommended",
    isRaw: true,
  },
  {
    name: "Fresh Water Eel (5pcs)",
    price: 15,
    desc: "Japanese: Unagi",
  },
  {
    name: "Mackerel (5pcs)",
    desc: "Japanese: Saba",
    price: 14,
    isRaw: true,
  },
  {
    name: "Octopus (5pcs)",
    desc: "Japanese: Tako",
    price: 14,
  },
  {
    name: "Red Snapper (5pcs)",
    desc: "Japanese: Tai",
    price: 16,
    isRaw: true,
  },
  {
    name: "Salmon Roe (5pcs)",
    desc: "Japanese: Ikura",
    price: 15,
    isRaw: true,
  },
  {
    name: "Scallop (5pcs)",
    desc: "Japanese: Kobashira",
    price: 15,
    badge: "Recommended",
    isRaw: true,
  },
  {
    name: "Sea Urchin (5pcs)",
    desc: "Japanese: Uni",
    price: "MKT",
    badge: "Featured",
    isRaw: true,
  },
  {
    name: "Shrimp (5pcs)",
    desc: "Japanese: Ebi",
    price: 11,
  },
  {
    name: "Smelt Fish Roe (5pcs)",
    desc: "Japanese: Masago",
    price: 12,
    isRaw: true,
  },
  {
    name: "Smoked Salmon (5pcs)",
    desc: "Japanese: Smoked Sake",
    price: 16,
  },
  {
    name: "Snow Crab (5pcs)",
    desc: "Japanese: Zuwaigani",
    price: 17,
  },
  {
    name: "Squid (5pcs)",
    desc: "Japanese: Ika",
    price: 12,
    isRaw: true,
  },
  {
    name: "Sweet Shrimp (5pcs)",
    desc: "Japanese: Ama Ebi",
    badge: "Recommended",
    price: 20,
    isRaw: true,
  },
  {
    name: "Tuna (5pcs)",
    desc: "Japanese: Maguro",
    price: 16,
    isRaw: true,
  },
  {
    name: "Yellowtail (5pcs)",
    desc: "Japanese: Hamachi",
    price: 16,
    isRaw: true,
  },
];

const MAKI_ROLL = [
  {
    name: "Alaskan",
    desc: "california roll wrapped with fresh salmon, avocado",
    price: 16,
    isRaw: true,
  },
  {
    name: "Cajun",
    desc: "crawfish, spicy mayo",
    price: 8,
  },
  {
    name: "California",
    desc: "crab meat mix, avocado, cucumber",
    price: 8,
  },
  {
    name: "Caterpillar",
    desc: "bbq eel, cucumber, smelt fish roe, wrapped with avocado, eel sauce",
    price: 14,
    badge: "Recommended",
    isRaw: true,
  },
  {
    name: "Chef's Special",
    desc: "crispy tuna roll wrapped in bbq eel, avocado, eel sauce",
    price: 17,
    badge: "Recommended",
  },
  {
    name: "Crispy Tuna",
    desc: "avocado, cucumber, eel sauce",
    price: 9,
  },
  {
    name: "Dynamite",
    desc: "cajun roll topped with baked crawfish, spicy mayo",
    price: 16,
  },
  {
    name: "Philadelphia",
    desc: "smoked salmon, cream cheese, avocado (gluten free)",
    price: 8,
  },
  {
    name: "Poke Bowl",
    desc: "tuna, salmon, yellowtail, avocado, onions, mango, serrano peppers with cabbage salad",
    price: 21,
    isRaw: true,
  },
  {
    name: "Rainbow",
    desc: "california roll wrapped with tuna, salmon, white fish",
    price: 17,
    isRaw: true,
  },
  {
    name: "Salmon Skin",
    desc: "smelt fish roe, scallions, avocado, cucumber, yamagobo, spicy mayo",
    price: 8,
    isRaw: true,
  },
  {
    name: "Scallop",
    desc: "chopped scallop, smelt fish roe, spicy mayo (gluten free)",
    price: 11,
    isRaw: true,
  },
  {
    name: "Shrimp Tempura",
    desc: "avocado, cucumber, eel sauce",
    price: 8,
  },
  {
    name: "Spicy Salmon",
    desc: "chopped salmon, avocado, spicy sauce (gluten free)",
    price: 9,
    isRaw: true,
  },
  {
    name: "Spicy Tuna",
    desc: "chopped tuna, avocado, spicy sauce (gluten free)",
    price: 9,
    badge: "Recommended",
    isRaw: true,
  },
  {
    name: "Spicy Yellowtail",
    desc: "chopped yellowtail, scallions, spicy sauce (gluten free)",
    price: 9,
    isRaw: true,
  },
  {
    name: "Spider",
    desc: "soft shell crab, avocado, cucumber, eel sauce",
    price: 11,
  },
  {
    name: "Summer",
    desc: "fresh salmon, crabmeat mix, wrapped in cucumber, spicy ponzu sauce",
    price: 17,
    badge: "Featured",
    isRaw: true,
  },
  {
    name: "Texas",
    desc: "chopped octopus, avocado, smelt fish roe, serrano peppers (gluten free)",
    price: 8,
    isRaw: true,
  },
  {
    name: "Vegetable",
    desc: "asparagus, avocado, cucumber, yamagobo (gluten free)",
    price: 7,
  },
];

const OISHII_SPECIALTY = [
  {
    name: "42 Roll",
    desc: "spicy shrimp and tempura flakes, topped with avocado and crabmeat mix, serrano peppers and sriracha",
    price: 16,
  },
  {
    name: "43 Roll",
    desc: "spicy shrimp and tempura flakes, wrapped in cucumber, topped with avocado and crabmeat mix, spicy tuna, serrano peppers and sriracha (riceless)",
    price: 21,
    isRaw: true,
  },
  {
    name: "44 Roll",
    desc: "spicy shrimp and tempura flakes, topped with avocado and crabmeat mix, thinly sliced lemon, yellowtail and serrano peppers, drizzled with eel sauce and spicy ponzu sauce",
    price: 23,
    isRaw: true,
    moreSpace: true,
  },
  {
    name: "Caesar Roll",
    desc: "crabmeat mix and tempura flakes, wrapped with salmon, topped with spicy tuna and diced avocado, drizzled with spicy ponzu sauce",
    price: 21,
    isRaw: true,
    moreSpace: true,
  },
  {
    name: "Ceviche",
    desc: "yellowtail, snapper, scallops and avocado, mixed with olive oil, salt, pico de gallo, serrano peppers, cilantro, smelt fish roe and chili powder",
    price: 21,
    isRaw: true,
  },
  {
    name: "Cowboys Roll",
    desc: "shrimp tempura, asparagus, blue cheese, jalapeno and avocado, wrapped with seared beef tenderloin",
    price: 17,
    isRaw: true,
  },
  {
    name: "DOA Roll",
    desc: "spicy tuna mixed with thai chiles, topped with spicy tuna, serrano peppers and sriracha",
    price: 17,
    isRaw: true,
  },
  {
    name: "Donut Roll",
    desc: "spicy shrimp and tempura flakes, topped with avocado, tuna, spicy mayo and eel sauce",
    price: 18,
    isRaw: true,
  },
  {
    name: "Flower Roll",
    desc: "salmon, spicy tuna and tempura flakes, wrapped with tuna, topped with avocado, crabmeat mix and yellowtail, drizzled with spicy mayo, spicy ponzu sauce and wasabi cream sauce (riceless)",
    price: 23,
    isRaw: true,
  },
  {
    name: "Fresh Salmon Taco",
    desc: "salmon mixed with pico de gallo, tempura flakes, spicy mayo and cabbage salad, served in a fried rice shell",
    price: 10,
    isRaw: true,
  },
  {
    name: "G Roll",
    desc: "spicy tuna and tempura flakes, wrapped in crabmeat mix, topped with serrano peppers and sriracha",
    price: 16,
    isRaw: true,
  },
  {
    name: "Golden Roll",
    desc: "crabmeat mix and avocado, wrapped with salmon, topped with sriracha, served with spicy ponzu sauce (riceless)",
    price: 18,
    isRaw: true,
  },
  {
    name: "Gypsy Roll",
    desc: "pressed sushi roll, spicy yellowtail, albacore tuna, tempura flakes and avocado, topped with pico de gallo, drizzled with spicy ponzu sauce",
    price: 21,
    isRaw: true,
  },
  {
    name: "Himalayan Roll",
    desc: "shrimp, spicy yellowtail and tempura flakes, wrapped with cucumber, topped with tuna, salmon, yellowtail, avocado, serrano peppers and poke sauce (riceless)",
    price: 21,
    isRaw: true,
  },
  {
    name: "London Roll",
    desc: "spicy shrimp and tempura flakes, topped with snow crab and avocado",
    price: 16,
  },
  {
    name: "M&M Roll",
    desc: "spicy tuna and tempura flakes, topped with fresh tuna, salmon, spicy mayo, eel sauce and wasabi cream sauce",
    price: 19,
    isRaw: true,
  },
  {
    name: "Oishii Roll",
    desc: "soft shell crab and avocado, topped with crabmeat mix, eel sauce, wasabi cream sauce and sriracha",
    price: 17,
  },
  {
    name: "On The Border Roll",
    desc: "shrimp tempura wrapped with salmon, topped with pico de gallo",
    price: 16,
    isRaw: true,
  },
  {
    name: "Opera Roll",
    desc: "shrimp tempura, jalapeno, avocado and asparagus, wrapped in tuna, topped with spicy tuna and sprouts, drizzled with spicy mayo (riceless)",
    price: 20,
    isRaw: true,
  },
  {
    name: "Poke Roll",
    desc: "shrimp, spicy tuna and tempura flakes, wrapped with tuna, topped with pineapple (can substitute mango), avocado, serrano peppers, eel sauce and poke sauce (riceless)",
    price: 20,
    isRaw: true,
  },
  {
    name: "Roman Roll",
    desc: "pressed sushi roll, crabmeat mix and tempura flakes, topped with seared salmon, drizzled with spicy mayo, eel sauce and dried bonito flake",
    price: 18,
    isRaw: true,
  },
  {
    name: "Royce Roll",
    desc: "crabmeat mix, tempura flakes, truffle oil and avocado, wrapped with yellowtail, topped with thinly sliced lemon and sriracha (riceless)",
    price: 20,
    isRaw: true,
  },
  {
    name: "Salmon Carpaccio",
    desc: "8 thin slices of salmon with olive oil, sea salt, lemon zest, chili powder, sesame seeds and sprouts",
    price: 17,
    isRaw: true,
  },
  {
    name: "Sensei Roll",
    desc: "shrimp tempura roll topped with albacore tuna and avocado",
    price: 16,
    isRaw: true,
  },
  {
    name: "Thanh Scallop Roll",
    desc: "shrimp, salmon, spicy yellowtail and tempura flakes, topped with seared scallops, serrano peppers, flying fish roe, thinly sliced lemon, sriracha, truffle oil, spicy mayo and wasabi cream sauce",
    price: 21,
    isRaw: true,
  },
  {
    name: "Tribeca Roll ",
    desc: "salmon, shrimp chips, tempura flakes, truffle oil and avocado",
    price: 18,
    isRaw: true,
  },
  {
    name: "Tuna Totopo",
    desc: "spicy tuna mixed with pico de gallo, olive oil and sesame seeds, served on a tortilla chip with avocado, drizzled with spicy mayo and wasabi cream sauce",
    price: 16,
    isRaw: true,
  },
  {
    name: "Tuna Watermelon Salad",
    desc: "tuna, watermelon, apple, goat cheese, sesame oil, cilantro, garlic, black pepper, spicy ponzu sauce and sriracha",
    price: 18,
    isRaw: true,
  },
  {
    name: "Uptown Roll",
    desc: "crabmeat mix, salmon, avocado and cucumber, topped with tuna, wasabi cream sauce and sriracha",
    price: 17,
    isRaw: true,
  },
  {
    name: "Wasabi Roll",
    desc: "crispy eel, avocado, wasabi, flying fish roe and wasabi cream sauce",
    price: 11,
    isRaw: true,
  },
];

const DINNER_MENU = {
  APPETIZERS: [
    {
      name: "Crispy Black Tiger Prawns",
      desc: "garlic, onions, jalapenos, parmesan cheese",
      price: 12,
    },
    {
      name: "Crispy Oysters",
      desc: "garlic, onions, jalapenos, parmesan cheese",
      price: 15,
    },
    {
      name: "Crispy Calamari",
      desc: "garlic, onions, jalapenos",
      price: 15,
    },
    {
      name: "Soft Shell Crab Sea Salt",
      desc: "garlic, onions, jalapenos",
      price: 17.5,
    },
    {
      name: "Beef Tataki",
      desc: "seared tenderloin, onions, serranos, sriracha, yuzu, garlic soy sauce",
      price: 15,
      isRaw: true,
    },
    {
      name: "Tuna Tataki",
      desc: "seared tuna, onions, serranos, sriracha, yuzu, garlic soy sauce",
      price: 17.5,
      isRaw: true,
    },
    {
      name: "Shrimp Spring Rolls (2)",
      desc: "lettuce, cilantro, vermicelli, peanut sauce",
      price: 8,
    },
    {
      name: "Shrimp & Pork Egg Rolls (2)",
      desc: "mushrooms, carrots, onions, scallions, clear noodles",
      price: 8,
    },
    {
      name: "Shrimp & Pork Dumplings (5)",
      desc: "daikon, onions, scallions (pan fried)",
      price: 8.5,
    },
    {
      name: "Chicken Pot Stickers(6)",
      desc: "cabbage, carrots, onions, scallions (steamed or fried)",
      price: 7.5,
    },
    {
      name: "Crab Rangoons (4)",
      desc: "cream cheese, sweet & sour sauce",
      price: 7.5,
    },
    {
      name: "Edamame",
      desc: "steamed soybeans, kosher salt (plain)",
      price: 6,
    },
    {
      name: "Spicy Edamame",
      desc: "steamed soybeans, kosher salt (spicy)",
      price: 8,
    },
  ],
  SOUPS: [
    {
      name: "Hot And Sour",
      price: 5,
    },
    {
      name: "Miso",
      price: 4,
    },
    {
      name: "Wonton",
      price: 6,
    },
  ],
  SALADS: [
    {
      name: "Spicy Salmon Cabbage Salad",
      desc: "shredded cabbage, shallots, spicy ponzu dressing",
      price: 17.5,
      isRaw: true,
    },
    {
      name: "Chicken Cabbage Salad",
      desc: "shredded cabbage, cilantro, peanuts, fish sauce dressing",
      price: 14.5,
    },
    {
      name: "House Salad",
      desc: "mixed greens, carrots, ginger dressing",
      price: 7,
    },
  ],
  SIGNATURE_DISHES: [
    {
      name: "Sizzling Crispy Shrimp, Scallops & Whitefish",
      desc: "ginger, onions, chives",
      price: 25,
    },
    {
      name: "Crispy Shrimp, Scallops & Calamari In Sea Salt",
      desc: "garlic, onions, jalapenos",
      price: 25,
    },
    {
      name: "Peking Duck",
      desc: "rice bun, spring onions, traditional sweet sauce",
      price: "MKT",
    },
  ],
  CHICKEN: [
    {
      name: "Lemongrass Chicken",
      desc: "lemongrass, onions, scallions, carrots",
      price: 15.5,
    },
    {
      name: "Orange Chicken",
      desc: "crispy chicken, carrots, onions",
      price: 15.5,
    },
    {
      name: "Chicken & Broccoli",
      desc: "broccoli, bamboo shoots, carrots",
      price: 15.5,
    },
    {
      name: "General's Chicken",
      desc: "crispy chicken, carrots, bell peppers, onions",
      price: 15.5,
    },
    {
      name: "Kung Pao Chicken",
      desc: "water chestnuts, celery, bell peppers, snow peas, carrots, peanuts",
      price: 15.5,
    },
    {
      name: "Chicken In Black Bean Sauce",
      desc: "onions, bell peppers, carrots",
      price: 15.5,
    },
    {
      name: "Curry Chicken",
      desc: "onions, bell peppers, carrots, yellow curry",
      price: 15.5,
    },
    {
      name: "Singapore Noodles & Chicken",
      desc: "egg, bean sprouts, carrots, celery, coconut cream, yellow curry",
      price: 15,
    },
  ],
  PORK: [
    {
      name: "Crispy Pork In Black Bean Sauce",
      desc: "onions, bell peppers, carrots",
      price: 16,
    },
    {
      name: "Crispy Pork In Spicy Sea Salt",
      desc: "garlic, onions, jalapenos, sriracha",
      price: 16,
    },
  ],
  BEEF_TENDERLOIN: [
    {
      name: "Pepper Steak",
      desc: "bell peppers, carrots",
      price: 17,
    },
    {
      name: "Beef & Broccoli",
      desc: "broccoli ,carrots, bamboo shoots",
      price: 17,
    },
    {
      name: "Sizzling Beef",
      desc: "scallions, onions, bell peppers, baby corn",
      price: 18,
    },
    {
      name: "Mongolian Beef",
      desc: "scallions, onions, bamboo shoots, crispy noodles",
      price: 18,
    },
    {
      name: "Shaken Beef",
      desc: "scallions, onions, tomatoes",
      price: 21,
    },
    {
      name: "Beef Flat Noodles",
      desc: "egg, bean sprouts, carrots, celery, onions",
      price: 16.5,
    },
  ],
  SEAFOOD: [
    {
      name: "Kung Pao Shrimp",
      desc: "water chestnuts, celery, bell peppers, peas, carrots, peanuts",
      price: 17,
    },
    {
      name: "Shrimp & Vegetables",
      desc: "cabbage, snow peas, baby corn, mushrooms, broccoli",
      price: 17,
    },
    {
      name: "Shrimp Fried Rice",
      desc: "egg, peas, carrots",
      price: 17,
    },
    {
      name: "Shrimp In Black Bean Sauce",
      desc: "carrots, bell peppers, onions",
      price: 18,
    },
    {
      name: "Shrimp Pad Thai",
      desc: "rice noodles, egg, bean sprouts, celery, carrots, onions",
      price: 16.5,
    },
    {
      name: "Grilled Salmon",
      desc: "egg, bean sprouts, carrots, celery, onions",
      price: 25,
    },
    {
      name: "Shrimp, Scallops, Calamari & Vegetables",
      desc: "cabbage, snow peas, baby corn, mushrooms, broccoli",
      price: 22,
    },
  ],
  VIETNAMESE_VERMINCELLI: [
    {
      name: "Grilled Chicken Vermicelli (Bun Ga Nuong Cha Gio)",
      desc: "egg roll, lettuce, cucumbers, bean sprouts, daikon, cilantro, peanuts",
      price: 14,
    },
    {
      name: "Wok Sautéed Beef Tenderloin Vermicelli (Bun Bo Xao Cha Gio)",
      desc: "egg roll, lettuce, cucumbers, bean sprouts, daikon, cilantro, peanuts",
      price: 14,
    },
    {
      name: "Grilled Pork Vermicelli (Bun Thit Nuong Cha Gio)",
      desc: "egg roll, lettuce, cucumbers, bean sprouts, daikon, cilantro, peanuts",
      price: 14,
    },
    {
      name: "Crispy Tofu Vermicelli (Bun Dau Hu Chien)",
      desc: "cucumber lettuce, bean sprouts, cilantro, peanuts",
      price: 13,
    },
    {
      name: "Wok Sautéed Shrimp Vermicelli (Bun Tom Xao Cha Gio)",
      desc: "egg roll, lettuce, cucumbers, bean sprouts, daikon, cilantro, peanuts",
      price: 14,
    },
  ],
  NODDLE_SOUPS: [
    {
      name: "Pho Ga (Chicken Breast)",
      desc: "rice noodle soup, bean sprouts, cilantro, basil",
      price: 14,
    },
    {
      name: "Pho Dac Biet (Rare Steak, Meatballs & Well Done Steak)",
      desc: "rice noodle soup, bean sprouts, cilantro, basil",
      price: 14.5,
    },
    {
      name: "Pho Tai Bo Vien (Rare Steak & Meatballs)",
      desc: "rice noodle soup, bean sprouts, cilantro, basil",
      price: 14.5,
    },
    {
      name: "Hu Tieu Thap Cam (Shrimip, Scallops & Pork)",
      desc: "rice noodle soup, bean sprouts, cilantro, basil",
      price: 14.5,
    },
    {
      name: "Mi Hoanh Thanh (Shrimp, Scallops & Pork)",
      desc: "rice noodle soup, wontons, bean sprouts, cilantro, basil",
      price: 14.5,
    },
    {
      name: "Mi Bo Kho (Vietnamese Beef Stew)",
      desc: "egg noodle stew, carrots, bean sprouts, cilantro, basil",
      price: 18.5,
    },
  ],
  VEGETABLES: [
    {
      name: "Baby Bok Choy",
      desc: "white garlic sauce",
      price: 14,
    },
    {
      name: "Chinese Broccoli",
      desc: "white garlic sauce",
      price: 14,
    },
    {
      name: "Buddhist Delight & Crispy Tofu",
      desc: "carrots, onions, mushrooms, snow peas, clear noodles",
      price: 15,
    },
    {
      name: "Crispy Tofu",
      desc: "garlic, onions, jalapenos",
      price: 14.5,
    },
  ],
};

const WINES = {
  CHAMPAGNE_SPARKLING_WINES: [
    {
      name: "Nicolas Feuillatte",
      desc: "Réserve Exclusive Brut, Champagne, France NV",
      price: "19 | 75",
    },
    {
      name: "D.M",
      desc: "Sparkling Brut, Vale Dos Vinhedos, Brazil 2020",
      price: "73",
    },
    {
      name: 'Sumarroca "Yá Cuvée 23"',
      desc: "Brut Reserva Cava, Catalonia, Spain 2018",
      price: "65",
    },
    {
      name: "Lamberti",
      desc: "Sparkling Rosé, Prosecco, Italy 2020",
      price: "11 | 40",
    },
    {
      name: "Jansz",
      desc: "Sparkling Rosé, Tasmania, Australia NV",
      price: "68",
    },
    {
      name: "Fritz Müller",
      desc: "Müller-Thurgau, Rheinhessen, Germany NV",
      price: "56",
    },
  ],
  WHITE_WINES_CRISP_LIGHTER_BODY: [
    {
      name: "Gavalas “Santorini”",
      desc: "Assyrtiko, Santorini, Greece 2020",
      price: "105",
    },
    {
      name: "Leduc-Frouin “La Seigneurie”",
      desc: "Chenin Blanc, Anjou, France 2019",
      price: "62",
    },
    {
      name: "Famille Perrin “Réserve”",
      desc: "Grenache Blanc, Côtes du Rhône, France 2020 375ml",
      price: "29",
    },
    {
      name: "Bollini",
      desc: "Sauvignon Blanc, Trentino-Alto Adige, Italy 2020",
      price: "12 | 42",
    },
    {
      name: "Pascal Jolivet “Attitude”",
      desc: "Sauvignon Blanc, Loire Valley, France 2020",
      price: "68",
    },
    {
      name: "DRNK",
      desc: "Sauvignon Blanc, Sonoma Valley, California 2020",
      price: "53",
    },
    {
      name: "Dog Point",
      desc: "Sauvignon Blanc, Marlborough, New Zealand 2021",
      price: "72",
    },
    {
      name: "Villa Matilde",
      desc: "Tenute di Altavilla, Greco di Tufo, Italy 2020",
      price: "14 | 45",
    },
    {
      name: "Vietti",
      desc: "Arneis, Roero, Italy 2020",
      price: "59",
    },
    {
      name: "Belle Pente",
      desc: "Pinot Gris, Willamette Valley, Oregon 2016",
      price: "49",
    },
    {
      name: "Weixelbaum “Wechselberg”",
      desc: "Grüner Veltliner, Kamptal, Austria 2020",
      price: "56",
    },
    {
      name: "Domaine Félines Jourdan",
      desc: "Picpoul de Pinet, Languedoc-Roussillon, France 2019",
      price: "55",
    },
    {
      name: "Cadre Wines “Sea Queen”",
      desc: "Albariño, Edna Valley, California 2020",
      price: "66",
    },
    {
      name: "Celeste “Sur Lies”",
      desc: "Verdejo, Rueda, Spain 2019",
      price: "48",
    },
  ],
  WHITE_WINES_MEDIUM_FULL_BODY: [
    {
      name: "Gundlach Bundschu",
      desc: "Gewürztraminer, Sonoma Coast, California 2020",
      price: "64",
    },
    {
      name: "d’Arenberg “The Hermit Crab”",
      desc: "Viognier Marsanne, McLaren Vale, Australia 2021",
      price: "50",
    },
    {
      name: "Domaine Weinbach “Clos des Capucins”",
      desc: "Pinot Gris, Alsace, France 2019",
      price: "90",
    },
    {
      name: "Terracotta",
      desc: "Pinot Grigio, Veneto, Italy 2021",
      price: "12 | 44",
    },
    {
      name: "Domaine Charly Nicolle “Per Aspera”",
      desc: "Chardonnay, Chablis, France 2019",
      price: "70",
    },
    {
      name: "Antinori “Bramìto della Sala”",
      desc: "Chardonnay, Umbria, Italy 2021",
      price: "12 | 46",
    },
    {
      name: "Charles Krug",
      desc: "Chardonnay, Carneros, California 2020",
      price: "13 | 50",
    },
    {
      name: "Château Gazin-Rocquencourt",
      desc: "Sauvignon Blanc, Pessac-Léognan, France 2016",
      price: "76",
    },
    {
      name: "EnRoute “Brumaire”",
      desc: " Chardonnay, Russian River Valley, California 2020",
      price: "100",
    },
  ],
  ROSE_WINES: [
    {
      name: "Cà Maiol “Chiaretto”",
      desc: "Valtènesi, Riviera del Garda Classico, Italy 2020",
      price: "12 | 45",
    },
    {
      name: "La Raimbauderie",
      desc: "Rosé of Pinot Noir, Sancerre, France 2020",
      price: "70",
    },
    {
      name: "Domaine de la Rosière",
      desc: "Rosé of Gamay, Savoie, France 2021",
      price: "38",
    },
    {
      name: "Liquid Farm",
      desc: "Rosé of Mourvédre, Santa Barbara, California 2021",
      price: "67",
    },
  ],
  OFF_DRY_SWEET_WINES: [
    {
      name: "Eroica",
      desc: "Riesling, Columbia Valley, Washington 2021",
      price: "14 | 52",
    },
    {
      name: "Dr. Konstantin Frank “Salmon Run”",
      desc: "Riesling, Finger Lakes, New York 2020",
      price: "12 | 44",
    },
    {
      name: "Hubert Meyer “Winzenberg Grand Cru”",
      desc: "Pinot Gris, Alsace, France 2018",
      price: "70",
    },
    {
      name: "Elio Perrone “Bigarò”",
      desc: "Brachetto Muscat Blend, Piedmont, Italy 2021",
      price: "49",
    },
    {
      name: "Wilhelm Bergmann",
      desc: "Dornfelder, Rheinhessen, Germany 2019",
      price: "39",
    },
  ],
  RED_WINES_SOFT_LIGHT: [
    {
      name: "Evening Land “Seven Springs”",
      desc: "Gamay Noir, Eola-Amity Hills, Oregon 2019",
      price: "85",
    },
    {
      name: "A.-F. Gros",
      desc: "Gamay, Moulin-à-Vent, France 2018",
      price: "89",
    },
    {
      name: "BloodRoot",
      desc: "Pinot Noir, Sonoma Coast, California 2021",
      price: "14 | 52",
    },
    {
      name: "Lioco",
      desc: "Pinot Noir, Sonoma Coast, California 2019",
      price: "87",
    },
    {
      name: "Coeur de Terre",
      desc: "Pinot Noir, Willamette Valley, Oregon 2019",
      price: "79",
    },
    {
      name: "Cooper Hill",
      desc: "Pinot Noir, Willamette Valley, Oregon 2020",
      price: "64",
    },
    {
      name: "Agostino Pavia & Figli",
      desc: "Grignolino, Asti, Italy 2020",
      price: "50",
    },
    {
      name: "Judith Beck",
      desc: "Blaufränkisch, Burgenland, Austria 2020 ",
      price: "13 | 50",
    },
  ],
  RED_WINES_MEDIUM_BODY: [
    {
      name: "Vigne del Malina",
      desc: "Cabernet Franc, Friuli-Venezia Giulia, Italy 2015",
      price: "62",
    },
    {
      name: "Clos de L’Oratoire des Papes",
      desc: "Châteauneuf-du-Pape, Rhône, France 2017",
      price: "189",
    },
    {
      name: "Costador “Metamorphika”",
      desc: "Trepat, Catalunya, Spain 2019",
      price: "105",
    },
    {
      name: "Yangarra Estate Vineyard",
      desc: "Grenache, McLaren Vale, Australia 2015 375ml",
      price: "35",
    },
    {
      name: "El Jefe “Grande”",
      desc: "Tempranillo (unoaked), Castilla y León, Spain 2020",
      price: "13 | 55",
    },
    {
      name: "Bodegas Ordóñez “Vatan”",
      desc: "Tinta de Toro, Toro, Spain 2018",
      price: "22 | 84",
    },
    {
      name: "L’Ecole No 41",
      desc: "Red Blend, Walla Walla Valley, Washington 2018",
      price: "101",
    },
  ],
  RED_WINES_FULL_BODY: [
    {
      name: "Maal “Imposible”",
      desc: "Malbec, Mendoza, Argentina 2018",
      price: "81",
    },
    {
      name: "Château Larose-Trintaudon",
      desc: "Cru Bourgeois, Haut-Médoc, France 2016",
      price: "17 | 72",
    },
    {
      name: "Leviathan",
      desc: "Red Blend, California 2019",
      price: "115",
    },
    {
      name: "K+K Kirnbauer “Das Phantom”",
      desc: "Red Blend, Burgenland, Austria 2018",
      price: "75",
    },
    {
      name: "The Prisoner “Unshackled”",
      desc: "Red Blend, California 2019",
      price: "18 | 72",
    },
    {
      name: "Arauco",
      desc: "Cabernet Sauvignon, Central Valley, Chile 2019",
      price: "38",
    },
    {
      name: "RouteStock",
      desc: "Cabernet Sauvignon, Napa Valley, California 2020",
      price: "15 | 58",
    },
    {
      name: "Macauley Vineyard",
      desc: "Cabernet Sauvignon, Napa Valley, California 2019",
      price: "180",
    },
    {
      name: "Julien Cécillon “Les Graviers”",
      desc: "Syrah, Rhône Valley, France 2020",
      price: "57",
    },
    {
      name: "C.L. Butaud “Pa Pa Frenchy”",
      desc: "Red Blend, Fredericksburg, Texas 2020",
      price: "67",
    },
  ],
  NIHONSHU_SAKE: [
    {
      name: "Sho Chiku Bai “Mio”",
      desc: "Sparkling, Nada, Japan 300m",
      price: "19",
    },
    {
      name: "Gekkeikan “Black & Gold”",
      desc: "Junmai, California 750ml",
      price: "47",
    },
    {
      name: "Yukikage “Snow Shadow”",
      desc: "Junmai, Niigata, Japan 720ml",
      price: "17 | 65",
    },
    {
      name: "Heavensake “Junmai 12”",
      desc: "Junmai, Nada, Japan 720ml",
      price: "18 | 70",
    },
    {
      name: "Jozen Mizuno Gotoshi “Aqua”",
      desc: "Junmai, Niigata, Japan 720ml",
      price: "57",
    },
    {
      name: "Heavensake “Sake Baby!”",
      desc: " Junmai Ginjo, Nada, Japan 300ml",
      price: "35",
    },
    {
      name: "Kanbara “Bride of the Fox”",
      desc: "Junmai Ginjo, Niigata, Japan 720ml",
      price: "83",
    },
    {
      name: "Jozen Mizuno Gotoshi “Pink”",
      desc: "Junmai Ginjo (aged), Niigata, Japan 720ml",
      price: "74",
    },
    {
      name: "Konteki “Pearls of Simplicity”",
      desc: "Junmai Daiginjo, Kyoto, Japan 720ml",
      price: "86",
    },
    {
      name: "Wakatake “Demon Slayer”",
      desc: "Junmai Daiginjo, Shizuoka, Japan 720ml",
      price: "115",
    },
    {
      name: "Horai “Lady Killer”",
      desc: "Junmai Daiginjo, Gifu, Japan 180ml",
      price: "37",
    },
    {
      name: "Kanbara “Ancient Treasure”",
      desc: "Yamahai Junmai Genshu Koshu, Niigata, Japan 720ml",
      price: "177",
    },
    {
      name: "Sho Chiku Bai “Crème de Sake”",
      desc: "Nigori, Junmai, California 300ml ",
      price: "19",
    },
    {
      name: "Sho Chiku Bai “Silky Mild”",
      desc: "Nigori, Junmai, California 375ml",
      price: "17",
    },
    {
      name: "Daimon “Road to Osaka”",
      desc: "Nigori, Tokubetsu Junmai, Osaka, Japan 720ml",
      price: "58",
    },
    {
      name: "Texas Saké Company",
      desc: "Nigori, Junmai, Austin, Texas 750ml",
      price: "42",
    },
    {
      name: "Tozai “Blossom of Peace”",
      desc: "Plum Sake (sweet), Kyoto, Japan 720ml",
      price: "11 | 41",
    },
  ],
};

const LAVUI_MENU = {
  APPETIZERS: [
    {
      name: "Shrimp & Pork Dumplings (6)",
      desc: "shrimp, pork, daikon, onions, dumpling sauce",
      price: 8.5,
    },
    {
      name: "LaVui Shrimp Dumplings (5)",
      desc: "shrimp, daikon, onions, dumpling sauce",
      price: 7.5,
    },
    {
      name: "Shrimp Spring Rolls (2)",
      desc: "shrimp, lettuce, vermicelli, cilantro, peanut sauce",
      price: 6.5,
    },
    {
      name: "Shrimp & Pork Egg Rolls (2)",
      desc: "shrimp, pork, carrots, noodles, onions, taro, fish sauce",
      price: 6,
    },
    {
      name: "Crispy Rocky Shrimp",
      desc: "shrimp, spicy mayo, lemon, shredded lettuce",
      price: 13.5,
    },
    {
      name: "Tuna Lavui",
      desc: "tuna, shallots, garlic, truffle oil, Jalapeño, soy sauce",
      price: 15,
      isRaw: true,
    },
    {
      name: "Seared Salmon Lavui",
      desc: "salmon, avocado, lemon, green sauce - jalapeño, cilantro, oil",
      price: 15,
      isRaw: true,
    },
    {
      name: "Yellowtail Lavui",
      desc: "yellowtail, parsley sauce - parmesan cheese, cilantro, parsley, oil",
      price: 15,
      isRaw: true,
    },
    {
      name: "Edamame",
      desc: "steamed soybeans, kosher salt (plain)",
      price: 5,
    },
    {
      name: "Spicy Edamame",
      desc: "steamed soybeans, kosher salt (spicy)",
      price: 6,
    },
  ],
  ENTREES: [
    {
      name: "Shaken Beef",
      desc: "beef tenderloin, onions, tomatoes, lettuce, peppers",
      price: 18.5,
    },
    {
      name: "Crispy Shrimp in Sea Salt",
      desc: "shrimp, jalapeño, garlic, onions, tomatoes, lettuce, parmesan cheese",
      price: 15,
    },
    {
      name: "Chicken Fried Rice",
      desc: "chicken, egg, ginger, carrots, peas, scallions",
      price: 13.5,
    },
    {
      name: "Clay Pot Chicken",
      desc: "chicken, quail egg, ginger, lemongrass, onions, jalapeño, fish sauce",
      price: 15,
    },
    {
      name: "Clay Pot Black Cod",
      desc: "black cod, pork belly, garlic, lemongrass, onions, fish sauce",
      price: 18,
    },
    {
      name: "Curry Chicken with Baguette",
      desc: "chicken, pototoes, onions, carrots, yellow curry, coconut milk, bay leaf",
      price: 15,
    },
    {
      name: "Beef Stew with Baguette or Noddles",
      desc: "beef, carrot, lemongrass, star anise, ginger, garlic",
      price: 15,
    },
    {
      name: "Black Cod Sweet & Sour Soup (Canh Chua)",
      desc: "black cod, garlic, tamarind, pineapple, taro stems, okra, fish sauce",
      price: 18,
    },
    {
      name: "Buddhist Delight & Crispy Tofu",
      desc: "tofu, carrots, onions, mushrooms, snow peas, clear noodles",
      price: 14,
    },
  ],
  BANHMI: [
    {
      name: "Pork Banh Mi",
      desc: "grilled pork",
      price: 7.5,
    },
    {
      name: "Chicken Banh Mi",
      desc: "grilled chicken",
      price: 7.5,
    },
    {
      name: "Beef Banh Mi",
      desc: "brisket, brown sauce",
      price: 8.5,
    },
    {
      name: "Roasted Duck Banh Mi",
      desc: "roasted duck, truffle oil",
      price: 12,
    },
    {
      name: "LaVui Special Banh Mi",
      desc: "brisket, pork belly, egg",
      price: 11,
    },
  ],
  NOODLE_DISHED: [
    {
      name: "Beef Flat Noodles",
      desc: "beef tenderloin, rice noodles, brown sauce",
      price: 16.5,
    },
    {
      name: "Shrimp Garlic Noodles",
      desc: "shrimp, egg noodles, bok choy, shitake mushrooms, parmesan cheese",
      price: 13.5,
    },
    {
      name: "Chicken Spicy Noodles",
      desc: "chicken, rice noodles, spicy fish sauce",
      price: 12.5,
    },
    {
      name: "Chicken Curry Noodles",
      desc: "chicken, rice noodles, yellow curry sauce",
      price: 12.5,
    },
  ],
  SALADS: [
    {
      name: "Shrimp with Lotus Stems",
      desc: "shrimp, lotus stems, citrus dressing",
      price: 14,
    },
    {
      name: "Salmon Carpaccio Salad*",
      desc: "salmon, lemon, citrus dressing",
      price: 15,
      isRaw: true,
    },
    {
      name: "Chicken Cabbage Salad",
      desc: "chicken breast, shredded cabbage, fish sauce dressing",
      price: 14,
    },
  ],
  PHO: [
    {
      name: "Pho Ga",
      desc: "chicken breast",
      price: 13.5,
    },
    {
      name: "Pho Tai Bo Vien",
      desc: "rare beef, meatballs",
      price: 14.5,
    },
    {
      name: "Pho Dac Biet",
      desc: "rare beef, beef brisket, meatballs",
      price: 15.5,
    },
  ],
  BUN: [
    {
      name: "Beef Vermicelli (Bun Bo Xao)",
      desc: "sauteed beef tenderloin, garlic, onions, scallions",
      price: 13.5,
    },
    {
      name: "Chicken Vermicelli (Bun Ga Nuong)",
      desc: "grilled chicken, scallion oil",
      price: 12.5,
    },
    {
      name: "Pork Vermicelli (Bun Thit Nuong)",
      desc: "grilled pork, scallion oil",
      price: 12.5,
    },
    {
      name: "Tofu Vermicelli (Bun Dau Hu Chien)",
      desc: "fried tofu, garlic, onions, scallions",
      price: 11.5,
    },
  ],
  ADDITIONS: [
    {
      name: "Chicken",
      price: 3,
    },
    {
      name: "Pork",
      price: 3,
    },
    {
      name: "Beef",
      price: 4,
    },
    {
      name: "Shrimp",
      price: 3,
    },
    {
      name: "Tofu",
      price: 2,
    },
    {
      name: "Fried Egg",
      price: 1.5,
    },
  ],
  BEVERAGES: [
    {
      name: "Vietnamese Iced Coffee",
      price: 4.5,
    },
    {
      name: "Boba Tea - Passionfruit Green Tea",
      desc: "Add Topping: Tapioca Boba",
      price: 4.5,
    },
    {
      name: "Boba Tea - Strawberry Green Tea",
      desc: "Add Topping: Tapioca Boba",
      price: 4.5,
    },
    {
      name: "Boba Tea - Taro Milk Tea",
      desc: "Add Topping: Tapioca Boba",
      price: 4.5,
    },
    {
      name: "Boba Tea - Thai Tea",
      desc: "Add Topping: Tapioca Boba",
      price: 4.5,
    },
    {
      name: "Soft Drinks",
      price: 1.5,
    },
    {
      name: "Bottled Water",
      price: 1,
    },
    {
      name: "Iced Tea or Hot Tea",
      price: 2.5,
    },
  ],
};

export {
  SUSHI,
  SASHIMI,
  MAKI_ROLL,
  OISHII_SPECIALTY,
  DINNER_MENU,
  WINES,
  LAVUI_MENU,
};
