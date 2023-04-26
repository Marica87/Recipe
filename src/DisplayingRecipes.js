import galka from './gal.png'

function DisplayingRecipes({label, image, category, calories, ingredientLines}) {
    return (
        <div className="constainer">
            <h2>{label}</h2>
            <img className="pic" src={image} alt="recipe" />
            <h3>Category: {category}</h3>
            <p>{calories.toFixed()} calories</p>
            <ul>
                {ingredientLines.map(element => (
                    <li><img src={galka} width="30px" alt='galka' />{element}</li>
                ))}
            </ul>
        </div>
    )
}

export default DisplayingRecipes;