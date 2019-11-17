using Domain.Models;
using MediatR;
using System.Collections.Generic;

namespace Application.Coffee
{
    public class CoffeeListQuery : IRequest<List<CoffeeModel>>
    {
    }
}
