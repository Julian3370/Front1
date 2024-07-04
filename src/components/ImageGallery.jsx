import React, { useState, useEffect } from 'react';
import { Pagination, Row, Col, Image } from 'react-bootstrap';
import api from '../api';
import './ImageGallery.css';

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 12; // 4 columnas * 3 filas = 12 imágenes por página

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await api.get('/image/all');
        setImages(response.data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  // Función para cambiar de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Cálculos para la paginación
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  return (
    <div>
      <h1 className="text-center mt-4 mb-4">Image Gallery</h1>
      <Row xs={1} md={2} lg={3} className="g-4">
        {currentImages.map((image) => (
          <Col key={image.id}>
            <Image
              src={`/images/${image.name}`} // Asegúrate de que esta ruta sea correcta
              alt={image.name}
              className="gallery-image"
            />
          </Col>
        ))}
      </Row>
      <Pagination className="mt-4 justify-content-center">
        {[...Array(Math.ceil(images.length / imagesPerPage)).keys()].map((number) => (
          <Pagination.Item
            key={number + 1}
            active={number + 1 === currentPage}
            onClick={() => paginate(number + 1)}
          >
            {number + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
};

export default ImageGallery;
