import React from "react";


function Contact() {

  return (
    <section id="contact" className="relative">
      <div>
        <div>
        < iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=97+warren+st+new+york+city&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <div>
            <div>
              <h2>ADDRESS</h2>
              <p>
                123 Info St. <br />
                Carson City, NV 12345
              </p>
            </div>
            <div>
              <h2>EMAIL</h2>
              <a>m.rodrig.felix@gmail.com</a>
              <h2>PHONE</h2>
              <p>775-123-5555</p>
            </div>
          </div>
        </div>
        <form 
          netlify
          name="contact">
          <h2>Hire Me</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
            suscipit officia aspernatur veritatis. Asperiores, aliquid</p>
          <div>
            <label>Name</label>
            <input></input>
          </div>
          <div>
            <label>Emaile</label>
            <input></input>
          </div>
          <div>
            <label>Message</label>
            <textarea id="message" name="message"></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;