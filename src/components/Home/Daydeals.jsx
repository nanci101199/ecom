import React from 'react'

function Daydeals() {
  return (
    <>
    <div> 
        <div className='my-2 mx-5 m-5'>
            <div id="carouselExampleControls1" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item">
                        <img src="https://admin.nily.com.br/uploads/slider/b2d0a0045b68e713c8e0c24708c48cb4.jpg" className="d-block w-100" style={{height:"60%"}} alt="..." />
                    </div>
                    <div className="carousel-item active">
                        <img src="https://admin.nily.com.br/uploads/slider/be916ec0ebd94e4c0f0b79fab053ecd9.jpg" className="d-block w-100" style={{height:"60%"}} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://admin.nily.com.br/storage/860d5033c7d4ae79561111f7b0386df4.jpg" className="d-block w-100" style={{height:"60%"}} alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Daydeals