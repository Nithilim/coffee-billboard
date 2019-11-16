using Domain.Models;
using MediatR;
using Persistence;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Coffee
{
    public class CoffeeRemoveHandler : IRequestHandler<CoffeeRemoveCommand> {
        private readonly InMemoryRepository<CoffeeModel> _repository;

        public CoffeeRemoveHandler(InMemoryRepository<CoffeeModel> repository) {
            _repository = repository;
        }

        public async Task<Unit> Handle(CoffeeRemoveCommand request, CancellationToken cancellationToken) {
            var item = await _repository.Find(request.Id);
            if (item != null)
                throw new Exception($"Failed to remove item with {request.Id}");

            _repository.Remove(request.Id);
            return Unit.Value;
        }
    }
}
