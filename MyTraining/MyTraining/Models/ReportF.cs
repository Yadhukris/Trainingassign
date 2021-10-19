using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MyTraining.Models
{
    public class ReportF
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
        [DataType(DataType.Date)]
        public string Enddate { get; set; }

 
        public string Status { get; set; }

        public string Comment { get; set; }


        public string TrainingMode { get; set; }
    }
}
