import type {
  BusinessInfo,
  MenuCategory,
  Review,
  CateringService,
  GiftBasketOption,
  CateringSection,
} from "@/types";

export const businessInfo: BusinessInfo = {
  name: "5th Ave. Deli & Catering Co.",
  tagline: "Family-owned since 1991. Carmel's favorite deli.",
  phone: "(831) 625-2688",
  email: "e5thavedeli@yahoo.com",
  address: {
    street: "5th Ave between San Carlos & Dolores",
    city: "Carmel-by-the-Sea",
    state: "CA",
    zip: "93921",
    note: "2 doors up from the Post Office",
  },
  coordinates: {
    lat: 36.5558,
    lng: -121.9233,
  },
  hours: [
    { day: "Monday", hours: "8:00 AM – 4:30 PM" },
    { day: "Tuesday", hours: "8:00 AM – 4:30 PM" },
    { day: "Wednesday", hours: "8:00 AM – 4:30 PM" },
    { day: "Thursday", hours: "8:00 AM – 4:30 PM" },
    { day: "Friday", hours: "8:00 AM – 4:30 PM" },
    { day: "Saturday", hours: "8:00 AM – 4:30 PM" },
    { day: "Sunday", hours: "Closed" },
  ],
  established: 1991,
  yelp: {
    rating: 4.4,
    reviews: 203,
    url: "https://www.yelp.com/biz/fifth-avenue-deli-and-catering-carmel-by-the-sea",
  },
  tripAdvisor: {
    rating: 4.9,
    reviews: 8,
    url: "https://www.tripadvisor.com/Restaurant_Review-g32172-d23292980-Reviews-5th_Avenue_Deli-Carmel_Monterey_County_California.html",
  },
  google: {
    rating: 4.7,
  },
  social: {
    instagram: "https://www.instagram.com/5thavenuedeli/",
    facebook: "https://www.facebook.com/pages/5th-Avenue-Deli/169048739810952",
    yelp: "https://www.yelp.com/biz/fifth-avenue-deli-and-catering-carmel-by-the-sea",
  },
};

