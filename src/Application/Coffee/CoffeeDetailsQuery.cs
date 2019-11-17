using Domain.Models;
using MediatR;
using System;

namespace Application.Coffee
{
    public class CoffeeDetailsQuery : IRequest<CoffeeModel> {
        public Guid Id { get; }

        public CoffeeDetailsQuery(Guid id) {
            Id = id;
        }
    }
}
