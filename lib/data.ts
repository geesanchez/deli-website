import type {
  BusinessInfo,
  MenuCategory,
  Review,
  CateringService,
  GiftBasketOption,
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
    { day: "Monday", hours: "8:00 AM – 5:00 PM" },
    { day: "Tuesday", hours: "8:00 AM – 5:00 PM" },
    { day: "Wednesday", hours: "8:00 AM – 5:00 PM" },
    { day: "Thursday", hours: "8:00 AM – 5:00 PM" },
    { day: "Friday", hours: "8:00 AM – 5:00 PM" },
    { day: "Saturday", hours: "8:00 AM – 5:00 PM" },
    { day: "Sunday", hours: "Call or ask in advance" },
  ],
  established: 1991,
  yelp: {
    rating: 4.4,
    reviews: 195,
    url: "https://www.yelp.com/biz/5th-avenue-deli-and-catering-carmel-by-the-sea",
  },
  tripAdvisor: {
    rating: 4.9,
    url: "https://www.tripadvisor.com/Restaurant_Review-g32172-d878853-Reviews-5th_Avenue_Deli_Catering-Carmel_By_The_Sea_Monterey_County_California.html",
  },
  social: {
    instagram: "https://www.instagram.com/5thavenuedeli/",
    facebook: "https://www.facebook.com/5thAveDeli/",
    yelp: "https://www.yelp.com/biz/5th-avenue-deli-and-catering-carmel-by-the-sea",
  },
};

export const menuCategories: MenuCategory[] = [
  {
    id: "soups",
    label: "Homemade Soups",
    description: "Rotating selection of hearty, homemade soups made fresh daily.",
    items: [
      { name: "Drunken' Chili", description: "A bold, hearty chili with a kick", price: "Ask for today's selection" },
      { name: "Chicken Noodle", description: "Classic comfort — tender chicken, egg noodles, and fresh vegetables", price: "Ask for today's selection" },
      { name: "Chicken Pozole", description: "Traditional Mexican soup with hominy, chicken, and warm spices", price: "Ask for today's selection" },
      { name: "Tuscan White Bean with Ham", description: "Creamy white beans, smoky ham, and Italian herbs", price: "Ask for today's selection" },
      { name: "Butternut Squash", description: "Velvety roasted butternut squash, lightly spiced", price: "Ask for today's selection" },
      { name: "Italian Wedding", description: "Meatballs, escarole, and pasta in a savory broth", price: "Ask for today's selection" },
      { name: "Jambalaya", description: "Spicy Cajun-style soup with sausage, chicken, and rice", price: "Ask for today's selection" },
      { name: "Creamy Potato", description: "Rich and creamy loaded potato soup", price: "Ask for today's selection" },
    ],
  },
  {
    id: "hot-specialty",
    label: "Hot Specialty Sandwiches",
    description: "Served hot and fresh — our most popular signature sandwiches.",
    items: [
      { name: "Reuben", description: "Pastrami or turkey, Thousand Island, sauerkraut & Swiss on marble rye", price: "Market" },
      { name: "B.L.T.", description: "Crispy bacon, lettuce & tomatoes on toasted bread", price: "Market" },
      { name: "Tri-Tip Steak", description: "Marinated tri-tip, provolone, lettuce, tomatoes", price: "Market" },
      { name: "Meatball Marinara", description: "Meatballs, parmesan, marinara on a sourdough roll", price: "Market" },
      { name: "Falafel", description: "Falafel patties on pita with lettuce, tomato, cucumbers, tahini", price: "Market" },
      { name: "BBQ Meatloaf", description: "BBQ meatloaf, lettuce, tomatoes, cheddar, BBQ sauce", price: "Market" },
    ],
  },
  {
    id: "cold-specialty",
    label: "Cold Specialty Sandwiches",
    description: "Fresh and flavorful cold sandwiches, perfect for a Carmel Beach picnic.",
    items: [
      { name: "Turkey Berry", description: "Turkey, cranberry sauce & stuffing", price: "Market" },
      { name: "Muffaletta", description: "Salami, ham, provolone, olive mix on French roll", price: "Market" },
      { name: "Curried Chicken Salad", description: "Curried chicken salad with lettuce & tomato", price: "Market" },
      { name: "Teriyaki Salmon", description: "Glazed salmon, spinach, cucumbers, honey mustard", price: "Market" },
      { name: "Spiral Honey Ham", description: "Ham, lettuce, tomato, Swiss on marble rye", price: "Market" },
      { name: "Natural Roasted Turkey", description: "Turkey, lettuce, tomato", price: "Market" },
    ],
  },
  {
    id: "breakfast",
    label: "Breakfast",
    description: "Breakfast Bar served Monday through Friday, 8–10 AM.",
    items: [
      { name: "Breakfast Burrito", description: "Scrambled eggs, cheese, salsa, potatoes — with bacon, ham, sausage, or veggie", price: "Market" },
      { name: "Mexican Breakfast Burrito", description: "Eggs, chorizo, pepper jack, beans, salsa & pico de gallo", price: "Market" },
      { name: "Breakfast Bagel", description: "2 eggs, ham/bacon/sausage, smokey cheddar on a toasted bagel", price: "Market" },
      { name: "Croissant Breakfast Sandwich", description: "2 eggs, bacon/ham/sausage, cheese, tomato on a buttery croissant", price: "Market" },
      { name: "English Muffin", description: "2 eggs, tomato, cheddar, ham/bacon/sausage on a toasted English muffin", price: "Market" },
      { name: "Sliced Quiche", description: "Lorraine or Spinach — baked fresh daily", price: "Market" },
    ],
  },
  {
    id: "sandwich-bar",
    label: "Sandwich Bar",
    description: "Build your own masterpiece — pick your bread, fillings, and extras.",
    items: [
      { name: "Full Sandwich", description: "Your choice of meats, cheese, and toppings on sliced bread", price: "$7.50" },
      { name: "Half Sandwich", description: "A smaller portion on sliced bread", price: "$4.50" },
      { name: "Roll Upgrade", description: "Upgrade from sliced bread to a fresh roll", price: "+$0.50" },
      { name: "Extra Meat", description: "Add another protein to your sandwich", price: "+$2.00" },
      { name: "Cheese", description: "Add your choice of cheese", price: "+$0.50" },
      { name: "Imported Cheese", description: "Upgrade to a premium imported cheese", price: "+$2.00" },
      { name: "Premium Extras", description: "Avocado, bacon, pesto, or sundried tomato", price: "+$1.50 each" },
      { name: "Condiments", description: "Pick 4 free — lettuce, tomato, onion, pickles, sprouts & more. Extra $0.50 each.", price: "4 Free" },
    ],
  },
  {
    id: "box-lunches",
    label: "Box Lunches",
    description: "Perfect for Carmel Beach picnics, day trips to Big Sur, or group outings.",
    items: [
      { name: "5th Avenue's Deli Picnic", description: "Ham, turkey, or roast beef, Swiss or cheddar, lettuce & tomato, apple, chips & cookie", price: "$14.50" },
      { name: "Carmel Classic", description: "Oven roasted turkey, cheddar, lettuce & tomato, pasta salad, chips & espresso brownie or lemon bar", price: "$18.50" },
      { name: "Deluxe Picnic", description: "Curried chicken salad sandwich, green salad, chips, carrot cake & drink", price: "$20.99" },
      { name: "Vegetarian Box", description: "Falafel or veggie sandwich, Greek salad, egg, apple & coconut macaroon", price: "$19.00" },
    ],
  },
];

