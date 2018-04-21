using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using BeersApp.Application.Services;
using NUnit.Framework;

namespace BeersApp.Application.Tests
{
    [TestFixture()]
    public class BeerServicesTests
    {
        [Test()]
        public async Task GetAll_Should_Success_Return_FirstPage()
        {
            //Arrange
            var client = new BreweryDbClient(Config.AppKey);
            var beerServices = new BeerServices(client);

            //Act
            var response = await beerServices.GetAll();

            //Assert
            Assert.IsTrue(response.Status == "success");
            Assert.IsTrue(response.CurrentPage == 1);
        }
        [Test()]
        public async Task GetAll_With_PageNumber_Should_Return_Right_Page()
        {
            //Arrange
            var client = new BreweryDbClient(Config.AppKey);
            var beerServices = new BeerServices(client);
            int pageNumber = 3;

            //Act
            var response = await beerServices.GetAll(pageNumber);

            //Assert
            Assert.IsTrue(response.Status == "success");
            Assert.IsTrue(response.CurrentPage == pageNumber);
        }
        [Test()]
        public async Task GetDetailsByID_Should_Return_Correct_Beer()
        {
            //Arrange
            var client = new BreweryDbClient(Config.AppKey);
            var beerServices = new BeerServices(client);
            string beerId = "eqcXWb";

            //Act
            var response = await beerServices.GetDetailsByID(beerId);
            var beer = response.Data;
            //Assert
            Assert.IsTrue(response.Status == "success");
            Assert.IsNotNull(beer);
            Assert.AreEqual(beer.Id, beerId);
        }

        [Test()]
        public async Task Search_Should_Return_Correct_Results()
        {
            //Arrange
            var client = new BreweryDbClient(Config.AppKey);
            var beerServices = new BeerServices(client);
            string keyword = "london";

            //Act
            var response = await beerServices.Search(keyword);
            var beers = response.Data;
            //Assert
            Assert.IsTrue(response.Status == "success");
            Assert.IsTrue(response.CurrentPage == 1);
            Assert.IsTrue(response.NumberOfPages >= 1);
            Assert.IsTrue(beers.Count >= 1);
        }
    }
}