export const menuCategories: MenuCategory[] = [
  {
    id: "specialty",
    label: "Specialty Sandwiches",
    description: "All specialty sandwiches are served on sliced bread.",
    items: [
      { name: "B.L.T.", description: "Smoked bacon, lettuce & tomato", price: "$11.00" },
      { name: "Grilled Chicken Breast", description: "Jack cheese, lettuce, tomato, pickles & onions", price: "$11.00" },
      { name: "Falafel", description: "Lettuce, tomato, cucumbers & tahini sauce on pita bread", price: "$11.00" },
      { name: "Vegetarian", description: "Spinach, tomatoes, cucumbers, artichoke, lettuce & olives", price: "$11.00" },
      { name: "Reuben", description: "Pastrami, sauerkraut, Swiss & Thousand Island on marble rye", price: "$11.00" },
      { name: "Spiral Honey Ham", description: "Swiss cheese, lettuce, tomato, pickles & onions on marble rye", price: "$11.00" },
      { name: "Roast Turkey", description: "Lettuce, tomatoes, pickles, onions & provolone", price: "$12.00" },
      { name: "Turkey Berry", description: "Roast turkey, cranberry sauce, homemade stuffing & lettuce", price: "$12.00" },
      { name: "Curry or Tarragon Chicken Salad", description: "Served with lettuce and tomato", price: "$12.00" },
      { name: "Meatball Marinara", description: "Provolone cheese, beef meatballs & marinara sauce", price: "$12.00" },
      { name: "Barbecue Meatloaf", description: "Lettuce, tomato, pickles & onions", price: "$12.00" },
      { name: "Italian Sub", description: "Ham, salami, provolone, Italian dressing, lettuce & tomatoes", price: "$12.00" },
      { name: "Harris Ranch Tri-Tip", description: "Lettuce, tomato, pickles & onions", price: "$13.00" },
      { name: "5th Ave Club", description: "Ham, turkey, bacon, lettuce, tomato & onions", price: "$13.00" },
      { name: "Teriyaki Salmon", description: "Spinach, cucumbers and honey mustard", price: "$14.00" },
    ],
  },
  {
    id: "breakfast",
    label: "Breakfast",
    description: "Breakfast served Monday through Friday, 8–10 AM.",
    items: [
      { name: "Breakfast Burrito", description: "Scrambled eggs, cheese, salsa & potatoes on a flour tortilla — bacon, ham, sausage, or spinach & sundried tomatoes", price: "$10.00" },
      { name: "Mexican Breakfast Burrito", description: "Scrambled eggs, beef chorizo, pepper jack cheese, refried beans, salsa & pico de gallo", price: "$11.00" },
      { name: "5th Avenue Breakfast", description: "Eggs, avocado, mushrooms, onions, bell peppers, tomatoes & jack cheese — burrito or bagel", price: "$11–$12" },
      { name: "Croissant Breakfast Sandwich", description: "2 eggs, bacon/ham/sausage, jack or cheddar cheese & tomato", price: "$10.00" },
      { name: "Breakfast Bagel", description: "2 eggs, honey baked ham, bacon, or sausage & smokey cheddar on a toasted bagel", price: "$8.50" },
      { name: "English Muffin", description: "2 eggs, tomato, cheddar cheese, ham, bacon or sausage", price: "$8.00" },
      { name: "Salmon Bagel", description: "Smoked salmon, cream cheese, capers, red onions, dill & lemon on a half bagel", price: "$6.00" },
      { name: "Sliced Quiche", description: "Lorraine or Spinach — baked fresh daily", price: "$6.00" },
      { name: "Ham & Cheese Croissant", description: "1 slice of ham & 1 slice of cheese on a croissant", price: "$6.50" },
      { name: "Bagel", description: "With cream cheese, butter, or cream cheese & jelly", price: "$4.00–$5.50" },
      { name: "Toast", description: "2 slices of toast — your choice of sliced bread", price: "$3.50" },
      { name: "Hard Boiled Eggs", description: "Fresh hard boiled eggs", price: "$2.00" },
      { name: "Pico de Gallo", description: "Add fresh pico de gallo to any item", price: "$1.50" },
      { name: "Sour Cream", description: "Add sour cream to any item", price: "$1.50" },
      { name: "Other Breakfast Items", description: "Fruit salad, muffins, pound cake, brownies, cookies, coffee cake, PB&J, apricot oat cakes, low fat fruit bar, fresh brewed coffee, hot chocolate, milk, hot tea & fruit juices", price: "Varies" },
    ],
  },
  {
    id: "sandwich-bar",
    label: "Sandwich Bar",
    description: "Build your own — pick your bread, protein, and extras. Hot sandwiches available (allow extra time). All items subject to availability.",
    items: [
      { name: "Whole Sandwich", description: "Your choice of bread, meat, spreads & the works", price: "$10.00" },
      { name: "Half Sandwich", description: "A smaller portion with the same great options", price: "$7.00" },
      { name: "Breads", description: "Whole wheat, white, sourdough, multigrain, marble rye, gluten free, bagel, or pita", price: "Included" },
      { name: "Roll Upgrade", description: "French, sesame, sourdough, Frencesi, or Dutch Crunch", price: "+$1.00" },
      { name: "Croissant Upgrade", description: "Upgrade your sandwich to a buttery croissant", price: "+$3.00" },
      { name: "Meats", description: "Turkey, peppered turkey, smoked turkey, Black Forest ham, Molinari salami, roast beef, pastrami, egg salad, or tuna salad", price: "Included" },
      { name: "Extra Meat", description: "Add another protein to your sandwich", price: "+$3.00" },
      { name: "The Works & Spreads", description: "Lettuce, tomatoes, pickles, onions, jalapenos — plus mayo, mustard, Dijon, honey mustard, chipotle mayo, or oil & vinegar", price: "Included" },
      { name: "Extra Condiments", description: "Pepperoncini, cucumbers, spinach, olives, or sprouts", price: "+$0.75 each" },
      { name: "Cheeses", description: "Provolone, Swiss, Monterey Jack, pepper jack, cheddar, or American", price: "+$1.00" },
      { name: "Premium Cheeses", description: "Cream cheese, sharp cheddar, Gouda, French Brie, or Havarti with dill", price: "+$2.00" },
      { name: "Extras", description: "Bacon, avocado, artichoke, pesto, cranberry, or sauerkraut", price: "+$2.00 each" },
    ],
  },
  {
    id: "box-lunches",
    label: "Box Lunches",
    description: "Perfect for Carmel Beach picnics, day trips to Big Sur, or group outings.",
    items: [
      { name: "5th Avenue Deli Picnic", description: "Ham, turkey, or roast beef with cheddar or Swiss, lettuce, tomatoes, pickles & onions, cookie, chips & apple", price: "$17.50" },
      { name: "Carmel Classic", description: "Roasted turkey or spiral honey ham with cheddar or Swiss, lettuce, tomatoes, pickles & onions, pasta salad, chips & lemon bar or espresso brownie", price: "$22.00" },
      { name: "Vegetarian Box", description: "Vegetarian sandwich or falafel on pita, Greek salad, hard boiled egg or dolma, apple & macaroon", price: "$22.00" },
      { name: "Deluxe Picnic", description: "Curry sandwich with lettuce & tomatoes, green salad, chocolate cake or carrot cake & a drink", price: "$25.99" },
    ],
  },
  {
    id: "salads",
    label: "Homemade Salads",
    description: "Made fresh in-house daily. Available by the pound or as a side.",
    items: [
      { name: "Caesar Salad", description: "Romaine, parmesan, croutons, red onions & sliced lemons (extra charge for chicken)", price: "Market" },
      { name: "Coleslaw", description: "Red & green cabbage, apples, carrots, sugar, fresh dill & mayonnaise", price: "Market" },
      { name: "Garden Salad w/ Veggies", description: "Green leaf, romaine & baby greens tossed with veggies (dressing on side)", price: "Market" },
      { name: "Old Fashioned Potato Salad", description: "Red potatoes, eggs, celery, onions, parsley, mustard, mayonnaise & salt", price: "Market" },
      { name: "Orzo Pasta Salad", description: "Orzo pasta, broccoli, peppers, black olives, red onions, sliced tomatoes & red wine vinaigrette", price: "Market" },
      { name: "Macaroni & Cheese Salad", description: "Elbow pasta, peppers, celery, red onions, shredded cheese, ranch dressing & mayonnaise", price: "Market" },
      { name: "Broccoli Salad", description: "Broccoli florets, red grapes, onions, sugar, sunflower seeds, bacon bits & mayonnaise", price: "Market" },
      { name: "Greek Salad", description: "Tomatoes, peppers, red onions, cucumbers, olives, basil, feta cheese & Italian vinaigrette", price: "Market" },
      { name: "Sesame Noodle Salad", description: "Noodles, carrots, hoisin sauce, olive oil, sesame seeds, soy sauce, cilantro & green onions", price: "Market" },
      { name: "Curried Chicken Salad", description: "Celery, raisins, green apples, red onions, mayonnaise & curry powder", price: "Market" },
      { name: "Tarragon Chicken Salad", description: "Tarragon, carrots, celery, red bell peppers, red onions, mayonnaise & Dijon", price: "Market" },
      { name: "Tabouli Salad", description: "Bulgar wheat, parsley, green onions, tomatoes, cucumbers, mint, lemon juice & olive oil", price: "Market" },
      { name: "Egg Salad", description: "Hard boiled eggs, celery, fresh dill, mayonnaise & sweet pickle relish", price: "Market" },
      { name: "Pesto Pasta Salad", description: "Bow tie pasta, pesto, bell peppers, parmesan cheese, spinach, black olives & lemon", price: "Market" },
    ],
  },
];

