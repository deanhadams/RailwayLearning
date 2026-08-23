using Microsoft.AspNetCore.Mvc;

namespace RailwayLearning.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class HelloController : ControllerBase
{
    [HttpGet]
    public IActionResult Get()
    {
        return Ok(new
        {
            message = "Hello from ASP.NET Core!",
            status = "online"
        });
    }
}