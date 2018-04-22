# BeersApp
BeersApp is a Single Page Application which integrate with BreweryDb Services to List Beers, so you can preview,search, filter, sort beers
- Solution consist of these projects:
	. BeersApp.Domain (For Models like Beer)
	. BeersApp.Application (For Business Logic which Integerate with BreweryDB)
	. BeersApp.Application.Tests (For Testing Business Logic)
	. BeersApp.Web (The web Application which developed using .Net Core 2.1 For API services Layer and Angular App Supported By CLI For the ClientSide)

## To run this app you have to:
1- Install .Net Core 2.1 Preview (https://blogs.msdn.microsoft.com/dotnet/2018/02/27/announcing-net-core-2-1-preview-1/)
2- Install npm Packages
3- Change APIKey in "BreweryDBSettings" section in appsettings.json and in Config file in BeersApp.Application.Tests Project with your key 

##Beers List - with filter and sort
![Beers List - with filter and sort](https://lh6.googleusercontent.com/BAS5qim0gWYahGpf4vtjSfpjwd1_L1u1_tLuhOUhICtBBS2BABu9t_OX2bApm49OPvhkzAG1BNNV8A=w1366-h637-rw)

##Beer Search
![Beer Search](https://lh3.googleusercontent.com/u_CfnMCZ3es7KCMdaVBYcwL_dS-FzieUogahTp_yD9bk0QQpNbNYUuQAMSHvudaA9E_3RpqQN5ZjHCYntxSA=w1366-h637-rw)

##Beer Details
![Beer Details](https://lh4.googleusercontent.com/FHhf67OvtN9K7JqiJDM089FLIR3MSuiUli1UZMpL5C-F5BccNnkyXtPir9vOSwV7zrRYYPA2CMJ7Vx6w9F_9=w1366-h637-rw)