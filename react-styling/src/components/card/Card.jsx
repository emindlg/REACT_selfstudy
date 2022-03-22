import "./Card.scss";

const Card = ({veriler}) => {
  return (
    <div className="container">

        {veriler.map((eleman)=>{
            //! Destructuring..........
            const {id, countries, capital,img, population} = eleman;
            
            
            return (
                <div className="card" key={id}>
                    <h1>{countries}</h1>
                    <img src={img} alt=""/>
                    <h2>{capital}</h2>
                    <h4>{population}</h4>

                    <button className="card--small">SMALL</button>
                    <button className="card--large">LARGE</button>
                </div>
            )
        })}

    </div>
  )
}

export default Card
