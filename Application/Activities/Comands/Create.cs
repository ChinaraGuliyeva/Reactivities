using Application.Activities.DTO;
using Application.Core;
using AutoMapper;
using Domain;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Activities.Comands
{
    public class Create
    {
        public class Command : IRequest<Result<string>>
        {
            public required CreateActivityDto ActivityDTO { get; set; }
        }

        public class Handler(DataContext context, IMapper mapper, IValidator<Command> validator) : IRequestHandler<Command, Result<string>>
        {
            public async Task<Result<string>> Handle(Command request, CancellationToken cancellationToken)
            {

                var activity = mapper.Map<Activity>(request.ActivityDTO);

                context.Activities.Add(activity);

                var result = await context.SaveChangesAsync(cancellationToken) > 0;

                if (!result) return Result<string>.Failure("Failed to create the activity", 400);

                return Result<string>.Success(activity.Id);
            }
        }
    }
}
