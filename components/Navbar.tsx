import React from "react";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";

const navBarLinks = [
  { title: "About", link: "/" },
  { title: "Take the test", link: "/takeTest" },
];

export const Navbar = function Navbar() {
  const router = useRouter();

  return (
    <nav>
      <ul>
        {navBarLinks.map(({ title, link }) => (
          <li>
            <Link href={link}>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid -- nextjs specific thing */}
              <a>
                {router.pathname === link ? <strong>{title}</strong> : title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
