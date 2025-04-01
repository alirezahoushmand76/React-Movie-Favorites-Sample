# Movie App

A modern React application for browsing and searching movies, built with Vite and The Movie Database (TMDB) API.

## Features

- **Browse Popular Movies**: Discover top-rated and trending movies
- **Search Movies**: Find specific movies with the search feature
- **Favorites Collection**: Save your favorite movies for later viewing
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Clean, Netflix-inspired interface

## Live Demo

[View Live Demo](#) <!-- Add your deployed URL when available -->

## Technologies Used

- React 18
- React Router v6
- Vite
- CSS3 with custom animations
- The Movie Database (TMDB) API

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- TMDB API Key (get one from [themoviedb.org](https://www.themoviedb.org/))

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/movie-app.git
   cd movie-app
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Create a `.env` file in the project root and add your TMDB API key:
   ```
   VITE_TMDB_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

## Deployment

### GitHub Pages

This project is configured for easy deployment to GitHub Pages using GitHub Actions.

1. Push your code to your GitHub repository
2. GitHub Actions will automatically build and deploy your site
3. Your site will be available at `https://your-username.github.io/repository-name/`

You can also manually deploy using:

```bash
npm run build
```

This will create a `dist` folder that can be deployed to any static site hosting service.

## Project Structure

```
movie-app/
├── public/            # Static assets
├── src/
│   ├── components/    # Reusable UI components
│   ├── contexts/      # React context providers
│   ├── css/           # Stylesheets
│   ├── pages/         # Page components
│   ├── services/      # API and other services
│   ├── App.jsx        # Main application component
│   └── main.jsx       # Application entry point
├── index.html         # HTML template
└── package.json       # Project dependencies and scripts
```

## Features in Detail

### Home Page
- Displays a grid of popular movies
- Search functionality to find specific movies
- Responsive layout adapts to different screen sizes

### Movie Cards
- Displays movie poster, title, and release year
- Hover effects reveal additional information
- Favorite button to add/remove movies from favorites

### Favorites Page
- Collection of user's favorite movies
- Favorites are stored in local storage
- Easy removal of movies from favorites

### Navigation
- Easy switching between home and favorites
- Visual indicator for active page
- Counter showing number of favorite movies

## Future Enhancements

- User authentication
- Movie details page with cast information and trailers
- Sorting and filtering options
- Dark/light theme toggle
- Personal ratings for movies

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [The Movie Database (TMDB)](https://www.themoviedb.org/) for the API
- [Vite](https://vitejs.dev/) for the blazing fast build tool
- [React](https://reactjs.org/) for the UI library
