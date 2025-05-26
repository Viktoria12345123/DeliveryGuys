export default function Header() {
    return (
        <header>
            <div className="brand-container">
                <img
                    className="logo"
                    id="logo"
                    src="../../public/images/logo.png"
                    alt="Delivery Guys Logo"
                />
                <h1 className="brand-name">Leonid</h1>
            </div>
            <nav>
                <ul id="nav-list">
                    <li><a href="/order">Order</a></li>
                    <li><a href="/about">Contact Us</a></li>
                </ul>
            </nav>
        </header>
    );
}
