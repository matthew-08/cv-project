/* eslint-disable react/button-has-type */
import { useState } from "react"
import { useEffect } from "react"

export default function WorkExperience({ addButton, addWorkExperience,
    index, deleteWorkExperienceForm, handleWorkInput, type, }) {
    const [userCompany, setUserCompany] = useState('')
    const [userPosition, setUserPosition] = useState('')
    const [userStartDate, setUserStartDate] = useState('')
    const [userEndDate, setUserEndDate] = useState('')
    const [userDescription, setUserDescription] = useState('')

    useEffect(() =>
        handleWorkInput(index, userCompany, "company"),
        [userCompany])

    useEffect(() => {
        handleWorkInput(index, userPosition, "position")
    }, [userPosition])

    useEffect(() => {
        handleWorkInput(index, userStartDate, "startDate")
    }, [userStartDate])

    useEffect(() => {
        handleWorkInput(index, userEndDate, "endDate")
    }, [userEndDate])

    useEffect(() => {
        handleWorkInput(index, userDescription, "description")
    }, [userDescription])
    return (
        <div className="input-container">
            <input type="text" placeholder="Company" onChange={(e) => setUserCompany(e.target.value)} />
            <input type="text" placeholder="Position" onChange={(e) => setUserPosition(e.target.value)} />
            <input type="text" placeholder="Start Date" onChange={(e) => setUserStartDate(e.target.value)} />
            <input type="text" placeholder="End Date" onChange={(e) => setUserEndDate(e.target.value)} />
            <input type="text" placeholder="Description" onChange={(e) => setUserDescription(e.target.value)} />
            <div className="buttons-container">
                <button onClick={() => deleteWorkExperienceForm(index, type)}>Delete</button>
                {addButton && <button onClick={() => {
                    addWorkExperience(type)
                }}
                >
                    Add </button>}
            </div>
        </div>
    )
}
