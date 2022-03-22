const newStyle = {

    parag:{
        color: "blue",
        fontSize: "2rem",
        fontWeight: "bolder"},

    div:{
        backgroundColor: "gray",
        fontSize: "2.4rem"
    }
    
}

const Inline = () => {
  return (
    <div>

        <div style={{backgroundColor: "gray", color: "#fff"}}>
            <h1>
             Hello from Inline CSS
            </h1>
        </div>
        <div style={newStyle.div}>
            <p style={newStyle.parag}>New Paragraph</p>
        </div>

    </div>
  )
}

export default Inline
