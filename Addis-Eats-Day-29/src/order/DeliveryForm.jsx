import React, { useState } from "react";

const DeliveryForm = () => {


const [form, setForm] = useState({
    name: "",
    phone: "",
    area: ""
});

const [submitted, setSubmitted] =
    useState(false);

const [error, setError] =
    useState("");


const handleChange = (e) => {

    setForm({
        ...form,
        [e.target.name]: e.target.value
    });

    setSubmitted(false);
    setError("");

};


/*
 * TeleBirr phone validation.
 *
 * 09xxxxxxxx
 * or
 * 07xxxxxxxx
 */
const phoneValid =
    /^0(9|7)[0-9]{8}$/.test(
        form.phone
    );


const formValid =
    form.name.trim() !== "" &&
    form.area.trim() !== "" &&
    phoneValid;


const handleSubmit = (e) => {

    e.preventDefault();

    setSubmitted(false);
    setError("");


    if (form.name.trim() === "") {

        setError(
            "Please enter your name."
        );

        return;
    }


    if (!phoneValid) {

        setError(
            "Please enter a valid TeleBirr phone number."
        );

        return;
    }


    if (form.area.trim() === "") {

        setError(
            "Please enter your delivery area."
        );

        return;
    }


    try {

        console.log(
            "Delivery information:",
            form
        );

        setSubmitted(true);

    } catch (err) {

        console.error(
            "Order submission error:",
            err
        );

        setError(
            "Something went wrong while placing the order."
        );

    }

};


return (

    <div className="delivery-form">

        <h2>
            📦 TeleBirr Delivery
        </h2>


        <form
            onSubmit={handleSubmit}
            noValidate
        >

            <div className="form-group">

                <label htmlFor="name">
                    Name
                </label>

                <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={handleChange}
                />

            </div>


            <div className="form-group">

                <label htmlFor="phone">
                    TeleBirr Phone Number
                </label>

                <input
                    id="phone"
                    type="text"
                    name="phone"
                    placeholder="0911234567"
                    value={form.phone}
                    onChange={handleChange}
                />

                {form.phone !== "" &&
                    !phoneValid && (

                        <p className="validation-error">
                            Enter a valid TeleBirr
                            number.
                            Example:
                            0911234567
                        </p>

                    )}

            </div>


            <div className="form-group">

                <label htmlFor="area">
                    Delivery Area
                </label>

                <input
                    id="area"
                    type="text"
                    name="area"
                    placeholder="Enter your area"
                    value={form.area}
                    onChange={handleChange}
                />

            </div>


            {error && (

                <p className="error-message">
                    ❌ {error}
                </p>

            )}


            <button
                type="submit"
                disabled={!formValid}
            >
                Place Order
            </button>

        </form>


        {submitted && (

            <p className="success-message">
                ✅ Order information submitted
                successfully!
            </p>

        )}

    </div>
);


};

export default DeliveryForm;
