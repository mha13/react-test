import { useState } from "react";

const Hook2 = () => {
    const [form, setForm] = useState({
        firstName: 'Hossein',
        lastName: 'Abdollahi',
        email: 'mohammadhosseinabdollahi@gmail.com',
        number: 10
    });

    const addOne = () => {
        form.number++;
        setForm({ ...form, number: form.number });
    }

    const [num, setNum] = useState(10);

    const addTwo = () => {
        setNum(num + 2);
        console.log(num+2)
    }

    return (
        <div>
            <label for='firstname'>First Name</label>
            <input id="firstname" value={form.firstName} onChange={(e) => { setForm({ ...form, firstName: e.target.value }) }} />

            <label for='lastname'>Last Name</label>
            <input id="lastname" value={form.lastName} onChange={(e) => { setForm({ ...form, lastName: e.target.value }) }} />

            <label for='email'>email</label>
            <input id="email" value={form.email} onChange={(e) => { setForm({ ...form, email: e.target.value }) }} />

            <h3>{form.firstName}</h3>
            <h3>{form.lastName}</h3>
            <h3>{form.email}</h3>
            <h3 onClick={addOne}>{form.number}</h3>
            <h1 onMouseOver={addTwo}>{num}</h1>
        </div>
    )
}

export default Hook2;