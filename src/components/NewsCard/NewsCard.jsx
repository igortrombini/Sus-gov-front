import React from 'react';
import PropTypes from 'prop-types';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Card, CardImage, CardTitle, CardText, CardButton, CardButtonContainer } from './NewsCard.styles';

const NewsCard = ({ title, text, image, link }) => (
  <Card>
    <CardImage src={image} alt={title} />
    <Link to={link}>
      <CardTitle>{title}</CardTitle>
    </Link>
    <CardText>{text}</CardText>
    <CardButtonContainer>
      <CardButton>
        Saiba Mais <FaArrowRight />
      </CardButton>
    </CardButtonContainer>
  </Card>
);

NewsCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default NewsCard;
