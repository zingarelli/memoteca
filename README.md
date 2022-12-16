# Memoteca 💭 | Learning Angular 14

[Veja esta página em português](#detalhes-do-projeto)

A place to keep your thoughts and favorite quotes.

| :placard: Vitrine.Dev |     |
| -------------  | --- |
| :sparkles: Nome        | **Guarde seus pensamentos na Memoteca**
| :label: Tecnologias | Angular
| :rocket: URL         | 
| :fire: Curso     | https://www.alura.com.br/curso-online-angular-explorando-framework

![](https://user-images.githubusercontent.com/19349339/199535812-3ba61fa6-8f6a-48f7-997f-c4fea3baaef3.png#vitrinedev)

## Project Details

This project was developed in order to learn the basics of Angular 14. It has two pages: one to create a thought/quote and another to list all thoughts/quotes saved, which can also be edited and removed. Data is stored in a local JSON Server.

Pages are in English, but the code and comments are in Portuguese.

### Page overview

![gif showing a list of saved quotes/thoughts](https://user-images.githubusercontent.com/19349339/208193488-ba93018a-6aea-47a6-a4cb-5f0c41d7948b.gif)

### Adding a new item

![gif showing the process of adding a new quote/thought](https://user-images.githubusercontent.com/19349339/208194956-67458849-20ce-40b4-9267-8f8811a54064.gif)

### Editing an item

![gif showing the process of editing a quote/thought](https://user-images.githubusercontent.com/19349339/208195027-20bce146-4fa2-4561-9ed0-236e34006186.gif)

### Deleting an item

![gif showing the process of deleting a quote/thought](https://user-images.githubusercontent.com/19349339/208195018-3e074385-5d36-4395-9dc8-877c72073078.gif)

## Credits

This project was developed in the first [Angular 14 course](https://www.alura.com.br/curso-online-angular-explorando-framework) from [Alura](https://www.alura.com.br).

**Instructor**: 
- **[Nayanne Batista](https://www.linkedin.com/in/nayannebatista/)**

## How to run this project
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.7. The local server uses JSON server version 0.17.0.

If you don't have Angular CLI installed, run the following command in a terminal:

`npm install -g @angular/cli`

After cloning/downloading the code, open a terminal, go to the project's root folder and run the following command to install all necessary dependencies:

`npm install`

Next, go to `/backend` folder and run `npm install` again to install JSON server:

### Development server

You'll have to keep two terminals opened, one for JSON server and another for the development server (where the application will run).

In the first terminal, go to `/backend` folder and start JSON server using `npm start`. The server will use port 3000 to run.

In the second terminal, go to the project's root folder and run `ng serve`. Navigate to `http://localhost:4200/` to open the application. The application will automatically reload if you change any of the source files.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## What I've learned
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

- how Angular deals with dependency injection and how to use Decorators to add dependency injection between components and service (`@Injectable`);

- how to perform CRUD operations using `HttpClient` and `Observable`.

---

## Detalhes do projeto

Um aplicativo para guardar seus pensamentos e citações favoritos.

Este projeto foi desenvolvido para aprender o básico de Angular 14. Ele possui duas páginas: uma para criar um pensamento/citação e outra para listar todos os pensamentos/citações salvos (e também editá-los ou removê-los). Os dados são salvos em um JSON Server rodando localmente.

As páginas estão em inglês, mas o código e os comentários estão em português.

### Visão geral do aplicativo

![gif mostrando uma lista de pensamentos/citações salvos](https://user-images.githubusercontent.com/19349339/208193488-ba93018a-6aea-47a6-a4cb-5f0c41d7948b.gif)

### Adicionando um novo item

![gif mostrando o processo de adicionar um novo item](https://user-images.githubusercontent.com/19349339/208194956-67458849-20ce-40b4-9267-8f8811a54064.gif)

### Editando um item

![gif mostrando o processo de editar um item](https://user-images.githubusercontent.com/19349339/208195027-20bce146-4fa2-4561-9ed0-236e34006186.gif)

### Apagando um item

![gif mostrando o processo de apagar um item](https://user-images.githubusercontent.com/19349339/208195018-3e074385-5d36-4395-9dc8-877c72073078.gif)

## Créditos

Este projeto foi desenvolvido no primeiro [curso de Angular 14](https://www.alura.com.br/curso-online-angular-explorando-framework) da [Alura](https://www.alura.com.br).

**Instrutora**: 
- **[Nayanne Batista](https://www.linkedin.com/in/nayannebatista/)**

## Como executar este projeto

O projeto foi criado com o [Angular CLI](https://github.com/angular/angular-cli) versão 14.2.7. O servidor local usa o JSON Server versão 0.17.0.

Se você não possui o Angular CLI instalado, rode o seguinte comando em um terminal

    npm install -g @angular/cli

Após clonar/baixar o código do projeto, abra um terminal, navegue até a pasta do projeto e rode o comando abaixo para instalar todas as dependências necessárias:

    npm install

A seguir, vá para a pasta `/backend` e rode `npm install` novamente para instalar o JSON server:

### Servidor de desenvolvimento

Você precisará manter dois terminais abertos, um para o JSON server e outro para o servidor de desenvolvimento (onde o aplicativo vai rodar).

No primeiro terminal, vá para a pasta `/backend` e inicie o JSON server usando o `npm start`. O servidor irá rodar na porta 3000.

No segundo terminal, vá para a raiz do projeto e rode `ng serve`. Digite no navegador a URL `http://localhost:4200/` para abrir o aplicativo. Ele irá recarregar automaticamente se você fizer qualquer alteração no código-fonte.

### Ajuda adicional

Para obter mais ajuda com o Angular CLI, digite `ng help` no terminal ou dê uma olhada na página de [Visão Geral e Referência de Comandos do Angular CLI](https://angular.io/cli) (em inglês).

## O que eu aprendi

O Angular é um framework robusto que facilita os passos necessários para desenvolver um aplicativo Web.

Você pode criar components facilmente rodando `ng generate component nome-do-componente` (atalho: `ng g c nome-do-componente`) e o Angular já irá providenciar os arquivos CSS, HTML e Typescript para você, além de atualizar os arquivos necessários para que seu componente esteja disponível para ser usado por todo o aplicativo.

Durante o curso, eu aprendi vários conceitos:

- como instalar o Angular CLI e usá-lo para criar e rodar um projeto;

- como criar componentes e um serviço;

- a estrutura de arquivos de um componente e as responsabilidades de um template (arquivo HTML) e do componente em si (arquivo TypeScript);

- usar o *"property binding"* (`[]`) para passar valores de um componente para seu template;

- usar interpolação (`{{}}`) para mostrar valores no template;

- usar o *"event binding"* (`(nome-do-evento)`) para adicionar eventos a uma tag HTML;

- usar `[(ngModel)]` para uma comunicação de dois caminhos entre o componente e seu template;

- criar e configurar navegação de página usando `RouterModule`, `Routes`, `ActivatedRoute` e `<router-outlet>`;

- diretivas Angular para adicionar mais funcionalidades aos arquivos HTML: `ngFor`, `ngIf` e `ngClass`;

- como o Angular lida com injeção de dependências e como usar *"Decorators"* para adicionar injeção de dependências entre componentes e serviços (`@Injectable`);

- como realizar operações CRUD usando `HttpClient` e `Observable`.