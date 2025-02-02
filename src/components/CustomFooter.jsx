export default function Footer(){
    return (<div className="container">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item"><a href="/" className="nav-link px-2 text-body-secondary">Home</a></li>
            <li className="nav-item"><a href="/features" className="nav-link px-2 text-body-secondary">Features</a></li>
            <li className="nav-item"><a href="/hero" className="nav-link px-2 text-body-secondary">Hero</a></li>
            <li className="nav-item"><a href="/table" className="nav-link px-2 text-body-secondary">table</a></li>
            <li className="nav-item"><a href="/aboutme" className="nav-link px-2 text-body-secondary">About</a></li>
          </ul>
          <p className="text-center text-body-secondary">{new Date().getFullYear()} Company, Inc</p>
        </footer>
      </div>
    );
}