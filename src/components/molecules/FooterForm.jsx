import { Input, Button } from '@/components';

export default function FooterForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[486px] h-[70px] flex items-center border border-(--color-bg-primary) rounded-[3px] overflow-hidden"
    >
      <Input type="email" placeholder="example@gmail.com" />
      <Button type="submit" className="bg-(--color-bg-primary-dark) text-(--text-light)">
        Submit
      </Button>
    </form>
  );
}
