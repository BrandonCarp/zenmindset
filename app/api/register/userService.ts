'use client';


export interface NewUserPayload {
  username: string;
  email: string;
  password: string;
  fullName: string;
  age: string;
}

export interface LoginPayload {
  username: string;
  password: string;
}

export async function newRegistration(data: NewUserPayload) {
  try {
    const response = await fetch('http://127.0.0.1:5000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to register');
    }

    const result = await response.json();
    console.log('Success:', result);
  } catch (error) {
    console.error('Error:', error);
  }
}

export async function userSignIn(data: LoginPayload) {
  try {
    const response = await fetch('http://127.0.0.1:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to Login');
    }

    const result = await response.json();
    console.log('Success', result);
  } catch (error) {
    console.error('Error', error);
  }
}

