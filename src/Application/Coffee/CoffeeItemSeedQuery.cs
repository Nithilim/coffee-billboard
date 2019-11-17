using Domain.Models;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Coffee {
    public class CoffeeItemSeedQuery : IRequest<List<CoffeeModel>> {
    }
}
