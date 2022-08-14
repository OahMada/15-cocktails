import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	var [loading, setLoading] = useState(true);
	var [searchTerm, setSearchTerm] = useState("a");
	var [cocktails, setCocktails] = useState([]);

	var fetchDrinks = async () => {
		setLoading(true);
		try {
			var response = await fetch(`${url}${searchTerm}`);
			var { drinks } = await response.json();
			// console.log(drinks);
			// console.log(!drinks);
			if (drinks) {
				var cocktailArray = drinks.map((item) => {
					// var { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
					// 	item;
					// return {
					// 	id: idDrink,
					// 	name: strDrink,
					// 	image: strDrinkThumb,
					// 	info: strAlcoholic,
					// 	glass: strGlass,
					// };
					var {
						idDrink: id,
						strDrink: name,
						strDrinkThumb: image,
						strAlcoholic: info,
						strCategory: category,
						strGlass: glass,
						strInstructions: instructions,
						strIngredient1,
						strIngredient2,
						strIngredient3,
						strIngredient4,
						strIngredient5,
					} = item;
					var ingredients = [
						strIngredient1,
						strIngredient2,
						strIngredient3,
						strIngredient4,
						strIngredient5,
					];
					return {
						id,
						name,
						image,
						info,
						category,
						glass,
						instructions,
						ingredients,
					};
				});
				setCocktails(cocktailArray);
			}
			if (!drinks) {
				setCocktails([]);
			}
			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};

	var getSingleCocktail = (id) => {
		var singleCocktail = cocktails.find((item) => item.id == id);
		// console.log(singleCocktail);
		return singleCocktail;
	};
	useEffect(() => {
		fetchDrinks();
	}, [searchTerm]);

	// console.log(cocktails);
	return (
		<AppContext.Provider
			value={{ loading, cocktails, setSearchTerm, getSingleCocktail }}
		>
			{children}
		</AppContext.Provider>
	);
};
// make sure use
export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
