import React, { useState } from "react";

export default function Assignment2() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    if (task.trim() === "") {
      return;
    }

    setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
    setTask("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const stats = {
    total: todos.length,
    completed: todos.filter((t) => t.completed).length,
    pending: todos.filter((t) => !t.completed).length,
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-lg mb-4">
          <span className="text-4xl">✓</span>
        </div>
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2">
          To-Do Application
        </h1>
      </div>

      {/* Main Card */}
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-8">
        {/* Stats Bar */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 text-center border border-blue-200">
            <p className="text-3xl font-bold text-blue-600">{stats.total}</p>
            <p className="text-xs text-gray-600 font-medium uppercase tracking-wider">Total Tasks</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 text-center border border-green-200">
            <p className="text-3xl font-bold text-green-600">{stats.completed}</p>
            <p className="text-xs text-gray-600 font-medium uppercase tracking-wider">Completed</p>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 text-center border border-orange-200">
            <p className="text-3xl font-bold text-orange-600">{stats.pending}</p>
            <p className="text-xs text-gray-600 font-medium uppercase tracking-wider">Pending</p>
          </div>
        </div>

        {/* Input Section */}
        <div className="mb-6">
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="What needs to be done?"
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all text-gray-800 placeholder-gray-400"
              />
            </div>
            <button
              onClick={handleAdd}
              disabled={task.trim() === ""}
              className="px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl shadow-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed active:scale-95 flex items-center gap-2"
            >
              <span className="text-xl">+</span>
              Add Task
            </button>
          </div>
          
          {stats.completed > 0 && (
            <button
              onClick={clearCompleted}
              className="mt-3 text-sm text-red-500 hover:text-red-700 font-medium transition-colors"
            >
              Clear {stats.completed} completed task{stats.completed !== 1 ? "s" : ""}
            </button>
          )}
        </div>

        {/* Todo List */}
        <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
          {todos.length === 0 ? (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-4">
                <span className="text-4xl">📝</span>
              </div>
              <p className="text-gray-400 text-lg font-medium">No tasks yet</p>
              <p className="text-gray-400 text-sm">Add a task to get started!</p>
            </div>
          ) : (
            todos.map((todo) => (
              <div
                key={todo.id}
                className="group flex items-center justify-between bg-gradient-to-r from-gray-50 to-white p-4 rounded-xl border-2 border-gray-100 hover:border-purple-200 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center gap-4 flex-1">
                  <button
                    onClick={() => toggleComplete(todo.id)}
                    className="flex-shrink-0 transition-transform hover:scale-110 active:scale-95 w-6 h-6 flex items-center justify-center"
                  >
                    {todo.completed ? (
                      <span className="text-green-500 text-2xl">✓</span>
                    ) : (
                      <span className="w-5 h-5 border-2 border-gray-300 rounded-full group-hover:border-purple-400 transition-colors"></span>
                    )}
                  </button>
                  <span
                    className={`text-lg transition-all duration-200 ${
                      todo.completed
                        ? "line-through text-gray-400"
                        : "text-gray-800 font-medium"
                    }`}
                  >
                    {todo.text}
                  </span>
                </div>

                <button
                  onClick={() => handleRemove(todo.id)}
                  className="flex-shrink-0 px-3 py-2 bg-red-50 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-all duration-200 active:scale-95 opacity-0 group-hover:opacity-100 font-semibold text-sm"
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>

        {/* Progress Bar */}
        {todos.length > 0 && (
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">
                Progress
              </span>
              <span className="text-sm font-bold text-purple-600">
                {stats.total > 0
                  ? Math.round((stats.completed / stats.total) * 100)
                  : 0}
                %
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-500 ease-out"
                style={{
                  width: `${
                    stats.total > 0
                      ? (stats.completed / stats.total) * 100
                      : 0
                  }%`,
                }}
              ></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}