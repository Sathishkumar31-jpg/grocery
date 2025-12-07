// import React from 'react'

// const Home = () => {
//   return (
//     <div>
//       Home
//     </div>
//   )
// }

// export default Home

// import { Link } from "react-router-dom";

// export default function Home() {
//   return (
//     <div className="text-center py-10">
//       <h1 className="text-4xl font-bold text-green-700 mb-4">
//         Welcome to SHARP Grocery Store
//       </h1>

//       <p className="text-lg text-gray-700 mb-6">
//         Buy your daily groceries easily using SHARP Tokens.
//       </p>

//       <div className="flex justify-center gap-4 mt-6">
//         <Link
//           to="/products"
//           className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700"
//         >
//           Browse Products
//         </Link>

//         <Link
//           to="/login"
//           className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700"
//         >
//           Login
//         </Link>
//       </div>

//       <img
//         className="mx-auto mt-10 w-2/3 rounded-xl shadow-lg"
//         src="https://seoimgak.mmtcdn.com/blog/sites/default/files/sri-lankas-must-see-tourist-places-view.jpg"
//         alt="Grocery Banner"
//       />
//     </div>
//   );
// }






// import { Link } from "react-router-dom";

// export default function Home() {
//   return (
//     <div className="bg-gray-50 min-h-screen">
      
//       {/* Banner */}
//       <div className="bg-green-600 text-white py-16 text-center">
//         <h1 className="text-4xl font-bold">Welcome to SHARP Grocery</h1>
//         <p className="mt-3 text-lg">Fresh, Fast & Delivered to Your Doorstep🚚</p>

//         <Link
//           to="/products"
//           className="mt-6 inline-block bg-white text-green-700 font-bold px-6 py-3 rounded-lg shadow hover:bg-gray-100"
//         >
//           Shop Now
//         </Link>
//       </div>

//       {/* Features Section */}
//       <div className="container mx-auto py-12 grid md:grid-cols-3 gap-8 px-4">

//         <div className="p-6 bg-white rounded-xl shadow text-center">
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
//             className="w-20 mx-auto"
//           />
//           <h3 className="text-xl font-semibold mt-3">Fresh Vegetables</h3>
//           <p className="text-gray-600 mt-2">
//             100% organic vegetables sourced directly from farmers.
//           </p>
//         </div>

//         <div className="p-6 bg-white rounded-xl shadow text-center">
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
//             className="w-20 mx-auto"
//           />
//           <h3 className="text-xl font-semibold mt-3">Fast Delivery</h3>
//           <p className="text-gray-600 mt-2">
//             We deliver your groceries within 30 minutes.
//           </p>
//         </div>

//         <div className="p-6 bg-white rounded-xl shadow text-center">
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/3135/3135706.png"
//             className="w-20 mx-auto"
//           />
//           <h3 className="text-xl font-semibold mt-3">Best Prices</h3>
//           <p className="text-gray-600 mt-2">
//             Buy more, save more with daily discounts.
//           </p>
//         </div>

//       </div>

//       {/* Categories Section */}
//       <div className="bg-white py-14">
//         <h2 className="text-3xl font-bold text-center">Shop by Category</h2>

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6 mt-8 container mx-auto">

//           <Link to="/products" className="block bg-green-100 p-5 rounded-xl shadow hover:bg-green-200">
//             <h3 className="font-semibold text-lg text-green-700 text-center">Vegetables</h3>
//           </Link>

//           <Link to="/products" className="block bg-yellow-100 p-5 rounded-xl shadow hover:bg-yellow-200">
//             <h3 className="font-semibold text-lg text-yellow-700 text-center">Fruits</h3>
//           </Link>

//           <Link to="/products" className="block bg-blue-100 p-5 rounded-xl shadow hover:bg-blue-200">
//             <h3 className="font-semibold text-lg text-blue-700 text-center">Snacks</h3>
//           </Link>

//           <Link to="/products" className="block bg-red-100 p-5 rounded-xl shadow hover:bg-red-200">
//             <h3 className="font-semibold text-lg text-red-700 text-center">Dairy</h3>
//           </Link>

//         </div>
//       </div>

//     </div>
//   );
// }








// import { Link } from "react-router-dom";
// import TrendingProducts from "../components/trendingproduct";
// import { products } from "../data/products"; // use your own product data


