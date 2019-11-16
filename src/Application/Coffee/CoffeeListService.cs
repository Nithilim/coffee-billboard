using Persistence;
using CoffeeModel = Domain.Models.Coffee;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Coffee
{
    public class CoffeeListService
    {
        private readonly InMemoryRepository<CoffeeModel> _repository;

        public CoffeeListService(InMemoryRepository<CoffeeModel> repository)
        {
            _repository = repository;
        }
    }
}
