using Application.Coffee;
using Domain.Models;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace API.Controllers {

    [Route("api/RandomSeed")]
    [ApiController]
    public class CoffeeRandomSeed {
        private readonly IMediator _mediator;

        public CoffeeRandomSeed(IMediator mediator) {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<ActionResult<List<CoffeeModel>>> List() {
            var list = await _mediator.Send(new CoffeeItemSeedQuery());
            return list;
        }
    }
}