export const cateringMenu: CateringSection[] = [
  {
    id: "catering-breakfast",
    label: "Breakfast",
    description: "Tray sizes: 12\" (5–7 people) and 16\" (10–12 people).",
    items: [
      { name: "Fresh Pastries", description: "Mini Danish, flaky croissants, muffins & more (48-hour notice)", price: "$45 / $90" },
      { name: "Lox & Bagel", description: "Cream cheese, smoked salmon, cucumbers, tomato, capers, red onions & lemon garnish", price: "$90 / $150" },
      { name: "Bagel with Cream Cheese", description: "Fresh bagels with cream cheese", price: "$50 / $100" },
      { name: "Whole Homemade Quiche", description: "Lorraine or spinach, pre-sliced, served hot or cold", price: "$60" },
      { name: "Fresh Fruit", description: "Oranges, melons, pineapple, grapes, strawberries & more", price: "$50 / $75" },
      { name: "Breakfast Burritos", description: "Veggie or meat (ham, bacon, sausage, or chorizo) with eggs, cheese, salsa & potatoes", price: "$8 whole / $5 mini" },
      { name: "Individual Yogurts", description: "Regular or Greek — assorted flavors", price: "$3 each" },
      { name: "Fresh Brewed Coffee/Hot Tea", description: "Regular or decaf, assorted tea bags", price: "$35 (10 people)" },
      { name: "Juices", description: "Orange, apple, grapefruit, lemonade & more", price: "$3 each" },
    ],
  },
  {
    id: "catering-lunch",
    label: "Lunch",
    description: "Tray sizes: 12\" (5–7 people) and 16\" (10–12 people).",
    items: [
      { name: "Create Your Own Sandwiches", description: "Meats, cheeses, condiments & assorted bread — turkey, roast beef, ham, pastrami, tuna & more", price: "$60 / $120" },
      { name: "Traditional Deli Sandwiches", description: "Cut into quarters or halves with toothpicks", price: "$60 / $120" },
      { name: "Assorted Wraps", description: "Assorted tortillas with meat and cheese", price: "$60 / $120" },
      { name: "Finger Sandwiches", description: "Smaller portion deli sandwiches — assorted meats, or tuna & egg salad (does not include cheese)", price: "$40 / $80" },
      { name: "Assorted Chips", description: "Frito Lays, Kettle, Stacy's, Miss Vickie's, Sun Chips & Dirty Chips", price: "Market" },
    ],
  },
  {
    id: "catering-appetizers",
    label: "Appetizers",
    description: "12\" tray (8–10 people) and 16\" tray (18–20 people).",
    items: [
      { name: "Charcuterie", description: "Assorted meats, cheeses, breads, crackers, nuts & a dip", price: "$75 / $140" },
      { name: "Sliced Fresh Fruit", description: "Berries, melon, grapes & more", price: "$50 / $75" },
      { name: "Crisp Veggies", description: "Arranged with ranch or honey mustard dips", price: "$50 / $75" },
      { name: "Assorted Cheeses", description: "Includes crackers — Brie, Havarti, sharp cheddar & more", price: "$65 / $100" },
      { name: "Deviled Eggs", description: "Halves, filled & garnished with baby dill", price: "30 pcs $45 / 50 pcs $75" },
      { name: "Black Forest Ham", description: "Slices thin, wrapped over bite-size melon wedges", price: "30 pcs $45 / 55 pcs $85" },
      { name: "Shrimp Platter", description: "Medium prawns, tail on, with cocktail sauce & lemon wedges", price: "30 pcs $55 / 55 pcs $85" },
      { name: "Smoked Salmon Bites", description: "On toast crackers with cream cheese and dill", price: "25 pcs $40 / 50 pcs $85" },
      { name: "Curried Chicken Salad", description: "In a sourdough bread bowl with crackers & bread", price: "3 lb $75" },
      { name: "Pinwheels", description: "Assorted mini lavash bread with cream cheese", price: "40 pcs $55 / 80 pcs $95" },
      { name: "Snack Platter", description: "Tortilla chips, homemade salsa & guacamole", price: "$45 / $80" },
    ],
  },
  {
    id: "catering-warm-appetizers",
    label: "Warm Appetizers",
    description: "Hot passed appetizers and oven-baked bites — perfect for cocktail hours and receptions.",
    items: [
      { name: "Spanakopita", description: "Flaky triangle phyllo dough filled with spinach, feta cheese & spices", price: "50 pcs $75" },
      { name: "Meatballs", description: "Made with either marinara sauce or BBQ", price: "100 pcs $65" },
      { name: "Mini Quiches", description: "Delicious fresh baked to order — Lorraine or spinach", price: "24 pcs $60" },
      { name: "Mini Pigs in a Blanket", description: "All beef hot dog, hand rolled in a puffy pastry", price: "50 pcs $75" },
      { name: "Chicken Apple Sausages", description: "Cocktail serving, grilled and sliced — served hot or cold", price: "100 pcs $65" },
      { name: "Chicken Quesadilla", description: "Chicken, jack cheese, peppers & cilantro on a flour tortilla", price: "$35 / $75" },
      { name: "Bruschetta", description: "Tomatoes, basil, red onions, parmesan cheese & olive oil", price: "$50 / $75" },
    ],
  },
  {
    id: "catering-entrees",
    label: "Entrées",
    items: [
      { name: "Whole Quiche", description: "Lorraine or spinach — served warm or cold, sliced if needed", price: "$60" },
      { name: "Veggie Lasagna", description: "Layers of broccoli, carrots, spinach & cheeses topped with marinara sauce", price: "$75" },
      { name: "Meat Lasagna", description: "Sausage, ground beef, marinara sauce, provolone & parmesan cheese", price: "$90" },
      { name: "Chicken Enchilada Casserole", description: "Layers of corn tortillas, jack & cheddar cheese, mushrooms & cream sauce", price: "$85" },
      { name: "California Casserole", description: "Beef, noodles, olives, mushrooms, bell peppers, onions & tomato sauce", price: "$85" },
      { name: "Stuffed Baked Potatoes", description: "Homemade baked potatoes topped with cheddar cheese & green onions (sour cream extra)", price: "$60 / 10 count" },
      { name: "Spaghetti & Meatballs", description: "Prepared with a rich marinara sauce & topped with parmesan cheese", price: "$85 (8 lb)" },
    ],
  },
  {
    id: "catering-desserts",
    label: "Desserts",
    items: [
      { name: "Fresh Baked Cookies", description: "Assorted — chocolate chip, oatmeal, peanut butter & more", price: "24 cookies $55" },
      { name: "Petit Fours", description: "Assorted bite-size cakes — please call 24–48 hours in advance", price: "Market" },
      { name: "Chocolate Dipped Strawberries", description: "Please call 24–48 hours in advance", price: "Market" },
      { name: "Deluxe Dessert Sampler", description: "Our most popular! Cakes, fresh cookies, dessert bars, macaroons & more", price: "$45 / $90" },
    ],
  },
  {
    id: "catering-salads",
    label: "Homemade Salads",
    items: [
      { name: "Caesar Salad", description: "Romaine, parmesan, croutons, red onions & sliced lemons (extra charge for chicken)", price: "Market" },
      { name: "Coleslaw", description: "Red & green cabbage, apples, carrots, sugar, fresh dill & mayonnaise", price: "Market" },
      { name: "Garden Salad w/ Veggies", description: "Green leaf, romaine & baby greens, tossed with veggies (dressing on side)", price: "Market" },
      { name: "Old Fashioned Potato Salad", description: "Red potatoes, eggs, celery, onions, parsley, mustard, mayonnaise & salt", price: "Market" },
      { name: "Orzo Pasta Salad", description: "Orzo pasta, broccoli, peppers, black olives, red onions, sliced tomatoes & red wine vinaigrette", price: "Market" },
      { name: "Macaroni & Cheese Salad", description: "Elbow pasta, peppers, celery, red onions, shredded cheese, ranch dressing & mayonnaise", price: "Market" },
      { name: "Broccoli Salad", description: "Broccoli florets, red grapes, onions, sugar, sunflower seeds, bacon bits & mayonnaise", price: "Market" },
      { name: "Greek Salad", description: "Tomatoes, peppers, red onions, cucumbers, olives, basil, feta cheese & Italian vinaigrette", price: "Market" },
      { name: "Sesame Noodle Salad", description: "Noodles, carrots, hoisin sauce, olive oil, sesame seeds, soy sauce, cilantro, green onions & lemon juice", price: "Market" },
      { name: "Curried Chicken Salad", description: "Celery, raisins, green apples, red onions, mayonnaise & curry powder", price: "Market" },
      { name: "Tarragon Chicken Salad", description: "Tarragon, carrots, celery, red bell peppers, red onions, mayonnaise, black pepper & Dijon", price: "Market" },
      { name: "Tabouli Salad", description: "Bulgar wheat, parsley, green onions, tomatoes, cucumbers, mint, lemon juice, salt & pepper & olive oil", price: "Market" },
      { name: "Egg Salad", description: "Hard boiled eggs, celery, fresh dill, mayonnaise & sweet pickle relish", price: "Market" },
      { name: "Pesto Pasta Salad", description: "Bow tie pasta, pesto, bell peppers, parmesan cheese, spinach, black olives & lemon", price: "Market" },
    ],
  },
];

