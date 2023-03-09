import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events/:e_id"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              EventsDetails
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events/:e_id/edit"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Edit event
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events/newEvent"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              new events
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
