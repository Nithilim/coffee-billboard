using Application.Coffee;
using Domain.Models;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers
{
    [Route("/api/[controller]")]
    [ApiController]
    public class CoffeeListController
    {
        private readonly IMediator _mediator;

        public CoffeeListController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async ActionResult<List<CoffeeModel>> CoffeeList()
        {

        }

        [HttpGet("{id}")]
        public async ActionResult<CoffeeModel> Detail(Guid id)
        {

        }

        [HttpPost]
        public async ActionResult Create()
        {
        }

        [HttpDelete("{id}")]
        public async ActionResult Delete(Guid id)
        {
        }
    }
}
