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
