//navBar component
// import React from 'react'

class NavBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            alto : 80,
            background : 'transparent'
        }
        this.scrollHandler = this.scrollHandler.bind(this)
    }
    
    componentDidMount(){
        window.addEventListener('scroll',this.scrollHandler)
    }
    
    componentWillUnmount(){
        window.removeEventListener('scroll',this.scrollHandler)
    }
    
    scrollHandler() {
        let scroll = document.documentElement.scrollTop || document.body.scrollTop
        
        scroll >= 200 ?
        this.setState({
            alto : 60,
            background : 'tomato'
        }) :
        
        this.setState({
            alto : 80,
            background : 'transparent'
        })
    }
    
    render() {
        const styles = {
            height : this.state.alto,
            background : this.state.background
        }
        
        const a = ['home','blog', 'about'],
              list = a.map( i => <a href='#'>{i}</a> )
              
        return(
            <div className="navBar" style={styles}>
                <div className="navBar__container">
                    <h2>Logo</h2>
                    <nav className="nav">
                        {list}
                    </nav>
                </div>
            </div>
        )
    }
}