// export default function Home() {
//   return (
//     <div className="bg-gray-50 min-h-screen pb-16">

//       {/* ================= HERO SECTION ================= */}
//       <section className="bg-green-600 text-white py-20 text-center shadow-lg">
//         <h1 className="text-5xl font-extrabold tracking-wide">SHARP Grocery</h1>
//         <p className="mt-4 text-xl opacity-90">
//           Fresh • Fast • Affordable | Delivered to Your Home 🚚
//         </p>

//         <Link
//           to="/products"
//           className="mt-6 inline-block bg-white text-green-700 font-bold px-8 py-3 rounded-xl shadow-lg hover:bg-gray-200"
//         >
//           Shop Now
//         </Link>
//       </section>

//       {/* ================= FEATURES SECTION ================= */}
//       <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8 max-w-6xl mx-auto">

//         <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
//             className="w-20 mx-auto"
//           />
//           <h3 className="text-2xl font-semibold mt-4">Fresh Vegetables</h3>
//           <p className="text-gray-600 mt-2">
//             Farm-fresh veggies delivered every morning 🌱
//           </p>
//         </div>

//         <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
//             className="w-20 mx-auto"
//           />
//           <h3 className="text-2xl font-semibold mt-4">Super Fast Delivery</h3>
//           <p className="text-gray-600 mt-2">
//             Groceries delivered in under 30 minutes 🚀
//           </p>
//         </div>

//         <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/3135/3135706.png"
//             className="w-20 mx-auto"
//           />
//           <h3 className="text-2xl font-semibold mt-4">Best Prices</h3>
//           <p className="text-gray-600 mt-2">
//             Daily offers & wallet savings with SHARP Tokens 💰
//           </p>
//         </div>

//       </section>

//       {/* ================= CATEGORY SECTION ================= */}
//       <section className="bg-white py-14">
//         <h2 className="text-4xl font-bold text-center">Shop by Category</h2>

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8 max-w-6xl mx-auto">

//           <CategoryCard name="Vegetables" color="green" />
//           <CategoryCard name="Fruits" color="yellow" />
//           <CategoryCard name="Snacks" color="blue" />
//           <CategoryCard name="Dairy" color="red" />
//         </div>
//       </section>

//       <TrendingProducts products={products.slice(0,4)} />

//       {/* ================= OFFER SECTION ================= */}
//       <section className="max-w-6xl mx-auto px-6 mt-12">
//         <div className="bg-gradient-to-r from-green-500 to-green-700 text-white p-10 rounded-2xl shadow-lg text-center">
//           <h2 className="text-3xl font-bold">🔥 Special Offer Today</h2>
//           <p className="text-lg mt-2 opacity-90">
//             20% OFF on your first SHARP Token purchase!
//           </p>
//           <Link
//             to="/wallet"
//             className="mt-4 inline-block bg-white text-green-700 py-2 px-6 rounded-xl font-semibold hover:bg-gray-200"
//           >
//             Open Wallet
//           </Link>
//         </div>
//       </section>

//     </div>
//   );
// }

// function CategoryCard({ name, color }) {
//   const bg = {
//     green: "bg-green-100 hover:bg-green-200",
//     yellow: "bg-yellow-100 hover:bg-yellow-200",
//     blue: "bg-blue-100 hover:bg-blue-200",
//     red: "bg-red-100 hover:bg-red-200",
//   };

//   return (
//     <Link
//       to="/products"
//       className={`${bg[color]} p-8 rounded-xl shadow text-center transition`}
//     >
//       <h3 className="text-xl font-semibold text-gray-700">{name}</h3>
//     </Link>
//   );
// }






// import React, { useState } from "react";
// import BannerSlider from "../components/BannerSlider";

// // GroceryShopHome.jsx
// // Single-file React component for a modern grocery shop homepage.
// // Tailwind CSS required in your project for styling.

// export default function GroceryShopHome() {
//   const [query, setQuery] = useState("");
//   const [cart, setCart] = useState([]);

//   const categories = [
//     { id: 1, name: "Fruits & Vegetables", emoji: "🥦" },
//     { id: 2, name: "Dairy & Eggs", emoji: "🥚" },
//     { id: 3, name: "Bakery", emoji: "🍞" },
//     { id: 4, name: "Pantry", emoji: "🍚" },
//     { id: 5, name: "Beverages", emoji: "🧃" },
//   ];

