using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BeersApp.Domain
{
    /// <summary>
    /// Settings of BreweryDB API
    /// </summary>
    public class BreweryDBSettings
    {
        public string APIKey { get; set; }
        public string BaseAPIAddress { get; set; }
    }
}
