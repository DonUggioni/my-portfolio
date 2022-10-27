import React, { useState, useEffect } from 'react';

import classes from './Home.module.scss';

function Home() {
  const [year, setYear] = useState();

  useEffect(() => {
    const date = new Date();
    setYear(() => date.getFullYear());
  }, [year]);

  return (
    <div className={classes.section_wrapper}>
      <div className={classes.heading}>
        <h1 className={classes.heading__primary}>Welcome</h1>
        <h3 className={classes.heading__secondary}>
          to my <span>portfolio</span>
        </h3>
        <p className={classes.copy_text}>© Renan Tiscoski {year}</p>
      </div>
    </div>
  );
}

export default Home;
