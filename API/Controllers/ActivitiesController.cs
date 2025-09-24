using Application.Activities.Comands;
using Application.Activities.DTO;
using Application.Activities.Queries;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class ActivitiesController : BaseApiController
    {

        [HttpGet] //api/activities
        public async Task<ActionResult<List<Activity>>> GetActivities(CancellationToken ct)
        {
            return await Mediator.Send(new List.Query(), ct);
        }

        [HttpGet("{id}")] //api/activities/id

        public async Task<ActionResult<Activity>> GetActivity(string id)
        {
            return HandleResult(await Mediator.Send(new Details.Query { Id = id }));            
        }

        [HttpPost]
        public async Task<ActionResult<string>> CreateActivity(CreateActivityDto activityDto)
        {
            return HandleResult(await Mediator.Send(new Create.Command { ActivityDTO = activityDto }));
        }

        [HttpPut("{id}")]

        public async Task<IActionResult> EditActivity(Activity activity)
        {
            return HandleResult(await Mediator.Send(new Edit.Command{ Activity = activity }));
        }

        [HttpDelete("{id}")]

        public async Task<IActionResult> DeleteActivity(string id)
        { 
            return HandleResult(await Mediator.Send(new Delete.Command { Id = id }));
 
        }
    }
}
