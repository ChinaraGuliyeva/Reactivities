using Application.Activities.DTO;
using AutoMapper;
using Domain;
using FluentValidation;
using MediatR;
using Persistence;

namespace Application.Activities.Comands
{
    public class Create
    {
        public class Command : IRequest <string>
        {
            public required CreateActivityDto ActivityDTO { get; set; }
        }

        public class Handler(DataContext context, IMapper mapper, IValidator<Command> validator) : IRequestHandler<Command, string>
        {
            public async Task<string> Handle(Command request, CancellationToken cancellationToken)
            {

                var activity = mapper.Map<Activity>(request.ActivityDTO);

                context.Activities.Add(activity);

                await context.SaveChangesAsync(cancellationToken);
                
                return activity.Id;
            }
        }
    }
}
