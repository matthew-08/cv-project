/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import uuid from "react-uuid";
import { useEffect } from "react";
import DetailsGroup from "./DetailsGroup";
import Description from "./Description";
import WorkExperience from "./WorkExperience";
import { EducationExperience } from "./Education";
import { WorkExpOut } from "./WorkExpOut";
import { EduOut } from "./EduOut.jsx";


export function PersonalDetails(props) {
    const [name, setName] = useState("")
    const [title, setTitle] = useState("")
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [location, setLocation] = useState('')
    const [description, setDescription] = useState('')
    const [workExperience, setWorkExperience] = useState([])
    const [educationExperience, setEducationExperience] = useState([])

    // Get component input states.

    const addExperienceComponent = (type) => {
        if (type === "work" && workExperience.length >= 3) {
            return null
        }
        if (type === "education" && educationExperience.length >= 3) {
            return null
        }
        return type === "work" ?
            setWorkExperience([...workExperience,
            {
                id: uuid(),
                company: "",
                position: "",
                startDate: "",
                endDate: "",
                description: "",

            }
            ])
            : setEducationExperience([...educationExperience,
            {
                id: uuid(),
                course: "",
                startDate: "",
                endDate: "",
                description: "",
            }
            ])

    }

    const handleWorkInput = (passedId, value, field) => {
        setWorkExperience(workExperience.map((exp) => {
            if (exp.id === passedId) {
                exp[field] = value
            } return exp
        }))
    }

    const handleEducationInput = (passedId, value, field) => {
        setEducationExperience(educationExperience.map((exp) => {
            if (exp.id === passedId) {
                exp[field] = value
            } return exp
        }))
    }

    const deleteExperienceComponent = (index, type) => type === "work" ?
        setWorkExperience(workExperience.filter((form) => form.id !== index))
        : setEducationExperience(educationExperience.filter((form) => form.id !== index))

    useEffect(() => {
        console.log(educationExperience)
    }, [educationExperience])

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
                    <textarea type="text" placeholder="Description" className="text-area" onChange={(e) => setDescription(e.target.value)} />
                </div>
                <h2>Work Experience</h2>
                <div className="input-work-experience">
                    {workExperience.length === 0 && <div className="buttons-container"><button onClick={() => addExperienceComponent("work")}>Add</button></div>}
                    {workExperience.length !== 0 && workExperience.map((i, index) =>
                        <WorkExperience index={i.id}
                            key={i.id}
                            addButton={index === workExperience.length - 1}
                            addWorkExperience={addExperienceComponent}
                            deleteWorkExperienceForm={deleteExperienceComponent}
                            type="work"
                            handleWorkInput={handleWorkInput}

                        />
                    )}
                </div>
                <h2>Education</h2>
                <div className="input-education-experience">
                    {educationExperience.length === 0 && <div className="buttons-container"><button onClick={() => addExperienceComponent("education")} >Add</button></div>}
                    {educationExperience.length !== 0 && educationExperience.map((i, index) =>
                        < EducationExperience index={i.id}
                            key={i.id}
                            addButton={index === educationExperience.length - 1}
                            addEducationExperience={addExperienceComponent}
                            deleteEducationExperienceForm={deleteExperienceComponent}
                            handleEducationInput={handleEducationInput}
                            type="education"
                        />

                    )}

                </div>
            </div>

            <div className="cv-container">
                <header>
                    <PersonalDetailsOut name={name} title={title} />
                    <DetailsGroup phone={phone} email={email} location={location} />

                </header>
                <main>
                    <Description description={description} />
                    {workExperience.length !== 0 && workExperience.map((i, index) =>
                        <div className="work-exp-container">
                            <h2>Work Experience</h2>
                            <WorkExpOut
                                index={i.id}
                                key={i.id}
                                company={i.company}
                                position={i.position}
                                startDate={i.startDate}
                                endDate={i.endDate}
                                description={i.description}
                            />
                        </div>)}
                    {educationExperience.length !== 0 && educationExperience.map((i, index) =>
                        <div className="education-exp-container">
                            <h2>Education Experience</h2>
                            <EduOut
                                index={i.id}
                                key={i.id}
                                course={i.course}
                                university={i.university}
                                startDate={i.startDate}
                                endDate={i.endDate}
                                description={i.description}
                            />

                        </div>
                    )}

                </main>
            </div>
        </div>
    );
}


export function PersonalDetailsOut({ name, title }) {
    return (
        <div className="header-left">
            <h1>{name || ""}</h1>
            <h3>{title || ""}</h3>
        </div>
    )
}

export const ok = "ok"
