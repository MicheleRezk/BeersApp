import { ResponseWrapper } from "./response-wrapper.model";
import { Beer } from "./beer.model";


export class BeerListResponseWrapper extends ResponseWrapper
{
  public data : Beer[]
}
