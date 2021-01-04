import React from 'react'

const Things = () => {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div
              className="col-md-12"
              style={{ textAlign: "center", paddingBottom: "40px" }}
            >
              <h2 className="section-head">Things To Do</h2>
            </div>
          </div>
          <div className="row" style={{ marginBottom: "50px" }}>
            <div className="col-md-4 col-sm-6">
              <div className="service-box">
                <h3>Winner tour</h3>
                <p>
                  I'm a paragraph. Click here to add your own text and edit me
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="service-box">
                <h3>Cultural sites</h3>
                <p>
                  I'm a paragraph. Click here to add your own text and edit me
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="service-box">
                <h3>Market Tour</h3>
                <p>
                  I'm a paragraph. Click here to add your own text and edit me
                </p>
              </div>
            </div>
          </div>
          <div className="row" style={{ marginBottom: "80px" }}>
            <div className="col-md-4 col-sm-6">
              <div className="service-box">
                <h3>Leisure Activities</h3>
                <p>
                  I'm a paragraph. Click here to add your own text and edit me
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="service-box">
                <h3>Birds Safari</h3>
                <p>
                  I'm a paragraph. Click here to add your own text and edit me
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="service-box">
                <h3>Horse Riding </h3>
                <p>
                  I'm a paragraph. Click here to add your own text and edit me
                </p>
              </div>
            </div>
          </div>
          <div className="image_conta">
            <img
              src="https://static.wixstatic.com/media/a9ff3b_75dfd28a431049f39b6f85be15a1820e~mv2_d_2500_1829_s_2.jpg/v1/fill/w_980,h_630,al_c,q_85,usm_0.66_1.00_0.01/a9ff3b_75dfd28a431049f39b6f85be15a1820e~mv2_d_2500_1829_s_2.webp"
              alt="//" style={{marginLeft:'60px'}}
            ></img>
          </div>
        </div>
      </div>
    );
}

export default Things
