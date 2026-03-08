"use client";

import { FormEvent, useState } from "react";
import styles from "./ContactForm.module.scss";

type FormFields = {
  name: string;
  email: string;
  message: string;
};

type Notice = {
  kind: "success" | "error";
  message: string;
};

const initialForm: FormFields = {
  name: "",
  email: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormFields>(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [notice, setNotice] = useState<Notice | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setNotice(null);
    setSubmitting(true);

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
        throw new Error(payload.error ?? "Nie udało się wysłać formularza.");
      }

      setNotice({
        kind: "success",
        message: payload.message ?? "Dziękuję! Wiadomość została wysłana.",
      });
      setForm(initialForm);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Wystąpił nieoczekiwany błąd.";
      setNotice({ kind: "error", message });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>
        Imię i nazwisko
        <input
          name="name"
          type="text"
          required
          value={form.name}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, name: event.target.value }))
          }
          placeholder="Np. Anna Kowalska"
        />
      </label>

      <label>
        E-mail
        <input
          name="email"
          type="email"
          required
          value={form.email}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, email: event.target.value }))
          }
          placeholder="twoj@email.com"
        />
      </label>

      <label>
        Wiadomość
        <textarea
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, message: event.target.value }))
          }
          placeholder="Opisz krótko cel projektu i oczekiwany termin."
        />
      </label>

      <button disabled={submitting} type="submit">
        {submitting ? "Wysyłanie..." : "Wyślij wiadomość"}
      </button>

      {notice && (
        <p className={notice.kind === "success" ? styles.success : styles.error}>
          {notice.message}
        </p>
      )}
    </form>
  );
}
