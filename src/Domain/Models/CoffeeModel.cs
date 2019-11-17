namespace Domain.Models
{
    public class CoffeeModel : BaseModel
    {
        public string Name { get; set; }

        public string Description { get; set; }

        public float Price { get; set; }

        public string Currency { get; set; }

        public string ImageUrl { get; set; }
    }
}
