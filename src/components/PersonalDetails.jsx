/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import DetailsGroup from "./DetailsGroup";

export function PersonalDetails(props) {
    const [name, setName] = useState("")
    const [title, setTitle] = useState("")
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [location, setLocation] = useState('')
    return (
        <div className="main-container">
            <div className="personal-details-container">
                <h2>Personal Details</h2>
                <div className="input-container">
                    <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                    <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
                    <input type="text" placeholder="Phone" onChange={(e) => setPhone(e.target.value)} />
                    <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <input type="text" placeholder="Location" onChange={(e) => setLocation(e.target.value)} />
                    <input type="text" placeholder="Description" />
                </div>
            </div>

            <div className="cv-container">
                <header>
                    <PersonalDetailsOut name={name} />
                    <DetailsGroup phone={phone} email={email} location={location} />

                </header>
            </div>
        </div>
    );
}


export function PersonalDetailsOut({ name, title }) {
    return (
        <div className="header-left">
            <h1>{name}</h1>
            <h3>{title}</h3>
        </div>
    )
}

export const ok = "ok"