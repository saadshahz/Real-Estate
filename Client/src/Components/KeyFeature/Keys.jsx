import KeyIcon from './KeyIcon';
import './style.css';

export default function Keys({ title }) {
  return (
    <>
        <div className='points'>
            <KeyIcon />
            <p>{title}</p>
        </div>
    </>
  )
}
