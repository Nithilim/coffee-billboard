﻿using Domain.Models;
using MediatR;
using Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Coffee {
    public class CoffeeItemSeedHandler : IRequestHandler<CoffeeItemSeedQuery, List<CoffeeModel>> {
        private readonly InMemoryRepository<CoffeeModel> _repository;

        public CoffeeItemSeedHandler(InMemoryRepository<CoffeeModel> repository) {
            _repository = repository;
        }

        public async Task<List<CoffeeModel>> Handle(CoffeeItemSeedQuery request, CancellationToken cancellationToken) {
            var items = new List<CoffeeModel>();
            for (int i = 0; i < 10; i++)
                items.Add(CreateRandomItem());

            await _repository.AddRange(items);
            _repository.Commit();
            return items;
        }

        private CoffeeModel CreateRandomItem() {
            return new CoffeeModel
            {
                Name = GenerateRandomName(),
                Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eleifend congue quam et blandit." +
                " Phasellus blandit malesuada iaculis. Quisque non.",
                Currency = "Eur",
                Price = GenerateRandomPrice(),
                ImageUrl= "https://cdn.pixabay.com/photo/2015/10/12/14/54/coffee-983955_960_720.jpg"
            };
        }

        private string GenerateRandomName() {
            var random = new Random();
            string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

            return new string(Enumerable.Repeat(chars, 8)
              .Select(s => s[random.Next(s.Length)]).ToArray());
        }

        private float GenerateRandomPrice() {
            var random = new Random();
            var num = random.NextDouble() * 12;
            return (float)Math.Round(num, 2);
        }
    }
}
