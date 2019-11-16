using Persistence;
using CoffeeModel = Domain.Models.Coffee;
using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;

namespace Application.Coffee
{
    public class CoffeeListService
    {
        private readonly InMemoryRepository<CoffeeModel> _repository;

        public CoffeeListService(InMemoryRepository<CoffeeModel> repository)
        {
            _repository = repository;
        }

        public IQueryable<CoffeeModel> GetAllCoffeeItems()
        {
            var items = _repository.Collection();
            if (items.Any())
                throw new Exception($"No Items were found");

            return items;
        }

        public CoffeeModel GetCoffeeItem(Guid id)
        {
            var item = _repository.Find(id);
            if (item == null)
                throw new Exception($"Item with id ${id} was not found");

            return item;
        }

        public void RemoveCoffeeItem(Guid id)
        {
            var item = _repository.Find(id);
            if (item != null)
                _repository.Remove(id);
        }

        public IQueryable<CoffeeModel> GenerateData()
        {
            return new List<CoffeeModel>().AsQueryable();
        }
    }
}
