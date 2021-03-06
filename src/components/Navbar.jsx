import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faArrowAltCircleRight,
  fa1,
  fa2,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ isLoggedIn }) => {
  return (
    <>
      {isLoggedIn ? (
        <div className='d-flex flex-row-reverse'>
          <NavLink to='/logout'>
            {/* <FontAwesomeIcon
              className='logoutIcon'
              icon={faArrowAltCircleRight}
              color='black'
              size='3x'
            /> */}
          </NavLink>
          <NavLink to='/createNote'>
            <FontAwesomeIcon
              className='loginIcon'
              icon={faPlus}
              color='black'
              size='3x'
            />
          </NavLink>
        </div>
      ) : (
        <div className='d-flex flex-row-reverse'>
          <NavLink to='/login'>
            <FontAwesomeIcon
              className='logoutIcon'
              icon={fa1}
              color='black'
              size='3x'
            />
          </NavLink>
          <NavLink to='/register'>
            {/* <FontAwesomeIcon
              className='registerIcon'
              icon={fa2}
              color='black'
              size='3x'
            /> */}
          </NavLink>
        </div>
      )}
    </>
  );
};

export default Navbar;
