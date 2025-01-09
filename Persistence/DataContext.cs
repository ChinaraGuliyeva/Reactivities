using Microsoft.EntityFrameworkCore;
using Domain;

namespace Persistence
{
    public class DataContext(DbContextOptions options) : DbContext(options)
    {
        public DbSet<Activity> Activities { get; set; }
    }
}
