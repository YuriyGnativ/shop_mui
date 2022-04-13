import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import RenderCounter from "./RenderCounter";

const useStyles = makeStyles(() => ({
  main: {
    display: "flex",
    marginTop: "18px",
    // "& .card": {},
  },
}));

// eslint-disable-next-line import/no-anonymous-default-export
export default (): React.ReactElement => {
  const styles = useStyles();

  return (
    <div className="wrapper">
      <main className={styles.main}></main>
    </div>
  );
};
