using System;
using System.Collections.Generic;
using System.Text;

namespace BeersApp.Domain
{
    public class ResponseWrapper<T>
    {
        public string Message { get; set; }
        public T Data { get; set; }
        public string Status { get; set; }
        public int CurrentPage { get; set; }
        public int NumberOfPages { get; set; }
        public int TotalResults;
    }
}
