function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <p>This is a simple React app using CDN with a separate App component.</p>
    </div>
  );
}

// Expose App to the global scope (so it can be used in app.js)
window.App = App;
