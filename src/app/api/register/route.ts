// app/api/register/route.ts
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import clientPromise from '../../../utils/mongodb';

export async function POST(request: Request) {
  const { name, email, password } = await request.json();
  const client = await clientPromise;
  const db = client.db('simple-food');
  const existingUser = await db.collection('users').findOne({ email });

  if (existingUser) {
    return NextResponse.json({ success: false, message: 'User already exists' }, { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  await db.collection('users').insertOne({ name, email, password: hashedPassword, role: 'user' });

  return NextResponse.json({ success: true, message: 'User registered successfully' }, { status: 201 });
}
