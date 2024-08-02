<<<<<<< HEAD
# UserMangement

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
=======
# User-Management
Features:

Header Component: A fixed header that provides easy navigation and quick access to the main features of the application.

Paginated User List: Displays users in a paginated format, fetching data dynamically from the API.

User Details: Detailed view of user information, including avatar, first name, last name, and email.

Search Functionality: Allows users to search through the entire user base efficiently.

Spinner Component: Displays a loading spinner while fetching data, enhancing user experience.

Caching Mechanism: Implements caching to avoid redundant HTTP requests and optimize performance.
Project Structure


Shared Module (module1):

Components:
spinner component: Displays a loading spinner.

header component: Provides a consistent header for the application.

Services:
shared.service.ts: Contains shared logic and utilities.

Module:
shared.module.ts: Configures shared components and services.


Users Module (module2):
Components:
all-users component: Displays the paginated list of all users.

user component: Represents an individual user card.

Services:

user.service.ts: Manages API calls related to user data.

Module:
users.module.ts: Configures user-related components and services.


