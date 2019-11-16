using Application;
using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.Coffee
{
    public class Coffee : BaseModel
    {
        public string Name { get; set; }

        public string Description { get; set; }

        public float Price { get; set; }

        public string Currency { get; set; }
    }
}
