import PropTypes from 'prop-types';

Card.propTypes = {
    link: PropTypes.string,
    nameCard: PropTypes.string
}

export default function Card({link, nameCard}) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="w-3/4 h-10 flex justify-center items-center bg-only-orange dark:bg-only-pink text-only-alice-blue dark:text-only-black text-center hover:bg-orange-500 dark:hover:bg-pink-500 md:w-2/4">{nameCard}</a>
  )
}
