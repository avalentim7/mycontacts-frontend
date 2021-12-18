import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Select from '../../components/Select';

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
    </>
  )
}
