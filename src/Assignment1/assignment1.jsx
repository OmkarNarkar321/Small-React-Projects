import React, { Component, useState } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div className="group relative bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 w-full max-w-sm hover:scale-105">
        <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
          Class
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Class Component
          </h2>
          <p className="text-sm text-gray-600">Traditional React Pattern</p>
        </div>
        
        <div className="bg-white rounded-xl p-6 mb-6 shadow-inner">
          <p className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">
            {this.state.count}
          </p>
          <p className="text-xs text-gray-500 uppercase tracking-wider">Current Count</p>
        </div>
        
        <div className="flex gap-3 mb-3">
          <button
            onClick={this.decrement}
            disabled={this.state.count === 0}
            className="flex-1 bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-red-600 hover:to-pink-600 transition-all duration-200 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed shadow-md hover:shadow-lg active:scale-95"
          >
            −
          </button>
          <button
            onClick={this.increment}
            className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-indigo-600 transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
          >
            +
          </button>
        </div>
        
        <button
          onClick={this.reset}
          className="w-full bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-300 transition-all duration-200 active:scale-95"
        >
          Reset
        </button>
      </div>
    );
  }
}

function FunctionCounter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };
  const reset = () => setCount(0);

  return (
    <div className="group relative bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 w-full max-w-sm hover:scale-105">
      <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
        Function
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Function Component
        </h2>
        <p className="text-sm text-gray-600">Modern React Hooks</p>
      </div>
      
      <div className="bg-white rounded-xl p-6 mb-6 shadow-inner">
        <p className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2">
          {count}
        </p>
        <p className="text-xs text-gray-500 uppercase tracking-wider">Current Count</p>
      </div>
      
      <div className="flex gap-3 mb-3">
        <button
          onClick={decrement}
          disabled={count === 0}
          className="flex-1 bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-red-600 hover:to-pink-600 transition-all duration-200 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed shadow-md hover:shadow-lg active:scale-95"
        >
          −
        </button>
        <button
          onClick={increment}
          className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
        >
          +
        </button>
      </div>
      
      <button
        onClick={reset}
        className="w-full bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-300 transition-all duration-200 active:scale-95"
      >
        Reset
      </button>
    </div>
  );
}

export default function Assignment1() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 flex flex-col items-center justify-center p-6">
      <div className="text-center mb-12 animate-fade-in">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mb-3">
          Counter Application
        </h1>
        <p className="text-sm text-gray-500 max-w-2xl mx-auto">
          Comparing Class Components vs Function Components with React Hooks
        </p>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8 items-center justify-center max-w-6xl w-full px-4">
        <ClassCounter />
        <FunctionCounter />
      </div>
      
      <div className="mt-12 text-center">
        <div className="inline-block bg-white rounded-xl shadow-md p-6 max-w-2xl">
          <h3 className="text-lg font-bold text-gray-800 mb-3">Key Differences</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left text-sm">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <span className="font-semibold text-blue-700">Class Component:</span>
              <p className="text-gray-700 mt-1">Uses <code className="bg-blue-100 px-1 rounded">this.state</code> and lifecycle methods</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <span className="font-semibold text-purple-700">Function Component:</span>
              <p className="text-gray-700 mt-1">Uses <code className="bg-purple-100 px-1 rounded">useState</code> hook for state management</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}