import React, { useContext } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import photosData from '../data/fotos.json';
import { FavoritesContext } from '../components/FavoritesContext';
import './Home.css';

const Home = () => {
  const { addFavorite, isFavorite, removeFavorite } = useContext(FavoritesContext);

  const handleAddFavorite = (photo) => {
    if (!isFavorite(photo)) {
      addFavorite(photo);
    } else {
      removeFavorite(photo);
    }
  };

  return (
    <Container>
      <h1 className='text-center' style={{ color: '#43a047' }}>Natural Pic</h1>
      <Row>
        {photosData.photos.map((photo, index) => (
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
                <Button
                  variant='primary'
                  onClick={() => handleAddFavorite(photo)}
                >
                  {isFavorite(photo) ? 'Unlike' : 'Like'}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;