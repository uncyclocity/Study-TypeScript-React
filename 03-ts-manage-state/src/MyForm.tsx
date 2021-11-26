import { useState } from "react";
import { useNavigate } from "react-router";

type MyFormProps = {
  onSubmit: (form: { name: string; description: string }) => void;
};

export default function MyForm({ onSubmit }: MyFormProps) {
  const nav = useNavigate();

  const [form, setForm] = useState({
    name: "",
    description: "",
  });

  const { name, description } = form;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
    setForm({
      name: "",
      description: "",
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name="name" value={name} onChange={onChange} />
        <input name="description" value={description} onChange={onChange} />
        <button type="submit">등록</button>
      </form>
      <button onClick={() => nav(-1)}>뒤로</button>
    </>
  );
}
