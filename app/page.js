import React from 'react';
import Link from 'next/link';

export default function page() {
  return (
    <main className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">CPRG 306: Web Development 2 - Assignments</h1>
      <Link className="text-blue-500 hover:underline " href="/week-2">Link to week-2 page</Link>
      <p><Link className="text-blue-500 hover:underline " href="/week-3">Link to week-3 page</Link></p>
      <p><Link className="text-blue-500 hover:underline " href="/week-4">Link to week-4 page</Link></p>
      <p><Link className="text-blue-500 hover:underline " href="/week-5">Link to week-5 page</Link></p>
      <p><Link className="text-blue-500 hover:underline " href="/week-6">Link to week-6 page</Link></p>
      <p><Link className="text-blue-500 hover:underline " href="/week-7">Link to week-7 page</Link></p>
      <p><Link className="text-blue-500 hover:underline " href="/week-8">Link to week-8 page</Link></p>
      <p><Link className="text-blue-500 hover:underline " href="/week-10">Link to week-10 page</Link></p>
    </main>
  );
}
