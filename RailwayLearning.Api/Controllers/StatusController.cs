using Microsoft.AspNetCore.Mvc;

namespace RailwayLearning.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class StatusController : ControllerBase
{
    [HttpGet]
    public IActionResult Get()
    {
        return Ok(new
        {
            application = "Railway Learning App",
            status = "online",
            environment = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT")
                           ?? "Unknown",
            serverTime = DateTime.UtcNow
        });
    }
}