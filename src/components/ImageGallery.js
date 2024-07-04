import React, { useState, useEffect } from 'react';
import { Pagination, Row, Col, Image } from 'react-bootstrap';
import axios from 'axios';

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage] = useState(10);

  useEffect(() => {
    const fetchImages = async () => {
      const imageNames = Array.from({ length: 30 }, (_, i) => `${i + 1}.jpg`);
      setImages(imageNames);
    };

    fetchImages();
  }, []);

  // Get current images
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Row>
        {currentImages.map((image, index) => (
          <Col key={index} sm={6} md={4} lg={3} className="mb-4">
            <Image src={process.env.PUBLIC_URL + `/images/${image}`} thumbnail />
          </Col>
        ))}
      </Row>
      <Pagination>
        {[...Array(Math.ceil(images.length / imagesPerPage)).keys()].map((number) => (
          <Pagination.Item key={number + 1} onClick={() => paginate(number + 1)} active={number + 1 === currentPage}>
            {number + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
}

export default ImageGallery;
