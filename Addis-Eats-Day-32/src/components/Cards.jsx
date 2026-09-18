import React, {
    useEffect,
    useRef,
    useState
} from "react";

import CardLists from "./CardLists";

import CategoryBar from "../order/CategoryBar";

import useCartStore from "../store/cartStore";


const Cards = () => {

    // Menu data
    const [dishes, setDishes] =
        useState([]);


    // Selected category
    const [selectedCategory, setSelectedCategory] =
        useState("All");


    // Loading state
    const [loading, setLoading] =
        useState(true);


    // Error state
    const [error, setError] =
        useState("");


    // Search state
    const [searchTerm, setSearchTerm] =
        useState("");


    /*
     * Narrow selector.
     */
    const items = useCartStore(
        (state) => state.items
    );


    /*
     * Calculate cart total.
     */
    const total = items.reduce(
        (sum, item) =>
            sum +
            item.price *
            item.quantity,
        0
    );


    // Search input reference
    const searchInputRef =
        useRef(null);


    /*
     * Focus search input
     * when page loads.
     */
    useEffect(() => {

        searchInputRef.current?.focus();

    }, []);


    /*
     * Load menu.
     */
    useEffect(() => {

        const controller =
            new AbortController();


        const fetchMenu = async () => {

            try {

                setLoading(true);

                setError("");


                const response =
                    await fetch(
                        "/menu.json",
                        {
                            signal:
                                controller.signal
                        }
                    );


                if (!response.ok) {

                    throw new Error(
                        `Failed to load menu. Server returned ${response.status}.`
                    );

                }


                const data =
                    await response.json();


                if (!Array.isArray(data)) {

                    throw new Error(
                        "Invalid menu data received from the server."
                    );

                }


                /*
                 * Filter by category.
                 */

                const filteredData =
                    selectedCategory === "All"
                        ? data
                        : data.filter(
                            (dish) =>
                                dish.category ===
                                selectedCategory
                        );


                setDishes(
                    filteredData
                );

            } catch (err) {

                if (
                    err.name ===
                    "AbortError"
                ) {
                    return;
                }


                console.error(
                    "Menu loading error:",
                    err
                );


                setError(
                    err.message ||
                    "Something went wrong while loading the menu."
                );

            } finally {

                if (
                    !controller.signal.aborted
                ) {

                    setLoading(false);

                }

            }

        };


        fetchMenu();


        return () => {

            controller.abort();

        };

    }, [selectedCategory]);


    /*
     * Search filtering.
     */

    const filteredDishes =
        dishes.filter(
            (dish) =>
                dish.name
                    .toLowerCase()
                    .includes(
                        searchTerm.toLowerCase()
                    )
        );


    /*
     * Categories.
     */

    const categories = [
        "All",
        "DoroWot",
        "Kitfo",
        "Tibs"
    ];


    /*
     * Loading state.
     */

    if (loading) {

        return (
            <main>

                <h2>
                    🍽️ Addis Eats Menu
                </h2>

                <p>
                    Loading menu...
                </p>

            </main>
        );

    }


    /*
     * Error state.
     */

    if (error) {

        return (
            <main>

                <h2>
                    🍽️ Addis Eats Menu
                </h2>


                <div className="error-message">

                    <p>
                        ❌ {error}
                    </p>


                    <button
                        onClick={() =>
                            window.location.reload()
                        }
                    >
                        Try Again
                    </button>

                </div>

            </main>
        );

    }


    return (
        <main>

            <h2>
                🍽️ Addis Eats Menu
            </h2>


            {/* Categories */}

            <CategoryBar
                categories={categories}
                selectedCategory={
                    selectedCategory
                }
                setSelectedCategory={
                    setSelectedCategory
                }
            />


            {/* Search */}

            <div className="search-box">

                <label htmlFor="search">
                    Search dishes
                </label>


                <input
                    id="search"
                    ref={searchInputRef}
                    type="text"
                    placeholder="Search for food..."
                    value={searchTerm}
                    onChange={(e) =>
                        setSearchTerm(
                            e.target.value
                        )
                    }
                />

            </div>


            {/* Running total */}

            <div className="order-total">

                <h3>
                    Order Total:{" "}
                    {total.toFixed(2)}
                    {" "}ETB
                </h3>

            </div>


            {/* Dishes */}

            {filteredDishes.length === 0 ? (

                <p>
                    No dishes found.
                </p>

            ) : (

                <div className="cards-container">

                    {filteredDishes.map(
                        (dish) => (

                            <CardLists
                                key={dish.id}
                                id={dish.id}
                                name={dish.name}
                                desc={dish.desc}
                                price={dish.price}
                                spicy={dish.spicy}
                                image={dish.image}
                            />

                        )
                    )}

                </div>

            )}

        </main>
    );
};


export default Cards;