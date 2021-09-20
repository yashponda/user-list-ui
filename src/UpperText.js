import React from 'react';
import './index.css';

function UpperText() {

    return (
        <>
            <div className="main_div">
                <span style={{ fontWeight: "bolder", fontSize: "21px", fontFamily: "Arial" }}>All Users </span>
                <button style={{ color: "#397dde", fontWeight: "bolder", marginLeft: '10px', padding: "5px" }}> + Add User</button><br /><br />
                <p style={{ fontFamily: "Arial",fontSize:"14px" }}> Lorem ipsum dolor sit amet, consecuter adipcieng edit send do Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
                    to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged.</p>
            </div>
        </>
    );
}
export default UpperText;