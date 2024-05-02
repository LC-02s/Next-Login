import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4">
      <h1>
        <Link href="/" className="font-bold">
          LOGO
        </Link>
      </h1>
      <nav>
        <ul className="flex justify-end items-center gap-4">
          <li>
            <Link href="/login">로그인</Link>
          </li>
          <li>
            <Link href="/me">마이페이지</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
