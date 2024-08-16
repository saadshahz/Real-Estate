import './style.css';

export default function Value(props) {

    const {icon , title, desc} = {...props}

    return (
        <>
            <div className='w-full flex items-center justify-start'>
                {icon}
                <span className='value-title'>{title}</span>
            </div>
            <p className='value-desc'>{desc}</p>
        </>
    )
}
