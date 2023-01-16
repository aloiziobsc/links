import libraryPhoto from './libraryPhoto.jpeg';
import './ImgContainer.css';
import Spacer from '../Spacer/Spacer';

const ImgContainer = () => {
  return (
    <>
      <Spacer height={20}/>
      <img src={libraryPhoto} className="Library-Photo" alt="libraryPhoto" />
    </>
  );
}

export default ImgContainer;
