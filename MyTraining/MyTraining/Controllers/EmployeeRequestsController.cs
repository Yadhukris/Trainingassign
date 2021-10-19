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
    public class EmployeeRequestsController : ControllerBase
    {
        private readonly SampleDbContext _context;

        public EmployeeRequestsController(SampleDbContext context)
        {
            _context = context;
        }

        // GET: api/EmployeeRequests
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EmployeeRequest>>> GetEmpreq()
        {
            return await _context.Empreq.ToListAsync();
        }

        // GET: api/EmployeeRequests/5
        [HttpGet("{id}")]
        public async Task<ActionResult<EmployeeRequest>> GetEmployeeRequest(int id)
        {
            var employeeRequest = await _context.Empreq.FindAsync(id);

            if (employeeRequest == null)
            {
                return NotFound();
            }

            return employeeRequest;
        }

        // PUT: api/EmployeeRequests/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEmployeeRequest(int id, EmployeeRequest employeeRequest)
        {
            if (id != employeeRequest.Rid)
            {
                return BadRequest();
            }

            _context.Entry(employeeRequest).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmployeeRequestExists(id))
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

        // POST: api/EmployeeRequests
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<EmployeeRequest>> PostEmployeeRequest(EmployeeRequest employeeRequest)
        {
            _context.Empreq.Add(employeeRequest);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEmployeeRequest", new { id = employeeRequest.Rid }, employeeRequest);
        }

        // DELETE: api/EmployeeRequests/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmployeeRequest(int id)
        {
            var employeeRequest = await _context.Empreq.FindAsync(id);
            if (employeeRequest == null)
            {
                return NotFound();
            }

            _context.Empreq.Remove(employeeRequest);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool EmployeeRequestExists(int id)
        {
            return _context.Empreq.Any(e => e.Rid == id);
        }
    }
}
