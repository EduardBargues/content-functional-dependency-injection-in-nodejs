using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace api
{
    [ApiController]
    [Route("[controller]")]
    public class DotnetController : ControllerBase
    {
        private readonly IService _dependency;
        private readonly ILogger<DotnetController> _logger;

        public DotnetController(IService dependency, ILogger<DotnetController> logger)
        {
            _dependency = dependency;
            _logger = logger;
        }

        [HttpGet]
        public IActionResult Get()
        {
            _logger.LogInformation($"dotnet-controller: GET");
            var user = _dependency.GetUser();
            return Ok(user);
        }
    }
}