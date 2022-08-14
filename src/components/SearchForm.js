import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
	var { setSearchTerm } = useGlobalContext();
	var searchValue = React.useRef(null);

	var searchCocktail = () => {
		setSearchTerm(searchValue.current.value);
	};

	React.useEffect(() => {
		searchValue.current.focus();
	}, []);

	return (
		<section className="section search">
			<form className="search-form" onSubmit={(e) => e.preventDefault()}>
				<div className="form-control">
					<label htmlFor="name">search your favorite cocktail</label>
					<input
						type="text"
						id="name"
						ref={searchValue}
						onChange={searchCocktail}
						// autoFocus
					/>
				</div>
			</form>
		</section>
	);
};

export default SearchForm;
