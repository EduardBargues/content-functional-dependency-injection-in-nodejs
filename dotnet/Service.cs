using Microsoft.Extensions.Logging;

namespace api
{
    public interface IService
    {
        User GetUser();
    }

    public class Service : IService
    {
        private readonly IRepository _repository;
        private readonly IEmailSender _emailSender;
        private readonly ILogger<Service> _logger;

        public Service(IRepository repository, IEmailSender emailSender, ILogger<Service> logger)
        {
            _repository = repository;
            _emailSender = emailSender;
            _logger = logger;
        }

        public User GetUser()
        {
            _logger.LogInformation($"service: get-user");
            var user = _repository.GetUser("eduard");
            _emailSender.SendWelcomeEmail(user.Email);
            return user;
        }
    }
}