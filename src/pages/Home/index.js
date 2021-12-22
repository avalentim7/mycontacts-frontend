import { Container, InputSearchContainer, Header, ListContainer, Card } from "./styles";
import arrow from '../../assets/images/arrow.svg';
import trash from '../../assets/images/trash.svg';
import edit from '../../assets/images/edit.svg';
import { Link } from "react-router-dom";
import Modal from "../../components/Modal";

export default function Home() {
  return (
    <Container>
      <Modal/>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquise pelo nome..." />
      </InputSearchContainer>

      <Header>
        <strong>3 contatos</strong>
        <Link to="/new">Novo contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>André Valentim</strong>
              <small>Instagram</small>
            </div>
            <span>andre.rodrigues@engage.bz</span>
            <span>(11) 99999-9999</span>
          </div>
          <div className="actions">
            <Link to='/edit/123'>
              <img src={edit} alt="Edit" />
            </Link>
            <button type="button">
              <img src={trash} alt=""></img>
            </button>
          </div>
        </Card>

      </ListContainer>
    </Container>
  )

}