// Keep a highlights version for the main catering section display
export const cateringHighlights: MenuCategory = {
  id: "catering",
  label: "Catering Menu",
  description: "Full-service catering for any occasion. Tray sizes: 12\" (5–7 people) and 16\" (10–12 people).",
  items: [
    { name: "Traditional Deli Sandwiches", description: "Cut into quarters or halves with toothpicks", price: "$60 / $120" },
    { name: "Charcuterie Board", description: "Assorted meats, cheeses, breads, crackers, nuts & a dip", price: "$75 / $140" },
    { name: "Fresh Pastries", description: "Mini Danish, flaky croissants, muffins & more (48-hour notice)", price: "$45 / $90" },
    { name: "Lox & Bagel Tray", description: "Cream cheese, smoked salmon, cucumbers, tomato, capers, red onions & lemon", price: "$90 / $150" },
    { name: "Veggie Lasagna", description: "Broccoli, carrots, spinach & cheeses topped with marinara sauce", price: "$75" },
    { name: "Meat Lasagna", description: "Sausage, ground beef, marinara sauce, provolone & parmesan cheese", price: "$90" },
    { name: "Chicken Enchilada Casserole", description: "Layers of corn tortillas, jack & cheddar cheese, mushrooms & cream sauce", price: "$85" },
    { name: "Deluxe Dessert Sampler", description: "Cakes, fresh cookies, dessert bars, macaroons & more", price: "$45 / $90" },
    { name: "Shrimp Platter", description: "Medium prawns, tail on, with cocktail sauce & lemon wedges", price: "From $55" },
  ],
};

