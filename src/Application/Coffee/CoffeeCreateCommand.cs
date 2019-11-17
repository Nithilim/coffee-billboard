using MediatR;

namespace Application.Coffee
{
    public class CoffeeCreateCommand : IRequest {
        public string Name { get; set; }

        public string Description { get; set; }

        public float Price { get; set; }

        public string Currency { get; set; }
    }
}
