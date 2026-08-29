import React, { useState } from "react";

const DeliveryForm = () => {

    const [form, setForm] = useState({
        name: "",
        phone: "",
        area: ""
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

        setSubmitted(false);
    };

    const phoneValid = /^0(9|7)[0-9]{8}$/.test(form.phone);

    const formValid =
        form.name.trim() !== "" &&
        form.area.trim() !== "" &&
        phoneValid;

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formValid) {
            return;
        }

        setSubmitted(true);

        console.log("Delivery information:", form);
    };

    return (
        <div>

            <h2>TeleBirr Delivery</h2>

            <form onSubmit={handleSubmit}>

                <div>
                    <label>Name</label>
                    <br />

                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={form.name}
                        onChange={handleChange}
                    />
                </div>

                <br />

                <div>
                    <label>TeleBirr Phone Number</label>
                    <br />

                    <input
                        type="text"
                        name="phone"
                        placeholder="0911234567"
                        value={form.phone}
                        onChange={handleChange}
                    />

                    {form.phone !== "" && !phoneValid && (
                        <p>
                            Enter a valid TeleBirr number.
                            Example: 0911234567
                        </p>
                    )}
                </div>

                <br />

                <div>
                    <label>Delivery Area</label>
                    <br />

                    <input
                        type="text"
                        name="area"
                        placeholder="Enter your area"
                        value={form.area}
                        onChange={handleChange}
                    />
                </div>

                <br />

                <button
                    type="submit"
                    disabled={!formValid}
                >
                    Place Order
                </button>

            </form>

            {submitted && (
                <p>
                    Order information submitted successfully!
                </p>
            )}

        </div>
    );
};

export default DeliveryForm;