using System;
using System.Collections.Generic;
using System.Text;

namespace BeersApp.Application.Interfaces
{
    public interface IBreweryDbService
    {
        BreweryDbClient Client { get;}
    }
}
