import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as ContactPayload;

    const name = data.name?.trim() ?? "";
    const email = data.email?.trim() ?? "";
    const message = data.message?.trim() ?? "";

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Wszystkie pola są wymagane." },
        { status: 400 },
      );
    }

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { error: "Podaj poprawny adres e-mail." },
        { status: 400 },
      );
    }

    return NextResponse.json(
      {
        message:
          "Dziękuję za wiadomość. Odpowiem maksymalnie w ciągu 24 godzin roboczych.",
      },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      { error: "Wystąpił błąd po stronie serwera. Spróbuj ponownie później." },
      { status: 500 },
    );
  }
}
