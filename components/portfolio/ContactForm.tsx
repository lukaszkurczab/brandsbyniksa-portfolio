"use client";

import { FormEvent, useState } from "react";
import { buttonStyles } from "@/components/ui/Button";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [isSending, setIsSending] = useState(false);
  const [responseMessage, setResponseMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSending(true);
    setResponseMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const payload = (await response.json()) as { message?: string; error?: string };

      if (!response.ok) {
        setIsError(true);
        setResponseMessage(payload.error ?? "Nie udało się wysłać wiadomości.");
        return;
      }

      setIsError(false);
      setResponseMessage(payload.message ?? "Dziękuję, wiadomość została wysłana.");
      setForm(initialState);
    } catch {
      setIsError(true);
      setResponseMessage("Wystąpił problem z połączeniem. Spróbuj ponownie.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="editorial-card space-y-4 p-6">
      <label className="block space-y-2 text-sm text-muted">
        <span className="font-medium text-foreground">Imię i nazwisko</span>
        <input
          type="text"
          value={form.name}
          required
          onChange={(event) =>
            setForm((current) => ({ ...current, name: event.target.value }))
          }
          className="w-full rounded-xl border border-line bg-white/85 px-4 py-3 text-foreground outline-none transition focus:border-foreground/20"
          placeholder="Np. Anna Kowalska"
        />
      </label>

      <label className="block space-y-2 text-sm text-muted">
        <span className="font-medium text-foreground">E-mail</span>
        <input
          type="email"
          value={form.email}
          required
          onChange={(event) =>
            setForm((current) => ({ ...current, email: event.target.value }))
          }
          className="w-full rounded-xl border border-line bg-white/85 px-4 py-3 text-foreground outline-none transition focus:border-foreground/20"
          placeholder="niksa.kontakt@gmail.com"
        />
      </label>

      <label className="block space-y-2 text-sm text-muted">
        <span className="font-medium text-foreground">Wiadomość</span>
        <textarea
          rows={5}
          value={form.message}
          required
          onChange={(event) =>
            setForm((current) => ({ ...current, message: event.target.value }))
          }
          className="w-full rounded-xl border border-line bg-white/85 px-4 py-3 text-foreground outline-none transition focus:border-foreground/20"
          placeholder="Napisz, czego potrzebuje Twoja marka i jaki masz cel."
        />
      </label>

      <button
        type="submit"
        disabled={isSending}
        className={buttonStyles("primary", "md", isSending ? "opacity-70" : "")}
      >
        {isSending ? "Wysyłanie..." : "Wyślij wiadomość"}
      </button>

      {responseMessage && (
        <p className={`text-sm ${isError ? "text-terracotta" : "text-sage"}`}>
          {responseMessage}
        </p>
      )}
    </form>
  );
}
