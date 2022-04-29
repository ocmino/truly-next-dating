// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Link from 'next/link';
function ContactForm() {
  const [state, handleSubmit] = useForm("mzbokbrl");
  if (state.succeeded) {
      return <p className="contactformthankyou">Tack, ett nytt lösenord har skickat till din epostadress! <p>
      <Link href="/loginpage">
        <a className="backToFirstPage">Gå tillbaka</a>
      </Link>
    </p></p>;
     
  }
  return (
      <form onSubmit={handleSubmit}>
      <label htmlFor="email">
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        className="contact-email"
        placeholder="Email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      {/* <input
        id="message"
        name="message"
        className="contact-subject"
        placeholder="Skriv något..."
      /> */}
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Skicka
      </button>

      <p>
          <Link href="/loginpage">
            <a className="backToFirstPage">Gå tillbaka</a>
          </Link>
        </p>
    </form>
  );
}
function App() {
  return (
    <ContactForm />
  );
}
export default App;
