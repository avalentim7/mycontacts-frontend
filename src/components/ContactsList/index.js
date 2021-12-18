import { Header, Container, ListContainer, Card } from "./styles";
import arrow from '../../assets/images/arrow.svg';
import trash from '../../assets/images/trash.svg';
import edit from '../../assets/images/edit.svg';

export default function ContactsList() {
  return (
    <Container>
      <Header>
        <strong>3 contatos</strong>
        <a href="/">Novo contato</a>
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
            <a href='/'>
              <img src={edit} alt="Edit" />
            </a>
            <button type="button">
              <img src={trash} alt=""></img>
            </button>
          </div>
        </Card>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Gabriela Alarcon</strong>
              <small>Instagram</small>
            </div>
            <span>gabriela.alarcon@engage.bz</span>
            <span>(11) 99999-9999</span>
          </div>
          <div className="actions">
            <a href='/'>
              <img src={edit} alt="Edit" />
            </a>
            <button type="button">
              <img src={trash} alt=""></img>
            </button>
          </div>
        </Card>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Mauricio Pradella</strong>
              <small>Instagram</small>
            </div>
            <span>mauricio.pradella@engage.bz</span>
            <span>(11) 99999-9999</span>
          </div>
          <div className="actions">
            <a href='/'>
              <img src={edit} alt="Edit" />
            </a>
            <button type="button">
              <img src={trash} alt=""></img>
            </button>
          </div>
        </Card>

      </ListContainer>
    </Container>
  )
}
