using MediatR;
using System;

namespace Application.Coffee
{
    public class CoffeeRemoveCommand : IRequest {
        public Guid Id { get; }

        public CoffeeRemoveCommand(Guid id) {
            Id = id;
        }
    }
}
