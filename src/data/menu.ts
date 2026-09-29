export interface MenuItem {
  name: string;
  desc: string;
  price: number;
  tag?: string;
  veg: boolean;
  spicy?: 0 | 1 | 2 | 3;
}

export interface MenuCategory {
  id: string;
  label: string;
  items: MenuItem[];
}

export const PHONE_DISPLAY = "080199 39399";
export const PHONE_LINK = "tel:08019939399";
export const ZOMATO_URL =
  "https://www.zomato.com/hyderabad/e2-restaurant-bachupally";
export const ADDRESS =
  "KVR Valley, Springs Wood's, Shambipur Road, Mallampet, Hyderabad, Telangana 500118";
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=E2+Restaurant+Mallampet+Hyderabad+500118";

export const menuData: MenuCategory[] = [
  {
    id: "biryanis",
    label: "Biryanis",
    items: [
      { name: "Chicken Dum Biryani", desc: "Hyderabadi dum, mirchi ka salan & raita", price: 220, tag: "Bestseller", veg: false, spicy: 2 },
      { name: "Boneless Chicken Biryani", desc: "Tender boneless cubes, saffron rice, fried onions", price: 280, tag: "Popular", veg: false, spicy: 2 },
      { name: "Chicken Family Pack", desc: "Serves 3–4, with salan, raita & sweet", price: 699, veg: false, spicy: 2 },
      { name: "Egg Biryani", desc: "Masala eggs layered with fragrant basmati", price: 180, veg: false, spicy: 1 },
      { name: "Veg Biryani", desc: "Seasonal vegetables, mint & fried onions", price: 190, veg: true, spicy: 1 },
      { name: "Mushroom Biryani", desc: "Peppery mushrooms, dum style", price: 210, veg: true, spicy: 2 },
      { name: "Prawns Biryani", desc: "Juicy prawns, coastal masala", price: 340, tag: "Chef's pick", veg: false, spicy: 3 },
    ],
  },
  {
    id: "nonveg-starters",
    label: "Non-Veg Starters",
    items: [
      { name: "Chicken 65", desc: "Curry leaves, red chillies, lemon", price: 220, tag: "Bestseller", veg: false, spicy: 3 },
      { name: "Chicken Majestic", desc: "Creamy, minty Apollo-style favourite", price: 240, tag: "Must try", veg: false, spicy: 2 },
      { name: "Pepper Chicken Dry", desc: "Crushed black pepper, curry leaf toss", price: 250, veg: false, spicy: 3 },
      { name: "Paper Chicken", desc: "Thin, crisp, peppered chicken slices", price: 260, tag: "Signature", veg: false, spicy: 2 },
      { name: "Chilli Chicken", desc: "Indo-Chinese wok toss, peppers & onion", price: 230, veg: false, spicy: 2 },
      { name: "Chicken Lollipop", desc: "Drummettes, spicy glaze", price: 240, veg: false, spicy: 2 },
      { name: "Apollo Fish", desc: "Crispy fish, tangy Apollo masala", price: 270, veg: false, spicy: 2 },
    ],
  },
  {
    id: "veg-starters",
    label: "Veg Starters",
    items: [
      { name: "Chilli Mushroom", desc: "Batter-fried mushrooms, schezwan toss", price: 200, tag: "Popular", veg: true, spicy: 2 },
      { name: "Paneer 65", desc: "Fiery south-Indian paneer fry", price: 220, veg: true, spicy: 2 },
      { name: "Veg Manchuria", desc: "Crisp vegetable dumplings, garlic soy", price: 180, veg: true, spicy: 1 },
      { name: "Baby Corn Chilli", desc: "Golden baby corn, pepper & spring onion", price: 190, veg: true, spicy: 1 },
      { name: "French Fries", desc: "Peri-peri dusted, herb mayo", price: 140, veg: true, spicy: 0 },
      { name: "Masala Papad Basket", desc: "Roasted papad, onion-tomato masala", price: 99, veg: true, spicy: 1 },
    ],
  },
  {
    id: "soups",
    label: "Soups",
    items: [
      { name: "Chicken Hot & Sour Soup", desc: "Peppery, loaded with chicken & veggies", price: 140, veg: false, spicy: 2 },
      { name: "Sweet Corn Chicken Soup", desc: "Classic comfort, egg ribbons", price: 140, veg: false, spicy: 0 },
      { name: "Tomato Soup", desc: "Roasted tomato, herb croutons", price: 110, veg: true, spicy: 0 },
      { name: "Veg Hot & Sour Soup", desc: "Mushroom, carrot, burnt garlic", price: 120, veg: true, spicy: 2 },
      { name: "Mushroom Soup", desc: "Creamy, cracked pepper", price: 130, veg: true, spicy: 1 },
    ],
  },
  {
    id: "nonveg-curries",
    label: "Non-Veg Curries",
    items: [
      { name: "Butter Chicken", desc: "Tomato-makhani gravy, cream swirl", price: 280, tag: "Bestseller", veg: false, spicy: 1 },
      { name: "Chicken Curry (Boneless)", desc: "Home-style, ginger & garam masala", price: 260, veg: false, spicy: 2 },
      { name: "Kadai Chicken", desc: "Charred peppers, kadai masala", price: 270, veg: false, spicy: 2 },
      { name: "Egg Masala", desc: "Onion-tomato masala, boiled eggs", price: 190, veg: false, spicy: 2 },
      { name: "Fish Pulusu", desc: "Tangy tamarind Andhra-style curry", price: 290, veg: false, spicy: 3 },
      { name: "Prawn Curry", desc: "Coconut-tinged coastal gravy", price: 320, veg: false, spicy: 2 },
    ],
  },
  {
    id: "veg-curries",
    label: "Veg Curries",
    items: [
      { name: "Paneer Butter Masala", desc: "Rich makhani, kasuri methi", price: 240, tag: "Popular", veg: true, spicy: 1 },
      { name: "Kadai Paneer", desc: "Smoky peppers, fresh paneer", price: 240, veg: true, spicy: 2 },
      { name: "Dal Tadka + Fry", desc: "Ghee tadka, garlic tempering", price: 180, veg: true, spicy: 1 },
      { name: "Mixed Veg Curry", desc: "Seasonal vegetables, homestyle", price: 190, veg: true, spicy: 1 },
      { name: "Mushroom Masala", desc: "Onion-tomato masala, coriander", price: 210, veg: true, spicy: 2 },
      { name: "Bagara Baingan", desc: "Hyderabadi peanut-sesame gravy", price: 200, veg: true, spicy: 2 },
    ],
  },
  {
    id: "chinese",
    label: "Chinese",
    items: [
      { name: "Chicken Fried Rice", desc: "Smoky wok, egg & spring onion", price: 200, veg: false, spicy: 1 },
      { name: "Chicken Noodles", desc: "Hakka style, burnt garlic", price: 200, veg: false, spicy: 1 },
      { name: "Schezwan Chicken Rice", desc: "Fiery schezwan wok toss", price: 220, tag: "Spicy", veg: false, spicy: 3 },
      { name: "Veg Fried Rice", desc: "Classic wok-tossed", price: 160, veg: true, spicy: 0 },
      { name: "Veg Noodles", desc: "Hakka, crunchy veggies", price: 160, veg: true, spicy: 1 },
      { name: "Chicken Manchuria Rice", desc: "Manchuria balls over fried rice", price: 220, veg: false, spicy: 2 },
    ],
  },
  {
    id: "nonveg-rice",
    label: "Non-Veg Rice",
    items: [
      { name: "Chicken Fried Rice Special", desc: "E2 special masala, egg & chicken", price: 210, veg: false, spicy: 1 },
      { name: "Egg Fried Rice", desc: "Double egg, pepper dust", price: 170, veg: false, spicy: 1 },
      { name: "Prawn Fried Rice", desc: "Garlic-butter prawns", price: 280, veg: false, spicy: 1 },
      { name: "Chicken Rice Bowl", desc: "Curry + rice comfort combo", price: 199, tag: "Value", veg: false, spicy: 2 },
    ],
  },
  {
    id: "veg-rice",
    label: "Veg Rice",
    items: [
      { name: "Jeera Rice", desc: "Ghee-tempered cumin basmati", price: 150, veg: true, spicy: 0 },
      { name: "Veg Fried Rice", desc: "Wok tossed, spring onion", price: 160, veg: true, spicy: 0 },
      { name: "Mushroom Rice", desc: "Pepper-mushroom toss with rice", price: 190, veg: true, spicy: 1 },
      { name: "Curd Rice", desc: "Tempered curd rice, pomegranate", price: 140, veg: true, spicy: 0 },
      { name: "Dal Khichdi", desc: "Ghee, papad & pickle", price: 170, veg: true, spicy: 0 },
    ],
  },
  {
    id: "pulavs",
    label: "Pulavs",
    items: [
      { name: "Chicken Pulav", desc: "One-pot seeraga samba style, salan", price: 220, tag: "Local favourite", veg: false, spicy: 2 },
      { name: "Veg Pulav", desc: "Vegetables, whole spices, ghee", price: 180, veg: true, spicy: 1 },
      { name: "Egg Pulav", desc: "Masala egg, fragrant rice", price: 190, veg: false, spicy: 2 },
      { name: "Mushroom Pulav", desc: "Pepper & mint pulav", price: 200, veg: true, spicy: 1 },
      { name: "Prawn Pulav", desc: "Coastal masala pulav", price: 300, veg: false, spicy: 2 },
    ],
  },
  {
    id: "shawarma",
    label: "Shawarma",
    items: [
      { name: "Chicken Shawarma Roll", desc: "Char-grilled chicken, garlic mayo, kuboos", price: 130, tag: "Bestseller", veg: false, spicy: 1 },
      { name: "Special Shawarma", desc: "Double chicken + cheese, loaded", price: 180, veg: false, spicy: 1 },
      { name: "Shawarma Plate", desc: "Open plate with fries & mayo", price: 220, veg: false, spicy: 1 },
      { name: "Paneer Shawarma", desc: "Spiced paneer, mint mayo", price: 150, veg: true, spicy: 1 },
    ],
  },
  {
    id: "breads",
    label: "Breads",
    items: [
      { name: "Tandoori Roti", desc: "Clay-oven, butter brushed", price: 30, veg: true, spicy: 0 },
      { name: "Butter Naan", desc: "Soft, blistered, buttery", price: 50, veg: true, spicy: 0 },
      { name: "Garlic Naan", desc: "Garlic-coriander butter", price: 60, veg: true, spicy: 0 },
      { name: "Rumali Roti", desc: "Paper-thin, served with curry", price: 40, veg: true, spicy: 0 },
      { name: "Chapathi (2 pc)", desc: "Whole wheat, ghee optional", price: 50, veg: true, spicy: 0 },
      { name: "Parotta (2 pc)", desc: "Flaky, with salna", price: 70, veg: true, spicy: 0 },
    ],
  },
];

