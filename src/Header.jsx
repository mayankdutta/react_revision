const Header = ({title}) => {
    return (
        <>
            {title}
        </>
    )
}

Header.defaultProps = {
    title: "Default Title"
}

export default  Header;