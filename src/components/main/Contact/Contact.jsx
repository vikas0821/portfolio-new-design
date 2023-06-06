import "./contact.css";
import Info from "./Info";
import Form from "./Form";
function Contact() {
  return (
    <section className="w-4/5 mt-11 p-5 justify-center bg-white-100 text-white-200 overflow-y-auto border-8 border-extradarkcream-800">
      <div>
        {" "}
        <h1 className="text-3xl text-extradarkcream-800 font-bold text-center py-1">
          HIRE ME
        </h1>
      </div>
      <div className="contact_container">
        <div className=" p-2 text-white-100 bg-extradarkcream-800 font-bold">
          <Info />
        </div>
        <Form />
      </div>
    </section>
  );
}

export default Contact;
