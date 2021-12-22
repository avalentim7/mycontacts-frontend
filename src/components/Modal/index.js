import { Overlay, Container, Footer } from './styles';
import Button from '../Button';

export default function Modal() {
  return (
    <Overlay>
      <Container>
        <h1>Titulo do Modal</h1>
        <p>
          Corpo do modal
        </p>
        <Footer>
          <button className="cancel-button" type="button">
            Cancelar
          </button>
          <Button>Deletar</Button>
        </Footer>
      </Container>
    </Overlay>
  )
}