//   const products = [
//     { id: 101, name: "Bananas (1kg)", price: 40, category: 1 },
//     { id: 102, name: "Tomatoes (1kg)", price: 35, category: 1 },
//     { id: 103, name: "Whole Milk (1L)", price: 55, category: 2 },
//     { id: 104, name: "Brown Bread", price: 30, category: 3 },
//     { id: 105, name: "Basmati Rice (5kg)", price: 450, category: 4 },
//     { id: 106, name: "Orange Juice (1L)", price: 120, category: 5 },
//   ];

//   const featured = products.slice(0, 4);

//   function addToCart(p) {
//     setCart((prev) => {
//       const exist = prev.find((i) => i.id === p.id);
//       if (exist) return prev.map((i) => (i.id === p.id ? { ...i, qty: i.qty + 1 } : i));
//       return [...prev, { ...p, qty: 1 }];
//     });
//   }

//   function removeFromCart(id) {
//     setCart((prev) => prev.filter((i) => i.id !== id));
//   }

//   function cartTotal() {
//     return cart.reduce((s, i) => s + i.price * i.qty, 0);
//   }

//   const filtered = products.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()));

//   return (
//     <div className="min-h-screen bg-gray-50 text-gray-900">
//       {/* Top nav */}
//       <header className="bg-white shadow-sm sticky top-0 z-40">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             <div className="flex items-center gap-4">
//               <div className="text-2xl font-extrabold text-green-600">GROCERY+</div>
//               <nav className="hidden md:flex items-center gap-4 text-sm text-gray-600">
//                 <a className="hover:text-green-600" href="#">Home</a>
//                 <a className="hover:text-green-600" href="#categories">Categories</a>
//                 <a className="hover:text-green-600" href="#offers">Offers</a>
//                 <a className="hover:text-green-600" href="#contact">Contact</a>
//               </nav>
//             </div>
            

//             <div className="flex items-center gap-3">
//               <div className="relative">
//                 <input
//                   aria-label="Search products"
//                   placeholder="Search for products, e.g. 'rice'"
//                   className="w-64 pl-3 pr-10 py-2 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-300"
//                   value={query}
//                   onChange={(e) => setQuery(e.target.value)}
//                 />
//                 <button
//                   className="absolute right-1 top-1/2 -translate-y-1/2 text-sm px-3 py-1 rounded-md bg-green-600 text-white"
//                   onClick={() => {}}
//                 >
//                   Search
//                 </button>
//               </div>

//               <button
//                 className="relative p-2 rounded-md hover:bg-gray-100"
//                 aria-label="Open cart"
//                 title="Cart"
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
//                 </svg>
//                 {cart.length > 0 && (
//                   <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">{cart.length}</span>
//                 )}
//               </button>

//               <button className="hidden sm:inline-flex items-center gap-2 bg-white border px-3 py-1 rounded-md hover:shadow">Sign in</button>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Hero */}
//       <main className="max-w-7xl mx-auto p-4 grid grid-cols-1 lg:grid-cols-4 gap-6">
//         <section className="lg:col-span-3">
//           <div className="rounded-2xl bg-gradient-to-r from-green-100 to-white p-6 flex flex-col sm:flex-row items-center gap-6">
//             <div className="flex-1">
//               <h1 className="text-3xl font-bold">Fresh groceries delivered fast</h1>
//               <p className="mt-2 text-gray-700">Local produce, pantry staples and daily essentials — all in one place. Order now and get same-day delivery.</p>

//               <div className="mt-4 flex gap-3">
//                 <a href="#featured" className="px-4 py-2 rounded-md bg-green-600 text-white font-medium">Shop Featured</a>
//                 <a href="#categories" className="px-4 py-2 rounded-md border">Browse Categories</a>
//               </div>
//             </div>
//             <div className="w-48 h-48 bg-white rounded-lg shadow flex items-center justify-center">
//               <img alt="fresh groceries" src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&q=80" className="rounded-lg object-cover h-full w-full" />
//             </div>
//           </div>

