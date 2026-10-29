
"use client";

import { useMemo, useState } from "react";
import MenuCard from "../components/MenuCard";

export default function DishList({ dishes }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("default");

  const categories = useMemo(() => {
    return [
      "All",
      ...new Set(
        dishes.map((dish) => dish.category || "Other")
      ),
    ];
  }, [dishes]);

  const filteredDishes = useMemo(() => {
    let result = dishes.filter((dish) => {
      const matchesSearch =
        dish.name.toLowerCase().includes(search.toLowerCase()) ||
        dish.description.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "All" ||
        (dish.category || "Other") === category;

      return matchesSearch && matchesCategory;
    });

    if (sort === "low-high") {
      result = [...result].sort((a, b) => a.price - b.price);
    }

    if (sort === "high-low") {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    return result;
  }, [dishes, search, category, sort]);

  return (
    <section className="menu-section">
      <div className="menu-toolbar">
        <div className="search-wrapper">
          <span className="search-icon">⌕</span>

          <input
            type="search"
            placeholder="Search for Kitfo, Tibs..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            aria-label="Search dishes"
          />

          {search && (
            <button
              type="button"
              className="clear-search"
              onClick={() => setSearch("")}
              aria-label="Clear search"
            >
              ×
            </button>
          )}
        </div>

        <div className="filter-controls">
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            aria-label="Filter by category"
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item === "All" ? "All Categories" : item}
              </option>
            ))}
          </select>

          <select
            value={sort}
            onChange={(event) => setSort(event.target.value)}
            aria-label="Sort dishes by price"
          >
            <option value="default">Sort by: Default</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="results-info">
        <p>
          Showing <strong>{filteredDishes.length}</strong>{" "}
          {filteredDishes.length === 1 ? "dish" : "dishes"}
        </p>
      </div>

      {filteredDishes.length > 0 ? (
        <div className="menu-grid">
          {filteredDishes.map((dish) => (
            <MenuCard key={dish.id} dish={dish} />
          ))}
        </div>
      ) : (
        <div className="empty-search">
          <span className="empty-search-icon">⌕</span>
          <h3>No dishes found</h3>
          <p>Try another name or change your filters.</p>

          <button
            type="button"
            className="secondary-button"
            onClick={() => {
              setSearch("");
              setCategory("All");
              setSort("default");
            }}
          >
            Clear Filters
          </button>
        </div>
      )}
    </section>
  );
}