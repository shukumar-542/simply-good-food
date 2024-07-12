// server/doCredentialLogin.ts

import { getSession, signIn } from 'next-auth/react';

export async function doCredentialLogin(formData) {
  console.log("formData", formData);
  
  try {
    const session = await getSession();
    if (!session) {
      const response = await signIn("credentials", {
        email: formData.username,
        password: formData.password,
        redirect: false,
      });
      return response;
    }
    // Handle if user already has an active session
    return session;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to sign in');
  }
}
