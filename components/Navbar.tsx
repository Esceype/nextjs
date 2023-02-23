import { useRouter } from "next/router";
import styles from "../styles/Navbar.module.scss";
import Link from "next/link";
import Image from "next/image";

const navigation = [
  { id: 1, title: 'Home', path: '/'},
  { id: 2, title: 'Posts', path: '/posts'},
  { id: 3, title: 'Contacts', path: '/contacts'},
];

const Navbar = () => {
  const { pathname } = useRouter();

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Image src="/next.svg" width={60} height={60} alt="Test" />
      </div>
      <div className={styles.links}>
        {navigation.map(({ id, title, path }) => (
          <Link
            key={id}
            href={path}
            className={pathname === path ? styles.active : ''}
          >
            {title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;