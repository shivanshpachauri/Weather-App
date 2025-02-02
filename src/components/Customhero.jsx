export default function Customhero(){
    return (
        <div className="container col-xxl-8 px-4 py-5 text-capitalise text-center">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src="https://picsum.photos/700/500" className="rounded d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Responsive weather data app</h1>
        <p className="lead"> Weather data feels like</p>
        <div className="d-grid gap-2 d-md-flex justify-content-center">
            <ul className="list-unstyled">
                <li>Vite</li>
                <li>axios</li>
                <li>useQuery</li>
            </ul>
            
        </div>
      </div>
    </div>
  </div>
    )
}