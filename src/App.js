import { Routes, Route } from "react-router-dom";
import "./App.css";
import Checkout from "./components/Checkout";
import { Header, Home, Login } from "./components";
import { useContext, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { stateContext } from "./context/StateProvider";

function App() {
  const {
    state: { user },
    dispatch,
  } = useContext(stateContext);
  console.log("App", user);
  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        const uid = authUser.uid;
        console.log("uid", uid);
        dispatch({
          type: "SET_USER",
          payload: authUser,
        });
      } else {
        // User is signed out
        //console.log("user sign out");
        dispatch({
          type: "SET_USER",
          payload: null,
        });
      }
    });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route
          path="/checkout"
          element={
            <>
              <Header />
              <Checkout />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
