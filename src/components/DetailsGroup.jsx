export default function DetailsGroup({ phone, email, location }) {
    return (
        <div className="details-group">
            <div className="contact-details"><img src="/img/phone.png" alt="" /><span className="contact-text">{phone}</span></div>
            <div className="contact-details" ><img src="/img/email.png" alt="" /><span className="contact-text">{email}</span> </div>
            <div className="contact-details" ><img src="/img/location.png" alt="" /><span className="contact-text">{location}</span> </div>
        </div>
    )
}