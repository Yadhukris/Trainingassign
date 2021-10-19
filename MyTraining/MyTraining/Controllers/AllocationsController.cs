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
    public class AllocationsController : ControllerBase
    {
        private readonly SampleDbContext _context;

        public AllocationsController(SampleDbContext context)
        {
            _context = context;
        }

        // GET: api/Allocations
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Allocation>>> GetAllocations()
        {
            return await _context.Allocations.ToListAsync();
        }

        //// GET: api/Allocations/5
        //[HttpGet("{id}")]
        //public async Task<ActionResult<Allocation>> GetAllocation(int id)
        //{
        //    var allocation = await _context.Allocations.FindAsync(id);

        //    if (allocation == null)
        //    {
        //        return NotFound();
        //    }

        //    return allocation;
        //}

        [HttpGet("{id}")]
        public async Task<IEnumerable<Allocation>> GetAllocation(int id)
        {
            IEnumerable<Allocation> reports;

            reports = _context.Allocations.Where(t => t.Aid == id).ToList();

            return reports.AsQueryable();
        }

        // PUT: api/Allocations/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAllocation(int id, Allocation allocation)
        {
            if (id != allocation.Aid)
            {
                return BadRequest();
            }

            _context.Entry(allocation).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AllocationExists(id))
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

        // POST: api/Allocations
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Allocation>> PostAllocation(Allocation allocation)
        {
            _context.Allocations.Add(allocation);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAllocation", new { id = allocation.Aid }, allocation);
        }

        // DELETE: api/Allocations/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAllocation(int id)
        {
            var allocation = await _context.Allocations.FindAsync(id);
            if (allocation == null)
            {
                return NotFound();
            }

            _context.Allocations.Remove(allocation);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AllocationExists(int id)
        {
            return _context.Allocations.Any(e => e.Aid == id);
        }
    }
}
