import React from 'react'
import "../css/contactUs.css";

const ContactUs = () => {
  const [subject, setSubject] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [msg, setMsg] = React.useState("")

  const container = React.useRef(null);
  const scrollToBottom = () => {
    container.current.scrollIntoView({ behavior: "smooth" })
  }

  React.useEffect(scrollToBottom, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    window.open(`mailto:e2a@nits.ac.in?subject=${subject}&body=${msg}`);
  }

  return (
    <div className="container ptb-4" ref={container}>
      <div className="card">
        <div className="members">
          <h3>Got a query?</h3>
          <p className="mt-1 mb-4">Contact or send your query</p>
          <ul className="ml-3">
            <li className="member mt-3">
              <p>Dr. Shivendra Kumar Pandey</p>
              <p className="mt-1">Assistant Professor, E&I Dept., NIT Silchar</p>
              <p className="mt-1">Phone: +91-8011-886745 </p>
              <p className="mt-1">Email:  <a href="mailto:skpandey@ei.nits.ac.in" rel="noreferrer">skpandey@ei.nits.ac.in</a></p>
            </li>
            <li className="member mt-4">
              <p>Dr. Lalu Seban</p>
              <p className="mt-1">Assistant Professor, E&I Dept., NIT Silchar</p>
              <p className="mt-1">Phone: +91-9425472154 </p>
              <p className="mt-1">Email: <a href="mailto:seban@ei.nits.ac.in" rel="noreferrer">seban@ei.nits.ac.in</a></p>
            </li>
            <li className="member mt-4">
              <p className="mt-1">Email: <a href="mailto:e2a2022@nits.ac.in" rel="noreferrer">e2a2022@nits.ac.in</a></p>
            </li>
          </ul>
        </div>
            <form onSubmit={handleSubmit}>
              <label htmlFor="subject" className="mb-1">Query</label>
              <input id="subject" type="text" value={subject} placeholder="Your query" onChange={(e) => setSubject(e.target.value)} />
              <div className="mtb-2" />
              <label htmlFor="email" className="mb-1">Mail</label>
              <input id="email" type="text" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <div className="mtb-2" />
              <label htmlFor="message" className="mb-1">Message</label>
              <textarea rows="4" id="message" type="text" placeholder="Email body..."  value={msg} onChange={(e) => setMsg(e.target.value)}/>
              <button className="mt-3 mb-1" type="submit">Send</button>
            </form>
      </div>
    </div>
  )
}

export default ContactUs