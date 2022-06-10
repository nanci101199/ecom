import React from 'react'

function StyleGallery() {
  return (
    <>
    <div className='' >
                <div className='text-center my-5'>
                    <h1>Style Gallery</h1>
                </div>
                <div className='d-flex justify-content-between m-auto px-5 ' >
                    <div className=' onhovershow'>
                        <img src="https://img.ltwebstatic.com/images3_app/2022/05/09/1652059280c63973eff49bdf8bbe00a51d2e44f1fa.webp" className='onhovershow' style={{height:"90%", width:"100%"}} alt="" />
                        <div className='overflowStyle d-none' >
                            Shop This Product
                        </div>
                    </div>
                    <div className=' mx-2 onhovershow'>
                        <img src="https://img.ltwebstatic.com/images3_app/2022/05/10/1652145304a1eec2564e77447efece3f5bc7b76356.webp" style={{height:"90%", width:"100%"}} alt="" />
                        <div className='overflowStyle d-none '>
                            Shop This Product
                        </div>
                    </div>
                    <div className=' mx-2 onhovershow'>
                        <img src="https://img.ltwebstatic.com/images3_app/2022/05/10/16521451693f70a417344b109e152b8f4d36dffe52.webp" style={{height:"90%", width:"100%"}} alt="" />
                        <div className='overflowStyle d-none ' >
                            Shop This Product
                        </div>
                    </div>
                    <div className=' mx-2 onhovershow'>
                        <img src="https://img.ltwebstatic.com/images3_app/2022/05/10/1652145365264182fb1bfd6a747159b5804c9597cb.webp" style={{height:"90%", width:"100%"}} alt="" />
                        <div className='overflowStyle d-none ' >
                            Shop This Product
                        </div>
                    </div>
                    <div className=' mx-2 onhovershow '>
                        <img src="https://img.ltwebstatic.com/images3_app/2022/05/11/165223132858a30f96cec21e82915be816821ae69e.webp" style={{height:"90%", width:"100%"}} alt="" />
                        <div className='overflowStyle d-none ' > 
                            Shop This Product
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default StyleGallery