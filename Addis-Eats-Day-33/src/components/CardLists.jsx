import React, {
    useEffect,
    useRef,
    useState
} from "react";

import { createPortal } from "react-dom";

import PropTypes from "prop-types";

import useCartStore from "../store/cartStore";


const Card = ({ children }) => {
    return (
        <div className="card">
            {children}
        </div>
    );
};


Card.propTypes = {
    children: PropTypes.node.isRequired
};


const DishModal = ({
    name,
    desc,
    price,
    spicy,
    image,
    onClose
}) => {
    const modalRef = useRef(null);

    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener(
            "keydown",
            handleEscape
        );

        modalRef.current?.focus();

        return () => {
            document.removeEventListener(
                "keydown",
                handleEscape
            );
        };
    }, [onClose]);

    return createPortal(
        <div
            className="modal-overlay"
            onClick={onClose}
        >
            <div
                ref={modalRef}
                className="dish-modal"
                role="dialog"
                aria-modal="true"
                aria-labelledby="dish-modal-title"
                tabIndex="-1"
                onClick={(event) =>
                    event.stopPropagation()
                }
            >
                <button
                    className="modal-close"
                    onClick={onClose}
                    aria-label="Close dish details"
                >
                    ×
                </button>

                {image && (
                    <img
                        src={image}
                        alt={name}
                    />
                )}

                <h2 id="dish-modal-title">
                    {name}
                </h2>

                <p>{desc}</p>

                <p>
                    <strong>
                        {price.toFixed(2)} ETB
                    </strong>
                </p>

                {spicy && (
                    <p>
                        🌶️ This dish is spicy
                    </p>
                )}
            </div>
        </div>,
        document.body
    );
};


DishModal.propTypes = {
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    spicy: PropTypes.bool,
    image: PropTypes.string,
    onClose: PropTypes.func.isRequired
};


const CardLists = ({
    id,
    name,
    desc,
    price,
    spicy,
    currency = "ETB",
    image
}) => {

    const addItem = useCartStore(
        (state) => state.addItem
    );

    const quantity = useCartStore(
        (state) =>
            state.items.find(
                (item) => item.id === id
            )?.quantity || 0
    );

    const [isModalOpen, setIsModalOpen] =
        useState(false);

    const [forceError, setForceError] =
        useState(false);

    const detailsButtonRef = useRef(null);

    const handleAdd = () => {
        addItem({
            id,
            name,
            desc,
            price,
            spicy,
            image
        });
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);

        requestAnimationFrame(() => {
            detailsButtonRef.current?.focus();
        });
    };

    /*
     * Force an error in this dish.
     *
     * This is only for testing the ErrorBoundary.
     */
    if (forceError) {
        throw new Error(
            `Test error triggered by ${name}`
        );
    }

    return (
        <Card>
            <h2>
                {name}
            </h2>

            {image && (
                <img
                    src={image}
                    alt={name}
                    width="200"
                />
            )}

            <p>
                {desc}
            </p>

            <p>
                <strong>
                    Price:{" "}
                    {price.toFixed(2)}
                    {" "}{currency}
                </strong>
            </p>

            {spicy && (
                <span>
                    🌶️ Spicy
                </span>
            )}

            <br />
            <br />

            <button
                onClick={handleAdd}
            >
                Add
            </button>

            <span>
                {" "}
                Quantity: {quantity}
            </span>

            <br />
            <br />

            <button
                ref={detailsButtonRef}
                onClick={openModal}
            >
                View Details
            </button>

            <br />
            <br />

            {/* Only for ErrorBoundary testing */}
            <button
                onClick={() =>
                    setForceError(true)
                }
            >
                Test Error
            </button>

            {isModalOpen && (
                <DishModal
                    name={name}
                    desc={desc}
                    price={price}
                    spicy={spicy}
                    image={image}
                    onClose={closeModal}
                />
            )}
        </Card>
    );
};


CardLists.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    spicy: PropTypes.bool,
    currency: PropTypes.string,
    desc: PropTypes.string.isRequired,
    image: PropTypes.string
};


export default CardLists;