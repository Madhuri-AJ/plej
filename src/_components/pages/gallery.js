import React, { Component } from "react";
import Lightbox from "react-lightbox-component";
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
                                src: 'assets/images/gym1.jpg',
                                description: ' '
                            },
                            {
                                src: 'assets/images/gym2.jpg',
                                description: ' '
                            },
                            {
                                src: 'assets/images/gym3.jpg',
                                description: ' '
                            }
                        ]}
                            thumbnailHeight='300px'
                            showImageModifiers={false}
                            className=""
                        />
                    </div>
                </div>
            </div>
        )
    }
}