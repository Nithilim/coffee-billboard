using Domain.Models;
using MediatR;
using Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Coffee
{
    public class CoffeeListHandler : IRequestHandler<CoffeeListQuery, List<CoffeeModel>> {
        private readonly InMemoryRepository<CoffeeModel> _repository;

        public CoffeeListHandler(InMemoryRepository<CoffeeModel> repository) {
            _repository = repository;
        }

        public async Task<List<CoffeeModel>> Handle(CoffeeListQuery request, CancellationToken cancellationToken) {
            var items = await _repository.Collection();
            if (!items.Any())
                throw new Exception($"No Items were found");

            return items;
        } 
    }
}
