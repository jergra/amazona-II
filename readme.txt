feb 24, 2022

C:\dev\amazona-II

ecommerce website from tutorial:
    Next.js Course: Full ECommerce Website By Nextjs [2021]
    https://www.youtube.com/watch?v=3kYkEVIZNZY&t=2821s&ab_channel=CodingwithBasir

    by Coding with Basir

This completes the free content. To finish the project with 
admin panel and other features, it would be necessary to go to 
udemy and pay $15.99.

The complete project cloned is at:
    C\dev\nozama

Some changes have been made to this clone.

start:
    npm run dev 

When making a mock paypal purchase, you need to use a fictional
email and a fictional password, which are found at developer.paypal.com,
where you sign into the Dashboard then go to Sandbox -> Accounts
-> there are 2 business and 2 personal accounts.  The business
accounts are sellers, the personal accounts are buyers, so use
one of the personal accounts to make a mock purchase.

To see the current contents of the local database:    
    open MongoDB Compass -> Connect -> amazona-II

Project is currently connected to online MongoDB. MongoDB Compass can also
be used to look at the contents of the online MongoDB, or you can go to the 
MongoDB website. To change back to local MongoDB, make change in .env

There are issues with cookies that cause the site to malfunction.
The localhost:3000 site can be returned to normal function by deleting the cookies
at Web Developer Tools -> Storage

Getting the deployed site to return to normal after malfunction seemed
to be more complicated, so I took down the deployed site.

current working logins in the online DB, and mock buyer email & password, 
are in the .env file





How to set up MongoDB online:

Sign in to MongoDB
New Project
Name Your Project
Create Project
Build a Database
Shared -> Create
Create Cluster
How would you like to authenticate your connection? -> Username and Password
Create User
Where would you like to connect from? -> My Local Environment
Add entries to your IP Access List
IP Address
    0.0.0.0/0
Description
    Everywhere access
Add Entry
Finish and Close
Go to Databases
Connect
Connect your application
Copy connection string
    e.g. mongodb+srv://jergra43:<password>@cluster0.kadgj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
replace <password> with your password
replace 'myFirstDatabase' with a name for your database
Paste this connection string into MongoDB Compass
Press connect
Paste the same connection string into .env:
    MONGODB_URI=mongodb+srv://jergra43:<password>@cluster0.kadgj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

A youtube video which presents this mongodb online connection:
    Svelte Tutorial: Full Stack Svelte [2/2]: Authentication - Routing (Mongo, Passport, Node, Express)
    https://www.youtube.com/watch?v=Lg69Xtf-XAA

    by Esteban Codes

    timestamp for mongodb instructions:
        3:22