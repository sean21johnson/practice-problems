const movieRatings =
  "Interstellar,8.6,Sci-Fi;The Dark Knight,9.0,Action;Inception,8.8,Sci-Fi";

const output = [
  { title: "Interstellar", rating: 8.6, genre: "Sci-Fi" },
  { title: "The Dark Knight", rating: 9.0, genre: "Action" },
  { title: "Inception", rating: 8.8, genre: "Sci-Fi" },
];

// Transform the movieRatings string into an array of objects
// Ensure the rating is changed into a number type
// Consider edge cases
// BONUS: add an optional second paramater that can filter the movies by genre

/*
  SOLUTION:
    -Split the string into an array using the ";" character
    -Use the reduce method to build a new array of objects
      -For each element in the array, again use the split method with ","
      -Destructure the resulting array into [title, rating, genre];
      -Create a new object and push it onto the accumulator
      -If there is no title, rating or genre, add a generic "No data supplied" type message
*/

function classifyMovies(input, filter = "") {
  const movies = input.split(";");

  const classifiedMovies = movies
    .reduce((acc, movie) => {
      let [title, rating, genre] = movie.split(",");

      if (!title.length) {
        title = "No title provided";
      }
      if (!genre.length) {
        genre = "No genre provided";
      }

      const movieDetails = {
        title,
        rating: rating.length ? Number(rating) : "No rating provided",
        genre,
      };

      acc.push(movieDetails);

      return acc;
    }, [])
    .filter((movie) => {
      if (filter.length) {
        return movie.genre === filter;
      } else {
        return movie;
      }
    });

  return classifiedMovies;
}

console.log(classifyMovies(movieRatings, "Sci-Fi"));
