import React from 'react';
import Link from 'next/link';

export default function page() {
  return (
    <main className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">CPRG 306: Web Development 2 - Assignments</h1>
      <Link className="text-blue-500 hover:underline " href="/week-2">Link to week-2 page</Link>
      <p><Link className="text-blue-500 hover:underline " href="/week-3">Link to week-3 page</Link></p>
    </main>
  );
}
