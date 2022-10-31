import { useState } from "react"

export default function SingleCoffee({entireObject}) {
    const [favorite, setFavorite] = useState(false)
    let favoriteTest = false

    // const exampleProps = {
    //     description : 'dfgjujyh',
    //     name: 'Cafe Cubano',
    //     price: 'Mucho Mula'
    // }
    // const  {description, name, price} = exampleProps // destructuring

    // const person = {
    //     name: 'Jon',
    //     family: true,
    //     age: 34,
    // }

    //const name = person.name

    //const {name, family, age}

    //console.log('props here-> ',props)// the entire props object
    // each single coffee get its own state
    return(
        <div className="menu-items__item" style={{ backgroundColor: favorite ? 'red' : 'white' }}>
        <img 
        src={entireObject.image}
        alt="" 
        />
        <div>
          <h3> {entireObject.name} </h3>
          <span>Price: {entireObject.price}</span>
          <p>{entireObject.description}</p>
          <button onClick={() => setFavorite(true)}>Favorite</button>
        </div>
      </div>
       
    )
}