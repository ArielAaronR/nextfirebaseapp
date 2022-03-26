import { auth, googleAuthProvider } from '../lib/firebase';

export default function EnterPage(props) {
  const user = null;
  const username = null;

  /**
   * nested ternary
   * 1. user signed out <SignInButton/>
   * 2. user signed in, but missing username <UserNameForm/>
   * 3. user signed in, has username <SignOutButton/>
   */
  return (
    <main>
      {user ? (
        !username ? (
          <UsernameForm />
        ) : (
          <SignOutButton />
        )
      ) : (
        <SignInButton />
      )}
    </main>
  );
}

// Sign in with Google Button
function SignInButton() {
  //Trigger a popup modal in the browser for the user to sign in and autheticate
  const signInWithGoogle = async () => {
    try {
      await auth.signInWithPopup(googleAuthProvider);
    } catch (error) {
      throw new Error(error.message);
    }
  };
  return (
    <button className="btn-google" onClick={signInWithGoogle}>
      <img src={'/google.png'} /> Sign in With Google
    </button>
  );
}

// Sign out Button
function SignOutButton() {}

function UsernameForm() {}
