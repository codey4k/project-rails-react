//index view

class Index extends React.Component {
    render () {
        return (
            <div className="index">
                <div className="hero">
                    <img src="<%= asset_url('assets/image.jpg') %>"/>
                    <h2>Happy hacking!</h2>
                </div>
                <Main />
            </div>
        )
    }
}

