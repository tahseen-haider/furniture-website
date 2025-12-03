import { Input, Button } from '@components';

const FooterForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-[486px] h-[42px] sm:h-[50px] flex items-center border border-(--color-brand-primary) rounded-[3px] overflow-hidden"
    >
      <Input type="email" placeholder="example@gmail.com" className="min-w-7" />
      <Button type="submit" className="bg-(--color-brand-primary-dark) text-(--color-text-inverse)">
        Submit
      </Button>
    </form>
  );
};

export default FooterForm;
