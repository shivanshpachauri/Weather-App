import myprofile from "./myprofile.jpeg"
export default function CustomAboutMe(){
    return(
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
    <div className="col-md-6 p-lg-5 mx-auto my-5">
      <h1 className="display-3 fw-bold">My name is Shivansh</h1>
      <h3 className="fw-normal text-muted mb-3">I completed a degree in Engineering from RGPV</h3>
      <div className="d-flex gap-3 justify-content-center lead fw-normal">
        <img src={myprofile} className="rounded"/>
      </div>
    </div>
    <div className="product-device shadow-sm d-none d-md-block"></div>
    <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
  </div>
    )
}