//           {/* Categories */}
//           <div id="categories" className="mt-6">
//             <h2 className="text-xl font-semibold mb-3">Top categories</h2>
//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
//               {categories.map((c) => (
//                 <button key={c.id} className="flex flex-col items-center gap-2 p-3 bg-white rounded-lg shadow hover:shadow-md">
//                   <div className="text-2xl">{c.emoji}</div>
//                   <div className="text-sm text-gray-700">{c.name}</div>
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Featured products */}
//           <div id="featured" className="mt-8">
//             <div className="flex items-center justify-between">
//               <h2 className="text-xl font-semibold">Featured</h2>
//               <a href="#" className="text-sm text-green-600">See all</a>
//             </div>

//             <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
//               {featured.map((p) => (
//                 <article key={p.id} className="bg-white rounded-lg shadow p-3 flex flex-col">
//                   <div className="h-36 bg-gray-100 rounded-md flex items-center justify-center"> 
//                     <div className="text-4xl">🍎</div>
//                   </div>
//                   <h3 className="mt-3 font-medium">{p.name}</h3>
//                   <div className="mt-2 flex items-center justify-between">
//                     <div className="font-semibold">₹{p.price}</div>
//                     <button onClick={() => addToCart(p)} className="px-3 py-1 rounded-md bg-green-600 text-white text-sm">Add</button>
//                   </div>
//                 </article>
//               ))}
//             </div>
//           </div>

//           {/* Search results / Products */}
//           <div className="mt-8">
//             <h2 className="text-lg font-semibold">Products</h2>
//             <p className="text-sm text-gray-600 mt-1">Showing {filtered.length} result(s) for "{query || 'all'}"</p>

//             <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//               {filtered.map((p) => (
//                 <div key={p.id} className="bg-white rounded-lg shadow p-4 flex flex-col">
//                   <div className="h-40 bg-gray-100 rounded-md flex items-center justify-center text-6xl">🛒</div>
//                   <div className="mt-3 flex-1">
//                     <h3 className="font-medium">{p.name}</h3>
//                     <p className="text-sm text-gray-500 mt-1">Category: {categories.find((c) => c.id === p.category)?.name}</p>
//                   </div>
//                   <div className="mt-3 flex items-center justify-between">
//                     <div className="font-semibold">₹{p.price}</div>
//                     <div className="flex gap-2">
//                       <button onClick={() => addToCart(p)} className="px-3 py-1 rounded-md bg-green-600 text-white">Add</button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Right column: Cart summary + offers */}
//         <aside className="lg:col-span-1">
//           <div className="sticky top-20 space-y-4">
//             <div className="bg-white rounded-lg shadow p-4">
//               <h3 className="font-semibold">Cart</h3>
//               {cart.length === 0 ? (
//                 <p className="text-sm text-gray-500 mt-2">Your cart is empty</p>
//               ) : (
//                 <div className="mt-3 space-y-2">
//                   {cart.map((item) => (
//                     <div key={item.id} className="flex items-center justify-between">
//                       <div>
//                         <div className="font-medium">{item.name}</div>
//                         <div className="text-sm text-gray-500">Qty: {item.qty}</div>
//                       </div>
//                       <div className="text-right">
//                         <div>₹{item.price * item.qty}</div>
//                         <button onClick={() => removeFromCart(item.id)} className="text-xs text-red-500 mt-1">Remove</button>
//                       </div>
//                     </div>
//                   ))}

//                   <div className="pt-3 border-t flex items-center justify-between">
//                     <div className="font-semibold">Total</div>
//                     <div className="font-bold">₹{cartTotal()}</div>
//                   </div>

//                   <button className="w-full mt-3 px-4 py-2 rounded-md bg-green-600 text-white">Checkout</button>
//                 </div>
//               )}
//             </div>

//             <div className="bg-white rounded-lg shadow p-4">
//               <h4 className="font-semibold">Offers</h4>
//               <ul className="mt-2 text-sm text-gray-600 space-y-2">
//                 <li>10% off on orders above ₹500</li>
//                 <li>Free delivery for first-time customers</li>
//               </ul>
//             </div>

//             <div className="bg-white rounded-lg shadow p-4">
//               <h4 className="font-semibold">Need help?</h4>
//               <p className="text-sm text-gray-600 mt-2">Chat with our support or call +91 99999 99999</p>
//             </div>
//           </div>
//         </aside>
//       </main>

