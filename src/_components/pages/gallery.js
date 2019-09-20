import React, { Component } from "react";
import Lightbox from "react-lightbox-component";
import Footer from "../common/footer";
export default class GalleryPage extends Component {
    constructor(props) {
        super(props);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    render() {
        return (
            <div class="_1vdzHPH">
                <div class="_3l5upd8 _2rbE6TC _2v5bHvx">
                    <div class="_2uaX48K _1G7RCdW _2v5bHvx VBD7Ow3">
                        <Lightbox images={[
                            {
                                src: 'assets/images/forum/forum_2.jpg',
                                description: ' '
                            },
                            {
                                src: 'assets/images/kumarpark/kumarpark_1.jpg',
                                description: ' '
                            },
                            {
                                src: 'assets/images/panatur/panatur_2.jpg',
                                description: ' '
                            },
                            {
                                src: 'assets/images/rajajinagar/rajajinagar_2.jpg',
                                description: ' '
                            },
                            {
                                src: 'assets/images/vr-mall/vr_3.jpg',
                                description: ' '
                            },
                            {
                                src: 'assets/images/rajajinagar/rajajinagar_3.jpg',
                                description: ' '
                            }
                        ]}
                            thumbnailHeight='300px'
                            showImageModifiers={false}
                            className=""
                        />
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}