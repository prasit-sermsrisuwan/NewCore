using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NewCoreAPI.Models;

namespace NewCoreAPI.Controllers
{
    [ApiController]
    [Route("/[controller]")]
    public class CardController : ControllerBase
    {
        private readonly CreditCardsContext _context;
        public CardController(CreditCardsContext context)
        {
            _context = context;
        }

        // GET: Card
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Card>>> GetCards()
        {
            return await _context.Cards.ToListAsync();
        }

        // GET: Card/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Card>> GetCard(int id)
        {
            var card = await _context.Cards.FindAsync(id);

            if (card == null) return NotFound();

            return card;
        }

        // POST: Card
        [HttpPost]
        public async Task<ActionResult<Card>> CreateCard(Card card)
        {
            _context.Cards.Add(card);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetCard), new {id = card.CardId}, card);
        }

        // PUT: Card/{id}
        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateCard(int id, Card card)
        {
            if(id != card.CardId) return BadRequest();

            _context.Entry(card).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if(!CardExists(id)) return NotFound();
                else throw;
            }

            return NoContent();
        }

        // DELETE: Card/{id}
        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteCard(int id)
        {
            var card = await _context.Cards.FindAsync(id);

            if(card == null) return NotFound();

            _context.Cards.Remove(card);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CardExists(int id)
        {
            return _context.Cards.Any(e => e.CardId == id);
        }
    }
}