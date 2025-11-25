import { Input, Button } from '@components';

const FooterForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-[486px] h-[54px] sm:h-[70px] flex items-center border border-(--color-bg-primary) rounded-[3px] overflow-hidden"
    >
      <Input type="email" placeholder="example@gmail.com" className="min-w-7" />
      <Button type="submit" className="bg-(--color-bg-primary-dark) text-(--text-light)">
        Submit
      </Button>
    </form>
  );
};

export default FooterForm;
