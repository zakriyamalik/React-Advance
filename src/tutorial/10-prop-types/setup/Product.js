import React from 'react';
import PropTypes from 'prop-types'
import defaultImage from '../../../assets/default-image.jpeg'
const Product = ({id, login, avatar_url, html_url}) => {
 
  return <article className='product'>
    <img src={avatar_url || defaultImage} alt={login || 'default name'} />
    <h4>{login}</h4>
    <a href={html_url}>profile</a>
    </article>;
};

// Product.propTypes = {
//   id: PropTypes.number.isRequired,
//   login: PropTypes.string.isRequired,
//   avatar_url: PropTypes.string.isRequired,
//   html_url: PropTypes.string.isRequired,
// };



Product.defaultProps = {
  id: 1,
  login: 'default user',
  avatar_url: defaultImage,
  html_url: 'https://github.com/default-user',
};


export default Product; 