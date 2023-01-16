import Spacer from '../Spacer/Spacer';
import './CardsContainer.css';
import content from './content.json';

const CardsContainer = () => {

  return (
    <>
      {
        content.map((item) =>
        <>
          {item.show && 
          <>
            <Spacer height={20}/>
            <a
            href={item.href}
            target="_blank"
            rel="noreferrer"
            >
              <button
              className="card-container"
              >
                {item.text}
              </button>
            </a>
          </>}
        </>)
      }
    </>
  );
}

export default CardsContainer;
