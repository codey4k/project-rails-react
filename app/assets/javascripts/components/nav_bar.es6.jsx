//navBar component

class NavBar extends React.Component {
    render() {
        const a = ['home','blog', 'about'],
              list = a.map( i => <a href='#'>{i}</a> )
        return(
            <div className="navBar">
                <h2>Logo</h2>
                <nav className="nav">
                    {list}
                </nav>
            </div>
        )
    }
}