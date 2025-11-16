import React, { useState } from "react";

export default function Assignment3() {
  // Shoe data with placeholder images
  const shoes = [
    {
      id: 1,
      name: "Nike Classic Sneaker",
      price: 75,
      brand: "Nike",
      color: "bg-blue-100"
    },
    {
      id: 2,
      name: "Nike Running Shoes",
      price: 80,
      brand: "Nike",
      color: "bg-red-100"
    },
    {
      id: 3,
      name: "Adidas Ultraboost",
      price: 150,
      brand: "Adidas",
      color: "bg-green-100"
    },
    {
      id: 4,
      name: "Puma RS-X",
      price: 100,
      brand: "Puma",
      color: "bg-yellow-100"
    },
    {
      id: 5,
      name: "Reebok Classic",
      price: 90,
      brand: "Reebok",
      color: "bg-purple-100"
    },
    {
      id: 6,
      name: "New Balance 574",
      price: 110,
      brand: "New Balance",
      color: "bg-orange-100"
    },
    {
      id: 7,
      name: "Converse Chuck Taylor",
      price: 65,
      brand: "Converse",
      color: "bg-pink-100"
    },
    {
      id: 8,
      name: "Vans Old Skool",
      price: 70,
      brand: "Vans",
      color: "bg-indigo-100"
    },
  ];

  const [cart, setCart] = useState([]);

  // Add to Cart
  const addToCart = (shoe) => {
    const existing = cart.find((item) => item.id === shoe.id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === shoe.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...shoe, quantity: 1 }]);
    }
  };

  // Remove from Cart
  const removeFromCart = (shoeId) => {
    const existing = cart.find((item) => item.id === shoeId);
    if (existing.quantity === 1) {
      setCart(cart.filter((item) => item.id !== shoeId));
    } else {
      setCart(
        cart.map((item) =>
          item.id === shoeId ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    }
  };

  // Delete item completely
  const deleteItem = (shoeId) => {
    setCart(cart.filter((item) => item.id !== shoeId));
  };

  // Cart Total
  const getTotal = () =>
    cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const getTotalItems = () =>
    cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 p-6">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-600 rounded-3xl shadow-xl mb-4">
          <span className="text-5xl">👟</span>
        </div>
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 mb-2">
          Assignment 3
        </h1>
        <p className="text-2xl text-gray-700 font-semibold">Online Shoe Store</p>
        <p className="text-gray-600 mt-2">Find your perfect pair today!</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Shoe List */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Available Shoes</h2>
            <p className="text-gray-600 mb-6">Browse our collection of premium footwear</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {shoes.map((shoe) => (
                <div
                  key={shoe.id}
                  className="group bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 p-5 flex flex-col hover:scale-105"
                >
                  <div className={`${shoe.color} rounded-xl p-6 mb-4 flex items-center justify-center h-40 relative overflow-hidden`}>
                    <span className="text-7xl transform group-hover:scale-110 transition-transform duration-300">👟</span>
                    <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      NEW
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <span className="text-xs font-semibold text-orange-600 uppercase tracking-wider">{shoe.brand}</span>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{shoe.name}</h3>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-3xl font-extrabold text-orange-600">${shoe.price}</span>
                      <span className="text-sm text-gray-500 line-through">${shoe.price + 20}</span>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => addToCart(shoe)}
                    className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white px-4 py-3 rounded-xl font-bold hover:from-orange-600 hover:to-amber-600 transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95"
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Shopping Cart - Sticky */}
        <div className="lg:col-span-1">
          <div className="bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl shadow-2xl p-6 lg:sticky lg:top-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-white">Cart</h2>
              {cart.length > 0 && (
                <div className="bg-white text-orange-600 font-bold px-4 py-2 rounded-full text-sm">
                  {getTotalItems()} items
                </div>
              )}
            </div>

            <div className="bg-white rounded-xl p-4 mb-4 max-h-96 overflow-y-auto">
              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <span className="text-6xl mb-4 block">🛒</span>
                  <p className="text-gray-500 font-medium">Your cart is empty</p>
                  <p className="text-gray-400 text-sm mt-1">Add some shoes to get started!</p>
                </div>
              ) : (
                <ul className="space-y-3">
                  {cart.map((item) => (
                    <li
                      key={item.id}
                      className="bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-xl p-3"
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <div className={`${item.color} rounded-lg p-3 flex-shrink-0`}>
                          <span className="text-3xl">👟</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-gray-800 text-sm truncate">{item.name}</h3>
                          <p className="text-orange-600 font-bold text-lg">${item.price}</p>
                        </div>
                        <button
                          onClick={() => deleteItem(item.id)}
                          className="flex-shrink-0 text-red-500 hover:text-red-700 font-bold text-xl"
                          title="Remove item"
                        >
                          ×
                        </button>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="w-8 h-8 bg-white text-orange-600 rounded-lg font-bold hover:bg-orange-100 transition-colors shadow-sm"
                          >
                            −
                          </button>
                          <span className="w-8 text-center font-bold text-gray-800">{item.quantity}</span>
                          <button
                            onClick={() => addToCart(item)}
                            className="w-8 h-8 bg-white text-orange-600 rounded-lg font-bold hover:bg-orange-100 transition-colors shadow-sm"
                          >
                            +
                          </button>
                        </div>
                        <span className="font-bold text-gray-700">
                          ${item.price * item.quantity}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {cart.length > 0 && (
              <>
                <div className="bg-white rounded-xl p-4 mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold text-gray-800">${getTotal()}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-semibold text-green-600">FREE</span>
                  </div>
                  <div className="border-t border-gray-200 pt-2 mt-2">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-gray-800">Total</span>
                      <span className="text-2xl font-extrabold text-orange-600">${getTotal()}</span>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-white text-orange-600 px-6 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95">
                  Checkout Now
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Footer Stats */}
      {cart.length > 0 && (
        <div className="max-w-7xl mx-auto mt-8 bg-white rounded-2xl shadow-xl p-6">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-3xl font-bold text-orange-600">{getTotalItems()}</p>
              <p className="text-sm text-gray-600 font-medium">Items in Cart</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-amber-600">${getTotal()}</p>
              <p className="text-sm text-gray-600 font-medium">Total Value</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-green-600">FREE</p>
              <p className="text-sm text-gray-600 font-medium">Delivery</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}