using Newtonsoft.Json;
using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace BeersApp.Application
{
    /// <summary>
    /// Responsible for calling API Services of BreweryDb
    /// </summary>
    public class BreweryDbClient
    {
        #region Properites
        public string AppKey { get; private set; }
        public const string BaseAPIAddress = "https://api.brewerydb.com/v2/";

        #endregion

        #region Constructors
        public BreweryDbClient(string key)
        {
            AppKey = key;
        }
        #endregion

        #region Functions
        /// <summary>
        /// Download Resource as Generic Type in asynchronous Operation
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="url">Url of the Resource</param>
        /// <returns>Result as Generic Type</returns>
        public async Task<T> DownloadSerializedJsonDataAsync<T>(string url) where T : new()
        {
            using (var httpClient = new HttpClient())
            {
                httpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                var jsonData = string.Empty;
                try
                {
                    jsonData = await httpClient.GetStringAsync(url);
                }
                catch (Exception)
                {
                    return default(T);
                }
                return !string.IsNullOrEmpty(jsonData) ? JsonConvert.DeserializeObject<T>(jsonData) : default(T);
            }
        }
        #endregion

    }
}
