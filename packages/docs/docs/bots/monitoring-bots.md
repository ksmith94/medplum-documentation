# Monitoring Bots

Bots allow for powerful functionality in your app, so it is very important to track what exactly each bot has done. This is possible using a bot's `AuditEvent` resources, which track each time the bot runs.

## Checking the Events of a Bot

To monitor your bots, navigate to the Bot resource page at https://app.medplum.com/Bot. This page will display all of the bots that are a part of your project.

Choose which bot's events you would like to view and click on that it, bringing you to the bot resource page.

From this page, navigate to the `Event` tab. This tab will display all of the `AuditEvent` resources associated with the current bot. These events represent every time the bot has been run or triggered.

On the Event tab, there are four fields: ID, Outcome, Outcome Description, and Last Updated.
