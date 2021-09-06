using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

#nullable disable

namespace NewCoreAPI.Models
{
    public partial class Card
    {
        [Key]
        public int CardId { get; set; }

        [Required]
        public int CardTypeId { get; set; }

        [Required]
        public string CardOwnerName { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(16)")]
        public string CardNumber { get; set; }

        [Required]
        public string ExpieryDate { get; set; }

        [Required]
        public string SecurityNumber { get; set; }
    }
}
