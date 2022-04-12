using DomProject_WebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DomProject_WebApi.Repository
{
    internal static class Extensions
    {
        public static void SetTraceValues(this Traceable traceable)
        {
            traceable.LastWriteDate = DateTime.Now;

            if (!traceable.CreationDate.HasValue)
                traceable.CreationDate = traceable.LastWriteDate;
        }

        public static void SetUpdateValues(this Traceable traceable)
        {
            traceable.LastWriteDate = DateTime.Now;
        }
    }
}
