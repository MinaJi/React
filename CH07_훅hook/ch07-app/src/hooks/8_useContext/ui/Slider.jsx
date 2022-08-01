import React from 'react'

function Slider() {

    const styles = {
        img:{
          height:670,
        }
    }

    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://cdn.pixabay.com/photo/2022/07/23/13/44/teddy-bear-7339989_960_720.jpg" class="d-block w-100" alt="image1" style={styles.img} />
                    </div>
                    <div className="carousel-item">
                        <img src="https://cdn.pixabay.com/photo/2022/07/27/18/02/weapon-7348457_960_720.jpg" className="d-block w-100" alt="image2" style={styles.img} />
                    </div>
                    <div className="carousel-item">
                        <img src="https://cdn.pixabay.com/photo/2022/07/26/20/23/vespa-7346629_960_720.png" className="d-block w-100" alt="image3" style={styles.img} />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Slider