import { FC } from "react";
import Link from "next/link";
import Container from "../../ui/Container";
import NavbarRoot from "./NavbarRoot";

interface Link {
  href: string;
  label: string;
}

interface NavbarProps {
  links?: Link[];
}

const Navbar: FC<NavbarProps> = ({ links }) => (
  <NavbarRoot>
    <Container>
      <div className="relative flex flex-row justify-between py-4 md:py-4">
        <div className="flex items-center flex-1 text-white">
          <Link href="/">
            <a aria-label="Logo">
              <div>รูป</div>
            </a>
          </Link>
          <nav>
            <Link href="/search">
              <a>All</a>
            </Link>
            {links?.map((l) => (
              <Link href={l.href} key={l.href}>
                <a>{l.label}</a>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </Container>
  </NavbarRoot>
);

export default Navbar;
