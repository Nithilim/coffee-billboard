using Domain.Coffee;
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
        private readonly ICoffeeListService _service;

        public CoffeeListController(ICoffeListService service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<ActionResult<List<Coffee>>> CoffeeList()
        {

        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Coffee>> Detail(Guid id)
        {

        }

        [HttpPost]
        public async Task<ActionResult<bool>> Create()
        {
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(Guid id)
        {
        }
    }
}
