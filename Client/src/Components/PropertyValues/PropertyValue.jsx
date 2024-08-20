import './style.css';
export default function PropertyValue(props) {

    const { title, icon, desc } = { ...props };

    return (
        <>
            <div className='w-full flex items-center justify-start'>
                {icon}
                <span className='title'>{title}</span>
            </div>
            <p>{desc}</p>
        </>

    )
}
