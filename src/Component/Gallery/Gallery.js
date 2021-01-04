import React from 'react'

const Gallery = () => {
    return (
      <div>
        <section class="pt-5 pb-5">
          <div className="container">
            <div class="row">
              <div class="col-12">
                <div
                  id="carouselExampleIndicators2"
                  class="carousel slide"
                  data-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <div class="row">
                        <div class="col-md-4 mb-3">
                            <img
                              class="img-fluid"
                              alt="100%x280"
                              src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d"
                              style={{ width: "250px", height: "380px" }}
                            />
                        </div>
                        <div class="col-md-4 mb-3">
                          <div class="card" style={{ width: "250px" }}>
                            <img
                              class="img-fluid"
                              alt="100%x280"
                              src="https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=42b2d9ae6feb9c4ff98b9133addfb698"
                              style={{ width: "250px", height: "380px" }}
                            />
                          </div>
                        </div>
                        <div class="col-md-4 mb-3">
                          <div class="card" style={{ width: "250px" }}>
                            <img
                              class="img-fluid"
                              alt="100%x280"
                              src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=3d2e8a2039c06dd26db977fe6ac6186a"
                              style={{ width: "250px", height: "380px" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div class="row">
                        <div class="col-md-4 mb-3">
                          <div class="card" style={{ width: "250px" }}>
                            <img
                              class="img-fluid"
                              alt="100%x280"
                              src="https://images.unsplash.com/photo-1532771098148-525cefe10c23?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=3f317c1f7a16116dec454fbc267dd8e4"
                              style={{ width: "250px", height: "380px" }}
                            />
                          </div>
                        </div>
                        <div class="col-md-4 mb-3">
                          <div class="card" style={{ width: "250px" }}>
                            <img
                              class="img-fluid"
                              alt="100%x280"
                              src="https://images.unsplash.com/photo-1532715088550-62f09305f765?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=ebadb044b374504ef8e81bdec4d0e840"
                              style={{ width: "250px", height: "380px" }}
                            />
                          </div>
                        </div>
                        <div class="col-md-4 mb-3">
                          <div class="card" style={{ width: "250px" }}>
                            <img
                            //   class="img-fluid"
                              alt="100%x280"
                              src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=0754ab085804ae8a3b562548e6b4aa2e"
                              style={{ width: "250px", height: "380px" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}

export default Gallery
