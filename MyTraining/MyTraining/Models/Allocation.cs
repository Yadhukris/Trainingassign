using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MyTraining.Models
{
    public class Allocation
    {
        [Key]

        public int Aid { get; set; }
      
        public string Techname { get; set; }


        public string SuggestedTrainer { get; set; }

        [DataType(DataType.Date)]
        public string Startdate { get; set; }
        [DataType(DataType.Date)]
        public string Enddate { get; set; }

        [Required]
        [DataType(DataType.Date)]
        public string StartTime { get; set; }

        [Required]
        [DataType(DataType.Date)]
        public string EndTime { get; set; }


        public string Duration { get; set; }

    }
}
