
import "./Nav.css";

function Nav() {

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          className="nav__logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRawRe0teFSEAWgdSzNp7s-E_XRl_p61unPKRTJi4keEg&s"
          alt="logo-image"
        />

        <img
          className="nav__avatar"
          src="https://a0.anyrgb.com/pngimg/1140/162/user-profile-login-avatar-heroes-user-blue-icons-circle-symbol-logo.png"
          alt="avatar_photo"
        />
      </div>
    </div>
  );
}

export default Nav;
