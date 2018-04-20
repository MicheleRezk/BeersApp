import { Labels } from "./labels.model";
import { Available } from "./available.model";

export class Beer {
  constructor(
    public id: string,
    public name: string,
    public nameDisplay: string,
    public description: string,
    public abv: number,
    public availableId: number,
    public available: Available,
    public labels: Labels,
    public displayImage: string
  ) { }
}
