# Hide'n'seek: The App

## Structure
The app is structured in a modular fashion.
The following description shows what the folders and files are used for:

### Server-side
- bin: Houses the actual server executable.
- conf: Common configurations like couchbase host and a like
- gulpfile.js: Serves as a gulpfile and hides the runnable [gulp](http://gulpjs.com/) tasks and configurations.
- routes: Defines the routes available in the app
- schema: The schemas that define the data structures to persist. Even though we're in a document db it makes sense to have some kind of schema
- services: Houses business logic and helper services
- views: The main templates to be rendered by the server
- app.js: Requires the necessary dependencies for the webserver to run and configures it's services. 

### Both
- node_modules: Houses all dependencies even the frontend dependencies.
- packages.json: Describes the dependencies needed for the production and for the development environments.

### Client-side
- public: Document root which houses the assets like stylesheets, images, web fonts and client-side javascript
- src: All source files for the client can be found here. These are compiled for the actual usage on the frontend

## Editorconfig
Editorconfig is used to override editor settings. This is done to keep a single coding-style through out a project and to prevent 
horrible mixtures of tabs and spaces and so one.
This can be very helpful for specifing a company-wide coding style for a specific language.

## Gitignore
I didn't check in all dependencies, because I didn't want to bloat my repository.
There are use cases where checking in dependencies is helpful and quicker to get started but in this 
case I opted to not check them in.
Dependencies are defined in the ```package.json``` file and have a version lock.
