# DropPing

DropPing is a small notifier that watches domain activity and alerts you when something important changes, especially when a domain becomes available or appears to have dropped.

## Expected features

- Watch one or more domains.
- Run simple domain availability checks.
- Fetch domain registration data when needed.
- Save the last known state of a domain.
- Compare the current state with the previous snapshot.
- Detect important changes such as availability, registrar changes, or name server changes.
- Send notifications to Discord first.
- Run automatically on a schedule with GitHub Actions.


## Checklist

### Foundation

- [x] Initialize the Node.js + TypeScript starter with ES module syntax
- [x] Choose a simple way to define the domain to watch
- [x] Print the result of one real domain check

### Domain monitoring

- [ ] Fetch basic RDAP or registration data
- [ ] Save the latest domain snapshot
- [ ] Compare the current snapshot with the previous snapshot
- [ ] Detect one simple change and print it
- [ ] Detect when a domain may be available or dropped

### Notifications

- [ ] Send a basic Discord webhook message
- [ ] Move the webhook URL into an environment variable

### Automation

- [ ] Add a GitHub Actions workflow
- [ ] Schedule checks to run automatically
- [ ] Store secrets in GitHub Actions secrets
