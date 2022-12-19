export function EduOut({ course, university, startDate, endDate, description }) {
    return (
        <div className="temp-container">
            {course}
            {university}
            {startDate}
            {endDate}
            {description}
        </div>
    )
}