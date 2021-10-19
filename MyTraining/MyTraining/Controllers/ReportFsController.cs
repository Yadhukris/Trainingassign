using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyTraining.Models;

namespace MyTraining.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReportFsController : ControllerBase
    {
        private readonly SampleDbContext _context;

        public ReportFsController(SampleDbContext context)
        {
            _context = context;
        }

        // GET: api/ReportFs
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ReportF>>> GetReportFs()
        {
            return await _context.ReportFs.ToListAsync();
        }

        // GET: api/ReportFs/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ReportF>> GetReportF(int id)
        {
            var reportF = await _context.ReportFs.FindAsync(id);

            if (reportF == null)
            {
                return NotFound();
            }

            return reportF;
        }




        // PUT: api/ReportFs/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutReportF(int id, ReportF reportF)
        {
            if (id != reportF.Rid)
            {
                return BadRequest();
            }

            _context.Entry(reportF).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ReportFExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ReportFs
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ReportF>> PostReportF(ReportF reportF)
        {
                _context.ReportFs.Add(reportF);
                await _context.SaveChangesAsync();



            return CreatedAtAction("GetReportF", new { id = reportF.Rid }, reportF);
        }

        // DELETE: api/ReportFs/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteReportF(int id)
        {
            var reportF = await _context.ReportFs.FindAsync(id);
            if (reportF == null)
            {
                return NotFound();
            }

            _context.ReportFs.Remove(reportF);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ReportFExists(int id)
        {
            return _context.ReportFs.Any(e => e.Rid == id);
        }
    }
}
