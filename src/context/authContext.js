import { useEffect } from 'react';
import { createContext, useContext, useState } from 'react';
import { auth, googleProvider, githubProvider } from '../firebase';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = (props) => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log(user);
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const signup = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  const signin = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const signout = () => {
    return auth.signOut();
  };

  const resetPassword = (email) => {
    return auth.sendPasswordResetEmail(email);
  };

  const signinWithGoogle = () => {
    auth
      .signInWithPopup(googleProvider)
      .then(() => {
        console.log('Successfuly signed in with google');
      })
      .catch((err) => {
        console.log(err.message);
      });
    // return auth.signInWithPopup(provider);
  };

  const signinWithGithub = () => {
    auth
      .signInWithPopup(githubProvider)
      .then(() => {
        console.log('Successfuly signed in with google');
      })
      .catch((err) => {
        console.log(err.message);
      });
    // return auth.signInWithPopup(provider);
  };

  const value = {
    user: currentUser,
    signup,
    signin,
    signout,
    resetPassword,
    signinWithGoogle,
    signinWithGithub,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};
