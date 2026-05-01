# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!



Name: Soohwan Jeon

1. I would not use only a unit test to test the full message feature because sending a message involves multiple parts working together, such as the text input, send button, backend/database, and receiving user interface. A unit test is better for testing one small function in isolation. The full message feature would be better tested with integration or end-to-end testing.

2. Yes, I would use a unit test to test the max message length feature because it can be checked as a small isolated piece of logic. For example, I can test that a string longer than 80 characters is rejected and a string with 80 or fewer characters is accepted.

