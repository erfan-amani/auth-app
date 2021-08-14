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
      <section className="text-center">
        <h2 className="text-2xl">Hello Threre 👋</h2>
        <p className="mt-4 text-lg">
          <span className="font-semibold">Your Email: </span>
          {authCtx.user.email}
        </p>
      </section>
    </div>
  );
};

export default Home;
