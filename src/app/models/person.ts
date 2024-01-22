import { Child } from "./child";

export interface Person {
  name: string,
  lastname: string,
  children?: Child[]
}
