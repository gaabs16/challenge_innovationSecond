"use client"

import { Search } from "lucide-react"

export default function SearchBar({ value, onChange, onSearch, placeholder, isLoading = false }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch()
    }
  }

  return (
    <div className="w-full flex">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="flex-1 py-4 px-5 rounded-lg text-black bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        disabled={isLoading}
      />
      <button
        onClick={onSearch}
        disabled={isLoading || !value.trim()}
        className="bg-[#0070F3] hover:bg-blue-600 text-white p-4 rounded-r-lg transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center w-16"
      >
        <Search className="w-6 h-6" />
        <span className="sr-only">Buscar</span>
      </button>
    </div>
  )
}