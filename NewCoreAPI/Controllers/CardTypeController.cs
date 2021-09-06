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
    public class CardTypeController : ControllerBase
    {
        private readonly CreditCardsContext _context;

        public CardTypeController(CreditCardsContext context)
        { 
            _context = context;
        }

        // GET: CardType
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CardType>>> GetCardTypes() 
        {
            return await _context.CardTypes.ToListAsync();
        }

        // GET: CardType/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<CardType>> GetCardType(int id)
        {
            var cardType = await _context.CardTypes.FindAsync(id);
            
            if (cardType == null) return NotFound();

            return cardType;
        }

        // POST: CardType
        [HttpPost]
        public async Task<ActionResult<CardType>> CreateCardType(CardType cardType)
        {
            _context.CardTypes.Add(cardType);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetCardType), new {id = cardType.CardTypeId}, cardType);
        }

        // PUT: CardType/{id}
        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateCardType(int id, CardType cardType)
        {
            if(id != cardType.CardTypeId) return BadRequest();

            _context.Entry(cardType).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if(!CardTypeExists(id)) return NotFound();
                else throw;
            }

            return NoContent();
        }

        // DELETE: CardType/{id}
        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteCardType(int id)
        {
            var cardType = await _context.CardTypes.FindAsync(id);
            
            if (cardType == null) return NotFound();

            _context.CardTypes.Remove(cardType);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CardTypeExists(int id)
        {
            return _context.CardTypes.Any(e => e.CardTypeId == id);
        }
    }
}
