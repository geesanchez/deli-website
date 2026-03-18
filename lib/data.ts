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

// TODO: Replace ALL placeholder menu items and prices with real menu data
export const menuCategories: MenuCategory[] = [
  {
    id: "deli",
    label: "Deli Menu",
    description: "Fresh sandwiches, homemade soups, salads, and hot meals made daily.",
    items: [
      // TODO: Replace with real deli menu items and prices
      { name: "Turkey Avocado", description: "Oven-roasted turkey, fresh avocado, lettuce, tomato, and herb mayo on sourdough", price: "$12.95" },
      { name: "Italian Sub", description: "Genoa salami, capicola, provolone, lettuce, tomato, onion, pepperoncini, and Italian dressing", price: "$13.95" },
      { name: "Roast Beef & Cheddar", description: "Slow-roasted beef, sharp cheddar, horseradish cream, lettuce, and tomato on a Dutch crunch roll", price: "$13.95" },
      { name: "Chicken Pesto", description: "Grilled chicken breast, fresh pesto, sun-dried tomatoes, mozzarella, and mixed greens", price: "$13.50" },
      { name: "Veggie Delight", description: "Avocado, cucumber, sprouts, roasted red peppers, hummus, and Swiss on whole wheat", price: "$11.95" },
      { name: "Soup of the Day", description: "Homemade soup served with a fresh bread roll. Ask about today's selection.", price: "$6.95" },
      { name: "Garden Salad", description: "Mixed greens, cucumber, tomato, carrots, and house vinaigrette", price: "$8.95" },
      { name: "Caesar Salad", description: "Romaine hearts, shaved Parmesan, croutons, and classic Caesar dressing", price: "$9.95" },
      { name: "Daily Hot Special", description: "Chef's rotating hot entrée — ask what's cooking today!", price: "$14.95" },
    ],
  },
  {
    id: "breakfast",
    label: "Breakfast",
    description: "Hot breakfast sandwiches, baked goods, fruit, and coffee to start your morning.",
    items: [
      // TODO: Replace with real breakfast menu items and prices
      { name: "Bacon, Egg & Cheese", description: "Scrambled eggs, applewood bacon, and melted cheddar on a toasted roll", price: "$7.95" },
      { name: "Sausage, Egg & Cheese", description: "Scrambled eggs, breakfast sausage patty, and American cheese on a croissant", price: "$7.95" },
      { name: "Veggie Breakfast Sandwich", description: "Scrambled eggs, avocado, tomato, spinach, and Swiss on sourdough", price: "$8.50" },
      { name: "Fresh Fruit Cup", description: "Seasonal fresh fruit, perfectly ripe", price: "$5.95" },
      { name: "Baked Muffin", description: "Freshly baked — blueberry, banana nut, or bran. Ask for today's flavors.", price: "$3.95" },
      { name: "Bagel with Cream Cheese", description: "Toasted bagel with a generous spread of cream cheese", price: "$4.50" },
      { name: "Granola & Yogurt Parfait", description: "Greek yogurt layered with house granola and fresh berries", price: "$6.95" },
      { name: "Coffee", description: "Freshly brewed, locally roasted. Regular or decaf.", price: "$2.50" },
    ],
  },
  {
    id: "specialty",
    label: "Specialty Sandwiches",
    description: "Our signature creations — burgers, falafel, and house favorites.",
    items: [
      // TODO: Replace with real specialty sandwich items and prices
      { name: "Classic Burger", description: "Half-pound Angus beef patty, lettuce, tomato, onion, pickles, and special sauce", price: "$12.95" },
      { name: "Falafel Wrap", description: "Crispy housemade falafel, tahini, pickled veggies, lettuce, and tomato in a warm pita", price: "$11.95" },
      { name: "BLT", description: "Thick-cut bacon, fresh lettuce, ripe tomato, and mayo on toasted sourdough", price: "$10.95" },
      { name: "Egg Salad Sandwich", description: "Classic egg salad with celery and herbs on your choice of bread", price: "$9.95" },
      { name: "Tuna Salad Sandwich", description: "Albacore tuna salad with celery and red onion on a croissant", price: "$10.95" },
      { name: "BBQ Meatloaf Sandwich", description: "Housemade meatloaf, BBQ glaze, caramelized onions, and cheddar on a toasted roll", price: "$13.50" },
      { name: "Philly Cheesesteak", description: "Shaved steak, sautéed peppers and onions, melted provolone on a hoagie roll", price: "$14.50" },
      { name: "Club Sandwich", description: "Triple-decker with turkey, bacon, lettuce, tomato, and mayo", price: "$13.95" },
    ],
  },
  {
    id: "sandwich-bar",
    label: "Sandwich Bar",
    description: "Build your own masterpiece — pick your bread, fillings, and extras.",
    items: [
      // TODO: Replace with real sandwich bar options and prices
      { name: "Base Sandwich", description: "Choice of roll or sliced bread with one premium filling", price: "$9.95" },
      { name: "Extra Meat", description: "Add another protein to your sandwich", price: "$2.50" },
      { name: "Extra Cheese", description: "Add your choice of cheese — cheddar, Swiss, provolone, pepper jack, or American", price: "$1.50" },
      { name: "Premium Toppings", description: "Avocado, bacon, sun-dried tomatoes, or roasted peppers", price: "$1.50" },
      { name: "Standard Toppings", description: "Lettuce, tomato, onion, pickles, sprouts, pepperoncini — included free", price: "Free" },
      { name: "Sauces & Spreads", description: "Mayo, mustard, pesto, hummus, horseradish, Italian dressing, and more", price: "Free" },
    ],
  },
  {
    id: "box-lunches",
    label: "Box Lunches",
    description: "Perfect for Carmel Beach picnics, day trips to Big Sur, or group outings.",
    items: [
      // TODO: Replace with real box lunch options and prices
      { name: "Classic Deli Box", description: "Choice of sandwich, bag of chips, fresh cookie, pickle spear, and a drink", price: "$15.95" },
      { name: "Turkey Club Box", description: "Turkey club sandwich, pasta salad, cookie, and a drink", price: "$16.95" },
      { name: "Veggie Picnic Box", description: "Veggie wrap, hummus & veggies, fresh fruit, cookie, and a drink", price: "$15.95" },
      { name: "Italian Picnic Box", description: "Italian sub, antipasto salad, biscotti, and a drink", price: "$16.95" },
      { name: "Kids Box", description: "PB&J or turkey & cheese, apple slices, cookie, and a juice box", price: "$9.95" },
      { name: "Group Box (serves 4)", description: "Assorted sandwich platter, chips, cookies, and drinks for four", price: "$55.00" },
    ],
  },
];

