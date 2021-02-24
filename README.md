# BeersApp
BeersApp is a Single Page Application which integrate with BreweryDb Services to List Beers, so you can preview,search, filter, sort beers
- Solution consist of these projects:
	. BeersApp.Domain (For Models like Beer)
	. BeersApp.Application (For Business Logic which Integerate with BreweryDB)
	. BeersApp.Application.Tests (For Testing Business Logic)
	. BeersApp.Web (The web Application which developed using .Net Core 2.1 For API services Layer and Angular App Supported By CLI For the ClientSide)

## To run this app you have to:
1. Install .Net Core 2.1 Preview (https://blogs.msdn.microsoft.com/dotnet/2018/02/27/announcing-net-core-2-1-preview-1/)
2. Install npm Packages
3. Change APIKey in "BreweryDBSettings" section in appsettings.json and in Config.cs file in BeersApp.Application.Tests Project with your key 

* **Beers List - with filter and sort**
![Beers List - with filter and sort](https://drive.google.com/uc?id=1p9sJdgIvjoOTg0VdYVZTkzPT1OEoJxOY)

* **Beer Search**
![Beer Search](https://drive.google.com/uc?id=1IsMVx70Z0IWXbgXpC88xOMdFgSz7wrAn)

* **Beer Details**
![Beer Details](https://drive.google.com/uc?id=1_UydDYEdkdXzPiECxfOIDbqB43UYRUdP)
[solution](BeersApp/BeersApp.sln)
