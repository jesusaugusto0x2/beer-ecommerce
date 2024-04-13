"use client";

export const fetcher = async <T>(url: string): Promise<T> => {
  try {
    const resp = await fetch(url);

    return resp.json();
  } catch (error) {
    throw error;
  }
};
