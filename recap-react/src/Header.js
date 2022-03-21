const pStyle ={
    fontFamily: "Tahoma",
    color: "yellow"
}


function Header () {
    return (
    <div style={{backgroundColor: "purple", color: "white", textAlign: "center"}}>
        <h1>CLARUSWAY</h1>
        <h2 style={pStyle}>Reinvent your way</h2>
    </div>
        
    )}


export default Header;