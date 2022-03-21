import Button from './button';

function Main({tempDataProp}) {



  return (
    <div >
        {tempDataProp.length}
        <p>Birthday Today</p>
        <ul>
        {

            tempDataProp.map((item)=>{
                const {id, name, age, img} = item
                return (
                    <li className='birthday-people' key={id}>
                        <div className='person-image'>
                            <img src={img} />
                        </div>
                        <div className='person-info'>
                            <h1>{name}</h1>
                            <p>{age} years</p>
                        </div>
                    </li>
                )
            })
        }
        </ul>
        
        <Button className="clear-button">Clear All</Button>
    </div>
  )
}

export default Main;