//       <footer id="contact" className="bg-white border-t mt-8">
//         <div className="max-w-7xl mx-auto p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
//           <div>
//             <div className="text-lg font-bold text-green-600">GROCERY+</div>
//             <p className="text-sm text-gray-600 mt-1">Fresh groceries, delivered with care.</p>
//           </div>
//           <div className="text-sm text-gray-600">© {new Date().getFullYear()} Grocery+. All rights reserved.</div>
//         </div>
//       </footer>
//     </div>
//   );
// }





// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import BannerSlider from "../components/BannerSlider";
// import API from "../api";

// export default function Home() {
//   const [products, setProducts] = useState([]);
//   const [search, setSearch] = useState("");
//   const [searchResults, setSearchResults] = useState([]);

//   // Fetch products
//   useEffect(() => {
//     const loadProducts = async () => {
//       try {
//         const res = await API.get("/products");
//         setProducts(res.data);
//       } catch (err) {
//         console.error("Error loading products:", err);
//       }
//     };
//     loadProducts();
//   }, []);

//   // Search filter
//   const handleSearch = () => {
//     if (!search.trim()) return setSearchResults([]);
//     const matched = products.filter((p) =>
//       p.name.toLowerCase().includes(search.toLowerCase())
//     );
//     setSearchResults(matched);
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen">

//       {/* 🔥 Navbar */}
//       <header className="bg-green-600 text-white p-5 shadow">
//         <div className="max-w-6xl mx-auto">
//           <h1 className="text-3xl font-bold">SHARP Grocery Marketplace</h1>
//           <p className="text-sm mt-1">Fast • Trusted • Blockchain Secured</p>
//         </div>
//       </header>

//       {/* 🎯 SEARCH BAR */}
//       <div className="max-w-6xl mx-auto px-6 mt-6">
//         <div className="flex gap-3">
//           <input
//             type="text"
//             placeholder="Search Vegetables, Fruits, Snacks..."
//             className="flex-1 px-4 py-2 rounded-lg border"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//           />
//           <button
//             onClick={handleSearch}
//             className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg"
//           >
//             Search
//           </button>
//         </div>
//       </div>

//       {/* 🔥🔥 Banner Slider Section - ADDED HERE 🔥🔥 */}
//       <div className="max-w-6xl mx-auto px-6 mt-8">
//         <BannerSlider />
//       </div>

//       {/* ⭐ Featured Categories */}
//       <section className="max-w-6xl mx-auto px-6 mt-10">
//         <h2 className="text-2xl font-bold mb-4 text-green-700">Top Categories</h2>

//         <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
//           {[
//             { name: "Vegetables", img: "https://i.imgur.com/5cX1F4g.png" },
//             { name: "Fruits", img: "https://i.imgur.com/rF1g2qW.png" },
//             { name: "Snacks", img: "https://i.imgur.com/BG8mkcg.png" },
//             { name: "Groceries", img: "https://i.imgur.com/v9Hn9Uy.png" },
//           ].map((c, i) => (
//             <div
//               key={i}
//               className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition text-center"
//             >
//               <img src={c.img} alt={c.name} className="w-20 mx-auto" />
//               <p className="mt-3 font-semibold">{c.name}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* 🔍 SEARCH RESULTS */}
//       {searchResults.length > 0 && (
//         <section className="max-w-6xl mx-auto px-6 mt-10">
//           <h2 className="text-2xl font-bold mb-4">Search Results</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//             {searchResults.map((item) => (
//               <div
//                 key={item._id}
//                 className="bg-white p-4 shadow rounded-xl hover:shadow-xl"
//               >
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-full h-40 object-cover rounded-lg"
//                 />
//                 <h3 className="mt-3 font-bold text-lg">{item.name}</h3>
//                 <p className="text-gray-600">{item.price} SHARP</p>

//                 <Link
//                   to="/products"
//                   className="block mt-3 bg-green-600 text-white text-center py-2 rounded-lg"
//                 >
//                   View Product
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </section>
//       )}

//       {/* ⭐ Featured Products */}
//       <section className="max-w-6xl mx-auto px-6 mt-10 mb-10">
//         <h2 className="text-2xl font-bold mb-4 text-green-700">Featured Products</h2>

//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//           {products.slice(0, 6).map((item) => (
//             <div
//               key={item._id}
//               className="bg-white shadow-lg rounded-xl p-4 hover:shadow-xl transition"
//             >
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="w-full h-44 object-cover rounded-lg"
//               />

//               <h3 className="font-semibold text-lg mt-3">{item.name}</h3>
//               <p className="text-gray-600">{item.price} SHARP</p>

