import PropTypes from 'prop-types';
import { CardContainer } from './NewsCard.styles';

const NewsCard = ({ title }) => {
  return (
    <CardContainer>
      <h3>{title}</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <div className="image-placeholder">
        <i className="fas fa-image"></i>
      </div>
    </CardContainer>
  );
};

NewsCard.propTypes = {
  title: PropTypes.string.isRequired,
};

export default NewsCard;
