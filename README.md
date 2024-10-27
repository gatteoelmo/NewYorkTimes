Here's a README file for your project:

---

# New York Times Clone

This project is a clone of the New York Times website featuring the home and search pages, built as a final project for the React course by Start2Impact.

## Demo

Visit the live site: [New York Times Clone](https://newyorktimesclonesoya.netlify.app/)

## Repository

Check out the repository on GitHub: [NewYorkTimes](https://github.com/gatteoelmo/NewYorkTimes.git)

## Project Overview

This application provides a simplified replica of the New York Times homepage and search page, built with the following functionalities:

- **Header with Search Bar**: A fully functional search bar in the header that directs users to the search page.
- **News Sections and Subsections**: An interactive list of news categories allows users to toggle between different sections and subsections of news.
- **Responsive Layout**: A responsive two-column layout on desktop for the home page, displaying selected news on one side and opinion pieces on the other.
- **Search Page with Filters**: The search page lets users search for articles, with filters for sorting by newest, oldest, and relevance.
- **Responsive Navigation**: A responsive navbar that transitions to a sidebar with a sandwich menu icon for smaller screens, enhancing the user experience on mobile devices.
- **Footer**: A footer lists all the technologies used in the project.

## Tech Stack

The application was built with the following tools and libraries:

- **React** (v18.3.1): The JavaScript framework used to build the app’s components.
- **Redux Toolkit** (v2.2.8): For managing and centralizing the application state.
- **React-Query** (v5.59.16): To handle data fetching and caching.
- **Axios** (v1.7.7): To make API requests to fetch data.
- **React Icons** (v5.3.0): Provides icons for use throughout the interface.
- **Styled-Components** (v6.1.13): For styling the application with component-scoped CSS.
- **React-Router-Dom** (v6.27.0): For managing page navigation.
- **Lodash.debounce** (v4.0.8): For optimizing the search input to reduce API calls.
- **React-Sticky** (v6.0.3): To create sticky headers that improve the user experience.

The development environment utilizes **Vite** as a fast build tool, with ESLint for linting.

## Project Structure and Features

- **Home Page**: The main page displays news headlines in a two-column layout when viewed on desktop. The main column shows articles from the selected sections, while the sidebar column shows opinion pieces.
- **Search Page**: Users can search for articles with the ability to filter results by “Newest”, “Oldest”, or “Relevance”. The page displays matching results based on the user's search query and filter choice.
- **Responsive Design**: The site is fully responsive and adapts to different screen sizes, featuring:
  - Sidebar navigation on smaller screens, with a collapsible sandwich menu.
  - Columns adapt to single-column layouts on smaller screens for easy reading.
- **Footer**: Displays the technologies used in the application for reference.

## Running the Project Locally

To run the project on your local machine, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/gatteoelmo/NewYorkTimes.git
   cd NewYorkTimes
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Create a `.env` file**: Place your API key for accessing the New York Times API. Ensure that it matches the format:

   ```plaintext
   REACT_APP_API_KEY=your_api_key_here
   ```

4. **Start the application**:

   ```bash
   npm run dev
   ```

5. **Open** the application in your browser at `http://localhost:3000`.

## Scripts

The project includes the following scripts:

- `npm run dev`: Starts the development server with Vite.
- `npm run build`: Builds the project for production.
- `npm run preview`: Previews the production build locally.
- `npm run lint`: Lints the code using ESLint.

## License

This project is created as a learning exercise and is not intended for commercial use.

---
