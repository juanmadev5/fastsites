import emailjs from "emailjs-com";
import icSend from "/ic-send.svg";

export default function Contact() {
  const serviceId = import.meta.env.VITE_EJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EJS_TEMPLATE_ID;
  const userId = import.meta.env.VITE_EJS_USER_ID;

  function sendEmail(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formElement = event.currentTarget;

    emailjs
      .sendForm(serviceId, templateId, formElement, userId)
      .then((result) => {
        if (result.status === 200 || result.text === "OK") {
          alert("✅ ¡Mensaje enviado con éxito! Te responderé pronto.");
          formElement.reset();
        } else {
          alert(
            "❌ Ocurrió un error (Respuesta Inesperada). Intenta nuevamente."
          );
        }
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("❌ Ocurrió un error al enviar el mensaje. Intenta nuevamente.");
      });
  }

  return (
    <section
      id="contacto"
      className="py-24 px-4 sm:px-6 md:px-20 bg-[var(--primaryContainer)] text-center"
    >
      <h3 className="text-3xl font-bold text-[var(--onPrimaryContainer)] mb-6">
        Hablemos 🚀
      </h3>
      <p className="text-lg text-[var(--secondary)] mb-12 max-w-2xl mx-auto">
        Cuéntame tu idea o proyecto. Respondo en menos de 24 h.
      </p>

      <form
        id="form"
        onSubmit={sendEmail}
        className="max-w-2xl mx-auto space-y-6 text-left"
      >
        <div>
          <label
            htmlFor="from_name"
            className="block text-sm mb-2 text-[var(--onPrimaryContainer)]"
          >
            Nombre
          </label>
          <input
            type="text"
            id="from_name"
            name="from_name"
            placeholder="Tu nombre"
            required
            className="w-full p-4 rounded-xl border border-[var(--outline)] bg-[var(--background)] text-[var(--onBackground)] leading-tight focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="from_email"
            className="block text-sm mb-2 text-[var(--onPrimaryContainer)]"
          >
            Correo electrónico
          </label>
          <input
            type="email"
            id="from_email"
            name="from_email"
            placeholder="Tu email"
            required
            className="w-full p-4 rounded-xl border border-[var(--outline)] bg-[var(--background)] text-[var(--onBackground)] leading-tight focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm mb-2 text-[var(--onPrimaryContainer)]"
          >
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Tu mensaje..."
            required
            className="w-full p-4 rounded-xl border border-[var(--outline)] bg-[var(--background)] text-[var(--onBackground)] leading-tight focus:outline-none"
          ></textarea>
        </div>

        <div className="flex items-center justify-end">
          <button
            id="send"
            type="submit"
            className="flex items-center justify-center gap-2 bg-[var(--primary)] hover:bg-[var(--secondary)] font-bold py-3 px-6 rounded-3xl text-[var(--onPrimary)] focus:outline-none focus:shadow-outline transition duration-300"
          >
            <img src={icSend} alt="Enviar" className="invert w-5 h-5" />
            Enviar
          </button>
        </div>
      </form>
    </section>
  );
}