export const cateringServices: CateringService[] = [
  {
    title: "Bus Tours & Groups",
    description: "We cater to tour buses visiting Carmel. Pre-ordered box lunches ready when you arrive.",
    icon: "bus",
  },
  {
    title: "Corporate Aircraft",
    description: "In-flight catering for private aircraft at Monterey Peninsula Airport.",
    icon: "plane",
  },
  {
    title: "Gallery Openings",
    description: "Elegant tapas and refreshments for Carmel's gallery exhibitions and art events.",
    icon: "palette",
  },
  {
    title: "Open Houses",
    description: "Impress your guests with fresh platters and gourmet bites for real estate events.",
    icon: "home",
  },
  {
    title: "Private Events",
    description: "Birthdays, anniversaries, and celebrations of all sizes. We customize to your taste.",
    icon: "party-popper",
  },
  {
    title: "Delivery Available",
    description: "We deliver throughout Carmel-by-the-Sea and the Monterey Peninsula.",
    icon: "car",
  },
];

export const giftBaskets: GiftBasketOption[] = [
  {
    name: "Munchies for 2",
    description: "Fresh fruit, assorted cheeses, fresh bread, assorted meats, crackers, breadsticks, dips, salsa & Lulas Chocolate. Wine or champagne available.",
    priceRange: "Starting at $75",
  },
  {
    name: "Carmel Classic",
    description: "Tortilla chips, Lulas Chocolates, salsa, pretzels, assorted nuts, cheeses, olives, crackers & breadsticks. Local wine available.",
    priceRange: "Starting at $80",
  },
  {
    name: "Lovers Basket",
    description: "Smoked salmon or 2 deli sandwiches, imported cheeses, kettle corn, 2 green salads, desserts, chocolates, crackers & wine or champagne.",
    priceRange: "Starting at $100",
  },
  {
    name: "Custom Basket",
    description: "Tell us your budget and preferences — we'll create something special. All baskets are made to order.",
    priceRange: "Any budget",
  },
];

