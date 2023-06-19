import React, { useContext } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FavoritesContext } from '../components/FavoritesContext';

const Favorites = () => {
  const { favorites, removeFavorite } = useContext(FavoritesContext);

  return (
    <Container>
      <h1 className='text-center' style={{ color: '#43a047' }}>Favoritos</h1>
      <Row>
        {favorites.map((photo, index) => (
          <Col key={index} md={4} sm={6} className='mb-4'>
            <Card>
              <LazyLoadImage
                variant='top'
                src={photo.src.original}
                alt={photo.alt}
                effect="blur"
                className='custom-card-img'
              />
              <Card.Body>
                <Card.Title>{photo.title}</Card.Title>
                <Card.Text>{photo.description}</Card.Text>
                <Button variant='primary' onClick={() => removeFavorite(photo)}>Eliminar</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Favorites;