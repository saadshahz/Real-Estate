export default function Cancel() {

    const cancelStyle = {
        width: "24px",
        height: "24px",
        cursor: "pointer",
        position: "absolute",
        top: "7px",
        right: "10px",
        backGroundColor: 'blue',
        borderRadius: "75px"
    }

    return (
        <svg style={cancelStyle} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 18L18 6M6 6L18 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}
