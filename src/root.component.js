import React from 'react';
import classes from './root.component.module.css';

const fullYear = new Date().getFullYear();


export default function Root() {
  return (
    <footer className={classes.footer}>
      <nav>
        <ul className={classes.links}>
          {/* <li className={classes.link}>
            <div>Anand Raja</div>
          </li> */}
          <li className={classes.link}>
            <div>&copy; {fullYear}. All rights reserved</div>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

// export default function Root(props) {
//   return <section>{props.name} is mounted!</section>;
// }