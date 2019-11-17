using Domain.Models;
using MediatR;
using Persistence;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Coffee
{
    public class CoffeeDetailsHandler : IRequestHandler<CoffeeDetailsQuery, CoffeeModel> {
        private readonly InMemoryRepository<CoffeeModel> _repository;

        public CoffeeDetailsHandler(InMemoryRepository<CoffeeModel> repository) {
            _repository = repository;
        }

        public async Task<CoffeeModel> Handle(CoffeeDetailsQuery request, CancellationToken cancellationToken) {
            var item = await _repository.Find(request.Id);
            if (item == null)
                throw new Exception($"Item with id ${request.Id} was not found");

            return item;
        }
    }
}
