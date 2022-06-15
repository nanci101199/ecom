import React from 'react'

function Sheincampign() {
  return (
    <>
       <div>
      <div className='text-center mt-5'>
        <div className='fs-3 fw-bold'>#SHEINcampaigns</div>
      </div>
        <div className=' mx-5 py-3'>
            <img src="https://img.ltwebstatic.com/images3_ach/2022/05/18/1652842934ea8e4a463fa7f8dff568eed3113b532e.webp" style={{width:"100%", height:"40%"}} alt="" />
        </div>
    </div>
    <div className='my-2 mx-5'>
            <div id="carouselExampleControls2" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://img.ltwebstatic.com/images3_ach/2022/05/16/1652681908a60c2fd73008311971f200be530bc629.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://img.ltwebstatic.com/images3_ach/2022/05/13/1652423865e6d3211abf0a66c2a47924c2d9345d60.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item active">
                        <img src="https://img.ltwebstatic.com/images3_ach/2022/05/16/1652672691876d25ae94a90d27176a7bfcec34af66.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://img.ltwebstatic.com/images3_ach/2022/04/29/1651223356e85871cbef3a499d2ac9c5aa07828406.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://img.ltwebstatic.com/images3_ach/2022/05/13/165242588661889bdb3eafb06e52b83bb1f70ef304.jpg" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    
    </>
  )
}

export default Sheincampign