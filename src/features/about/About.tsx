interface AboutProps {
  id: string;
}

export default function About({ id }: AboutProps) {
  return (
    <section id={id}>
      <div>
        Hi, I'm Connor and I am a software engineer. I am a self-taught software
        engineer with 5 years of experience ranging in full-stack engineering,
        client success and product roles. I treat engineering like it's a
        product role and have a unique approach to development, focusing on the
        user and the value that I can provide them. I'm eagerly awaiting my next
        challenge and look forward to the next set of problems to solve
      </div>
    </section>
  );
}
