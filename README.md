## 1. Things Learnt about Next.js in this project:

    a. _app.js:
        - Load all the pages props and is the top file in the file hierarchy
        - If there is a global settings, set it in this file

        - Demonstration: We set ThemeProvider for the state management of this
            whole app in this file

    b. useContext() for state management in Next.js:

        - See _app.js
        - See ./context/ThemeProvider.js
        - See ./pages/journals/home.js for how to get and set
            state with useContext()

        - Learn how to do state management with this video:
            https://www.youtube.com/watch?v=5LrDIWkK_Bc&t=368s&ab_channel=WebDevSimplified

## 2. Other things learnt in this project:

    a. Prettier for code formatting setting in VS Code:
        File -> Preferences -> Settings (for Windows)
        Code -> Preferences -> Settings (for Mac)

        Search for "Editor: Default Formatter" > Chooose Prettier as default formatter

        Go to Settings again > search for "Format On Save" > check the check box

        => Then code will be formatted on save

    b. Fetching Data in getServerSideProps(), getStaticProps() or getStaticPaths():
        - Cannot make a call requet to the api route because these functions
            run on the server itself
        - Will have to connect to database and fetch the data like a server code
        - We can also make a request to an outside api, but not internally

        See getServerSideProps() in ./pages/accounting/home

    c. Props Data  from getServerSideProps():
        - Props Data from getServerSideProps has to be stringify then parsed in
            the actual components. Otherwise, there will be error message

        See getServerSideProps() in ./pages/accounting/home

    d. Error: Cannot overwrite model once compiled
        - Same error as this link:
            https://stackoverflow.com/questions/62440264/mongoose-nextjs-model-is-not-defined-cannot-overwrite-model-once-compiled

        - Solution:
            See ./models/accounting/Journal.js

        - Explain solution:
            if the model is existed, when the site rebuild, we don't define
                a new model with all the same schema
            This issue happened due to next.js re-build model when it got
                reload after a file is saved
