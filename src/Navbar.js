import {Link} from "react-router-dom"
export default function Navbar(){
    return(
    <nav className="navbar navbar-expand-lg  navbar-light bg-light">
    <div className="container-fluid">
        <Link to="/" className="navbar-brand">DeeNews</Link>
        <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/news">News</Link>
        <Link className="nav-link" to="/news/new">Add News</Link>
      </div>
    </div>
        
  </div>
</nav>
    )
}