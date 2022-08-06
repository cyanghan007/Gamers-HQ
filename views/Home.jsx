const React = require('react');



const myStyle = {
    color: '#F0FF33',
    backgroundImage: "url('https://cdn.wallpapersafari.com/0/71/pB3goh.jpg')",
    backgroundSize: "cover",
    backgroundRepeat: "no repeat",
    height: "100vh"
  }
  
  const myStyle2 = {
    display: "flex",
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'flexStart',
    flexDirection: 'column',
  }

class Index extends React.Component {
    render() {
        const { console } = this.props
            return(    
                <div style={{...myStyle,...myStyle2 }}>
                    <h1>Welcome to H1-Gaming</h1><br/>
                    <h2>Select a console to view</h2><br/>
                        <a href="/consoles"><button>Click</button></a>                   
                </div>     
        )
    };
};

module.exports = Index;