export const signatureDishes = [
  {
    name: "Chicken Dum Biryani",
    telugu: "చికెన్ బిర్యానీ",
    desc: "Slow-steamed Hyderabadi dum, saffron & crispy onions.",
    price: "₹220",
    img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=900&auto=format&fit=crop",
  },
  {
    name: "Boneless Biryani",
    telugu: "బోన్‌లెస్ బిర్యానీ",
    desc: "Juicy boneless cubes folded through fragrant rice.",
    price: "₹280",
    img: "https://images.unsplash.com/photo-1642821373181-696a54913e93?q=80&w=900&auto=format&fit=crop",
  },
  {
    name: "Chicken Majestic",
    telugu: "చికెన్ మెజెస్టిక్",
    desc: "Creamy Apollo-style toss with mint & curry leaf.",
    price: "₹240",
    img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=900&auto=format&fit=crop",
  },
  {
    name: "Pepper Chicken",
    telugu: "పెప్పర్ చికెన్",
    desc: "Crushed black pepper, ghee roast, fiery & dry.",
    price: "₹250",
    img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=900&auto=format&fit=crop",
  },
  {
    name: "Paper Chicken",
    telugu: "పేపర్ చికెన్",
    desc: "Crisp, thin-sliced peppered chicken — E2 special.",
    price: "₹260",
    img: "https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=900&auto=format&fit=crop",
  },
  {
    name: "Chilli Mushroom",
    telugu: "చిల్లీ మష్రూమ్",
    desc: "Wok-tossed mushrooms, peppers & schezwan heat.",
    price: "₹200",
    img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=900&auto=format&fit=crop",
  },
];

export const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=900&auto=format&fit=crop",
    label: "Family dining hall",
  },
  {
    src: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=900&auto=format&fit=crop",
    label: "Wok-tossed specials",
  },
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=900&auto=format&fit=crop",
    label: "Evening at E2",
  },
  {
    src: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=900&auto=format&fit=crop",
    label: "Crisp starters",
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=900&auto=format&fit=crop",
    label: "Dinner setting",
  },
  {
    src: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=900&auto=format&fit=crop",
    label: "Hakka noodles",
  },
];
