import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Container } from './styles';

import arrow from '../../assets/images/arrow.svg';

export default function PageHeader({ title }) {
  return (
    <Container>
      <Link to="/edit/251">
        <img src={arrow} alt="Arrow" />
        <span>Voltar</span>
      </Link>
      <h1>{title}</h1>
    </Container>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
}