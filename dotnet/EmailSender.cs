using System;
using Microsoft.Extensions.Logging;

namespace api
{
    public interface IEmailSender
    {
        void SendWelcomeEmail(string email);
    }

    public class EmailSender : IEmailSender
    {
        private readonly ILogger<EmailSender> _logger;
        public EmailSender(ILogger<EmailSender> logger)
        {
            _logger = logger;
        }
        public void SendWelcomeEmail(string email)
        {
            _logger.LogInformation($"email-sender: send-welcome-email {email}");
        }
    }
}