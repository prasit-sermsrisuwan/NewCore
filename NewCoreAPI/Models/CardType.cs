using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace NewCoreAPI.Models
{
    public partial class CardType
    {
        [Key]
        public int CardTypeId { get; set; }

        [Required]
        public string CardTypeName { get; set; }
    }
}
