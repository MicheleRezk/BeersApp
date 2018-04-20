import { ResponseWrapper } from "./response-wrapper.model";
import { Beer } from "./beer.model";


export class BeerDetailsResponseWrapper extends ResponseWrapper {
  public data: Beer
}
