import React, { useEffect } from "react";
// import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
import { useGlobalContext } from "../context";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
	var { getSingleCocktail } = useGlobalContext();
	// var [loading, setLoading] = React.useState(false);
	// var [cocktail, setCocktail] = React.useState(null);

	var { id } = useParams();

	// var fetchCocktail = async () => {
	// 	setLoading(true);
	// 	try {
	// 		var response = await fetch(`${url}${id}`);
	// 		var data = await response.json();
	// 		// console.log(data);
	// 		if (data.drinks) {
	// 			var {
	// 				strDrink: name,
	// 				strDrinkThumb: image,
	// 				strAlcoholic: info,
	// 				strCategory: category,
	// 				strGlass: glass,
	// 				strInstructions: instructions,
	// 				strIngredient1,
	// 				strIngredient2,
	// 				strIngredient3,
	// 				strIngredient4,
	// 				strIngredient5,
	// 			} = data.drinks[0];
	// 			var ingredients = [
	// 				strIngredient1,
	// 				strIngredient2,
	// 				strIngredient3,
	// 				strIngredient4,
	// 				strIngredient5,
	// 			];
	// 			var newCocktail = {
	// 				name,
	// 				image,
	// 				info,
	// 				category,
	// 				glass,
	// 				instructions,
	// 				ingredients,
	// 			};
	// 			setCocktail(newCocktail);
	// 			console.log(newCocktail);
	// 		}
	// 	} catch (error) {
	// 		console.log(error);
	// 		setCocktail(null);
	// 	}
	// 	setLoading(false);
	// };

	// React.useEffect(() => {
	// 	fetchCocktail();
	// }, [id]);

	// useEffect(() => {
	// 	setCocktail(getSingleCocktail(id));
	// }, [getSingleCocktail, id]);

	var cocktail = getSingleCocktail(id);

	var { name, image, info, category, glass, instructions, ingredients } =
		cocktail;

	return (
		<section className="section cocktail-section">
			<Link to="/" className="btn btn-primary">
				back home
			</Link>
			<h2 className="section-title">{name}</h2>
			<div className="drink">
				<img src={image} alt={name}></img>
				<div className="drink-info">
					<p>
						<span className="drink-data">name :</span> {name}
					</p>
					<p>
						<span className="drink-data">category :</span> {category}
					</p>
					<p>
						<span className="drink-data">info :</span> {info}
					</p>
					<p>
						<span className="drink-data">glass :</span> {glass}
					</p>
					<p>
						<span className="drink-data">instructons :</span> {instructions}
					</p>
					<p>
						<span className="drink-data">ingredients :</span>
						{ingredients.map((item, index) => {
							return item ? <span key={index}> {item}</span> : null;
						})}
					</p>
				</div>
			</div>
		</section>
	);
};

export default SingleCocktail;
