using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MyTraining.Models
{
    public class allocationres
    {
        [Key]
        public int Resid { get; set; }

        public int Aid { get; set; }
        public string Empid { get; set; }

        public string Ename { get; set; }

        public string status { get; set; }
    }
}
