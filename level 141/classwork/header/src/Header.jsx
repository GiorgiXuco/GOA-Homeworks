function Header() {
    return (
        <header style={{
            backgroundColor: "#282c34",
            color: "white",
            padding: "15px",
            textAlign: "center"
        }}>
            <h1>My Header</h1>
            <nav>
                <a href="#" style={{ margin: "0 10px", color: "#61dafb" }}>Home</a>
                <a href="#" style={{ margin: "0 10px", color: "#61dafb" }}>About</a>
                <a href="#" style={{ margin: "0 10px", color: "#61dafb" }}>Contact</a>
            </nav>
        </header>
    );
}

export default Header;