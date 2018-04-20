export class ResponseWrapper {
  constructor(
    public message: string,
    public status: string,
    public currentPage: number,
    public numberOfPages: number,
    public totalResults: number
  ) { }
}
