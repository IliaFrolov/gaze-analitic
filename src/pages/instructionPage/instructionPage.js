import classNames from 'classnames';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/button';
import { PATH_TESTS_PAGE } from '../../constants';
import gs from './../../styles/global.module.css';
import s from './instructionPage.module.css';

const InstructionPage = () => {
    const navigate = useNavigate();
    return (
        <div className={gs.flexFullScreenCenterCenter}>
            <div className={classNames(gs.box, s.box)}>
                {/* <div className={s.boxInner}> */}
                <h1>Instruction</h1>
                <div className={s.text}>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim,
                        nulla at facilisis porttitor, odio orci sodales sem, faucibus scelerisque
                        libero urna sit amet erat. Duis ipsum erat, luctus id ultricies in, sodales
                        sed erat. Etiam vitae nunc sem. Donec in metus odio. Morbi luctus ligula
                        elementum odio dignissim, eget vehicula lacus posuere. In sed sem tincidunt
                        magna mattis rutrum. Phasellus suscipit a mauris iaculis vestibulum. Vivamus
                        id placerat justo. Praesent ut egestas risus, eu eleifend odio. Cras
                        viverra, erat id porttitor sollicitudin, ipsum mauris fringilla odio, sit
                        amet varius purus sapien id erat. Vestibulum nec lorem vitae ipsum posuere
                        posuere. Pellentesque habitant morbi tristique senectus et netus et
                        malesuada fames ac turpis egestas. Phasellus aliquam, lorem sit amet
                        ullamcorper interdum, tortor velit euismod odio, at tempus dolor erat
                        consequat purus. Duis vel sapien nulla. Phasellus orci dui, porta id
                        vulputate vel, congue eu mi. Vivamus consectetur, dolor et facilisis
                        sodales, ligula urna sodales leo, vitae auctor enim felis vel est. Sed nec
                        magna at nunc hendrerit hendrerit. Praesent vel posuere massa. Vivamus augue
                        metus, viverra in orci sed, finibus ornare libero. Quisque nec elit vitae
                        massa tincidunt bibendum eu nec lacus. Morbi posuere, mauris a lacinia
                        sodales, ipsum lorem scelerisque tortor, dignissim imperdiet ex metus a
                        lacus. Nulla facilisi. Pellentesque fermentum, magna nec euismod vulputate,
                        est ligula blandit turpis, quis imperdiet metus felis sed nulla. Quisque
                        consectetur erat non lorem convallis, non pulvinar urna blandit. Curabitur
                        elementum nunc vel est vestibulum dapibus. Curabitur euismod interdum elit
                        et consequat. Fusce mattis nunc et nulla varius, id vestibulum arcu tempus.
                        Morbi bibendum tincidunt luctus. Mauris sit amet mattis est. Donec in nisi
                        elementum tellus molestie sodales. Quisque a tortor varius libero vestibulum
                        fermentum. Curabitur vulputate libero massa, nec placerat justo eleifend eu.
                        Etiam fermentum bibendum libero et blandit. Ut imperdiet maximus odio, a
                        rutrum turpis fringilla quis. Class aptent taciti sociosqu ad litora
                        torquent per conubia nostra, per inceptos himenaeos. Sed consectetur tempor
                        enim a sollicitudin. Duis placerat pellentesque ligula, id malesuada est
                        porta in. Vivamus a convallis tellus.
                    </span>
                </div>
                {/* </div> */}
                {/* <div className={s.boxInner}> */}
                <Button onClick={() => navigate(PATH_TESTS_PAGE)}>Go to calibration</Button>
                {/* </div> */}
            </div>
        </div>
    );
};

export default InstructionPage;
