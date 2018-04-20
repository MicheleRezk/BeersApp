using BeersApp.Application.Interfaces;
using BeersApp.Domain;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BeersApp.Application.Services
{
    /// <summary>
    /// responsible for beer services like search
    /// </summary>
    public class BeerServices : IBreweryDbService
    {
        #region Properites
        public BreweryDbClient Client { get; private set; }
        #endregion

        #region Constructors
        public BeerServices(BreweryDbClient breweryDbClient)
        {
            Client = breweryDbClient;
        }
        #endregion

        #region Functions
        /// <summary>
        /// List All Beers (50 Beer Per Page) 
        /// </summary>
        /// <param name="pageNumber">Page Number</param>
        /// <param name="order">Order By</param>
        /// <param name="sort">Sort Direction</param>
        /// <returns></returns>
        public async Task<ResponseWrapper<List<Beer>>> GetAll(int pageNumber = 1, string order = "name", string sort="asc", int availableId = -1)
        {
            var url = $"{BreweryDbClient.BaseAPIAddress}beers?withBreweries=y&p={pageNumber}&order={order}&sort={sort}&key={Client.AppKey}";
            if(availableId!=-1)//then filter by available Id
            {
                url += $"&availableId={availableId}";
            }
            return await Client.DownloadSerializedJsonDataAsync<ResponseWrapper<List<Beer>>>(url);
        }
        /// <summary>
        /// Get Beer Details By ID
        /// </summary>
        /// <param name="beerId"></param>
        /// <returns></returns>
        public async Task<ResponseWrapper<Beer>> GetDetailsByID(string beerId)
        {
            var url = $"{BreweryDbClient.BaseAPIAddress}beer/{beerId}?withBreweries=y&key={Client.AppKey}";
            return await Client.DownloadSerializedJsonDataAsync<ResponseWrapper<Beer>>(url);
        }
        #endregion
    }
}
