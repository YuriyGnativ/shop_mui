import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { makeStyles } from "@mui/styles";

import { Counter } from "./features/counter/Counter";
// import { ThemeConfig } from "./theme";

const useStyles = makeStyles((theme: any) => {
  console.log("app theme", theme);
  return {
    appContainer: {
      margin: "0 auto",
      maxWidth: "1280px",
      // backgroundColor: theme.palette.primary.main,
    },
  };
});

const App = (props: any) => {
  const styles = useStyles();
  return (
    <div className={styles.appContainer}>
      <Header />
      <Main />
      {/* <Routes>
          <Route path="/product" element={<h1>One</h1>} />
          <Route path="/user" element={<h1>Two</h1>} />
        </Routes> */}
      {/* <Footer /> */}
    </div>
  );
};

export default App;
