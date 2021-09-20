import React, { useState } from 'react';
import './index.css';

function Pagination(props) {    const [counter, setCounter] = useState(1);
    const showPerPage = 6;
    const totalUserData = 12;
    const [numberOfButtons, setnumberOfButtons] = useState(Math.ceil(totalUserData / showPerPage));

    return (
        <nav aria-label="...">
            <ul class="pagination"  className="pagination" style={{ marginLeft: "37%" }}>
                {( (props.index+1)=== 1 ) &&(
                    <li class="page-item ">
                        <a class="page-link" href="!#" tabindex="-1" aria-disabled="true" onClick={() => props.setCounter(counter)}>Previous</a>
                    </li>
                )}
                        
                {((props.index+1)!==counter ) &&(
                    <li class="page-item ">
                        <a class="page-link" href="!#" tabindex="-1" aria-disabled="true" onClick={() => props.setCounter(counter - 1)}>Previous</a>
                    </li>
                )}
                        
                {
                    new Array(numberOfButtons).fill("").map((el, index) => (
                        //<li class={`page-item ${(index+1) === counter ? "active" : null }`}>
                        <li class="page-item " aria-current="page">
                            <a class="page-link" href="!#" onClick={() => props.setCounter(index + 1)}>
                                {index+1}
                            </a>
                        </li>
                    ))
                }

                {((props.index+1) === numberOfButtons ) &&(
                <li class="page-item">
                    <a class="page-link" href="!#" onClick={() => props.setCounter(counter + 1)}>Next</a>
                </li>
                )}

                {((props.index+1) !== numberOfButtons ) &&(
                <li class="page-item">
                    <a class="page-link" href="!#" onClick={() => props.setCounter(counter + 1)}>Next</a>
                </li>
                )}

            </ul>
        </nav>
    )
}
export default Pagination;