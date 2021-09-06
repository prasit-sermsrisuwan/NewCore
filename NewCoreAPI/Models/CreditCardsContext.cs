using System;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace NewCoreAPI.Models
{
    public partial class CreditCardsContext : DbContext
    {
        public CreditCardsContext()
        {
        }

        public CreditCardsContext(DbContextOptions<CreditCardsContext> options) : base(options)
        {
        }

        public virtual DbSet<Card> Cards { get; set; }
        public virtual DbSet<CardType> CardTypes { get; set; }
    }
}
