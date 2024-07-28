export default function Contact() {
    return (
      <section id="contact" className="my-8">
        <h3 className="text-3xl font-semibold">Contact Us</h3>
        <p className="mt-4">Get in touch to start your project.</p>
        <form className="mt-4">
          <input className="p-2 border rounded mb-2 w-full" type="text" placeholder="Name" />
          <input className="p-2 border rounded mb-2 w-full" type="email" placeholder="Email" />
          <textarea className="p-2 border rounded mb-2 w-full" placeholder="Message" />
          <button className="px-4 py-2 bg-blue-600 text-white rounded">Submit</button>
        </form>
      </section>
    );
  }
  