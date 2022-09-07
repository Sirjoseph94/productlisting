import Footer from '../Components/Footer';
import svg from '../assets/login.svg';

function Signin() {
  return (
    <>
      <div className="uk-section uk-section-muted uk-flex uk-flex-middle" style={{ height: "80vh" }}>
        <div className="uk-container">
          <div
            className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin"
            data-uk-grid>
            <div className="uk-card-media-left uk-cover-container">
                <div className="uk-flex uk-flex-center uk-flex-middle" style={{ height: "100%" }}>
                <img src={svg} alt="login icon" />
              </div>
        
            </div>
            <div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Sign in</h3>
                <form className="uk-form-stacked">
                  <div className="uk-margin">
                    <label className="uk-form-label" for="form-stacked-text">
                      Email
                    </label>
                    <div className="uk-form-controls">
                      <input className="uk-input" type="text" />
                    </div>
                  </div>

                  <div className="uk-margin">
                    <label className="uk-form-label" for="form-stacked-text">
                      Password
                    </label>
                    <div className="uk-form-controls">
                      <input className="uk-input" type="password" />
                    </div>
                  </div>

                  <input type="submit" className="uk-button uk-button-primary" value="Sign in" />
                  <a className="uk-button uk-button-text uk-margin-left" href="/signup">
                    Sign up
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Signin;
