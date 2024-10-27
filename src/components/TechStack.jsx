import { TechStackStyled } from "./Styles/TechStackSTyled";

export const TechStack = () => {
  return (
    <TechStackStyled className="links">
      <div>
        <h4>Core Libraries and Frameworks</h4>
        <ul>
          <li>
            <a
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </a>
          </li>
          <li>
            <a
              href="https://vitejs.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vite
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h4>State Management and Data Handling</h4>
        <ul>
          <li>
            <a
              href="https://redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redux
            </a>
          </li>
          <li>
            <a
              href="https://react-query-v3.tanstack.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React-Query
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h4>Routing</h4>
        <ul>
          <li>
            <a
              href="https://reactrouter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React-Router-Dom
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h4>UI and Styling</h4>
        <ul>
          <li>
            <a
              href="https://styled-components.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Styled-Components
            </a>
          </li>
          <li>
            <a
              href="https://react-icons.github.io/react-icons/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React-Icons
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h4>Utilities</h4>
        <ul>
          <li>
            <a
              href="https://axios-http.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Axios
            </a>
          </li>
          <li>
            <a
              href="https://lodash.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lodash
            </a>
          </li>
          <li>
            <a
              href="https://react-sticky.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React-Sticky
            </a>
          </li>
        </ul>
      </div>
    </TechStackStyled>
  );
};
