feb 24, 2022

ecommerce website from tutorial:
    Next.js Course: Full ECommerce Website By Nextjs [2021]
    https://www.youtube.com/watch?v=3kYkEVIZNZY&t=2821s&ab_channel=CodingwithBasir

    by Coding with Basir

This completes the free content. To finish the project with 
admin panel and other features, it would be necessary to go to 
udemy and pay $15.99.

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
The site can be returned to normal function by deleting the cookies
at Web Developer Tools -> Storage

current working logins in the online DB, and mock buyer email & password, 
are in the .env file


