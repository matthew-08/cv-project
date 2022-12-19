export function EduOut({ course, university, startDate, endDate, description }) {
    return (
        <div className="work-exp-container">
            <div className="work-experience-top">
                <span>{course}</span>
                <div className="experience-details">
                    {university} | {startDate} - {endDate}
                </div>
            </div>
            <div className="description-output">
                <p>{description}</p>
            </div>
        </div>
    )
}