using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace api
{
    public interface IRepository
    {
        User GetUser(string userName);
    }

    public class User
    {
        public string Name { get; set; }
        public string Email { get; set; }
    }

    public class DBConfig
    {
        public string ConnectionString { get; set; }
    }

    public class Repository : IRepository
    {
        private readonly DBConfig _dbConfig;
        private readonly ILogger<Repository> _logger;

        public Repository(IOptions<DBConfig> conf, ILogger<Repository> logger)
        {
            _dbConfig = conf.Value;
            _logger = logger;
        }

        public User GetUser(string userName)
        {
            _logger.LogInformation($"repository: get-user {userName}");
            return new User() { Name = userName, Email = $"{userName}@gmail.com" };
        }
    }
}
