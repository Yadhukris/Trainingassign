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
    public class allocationresController : ControllerBase
    {
        private readonly SampleDbContext _context;

        public allocationresController(SampleDbContext context)
        {
            _context = context;
        }

        // GET: api/allocationres
        [HttpGet]
        public async Task<ActionResult<IEnumerable<allocationres>>> Getallocationres()
        {
            return await _context.allocationres.ToListAsync();
        }

        // GET: api/allocationres/5
        [HttpGet("{id}")]
        public async Task<ActionResult<allocationres>> Getallocationres(int id)
        {
            var allocationres = await _context.allocationres.FindAsync(id);

            if (allocationres == null)
            {
                return NotFound();
            }

            return allocationres;
        }

        // PUT: api/allocationres/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> Putallocationres(int id, allocationres allocationres)
        {
            if (id != allocationres.Resid)
            {
                return BadRequest();
            }

            _context.Entry(allocationres).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!allocationresExists(id))
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

        // POST: api/allocationres
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<allocationres>> Postallocationres(allocationres allocationres)
        {
            _context.allocationres.Add(allocationres);
            await _context.SaveChangesAsync();

            return CreatedAtAction("Getallocationres", new { id = allocationres.Resid }, allocationres);
        }

        // DELETE: api/allocationres/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Deleteallocationres(int id)
        {
            var allocationres = await _context.allocationres.FindAsync(id);
            if (allocationres == null)
            {
                return NotFound();
            }

            _context.allocationres.Remove(allocationres);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool allocationresExists(int id)
        {
            return _context.allocationres.Any(e => e.Resid == id);
        }
    }
}
