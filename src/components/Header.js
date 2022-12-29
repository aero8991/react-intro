import reactLogo from "../images/logo512.png"

export default function Header(){
    return (
      <header>
        <nav className="nav-all">
          <img className='nav-img' src={reactLogo}/>
          <ul className="nav-items">
              <li>Pricing</li>
              <li>About</li>
              <li>Contact</li>
          </ul>
        </nav>
      </header>
    );
  }


