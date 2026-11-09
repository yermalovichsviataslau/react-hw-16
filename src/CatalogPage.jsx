import { NavLink } from "react-router"

function CatalogPage(){
  const items =[{id: 1, text: 'товар-1'}, {id: 2, text: 'товар-2'}, {id: 3, text: 'товар-3'}]
  return(
    <>
      <p>CatalogPage</p>
      {
        items.map(item=> <NavLink to={`/product/${item.id}`} key={item.id}>{item.text}</NavLink>)
      }
      
    </>
  )
}

export default CatalogPage