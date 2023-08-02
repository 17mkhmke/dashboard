import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="https://i.postimg.cc/ZqwxgxYx/91b4604c-ae89-430d-82fb-185269f1d132.jpg" alt="" />
        {/* <span>lamadmin</span> */}
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icon" />
        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="https://i.postimg.cc/52RFpgVW/3ab8143f-1f60-4882-8d60-83b1c5aef8f8.jpg"
            alt=""
          />
          <span>Mkhuseli</span>
        </div>
        <img src="/settings.svg" alt="" className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
