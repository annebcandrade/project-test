import { Link } from "react-router-dom";


const Menu = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-sucess">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/" >
        <span>GITHUB USERS</span>
                </Link>

        </div>
      </nav>
      
    )
}

export default Menu;