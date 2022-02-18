import React from 'react'

function EventGalleryHome() {
  return (
    <div>
        {/* <!-- event-gallery-section - start
    ================================================== --> */}
    <section id="event-gallery-section" className="event-gallery-section sec-ptb-100 clearfix">
        <div className="container">
            <div className="mb-50">
                <div className="row">

                    {/* <!-- section-title - start --> */}
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="section-title">
                            <small className="sub-title">harmoni gallery</small>
                            <h2 className="big-title">Beautiful & <strong>Unforgettable Times</strong></h2>
                        </div>
                    </div>
                    {/* <!-- section-title - end --> */}

                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="button-group filters-button-group">
                            <button className="button is-checked" data-filter="*">
                                <i className="fas fa-star"></i>
                                <strong>all</strong> gallery
                            </button>
                            <button className="button" data-filter=".video-gallery">
                                <i className="fas fa-play-circle"></i>
                                <strong>video</strong> gallery
                            </button>
                            <button className="button" data-filter=".photo-gallery">
                                <i className="far fa-image"></i>
                                <strong>photo</strong> gallery
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div className="grid zoom-gallery clearfix mb-80" data-isotope="{ &quot;masonry&quot;: { &quot;columnWidth&quot;: 0 } }">
            <div className="grid-item grid-item--height2 photo-gallery " data-category="photo-gallery">
                <a className="popup-link" href="assets/images/gallery/1.image.jpg">
                    <img src="assets/images/gallery/1.image.jpg" alt="Image_not_found"/>
                </a>
                <div className="item-content">
                    <h3>John Doe Wedding day</h3>
                    <span>Wedding Party, 24 June 2016</span>
                </div>
            </div>
            <div className="grid-item grid-item--width2 video-gallery " data-category="video-gallery">
                <a className="popup-youtube" href="https://youtu.be/-haiaZ011OM">
                    <img src="assets/images/gallery/2.image.jpg" alt="Image_not_found"/>
                </a>
                <div className="item-content">
                    <h3>Business Conference in Dubai</h3>
                    <span>Food Festival, 24 June 2016</span>
                </div>
            </div>
            <div className="grid-item photo-gallery " data-category="photo-gallery">
                <a className="popup-link" href="assets/images/gallery/3.image.jpg">
                    <img src="assets/images/gallery/3.image.jpg" alt="Image_not_found"/>
                </a>
                <div className="item-content">
                    <h3>Envato Author Fun Hiking</h3>
                    <span>Food Festival, 24 June 2016</span>
                </div>
            </div>

            <div className="grid-item photo-gallery " data-category="photo-gallery">
                <a className="popup-link" href="assets/images/gallery/4.image.jpg">
                    <img src="assets/images/gallery/4.image.jpg" alt="Image_not_found"/>
                </a>
                <div className="item-content">
                    <h3>John Doe Wedding day</h3>
                    <span>Wedding Party, 24 June 2016</span>
                </div>
            </div>
            <div className="grid-item grid-item--width2 video-gallery " data-category="video-gallery">
                <a className="popup-youtube" href="https://youtu.be/-haiaZ011OM">
                    <img src="assets/images/gallery/5.image.jpg" alt="Image_not_found"/>
                </a>
                <div className="item-content">
                    <h3>New Year Celebration</h3>
                    <span>Food Festival, 24 June 2016</span>
                </div>
            </div>

            <div className="grid-item grid-item--width2 photo-gallery " data-category="photo-gallery">
                <a className="popup-link" href="assets/images/gallery/6.image.jpg">
                    <img src="assets/images/gallery/6.image.jpg" alt="Image_not_found"/>
                </a>
                <div className="item-content">
                    <h3>John Doe Wedding day</h3>
                    <span>Wedding Party, 24 June 2016</span>
                </div>
            </div>
            <div className="grid-item video-gallery " data-category="video-gallery">
                <a className="popup-youtube" href="https://youtu.be/-haiaZ011OM">
                    <img src="assets/images/gallery/7.image.jpg" alt="Image_not_found"/>
                </a>
                <div className="item-content">
                    <h3>New Year Celebration</h3>
                    <span>Food Festival, 24 June 2016</span>
                </div>
            </div>
            <div className="grid-item photo-gallery " data-category="photo-gallery">
                <a className="popup-link" href="assets/images/gallery/8.image.jpg">
                    <img src="assets/images/gallery/8.image.jpg" alt="Image_not_found"/>
                </a>
                <div className="item-content">
                    <h3>Envato Author Fun Hiking</h3>
                    <span>Food Festival, 24 June 2016</span>
                </div>
            </div>
        </div>

        <div className="text-center">
            <a href="#!" className="custom-btn">view all gallery</a>
        </div>


    </section>
    {/* <!-- event-gallery-section - end */}
    {/* ================================================== --> */}
</div>
  )
}

export default EventGalleryHome