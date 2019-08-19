import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class ClassPage extends Component {
    constructor(props) {
        super(props);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    render() {
        return (
            <div>
                <div class="_1vdzHPH">
                    <div class="_3SYd3N0 _2rbE6TC _2v5bHvx">
                        <div class="_1V2XMPJ">
                            <div class="_2heWrbT sDHKtsB">
                                <h4 class="_35ms454 _2rbE6TC _2v5bHvx">Search</h4>
                            </div>
                            <div class="_2pwByUC _2rbE6TC _2v5bHvx">
                                <div class="_3Wse5wf _2rbE6TC _2v5bHvx">
                                    <div class="_3aa_vTA"><input type="text" class="_37fECWZ"
                                        value="" placeholder="Search" />
                                        <button class="_3fk1T1C button"><span>Search</span></button></div>
                                    <div class="_3T5y0ag _2rbE6TC _2v5bHvx">
                                        <div class="_3ojvz76 _2HhTmXD _2v5bHvx">
                                            <div class="_3Bh2bMG _2rbE6TC _2v5bHvx">
                                                <h4>Location</h4>
                                            </div>
                                            <ul class="_3wnCvPf _2rbE6TC _2v5bHvx">
                                                <li class="_1UpIxiY">Bank</li>
                                                <li class="_1UpIxiY">Cannon Street</li>
                                                <li class="_1UpIxiY">Covent Garden</li>
                                                <li class="_1UpIxiY">Ealing</li>
                                                <li class="_1UpIxiY">Elephant and Castle</li>
                                                <li class="_1UpIxiY">Farringdon</li>
                                                <li class="_1UpIxiY">Holborn</li>
                                                <li class="_1UpIxiY">Old Street</li>
                                                <li class="_1UpIxiY">Victoria</li>
                                                <li class="_1UpIxiY">Westfield London</li>
                                                <li class="_1UpIxiY">Westfield Stratford</li>
                                            </ul>
                                        </div>
                                        <div class="oa8eiuy _2HhTmXD _2v5bHvx">
                                            <div class="_3Bh2bMG _2rbE6TC _2v5bHvx">
                                                <h4>Category</h4>
                                            </div>
                                            <ul class="_3wnCvPf _2rbE6TC _2v5bHvx">
                                                <li class="_1UpIxiY">Aerial Series</li>
                                                <li class="_1UpIxiY">Combat Sports</li>
                                                <li class="_1UpIxiY">Cycle Club</li>
                                                <li class="_1UpIxiY">Functional Training</li>
                                                <li class="_1UpIxiY">Holistic Retreat</li>
                                                <li class="_1UpIxiY">Look Better Naked</li>
                                                <li class="_1UpIxiY">School of Dance</li>
                                                <li class="_1UpIxiY">Sweat Drench</li>
                                                <li class="_1UpIxiY">Creative Classes</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="_39EiYTl _2rbE6TC _2v5bHvx VBD7Ow3">
                            <div style={{ "width": "100%" }}>
                                <div class="_3Fst1pU _3x6v3-y" style={{ "width": "22%", "margin-right": "4%", "display": "inline-block" }}>
                                    <div class="_2gpiPPm _2WGnI5T _2rbE6TC _2v5bHvx"><img
                                        src="https://gymbox-assets.enecdn.io/images/slideshow/_classThumbnail/AshtangaYoga_New_1_190221_120328.jpg?mtime=20190221120328"
                                        class="_3h_jpHd" /></div>
                                    <h3 class="rfn1m5O">Yoga</h3><span class="_GcKgjb"></span><NavLink className="_1nR3q81 sDHKtsB"
                                        to="/class/amrap"></NavLink>
                                </div>
                                <div class="_3Fst1pU _3x6v3-y" style={{ "width": "22%", "margin-right": "4%", "display": "inline-block" }}>
                                    <div class="_2gpiPPm _2WGnI5T _2rbE6TC _2v5bHvx"><img
                                        src="https://gymbox-assets.enecdn.io/images/slideshow/_classThumbnail/AshtangaYoga_New_1_190221_120328.jpg?mtime=20190221120328"
                                        class="_3h_jpHd" /></div>
                                    <h3 class="rfn1m5O">Fitness</h3><span class="_GcKgjb"></span><NavLink className="_1nR3q81 sDHKtsB"
                                        to="/class/amrap"></NavLink>
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ClassPage;