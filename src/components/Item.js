import React from "react";
import "./Item.css";

const Item = (props) => {
    return (
        <>
            <div className="list-items">
                <div className="list-item">
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <p>{props.elem}</p>
                                </td>
                                <td>
                                    <button className="btn-sm btn-orange" id={props.index} onClick={() => props.editItem(props.index)}>Edit</button>
                                </td>
                                <td>
                                    <button className="btn-sm btn-orange" id={props.index} onClick={props.deleteItem}>Done</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Item;