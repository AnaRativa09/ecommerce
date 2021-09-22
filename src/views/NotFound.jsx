import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function NotFound() {
  const history = useHistory();

  return (
    <section className="not-found-container">
      <h2>La página que buscas no existe :(</h2>

      <p>
        Lo sentimos, puede ser que la página que buscas ya no está disponible,
        intenta buscar de nuevo o visita nuestras páginas más cül.
      </p>

      <Button
        variant="outline-primary custom-btn-outline"
        onClick={() => { history.push('/'); }}
      >
        Home
      </Button>
    </section>
  );
}

export default NotFound;
