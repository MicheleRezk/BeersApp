using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BeersApp.Application.Services;
using BeersApp.Domain;
using Microsoft.AspNetCore.Mvc;

namespace BeersApp.Web.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class BeersController : Controller
    {
        #region Fields
        private readonly BeerServices _BeerServices = null;
        #endregion

        #region Constructors
        public BeersController(BeerServices beerServices)
        {
            _BeerServices = beerServices;
        }
        #endregion

        #region HTTP GET

        // GET: /api/beers/details-by-id?beerId=eqcXWb
        [HttpGet("details-by-id")]
        public async Task<Beer> GetDetailsById([FromQuery] string beerId)
        {
            var response = await _BeerServices.GetDetailsByID(beerId);
            return response.Data;
        }

        // GET: /api/beers/list
        // GET: /api/beers/list?page=2
        // GET: /api/beers/list?page=2&order=name
        // GET: /api/beers/list?page=2&order=name&sort=desc
        [HttpGet("list")]
        public async Task<ResponseWrapper<List<Beer>>> List([FromQuery] int page =1,[FromQuery] string order = "name", [FromQuery] string sort ="asc")
        {
            var response = await _BeerServices.GetAll(page, order, sort);
            return response;
        }
        #endregion
    }
}
