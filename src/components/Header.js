/* eslint-disable jsx-a11y/anchor-is-valid */
function Header() {

    const menus = [
        {
            name: 'Home'
        },
        {
            name: 'Contact'
        },
        {
            name: 'About'
        }
    ];
    
    const listMenu = menus.map((item, index) => (<li className="nav-item" key={index}><a className="nav-link">{item.name}</a></li>))

    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        {listMenu}
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    );
}

export default Header;
