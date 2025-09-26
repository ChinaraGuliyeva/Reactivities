using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Core
{
    public class AppException(int statusCode, string messge, string? details)
    {
        public int StatusCode { get; set; } = statusCode;
        public string Message { get; set; } = messge;

        public string? Details { get; set; } = details;
        
    }
}
