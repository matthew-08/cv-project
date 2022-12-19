// eslint-disable-next-line import/prefer-default-export
export function WorkExpOut({ company, position, startDate, endDate, description }) {
    return (
        <div className="work-exp-container">
            <div className="work-experience-top">
                <span> {position}</span>
                <div className="experience-details">
                    {company} | {startDate} - {endDate}
                </div>
            </div>
            <div className="description-output">
                <p>
                    {description}
                </p>
            </div>
        </div>
    )
}

