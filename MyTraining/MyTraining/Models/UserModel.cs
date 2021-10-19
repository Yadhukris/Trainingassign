using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MyTraining.Models
{
    public class UserModel
    {   
        [Key]
        public string Empid { get; set; }

        public string Ename { get; set; }

        public string Password { get; set; }


    }
}
