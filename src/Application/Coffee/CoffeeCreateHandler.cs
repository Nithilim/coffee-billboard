using Domain.Models;
using MediatR;
using Persistence;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Coffee
{
    public class CoffeeCreateHandler : IRequestHandler<CoffeeCreateCommand> {
        private readonly InMemoryRepository<CoffeeModel> _repository;

        public CoffeeCreateHandler(InMemoryRepository<CoffeeModel> repository) {
            _repository = repository;
        }

        public async Task<Unit> Handle(CoffeeCreateCommand request, CancellationToken cancellationToken) {
            var item = new CoffeeModel
            {
                Currency = request.Currency,
                Name = request.Name,
                Description = request.Description,
                Price = request.Price
            };

            await _repository.Add(item);
            return Unit.Value;
        }
    }
}
