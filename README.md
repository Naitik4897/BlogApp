# Blogs Context - React Application

A modern React application for managing and displaying blog posts with context API for state management, built with React Router and styled with Tailwind CSS.

## 📋 Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Available Scripts](#available-scripts)
- [Components](#components)
- [Context API](#context-api)
- [Pages](#pages)
- [Contributing](#contributing)

## ✨ Features

- **Blog Management**: View, filter, and paginate through blog posts
- **Context API**: Centralized state management using React Context
- **Routing**: Multi-page navigation with React Router DOM
- **Responsive Design**: Mobile-first responsive design with Tailwind CSS
- **Search & Filter**: Filter blogs by categories and tags
- **Pagination**: Navigate through multiple pages of blog posts
- **Loading States**: Spinner component for better UX
- **Blog Details**: Individual blog post view with detailed content

## 🛠️ Technologies Used

- **React 18.2.0** - Frontend framework
- **React Router DOM 7.6.3** - Client-side routing
- **Tailwind CSS 3.3.0** - Utility-first CSS framework
- **Context API** - State management
- **PostCSS & Autoprefixer** - CSS processing
- **React Testing Library** - Testing utilities

## 📁 Project Structure

```
blogs-context-starter/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── Components/
│   │   ├── BlogDetails.jsx
│   │   ├── Blogs.jsx
│   │   ├── Header.jsx
│   │   ├── Pagination.jsx
│   │   ├── Spinner.css
│   │   └── Spinner.jsx
│   ├── Context/
│   │   └── AppContext.js
│   ├── Pages/
│   │   ├── BlogPage.jsx
│   │   ├── CategoryPage.jsx
│   │   ├── Home.jsx
│   │   └── TagPage.jsx
│   ├── App.css
│   ├── App.js
│   ├── baseUrl.js
│   ├── index.css
│   ├── index.js
│   └── logo.svg
├── .gitignore
├── package.json
├── postcss.config.js
├── README.md
└── tailwind.config.js
```

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Naitik4897/BlogApp
   cd blogs-context-starter
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🌐 Deployment

### Deploy to Vercel

1. **Push to GitHub** (see GitHub Setup section below)
2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com/)
   - Sign in with your GitHub account
   - Click "New Project"
   - Import your repository
   - Vercel will automatically detect it's a React app
   - Click "Deploy"

### GitHub Setup

1. **Create a new repository on GitHub**
2. **Connect your local repository**:
   ```bash
   git remote add origin https://github.com/yourusername/blogs-context-starter.git
   git branch -M main
   git push -u origin main
   ```

### Environment Variables

If you need environment variables for your API, create a `.env` file:
```env
REACT_APP_API_URL=your-api-url
```

And add them to your Vercel deployment settings.

## 🎯 Usage

1. **Home Page**: Browse all blog posts with pagination
2. **Blog Details**: Click on any blog post to view full details
3. **Category Filter**: Filter blogs by specific categories
4. **Tag Filter**: Filter blogs by tags
5. **Navigation**: Use the header navigation to move between pages

## 📜 Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## 🧩 Components

### Core Components

- **Header**: Navigation component with routing links
- **Blogs**: Main component displaying list of blog posts
- **BlogDetails**: Individual blog post component
- **Pagination**: Navigation for multiple pages
- **Spinner**: Loading indicator component

### Styling

- **Tailwind CSS**: Utility-first CSS framework for styling
- **Responsive Design**: Mobile-first approach
- **Custom Spinner**: CSS animations for loading states

## 🔄 Context API

The application uses React Context API for state management:

- **AppContext**: Centralized state management
- **Global State**: Manages blogs data, loading states, and pagination
- **Context Provider**: Wraps the entire application
- **State Distribution**: Provides data to all components

## 📄 Pages

- **Home**: Main landing page with blog listing
- **BlogPage**: Individual blog post page
- **CategoryPage**: Filtered view by category
- **TagPage**: Filtered view by tags

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is part of a React learning series and is available for educational purposes.

## 🔗 Additional Resources

- [React Documentation](https://reactjs.org/)
- [React Router Documentation](https://reactrouter.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Context API Guide](https://reactjs.org/docs/context.html)

---

**Happy Coding!** 🎉
