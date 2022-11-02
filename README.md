# Memoteca 💭 | Learning Angular 14

A place to keep your thoughts and favorite quotes.

| :placard: Vitrine.Dev |     |
| -------------  | --- |
| :sparkles: Nome        | **Memoteca**
| :label: Tecnologias | Angular
| :rocket: URL         | 
| :fire: Curso     | https://www.alura.com.br/curso-online-angular-explorando-framework

![](https://user-images.githubusercontent.com/19349339/199535812-3ba61fa6-8f6a-48f7-997f-c4fea3baaef3.png#vitrinedev)

## Project Details

This project was developed in order to learn the basics of Angular 14. It has two pages: one to create a thought/quote and another to list all thoughts/quotes saved, which can also be edited and removed. Data is stored in a local JSON Server.

Pages are in English, but the code and comments are in Portuguese.

![Screenshot of the application, showing a list of quotes/thoughts](https://user-images.githubusercontent.com/19349339/199535412-23de427a-0591-43f3-adf6-7c0b3407e3d2.png)

## Credits

This project was developed in the first [Angular 14 course](https://www.alura.com.br/curso-online-angular-explorando-framework) from [Alura](https://www.alura.com.br).

**Instructor**: 
- **[Nayanne Batista](https://www.linkedin.com/in/nayannebatista/)**

# How to run this project
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.7. The local server uses JSON server version 0.17.0.

If you don't have Angular CLI installed, run the following command in a terminal:

`npm install -g @angular/cli`

After cloning/downloading the code, open a terminal, go to the project's root folder and run the following command to install all necessary dependencies:

`npm install`

Next, go to `/backend` folder and run `npm install` again to install JSON server:

## Development server

You'll have to keep two terminals opened, one for JSON server and another for the development server (where the application will run).

In the first terminal, go to `/backend` folder and start JSON server using `npm start`. The server will use port 3000 to run.

In the second terminal, go to the project's root folder and run `ng serve`. Navigate to `http://localhost:4200/` to open the application. The application will automatically reload if you change any of the source files.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# What I've learned
Angular is a robust framework that eases the steps necessary to develop a Web Application. 

You can easily create components by running `ng generate component name-of-the-component` (shortcut: `ng g c name-of-the-component`) and Angular will provide you CSS, HTML and Typescript files, and will also update the necessary files for your component to be available throughout the app.

During this course, I've learned several concepts:

- how to install Angular CLI and use it to create and run a project;

- how to create components and a service;

- the file structure of a component and the responsibilies of a template (HTML file) and the component itself (TypeScript file);

- use property binding (`[]`) to pass values from a component to its template;

- use interpolation (`{{}}`) to display values in the template;

- use event binding (`(event-name)`) to add events to an HTML tag;

- use `[(ngModel)]` for a two-way communication between the component and its template;

- create and configure page navigation using `RouterModule`, `Routes`, `ActivatedRoute` and `<router-outlet>`;

- Angular directives to add more features into the HTML files: `ngFor`, `ngIf` and `ngClass`;

- how Angular deals with dependency injection and how to use Decorators to add dependency injection between components and service (`@Injectable`).

- how to perform CRUD operations using `HttpClient` and `Observable`.