export const cateringHighlights: MenuCategory = {
  id: "catering",
  label: "Catering Menu",
  description: "Full-service catering for any occasion — from intimate gatherings to large events.",
  items: [
    { name: "Fresh Pastries", description: "Mini Danish, croissants, and muffins — perfect for morning meetings", price: "$35–$50" },
    { name: "Traditional Deli Sandwiches", description: "Assorted deli sandwiches, beautifully arranged. Serves 8-10.", price: "$70.00" },
    { name: "Fruit & Cheese Tray", description: "Seasonal fruits paired with artisan cheeses", price: "$40–$70" },
    { name: "Antipasto Platter", description: "Italian meats, marinated vegetables, olives, and cheeses", price: "$40–$60" },
    { name: "Veggie Lasagna", description: "Homemade vegetable lasagna. Serves 8-10.", price: "$75.00" },
    { name: "Meat Lasagna", description: "Hearty meat lasagna with house-made sauce. Serves 8-10.", price: "$85.00" },
    { name: "Dessert Sampler", description: "Assorted cookies, brownies, and seasonal sweets. Serves 10-15.", price: "$45.00" },
  ],
};

export const cateringServices: CateringService[] = [
  {
    title: "Bus Tours & Groups",
    description: "We cater to tour buses visiting Carmel. Pre-ordered box lunches ready when you arrive.",
    icon: "🚌",
  },
  {
    title: "Corporate Aircraft",
    description: "In-flight catering for private aircraft at Monterey Peninsula Airport.",
    icon: "✈️",
  },
  {
    title: "Gallery Openings",
    description: "Elegant tapas and refreshments for Carmel's gallery exhibitions and art events.",
    icon: "🎨",
  },
  {
    title: "Open Houses",
    description: "Impress your guests with fresh platters and gourmet bites for real estate events.",
    icon: "🏡",
  },
  {
    title: "Private Events",
    description: "Birthdays, anniversaries, and celebrations of all sizes. We customize to your taste.",
    icon: "🎉",
  },
  {
    title: "Delivery Available",
    description: "We deliver throughout Carmel-by-the-Sea and the Monterey Peninsula.",
    icon: "🚗",
  },
];

export const giftBaskets: GiftBasketOption[] = [
  {
    name: "The Carmel Classic",
    description: "Artisan cheeses, crackers, local honey, dried fruits, and gourmet nuts.",
    priceRange: "Custom",
  },
  {
    name: "Wine Country",
    description: "Local Monterey County wines paired with cheeses and charcuterie.",
    priceRange: "Custom",
  },
  {
    name: "Sweet Tooth",
    description: "Homemade cookies, brownies, chocolate truffles, and seasonal treats.",
    priceRange: "Custom",
  },
  {
    name: "Custom Basket",
    description: "Tell us your budget and preferences — we'll create something special.",
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
