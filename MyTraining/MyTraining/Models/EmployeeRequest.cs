using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MyTraining.Models
{
    public class EmployeeRequest
    {
        [Key]

        public int Rid { get; set; }
        public string Empid { get; set; }

        public string Ename { get; set; }

        public string Techname { get; set; }


        public string SuggestedTrainer { get; set; }

        public int NumberofPart { get; set; }

        [DataType(DataType.Date)]
        public string Startdate { get; set; }

        public string Status { get; set; }


    }
}
