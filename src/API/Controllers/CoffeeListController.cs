using Application.Coffee;
using Domain.Models;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace API.Controllers
{
    [Route("/api/[controller]")]
    [ApiController]
    public class CoffeeListController
    {
        private readonly IMediator _mediator;

        public CoffeeListController(IMediator mediator) {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<ActionResult<List<CoffeeModel>>> CoffeeList() {
            var list = await _mediator.Send(new CoffeeListQuery());
            return list;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<CoffeeModel>> Detail(Guid id) {
            var details = await _mediator.Send(new CoffeeDetailsQuery(id));
            return details;
        }

        [HttpPost]
        public async Task<Unit> Create(CoffeeCreateCommand command) {
            return await _mediator.Send(command);
        }

        [HttpDelete("{id}")]
        public async Task<Unit> Delete(Guid id) {
            return await _mediator.Send(new CoffeeRemoveCommand(id));
        }
    }
}
