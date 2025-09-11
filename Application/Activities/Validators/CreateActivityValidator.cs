
using System;
using Application.Activities.Comands;
using FluentValidation;

namespace Application.Activities.Validators
{
    public class CreateActivityValidator : AbstractValidator<Create.Command>
    {
        public CreateActivityValidator(){
            RuleFor(x => x.ActivityDTO.Title).NotEmpty().WithMessage("Title is required");
            RuleFor(x => x.ActivityDTO.Description).NotEmpty().WithMessage("Description is required");
        }
    }
}