//               <Link
//                 to="/products"
//                 className="mt-3 block bg-green-600 text-white text-center py-2 rounded-lg hover:bg-green-700"
//               >
//                 Buy Now
//               </Link>
//             </div>
//           ))}
//         </div>
//       </section>

//     </div>
//   );
// }








import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import BannerSlider from "../components/BannerSlider";
import API from "../api";
import { products } from "../data/products";

export default function Home() {
  // const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  // Fetch products from backend
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const res = await API.get("/products");
        setProducts(res.data);
      } catch (err) {
        console.error("Error loading products:", err);
      }
    };
    loadProducts();
  }, []);

  // Search handler
  const handleSearch = () => {
    if (!search.trim()) return setSearchResults([]);

    const matched = products.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(matched);
  };

  return (
    <div className="">

      {/* ───────────────────── NAVBAR ───────────────────── */}
      {/* <header className="bg-green-600 text-white p-5 shadow-md">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-extrabold">SHARP Grocery Marketplace</h1>
          <p className="text-sm mt-1">Fast • Trusted • Blockchain Secured</p>
        </div>
      </header> */}

      {/* ───────────────────── SEARCH BAR ───────────────────── */}
      {/* <div className="max-w-6xl mx-auto px-6 mt-6">
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Search Vegetables, Fruits, Snacks..."
            className="flex-1 px-4 py-2 rounded-lg border"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg"
          >
            Search
          </button>
        </div>
      </div> */}

      {/* ───────────────────── BANNER SLIDER ───────────────────── */}
      <div className="max-w-6xl mx-auto px-6 mt-8">
        <BannerSlider />
      </div>

      {/* ───────────────────── TOP CATEGORIES ───────────────────── */}
      <section className="max-w-6xl mx-auto px-6 mt-10">
        <h2 className="text-2xl font-bold mb-4 text-green-700">Top Categories</h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { name: "Vegetables", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSH-j-YJf88B94jYV3qpKtFEvuccxE62YygA&s" },
            { name: "Fruits", img: "https://hips.hearstapps.com/hmg-prod/images/assortment-of-colorful-ripe-tropical-fruits-top-royalty-free-image-1747173002.pjpeg?crop=1.00xw:0.751xh;0,0.0839xh&resize=1200:*" },
            { name: "Snacks", img: "https://etimg.etb2bimg.com/photo/114425708.cms" },
            { name: "Groceries", img: "https://img500.exportersindia.com/product_images/bc-500/dir_178/5327018/grocery-products-1510312058-3444389.jpeg" },
          ].map((c, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition text-center cursor-pointer"
            >
              <img src={c.img} alt={c.name} className="w-20 mx-auto" onClick={()=> navigate("/products")} />
              <p className="mt-3 font-semibold">{c.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ───────────────────── SEARCH RESULTS ───────────────────── */}
      {searchResults.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 mt-10">
          <h2 className="text-2xl font-bold mb-4">Search Results</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {searchResults.map((item) => (
              <div
                key={item._id}
                className="bg-white p-4 shadow rounded-xl hover:shadow-xl"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 object-cover rounded-lg"
                />
                <h3 className="mt-3 font-bold text-lg">{item.name}</h3>
                <p className="text-gray-600 font-bold">{item.price} SHARP</p>

                <Link
                  to="/products"
                  className="block mt-3 bg-green-600 text-white text-center py-2 rounded-lg"
                >
                  View Product
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ───────────────────── FEATURED PRODUCTS ───────────────────── */}
      <section className="max-w-6xl mx-auto px-6 mt-10 mb-10">
        <h2 className="text-2xl font-bold mb-4 text-green-700">Featured Products</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {products.slice(0, 6).map((item) => (
            <div
              key={item._id}
              className="bg-white shadow-lg rounded-xl p-4 hover:shadow-xl transition cursor-pointer" onClick={() => navigate("/products")}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-44 object-cover rounded-lg"
              />

              <h3 className="font-semibold text-lg mt-3">{item.name}</h3>
              <p className="text-gray-600 font-bold">{item.price} SHARP</p>

              {/* <Link
                to="/products"
                className="mt-3 block bg-green-600 text-white text-center py-2 rounded-lg hover:bg-green-700"
              >
                Buy Now
              </Link> */}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
