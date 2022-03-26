import Link from 'next/link';

//Top navbar
export default function Navbar({}) {
  //   const { user, username } = {};
  const user = null;
  const username = null;

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">
            <button className="btn-logo">Feed</button>
          </Link>
        </li>
        {/* user is signed-in and has username */}
        {username && (
          <>
            <li className="push-left">
              <Link href="/admin" passHref>
                <button>Write Posts</button>
              </Link>
            </li>
            <li>
              <Link href={`/${username}`} passHref>
                <img src={user?.photoURL} alt={username} />
              </Link>
            </li>
          </>
        )}

        {/* user is not signed OR has not crated username */}
        {!username && (
          <Link href="/enter" passHref>
            <button className="btn-blue">Login</button>
          </Link>
        )}
      </ul>
    </nav>
  );
}
