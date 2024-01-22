import { Movie } from "./movie";
import { Person } from "./person";

export interface Child extends Person{
  age: number,
  amountOfMovies: number,
  movies: Movie[]
}
