import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';

export default function Home() {
  return (
    <>
      <PageHeader title="Novo Contato" />
      <Input />
      <Select>
        <option value="123">Instagram</option>
        <option value="123">Instagram</option>
        <option value="123">Instagram</option>
      </Select>
      <Button type="button">
        Salvar Alterações
      </Button>
      <Button type="button" disabled>
        Salvar Alterações
      </Button>
    </>
  )
}
