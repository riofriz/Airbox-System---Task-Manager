## Hello Airbox Systems,
The api provided was not working, so I opted for using mock data.
I was going to use some random data found on the internet when I noticed the yaml file also had a POST call.

I am not sure if that was required, but I ended up creatinga mock api and connected it all to a free instance of mongoDB.
I figured it wouldn't hurt to show some extra effort.

This means you'll need to edit the `.env.local` file with the mongoDB string.
I will send Charlie the user/password for it, but for localhost, the `.env.local` file should look like this:

```.env
DB_ACCESS=mongodb+srv://<USERNAME>:<PASSWORD>@cluster0.e6tzl3y.mongodb.net/?retryWrites=true&w=majority
ENVIRONMENT=http://localhost:3000
```

Obviously please edit the environemnt variable accordingly in case you use a different port from `:3000`.

I tried to go through all the optional tasks, however I really am not sure how I'd use Redux in such a small application,
I am more than happy to discuss what the advantages of using Redux in an application would be during the code review phase 
of the interview.

I did not have enough time during the weekend to create every single API endpoint described in the yaml file, but I am sure 
this should be enough to showcase some level of understanding of the task.

## How to start locally

```bash
yarn
yarn dev
```

I hope I met expectations and I am looking forward to hear more from you.
Fernando.