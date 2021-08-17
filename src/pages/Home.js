import { useAuth } from '../context/authContext';

const Home = () => {
  const authCtx = useAuth();

  const singoutHandler = async () => {
    await authCtx.signout();
  };

  return (
    <div>
      <nav className="fixed top-0 left-0 w-screen bg-blue-500 flex px-12 py-4 text-white">
        <h1 className="mr-auto font-bold text-lg">App</h1>
        <button type="button" onClick={singoutHandler}>
          Log out
        </button>
      </nav>
      <section className="text-center flex flex-col items-center space-y-4">
        <img
          src={authCtx.user.photoURL}
          alt="profile"
          className="w-20 h-20 rounded-full ring-4 ring-blue-500 p-1"
        />
        <h2 className="text-2xl">Hello There 👋</h2>
        <p className="text-lg">
          <span className="font-semibold">Your Email: </span>
          {authCtx.user.email}
        </p>
      </section>
    </div>
  );
};

export default Home;
