import IMAGE from '../../assets/Jasmine-Picture.svg';

export default function Image() {
  return (
    <div className="flex flex-col gap-1">
      <img src={IMAGE} alt="Yasmin segurando o livro 'Sob Sua Honra" className=""/>
      <h1 className="text-only-black text-center text-2xl font-bold dark:text-only-alice-blue">Yasmin</h1>
    </div>
  )
}
