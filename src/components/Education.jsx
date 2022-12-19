import { useState, useEffect } from "react"

export function EducationExperience({ addButton, addEducationExperience, index, deleteEducationExperienceForm, type, handleEducationInput }) {
    const [course, setCourse] = useState('')
    const [university, setUniversity] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [description, setDescription] = useState('')

    // index / state / inputname
    useEffect(() => {
        handleEducationInput(index, course, "course")
    }, [course])
    useEffect(() => {
        handleEducationInput(index, university, "university")
    }, [university])
    useEffect(() => {
        handleEducationInput(index, startDate, "startDate")
    }, [startDate])
    useEffect(() => {
        handleEducationInput(index, endDate, "endDate")
    }, [endDate])
    useEffect(() => {
        handleEducationInput(index, description, "description")
    }, [description])

    return (
        <div className="input-container">
            <input type="text" placeholder="Course / Program" onChange={(e) => setCourse(e.target.value)} />
            <input type="text" placeholder="University" onChange={(e) => setUniversity(e.target.value)} />
            <input type="text" placeholder="Start Date" onChange={(e) => setStartDate(e.target.value)} />
            <input type="text" placeholder="End Date" onChange={(e) => setEndDate(e.target.value)} />
            <input type="text" placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
            <div className="buttons-container">
                <button onClick={() => deleteEducationExperienceForm(index, type)}>Delete</button>
                {addButton && <button onClick={() => {
                    addEducationExperience(type)
                }}
                >
                    Add </button>}
            </div>
        </div>
    )
}

export const test = "ok"