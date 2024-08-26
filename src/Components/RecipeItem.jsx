import React from 'react'

const RecipeItem = ({title , calories , image, url}) => {
  return (
    <>
  <div className ="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px"}}>
  <img src={image} className = "card-img-top" alt="Image of the food"/>
  <div className = "card-body">
    <h5 className = "card-title">{title.slice(0.50)}</h5>
    <p className = "card-text">{calories?calories:"calories are not entailed"}</p>
    <a href={url} className = "btn btn-primary">Read More</a>
  </div>
</div>
    </>
)}

export default RecipeItem;