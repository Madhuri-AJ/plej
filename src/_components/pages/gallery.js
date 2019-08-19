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
                                src: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Ropy_pahoehoe.jpg'
                            },
                            {
                                src: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Pyroclastic_flows_at_Mayon_Volcano.jpg'
                            },
                            {
                                src: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Okataina.jpg'
                            }
                        ]}
                            thumbnailWidth='33.3%'
                            thumbnailHeight='300px'
                            showImageModifiers={false}
                            className="_1bpafaq"
                        />
                    </div>
                </div>
            </div>
        )
    }
}