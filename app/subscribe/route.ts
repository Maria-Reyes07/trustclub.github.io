// app/api/subscribe/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({ error: 'Email is required.' }, { status: 400 });
  }

  try {
    const brevoResponse = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': process.env.BREVO_API_KEY!, // 👈 using environment variable
      },
      body: JSON.stringify({
        email: email,
        listIds: [Number(process.env.BREVO_LIST_ID!)], // 👈 using environment variable
      }),
    });

    if (brevoResponse.ok) {
      return NextResponse.json({ success: true });
    } else {
      const errorData = await brevoResponse.json();
      console.error('Brevo error:', errorData);
      return NextResponse.json({ error: 'Brevo API error.' }, { status: 500 });
    }
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
}
