import Link from 'next/link';

export default function StudentInfo() {
  return (
    <div>
      <p>Daniel Akpan</p>
      <Link href="https://github.com/Daniel-Akpan">
        Link to my GitHub repository
      </Link>
    </div>
  );
}