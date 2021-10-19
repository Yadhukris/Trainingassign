using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MyTraining.Models;

namespace MyTraining.Models
{
    public class SampleDbContext:DbContext
    {
        public SampleDbContext(DbContextOptions<SampleDbContext>options):base(options)
        {
            
        }

        public DbSet<UserModel> UserModels { get; set; }
        public DbSet<EmployeeRequest> Empreq { get; set; }

        public DbSet<ReportF> ReportFs { get; set; }

        public DbSet<Allocation> Allocations { get; set; }

        public DbSet<MyTraining.Models.allocationres> allocationres { get; set; }


    }
}