// TODO: Replace with real catering menu items and prices
export const cateringHighlights: MenuCategory = {
  id: "catering",
  label: "Catering Menu",
  description: "Full-service catering for any occasion — from intimate gatherings to large events.",
  items: [
    { name: "Sandwich Platter", description: "Assorted gourmet sandwiches, beautifully arranged. Serves 10-12.", price: "$109.95" },
    { name: "Tapas Spread", description: "Mediterranean-inspired small bites: bruschetta, stuffed mushrooms, artisan cheese board", price: "$120.00" },
    { name: "Brunch Package", description: "Egg dishes, pastries, fresh fruit, coffee, and juice. Per person.", price: "$18.95/pp" },
    { name: "Executive Lunch", description: "Sandwich, salad, dessert, and beverage. Per person.", price: "$22.95/pp" },
    { name: "Entrée Buffet", description: "Choice of two entrées, two sides, salad, rolls, and dessert. Per person.", price: "$32.95/pp" },
    { name: "Dessert Platter", description: "Assorted cookies, brownies, and seasonal sweets. Serves 10-12.", price: "$44.95" },
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
  // TODO: Replace with real gift basket options and prices
  {
    name: "The Carmel Classic",
    description: "Artisan cheeses, crackers, local honey, dried fruits, and gourmet nuts.",
    priceRange: "$45 – $65",
  },
  {
    name: "Wine Country",
    description: "Two bottles of local Monterey County wine paired with cheeses and charcuterie.",
    priceRange: "$75 – $120",
  },
  {
    name: "Sweet Tooth",
    description: "Homemade cookies, brownies, chocolate truffles, and seasonal treats.",
    priceRange: "$35 – $55",
  },
  {
    name: "Custom Basket",
    description: "Tell us your budget and preferences — we'll create something special just for you.",
    priceRange: "Any budget",
  },
];

export const reviews: Review[] = [
  {
    quote: "A delicious breakfast sandwich for only $7! Great option for beach trips or outings to Big Sur.",
    source: "Yelp",
  },
  {
    quote: "Service was pretty quick. Most of us ordered their specialty sandwiches, and they were all delicious.",
    source: "TripAdvisor",
  },
  {
    quote: "We ordered a veggie sandwich and some of their salads for our picnic lunch. A wonderful and tasty meal.",
    source: "Blog Review",
  },
];
