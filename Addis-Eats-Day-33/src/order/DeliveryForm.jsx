import React, {
    useRef,
    useState
} from "react";

import useCartStore from "../store/cartStore";


// Pure validation function
function validate(form) {
    const errors = {};

    if (form.name.trim() === "") {
        errors.name = "Please enter your name.";
    }

    if (!/^0(9|7)[0-9]{8}$/.test(form.phone)) {
        errors.phone =
            "Please enter a valid TeleBirr phone number. Example: 0911234567";
    }

    if (form.area.trim() === "") {
        errors.area =
            "Please enter your delivery area.";
    }

    return errors;
}


const DeliveryForm = () => {

    // Get cart items from Zustand
    const items = useCartStore(
        (state) => state.items
    );

    // Calculate cart total
    const total = items.reduce(
        (sum, item) =>
            sum + item.price * item.quantity,
        0
    );


    // One state object for all form fields
    const [form, setForm] = useState({
        name: "",
        phone: "",
        area: "",
        notes: ""
    });


    // Track fields that have been touched
    const [touched, setTouched] = useState({});


    // Submitting state prevents double submission
    const [submitting, setSubmitting] =
        useState(false);


    const [submitted, setSubmitted] =
        useState(false);


    const [requestError, setRequestError] =
        useState("");


    // References for focusing invalid fields
    const nameRef = useRef(null);
    const phoneRef = useRef(null);
    const areaRef = useRef(null);
    const notesRef = useRef(null);


    // Derive errors on every render
    const errors = validate(form);


    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value
        });

        setSubmitted(false);
        setRequestError("");
    };


    const handleBlur = (e) => {
        const { name } = e.target;

        setTouched({
            ...touched,
            [name]: true
        });
    };


    // Focus the first invalid field
    const focusFirstError = (validationErrors) => {
        if (validationErrors.name) {
            nameRef.current?.focus();
            return;
        }

        if (validationErrors.phone) {
            phoneRef.current?.focus();
            return;
        }

        if (validationErrors.area) {
            areaRef.current?.focus();
            return;
        }

        if (validationErrors.notes) {
            notesRef.current?.focus();
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        setSubmitted(false);
        setRequestError("");


        // Validate current form
        const validationErrors = validate(form);


        // Touch all fields when submitting
        setTouched({
            name: true,
            phone: true,
            area: true,
            notes: true
        });


        // Stop if validation fails
        if (Object.keys(validationErrors).length > 0) {
            focusFirstError(validationErrors);
            return;
        }


        // Prevent double submission
        if (submitting) {
            return;
        }


        setSubmitting(true);


        try {
            
            await new Promise(
                (resolve, reject) => {
                    setTimeout(() => {
                        resolve();
                    }, 1000);
                }
            );


            console.log(
                "Delivery information:",
                form
            );

            console.log(
                "Order total:",
                total.toFixed(2),
                "ETB"
            );


            setSubmitted(true);

        } catch (err) {
            console.error(
                "Order submission error:",
                err
            );


            setRequestError(
                err.message ||
                "Something went wrong while placing the order. Please try again."
            );


            // If there is an invalid field,
            // focus the first one.
            focusFirstError(errors);

        } finally {
            setSubmitting(false);
        }
    };


    return (
        <div className="delivery-form">

            <h2>
                 TeleBirr Delivery
            </h2>


            <form
                onSubmit={handleSubmit}
                noValidate
            >

                {/* NAME */}
                <div className="form-group">

                    <label htmlFor="name">
                        Name
                    </label>

                    <input
                        ref={nameRef}
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={form.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-invalid={
                            touched.name &&
                            Boolean(errors.name)
                        }
                        aria-describedby={
                            touched.name &&
                            errors.name
                                ? "name-error"
                                : undefined
                        }
                    />

                    {touched.name &&
                        errors.name && (
                            <p
                                id="name-error"
                                className="validation-error"
                                role="alert"
                            >
                                {errors.name}
                            </p>
                        )}

                </div>


            
                <div className="form-group">

                    <label htmlFor="phone">
                        TeleBirr Phone Number
                    </label>

                    <input
                        ref={phoneRef}
                        id="phone"
                        type="tel"
                        name="phone"
                        placeholder="0911234567"
                        value={form.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-invalid={
                            touched.phone &&
                            Boolean(errors.phone)
                        }
                        aria-describedby={
                            touched.phone &&
                            errors.phone
                                ? "phone-error"
                                : undefined
                        }
                    />

                    {touched.phone &&
                        errors.phone && (
                            <p
                                id="phone-error"
                                className="validation-error"
                                role="alert"
                            >
                                {errors.phone}
                            </p>
                        )}

                </div>


                {/* DELIVERY AREA */}
                <div className="form-group">

                    <label htmlFor="area">
                        Delivery Area
                    </label>

                    <input
                        ref={areaRef}
                        id="area"
                        type="text"
                        name="area"
                        placeholder="Enter your area"
                        value={form.area}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-invalid={
                            touched.area &&
                            Boolean(errors.area)
                        }
                        aria-describedby={
                            touched.area &&
                            errors.area
                                ? "area-error"
                                : undefined
                        }
                    />

                    {touched.area &&
                        errors.area && (
                            <p
                                id="area-error"
                                className="validation-error"
                                role="alert"
                            >
                                {errors.area}
                            </p>
                        )}

                </div>


                {/* OPTIONAL NOTES */}
                <div className="form-group">

                    <label htmlFor="notes">
                        Notes (Optional)
                    </label>

                    <textarea
                        ref={notesRef}
                        id="notes"
                        name="notes"
                        placeholder="Any delivery instructions?"
                        value={form.notes}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        rows="4"
                    />

                </div>


                {/* REQUEST ERROR */}
                {requestError && (
                    <p
                        className="error-message"
                        role="alert"
                    >
                        ❌ {requestError}
                    </p>
                )}


                {/* SUBMIT BUTTON */}
                <button
                    type="submit"
                    disabled={submitting}
                >
                    {submitting
                        ? "Placing Order..."
                        : `Place Order • ${total.toFixed(2)} ETB`
                    }
                </button>

            </form>


            {submitted && (
                <p
                    className="success-message"
                    role="status"
                >
                    ✅ Order information submitted
                    successfully!
                </p>
            )}

        </div>
    );
};


export default DeliveryForm;

