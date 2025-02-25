
# Ecommerce Test Site

### React + TypeScript + Vite + Tailwindcss 4 + Zustand  

E-commerce test app created with Vite, TypeScript, React 18, Tailwindcss, Zustand, and React Router.

## Installation:

To run the application, you need to have Node.js installed (https://nodejs.org/en).

1. Clone the repository.  
2. Open a command terminal, navigate to the project's root folder, and run the following commands:  

   ```sh
   npm install
   npm run dev
   ```

This will create a local server where the application will run.

## Development:

Developed using VS Code, with linting and code quality standardization through ESLint, Prettier, and TypeScript's own static typing, ensuring compliance with the API contract and the model interfaces.

## Features:

The app loads a list of 20 products from the Fake Store API, which are used to create the e-commerce website.

Its structure follows a modular approach, with a focus on delegation of responsibilities across different components of the application.

By maintaining these agile patterns, the goal is to simplify maintenance, optimize performance, and enhance scalability and reusability of resources.

## Componentization:

The project is divided into two main hierarchies: **views** and **modular components**.

- **Views** (located in the `"views"` folder) represent the router navigation through the application flow.  
  - They are wrapped inside a general **Layout**, which applies a consistent design across the site.  
  - CSS styles, responsiveness, and adaptability across different devices are handled using **TailwindCSS 4**, a utility-first CSS framework.

- **Components** are reusable modules used in different sections of the website (one of React's core strengths).  
  - Specifically for product management, the app includes components such as:  
    - **Product Card**  
    - **Products Grid**  
    - **Products Slider**  
    - **Promo Banner**  
  - These components are designed to be **reusable and scalable**, in case the app expands and requires them in additional views or sections.

## State Management (models, stores, actions/setters):

The **core business logic** is divided into three main stores: **Product, Cart, and Order**.  
These **slices** manage the global state for all views and components that need it, enabling information display and setter functionality.

For state management, the app uses **Zustand**, chosen for its **simplicity, minimal boilerplate, and small bundle size**.

## Utilities:

**Data Persistence:**  

A utility function is implemented to **persist data in local storage**, ensuring that the store can restore cart or order items if the user reloads or closes the browser.

## Future Potential:

- The site currently verifies a **mock user** to process the cart and create an order, but **user authentication and verification** can be implemented following the existing structure.  
- The architecture supports the **implementation of unit, end-to-end, or integration tests**.

---

Let me know if you need any refinements! 🚀
<h5>Flowchart</h5>

<img src="./public/e-commerce-FlowChart.svg" alt="E-commerce flowchart" />
