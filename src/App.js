import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DiscussionBoard from './components/DiscussionBoard/DiscussionBoard';

const App = () => {
  return (
    <div>
      <header style={styles.header}>
        <img src="/logo.png" alt="Logo" style={styles.logo} />
        <h1>Discussion Board</h1>
      </header>
      <main style={styles.main}>
        <DiscussionBoard />
      </main>
      <footer style={styles.footer}>
        <p>© 2024 Discussion Board. All rights reserved.</p>
      </footer>
    </div>
  );
};

const styles = {
  header: {
    backgroundColor: '#282c34',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
  },
  logo: {
    height: '50px',
  },
  main: {
    padding: '20px',
  },
  footer: {
    backgroundColor: '#282c34',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    position: 'fixed',
    width: '100%',
    bottom: '0',
  },
};

export default App;