export const reviews: Review[] = [
  {
    quote:
      "In Carmel you have two choices for lunch: a sit-down place where $100 evaporates from your wallet, or come to this deli and order a delightfully fresh $8 sandwich. Head down to the beach and enjoy this beautiful part of the world. The tuna salad I had from here will not slip from my memory.",
    author: "Timothy F.",
    source: "Google",
  },
  {
    quote:
      "A must stop for picnic food before heading to the beach or Big Sur. An impressive variety of food for a tiny place. The food is consistently good and the sandwich vegetables crisp and fresh.",
    author: "H NH",
    source: "Google",
  },
  {
    quote:
      "Fantastic sandwich, fair prices and kind staff. I witnessed one of the employees give a drink to a patron who would have struggled to buy one. It was a heart warming moment that made me want to give them all my business.",
    author: "Drew W.",
    source: "Google",
  },
  {
    quote:
      "The Best cozy Deli in Carmel by the Sea! The atmosphere, the sandwiches to die for, homemade soup and the best service in town. I totally recommend to stop here.",
    author: "Miss Lady M.",
    source: "Google",
  },
  {
    quote:
      "Such a charming spot! We stopped in for some takeout to enjoy a picnic at the beach, and it was a great choice. The sandwiches were affordable with a wide variety of options. The personal service really made it stand out.",
    author: "Thap N.",
    source: "Google",
  },
  {
    quote:
      "So many options for sandwiches, salad, soup, pastries and more. Best minestrone soup ever! Kindest people and in a prime location. 10/10.",
    author: "Aryana I.",
    source: "Google",
  },
];
