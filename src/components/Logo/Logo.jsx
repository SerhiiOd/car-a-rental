import PropTypes from 'prop-types';

const Logo = ({ name, w, alt }) => {
  return (
    <>
      <img src={require(`../../images/${name}`)} alt={alt} width={w} />
    </>
  );
};

export default Logo;

Logo.propTypes = {
  name: PropTypes.string,
  w: PropTypes.string,
  alt: PropTypes.string,
};
