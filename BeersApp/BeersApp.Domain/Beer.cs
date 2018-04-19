using System;

namespace BeersApp.Domain
{
    public class Beer
    {
        #region Properites
        public string Id { get; set; }
        public string Name { get; set; }
        public string NameDisplay { get; set; }
        public string Description { get; set; }
        public double Abv { get; set; }
        public int AvailableId { get; set; }
        public Available Available { get; set; }
        public Labels Labels { get; set; }
        #endregion
    }
}
