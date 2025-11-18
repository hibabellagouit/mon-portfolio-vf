import { FormEvent } from "react";

export default function Contact() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = "bellagouithiba@gmail.com";
    const subject = encodeURIComponent(String(form.get("subject") || ""));
    const body = encodeURIComponent(String(form.get("message") || ""));
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="max-w-lg mx-auto space-y-8 animate-fadeIn">

      <div>
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
          Contact
        </h2>
        <p className="mt-1 text-sm text-slate-600">
          N’hésite pas à me contacter pour une opportunité, une collaboration ou une question.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 p-6 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/30 shadow-xl"
      >
        <div>
          <label className="text-xs font-semibold text-slate-700">Sujet</label>
          <input
            name="subject"
            className="w-full mt-1 rounded-xl border border-white/40 bg-white/80 px-3 py-2 text-sm shadow focus:ring-2 focus:ring-purple-400 transition"
            placeholder="Objet du message"
            required
          />
        </div>

        <div>
          <label className="text-xs font-semibold text-slate-700">Message</label>
          <textarea
            name="message"
            rows={5}
            className="w-full mt-1 rounded-xl border border-white/40 bg-white/80 px-3 py-2 text-sm shadow focus:ring-2 focus:ring-pink-400 transition"
            placeholder="Votre message…"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 py-2.5 text-sm font-semibold text-white shadow-lg hover:shadow-xl hover:scale-[1.02] transition"
        >
          Envoyer
        </button>
      </form>

    </section>
  );
}
