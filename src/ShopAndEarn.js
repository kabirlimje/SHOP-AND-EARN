import React, { useState } from "react";
import {
  ShoppingCart,
  Search,
  User,
  Heart,
  Menu,
  Star,
  TrendingUp,
} from "lucide-react";

const ShopAndEarn = () => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Men",
    "Women",
    "Kids",
    "Electronics",
    "Home & Living",
  ];

  const products = [
    {
      id: 1,
      name: "Casual Cotton Shirt",
      category: "Men",
      price: 799,
      originalPrice: 1599,
      discount: 50,
      rating: 4.3,
      image:
        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="500"%3E%3Crect fill="%234A90E2" width="400" height="500"/%3E%3Ctext x="50%25" y="45%25" font-size="24" fill="white" text-anchor="middle" font-family="Arial"%3EMen%27s%3C/text%3E%3Ctext x="50%25" y="55%25" font-size="20" fill="white" text-anchor="middle" font-family="Arial"%3ECotton Shirt%3C/text%3E%3C/svg%3E',
      cashback: 80,
    },
    {
      id: 2,
      name: "Denim Jacket",
      category: "Women",
      price: 1499,
      originalPrice: 2999,
      discount: 50,
      rating: 4.5,
      image:
        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="500"%3E%3Crect fill="%23E91E63" width="400" height="500"/%3E%3Ctext x="50%25" y="45%25" font-size="24" fill="white" text-anchor="middle" font-family="Arial"%3EWomen%27s%3C/text%3E%3Ctext x="50%25" y="55%25" font-size="20" fill="white" text-anchor="middle" font-family="Arial"%3EDenim Jacket%3C/text%3E%3C/svg%3E',
      cashback: 150,
    },
    {
      id: 3,
      name: "Running Shoes",
      category: "Men",
      price: 2199,
      originalPrice: 3999,
      discount: 45,
      rating: 4.7,
      image:
        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="500"%3E%3Crect fill="%23FF5722" width="400" height="500"/%3E%3Ctext x="50%25" y="45%25" font-size="24" fill="white" text-anchor="middle" font-family="Arial"%3EMen%27s%3C/text%3E%3Ctext x="50%25" y="55%25" font-size="20" fill="white" text-anchor="middle" font-family="Arial"%3ERunning Shoes%3C/text%3E%3C/svg%3E',
      cashback: 220,
    },
    {
      id: 4,
      name: "Floral Summer Dress",
      category: "Women",
      price: 1299,
      originalPrice: 2499,
      discount: 48,
      rating: 4.4,
      image:
        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="500"%3E%3Crect fill="%239C27B0" width="400" height="500"/%3E%3Ctext x="50%25" y="45%25" font-size="24" fill="white" text-anchor="middle" font-family="Arial"%3EWomen%27s%3C/text%3E%3Ctext x="50%25" y="55%25" font-size="20" fill="white" text-anchor="middle" font-family="Arial"%3ESummer Dress%3C/text%3E%3C/svg%3E',
      cashback: 130,
    },
    {
      id: 5,
      name: "Kids T-Shirt Pack",
      category: "Kids",
      price: 699,
      originalPrice: 1299,
      discount: 46,
      rating: 4.2,
      image:
        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="500"%3E%3Crect fill="%23FFC107" width="400" height="500"/%3E%3Ctext x="50%25" y="45%25" font-size="24" fill="white" text-anchor="middle" font-family="Arial"%3EKids%3C/text%3E%3Ctext x="50%25" y="55%25" font-size="20" fill="white" text-anchor="middle" font-family="Arial"%3ET-Shirt Pack%3C/text%3E%3C/svg%3E',
      cashback: 70,
    },
    {
      id: 6,
      name: "Wireless Earbuds",
      category: "Electronics",
      price: 1999,
      originalPrice: 4999,
      discount: 60,
      rating: 4.6,
      image:
        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="500"%3E%3Crect fill="%23607D8B" width="400" height="500"/%3E%3Ctext x="50%25" y="45%25" font-size="24" fill="white" text-anchor="middle" font-family="Arial"%3EElectronics%3C/text%3E%3Ctext x="50%25" y="55%25" font-size="20" fill="white" text-anchor="middle" font-family="Arial"%3EWireless Earbuds%3C/text%3E%3C/svg%3E',
      cashback: 200,
    },
    {
      id: 7,
      name: "Bedsheet Set",
      category: "Home & Living",
      price: 899,
      originalPrice: 1799,
      discount: 50,
      rating: 4.3,
      image:
        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="500"%3E%3Crect fill="%2300BCD4" width="400" height="500"/%3E%3Ctext x="50%25" y="45%25" font-size="24" fill="white" text-anchor="middle" font-family="Arial"%3EHome %26 Living%3C/text%3E%3Ctext x="50%25" y="55%25" font-size="20" fill="white" text-anchor="middle" font-family="Arial"%3EBedsheet Set%3C/text%3E%3C/svg%3E',
      cashback: 90,
    },
    {
      id: 8,
      name: "Leather Wallet",
      category: "Men",
      price: 599,
      originalPrice: 1199,
      discount: 50,
      rating: 4.5,
      image:
        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="500"%3E%3Crect fill="%23795548" width="400" height="500"/%3E%3Ctext x="50%25" y="45%25" font-size="24" fill="white" text-anchor="middle" font-family="Arial"%3EMen%27s%3C/text%3E%3Ctext x="50%25" y="55%25" font-size="20" fill="white" text-anchor="middle" font-family="Arial"%3ELeather Wallet%3C/text%3E%3C/svg%3E',
      cashback: 60,
    },
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const toggleWishlist = (productId) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter((id) => id !== productId));
    } else {
      setWishlist([...wishlist, productId]);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg p-2 shadow-lg">
                  <ShoppingCart className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-pink-600 leading-none">
                    SHOP AND EARN
                  </h1>
                  <p className="text-xs text-gray-500 font-semibold">
                    Shop Smart, Earn More
                  </p>
                </div>
              </div>
              <nav className="hidden md:flex gap-6">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-sm font-semibold transition-colors ${
                      selectedCategory === cat
                        ? "text-pink-600 border-b-4 border-pink-600 pb-1"
                        : "text-gray-700 hover:text-pink-600"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </nav>
            </div>

            <div className="flex items-center gap-6">
              <div className="hidden md:flex items-center bg-gray-100 rounded-md px-4 py-2 w-80">
                <Search className="w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search for products, brands and more"
                  className="bg-transparent ml-2 outline-none w-full text-sm"
                />
              </div>

              <div className="flex items-center gap-6">
                <button className="flex items-center gap-2 hover:text-pink-600 transition-colors">
                  <User className="w-6 h-6" />
                  <span className="hidden md:block text-sm font-semibold">
                    Profile
                  </span>
                </button>

                <button className="flex items-center gap-2 hover:text-pink-600 transition-colors relative">
                  <Heart className="w-6 h-6" />
                  <span className="hidden md:block text-sm font-semibold">
                    Wishlist
                  </span>
                  {wishlist.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {wishlist.length}
                    </span>
                  )}
                </button>

                <button className="flex items-center gap-2 hover:text-pink-600 transition-colors relative">
                  <ShoppingCart className="w-6 h-6" />
                  <span className="hidden md:block text-sm font-semibold">
                    Bag
                  </span>
                  {cart.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {cart.length}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Banner */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Mega Sale is Live!</h2>
          <p className="text-xl mb-2">
            Up to 60% OFF + Earn Cashback on Every Purchase
          </p>
          <div className="flex items-center justify-center gap-2 text-yellow-300">
            <TrendingUp className="w-5 h-5" />
            <span className="font-semibold">Earn up to ₹500 Cashback</span>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-gray-800">
            {selectedCategory === "All" ? "All Products" : selectedCategory}
          </h3>
          <select className="border border-gray-300 rounded-md px-4 py-2 text-sm">
            <option>Recommended</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest First</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md hover:scale-110 transition-transform"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      wishlist.includes(product.id)
                        ? "fill-pink-600 text-pink-600"
                        : "text-gray-600"
                    }`}
                  />
                </button>
                <div className="absolute top-3 left-3 bg-pink-600 text-white px-2 py-1 rounded text-xs font-bold">
                  {product.discount}% OFF
                </div>
              </div>

              <div className="p-4">
                <h4 className="font-semibold text-gray-800 mb-1">
                  {product.name}
                </h4>
                <p className="text-xs text-gray-500 mb-2">{product.category}</p>

                <div className="flex items-center gap-1 mb-2">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-semibold">
                    {product.rating}
                  </span>
                  <span className="text-xs text-gray-500">(2.5k)</span>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg font-bold text-gray-800">
                    ₹{product.price}
                  </span>
                  <span className="text-sm text-gray-400 line-through">
                    ₹{product.originalPrice}
                  </span>
                </div>

                <div className="bg-green-50 border border-green-200 rounded px-2 py-1 mb-3">
                  <p className="text-xs text-green-700 font-semibold">
                    💰 Earn ₹{product.cashback} Cashback
                  </p>
                </div>

                <button
                  onClick={() => addToCart(product)}
                  className="w-full bg-pink-600 text-white py-2 rounded-md font-semibold hover:bg-pink-700 transition-colors"
                >
                  ADD TO BAG
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-12">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-pink-500 font-bold text-xl mb-4">
                SHOP AND EARN
              </h3>
              <p className="text-sm text-gray-400">
                Your one-stop destination for fashion, electronics, and more.
                Shop now and earn cashback on every purchase!
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Customer Policies</h4>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>Contact Us</li>
                <li>FAQ</li>
                <li>Returns & Exchange</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Useful Links</h4>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>Track Order</li>
                <li>Cashback Info</li>
                <li>Gift Cards</li>
                <li>Store Locator</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Download App</h4>
              <p className="text-sm text-gray-400 mb-2">
                Get exclusive deals on our app
              </p>
              <div className="flex gap-2">
                <div className="bg-gray-800 px-3 py-2 rounded text-xs">
                  Play Store
                </div>
                <div className="bg-gray-800 px-3 py-2 rounded text-xs">
                  App Store
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-4 text-center text-sm text-gray-500">
            © 2024 SHOP AND EARN. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ShopAndEarn;
