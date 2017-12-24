//index view

class Index extends React.Component {
    render () {
        const src = '<%= asset_path("images/image.jpg") %>'
        return (
            <div className="index">
                <div className="hero">
                    <h2>Happy hacking!</h2>
                </div>
                <Main />
            </div>
        )
    }
}

