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
          <div key={item.id}>
            <Spacer height={20}/>
            <a
            href={item.href}
            target="_blank"
            rel="noreferrer"
            >
              <button
              className="button-container"
              >
                {item.text}
              </button>
            </a>
          </div>}
        </>)
      }
    </>
  );
}

export default CardsContainer;
