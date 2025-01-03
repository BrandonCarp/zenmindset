'use client';


export interface NewQuotePayload {
  author: string;
  text: string;
}


export async function newQuote() {
  try {
    const response = await fetch('https://stoic-quotes.com/api/quote', {
      method: 'GET',
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to fetch: ${errorText}`);
    }

    const result = await response.json();
    console.log('Success:', result);
    return result;
  } catch (error) {

    if (error instanceof Error) {
      console.error('Error:', error.message);
    } else {
      console.error('An unknown error occurred:', error);
    }
  }
}
