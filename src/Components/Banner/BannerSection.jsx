import './style.css';

export default function BannerSection(props) {

  const { title, desc } = { ...props };

  return (
    <div className='banner-section'>
        <h1>{title}</h1>
        <p>{desc}</p>
    </div>
  )
}
