import React, { useRef, useState } from "react";
import Header from "./Header";
import "./ItemList.css"
import Item from "./Item";

const ItemList = () => {

    const initItem = () => {
        return "";
    }

    const [item, setItem] = useState(initItem);
    const [items, setItems] = useState([]);
    const [error, setError] = useState("");
    const refValue = useRef();


    let itemValue;
    const getItem = (e) => {
        itemValue = e.target.value;
        setItem(itemValue);
        setError("");
    }

    const addItem = () => {
        if (!(item === "")) {
            setItems([...items, item])
            setItem("");
            setError("");
        }
        else {
            setError("Enter the value");
        }
    }

    const deleteItem = (e) => {
        console.log(e.target.id);
        let id = parseInt(e.target.id);
        let itemsUpdated = items.filter((elem, index) => {
            return index !== id;
        });

        console.log(itemsUpdated);
        setItems([...itemsUpdated]);
    }

    const editItem = (index) => {

        refValue.current.id = index;
        // document.querySelector("#inputHidden").value = index;
        document.querySelector("#input1").value = items[index];

        document.querySelector("#saveBtn").style.display = "inline-block";
        document.querySelector("#addBtn").style.display = "none";
    }

    const saveItem = () => {
        if (!(item === "")) {
            document.querySelector("#addBtn").style.display = "inline-block";
            document.querySelector("#saveBtn").style.display = "none";

            let index = parseInt(refValue.current.id);
            console.log(index);

            let newItem = item;
            console.log(newItem);

            let newItems = items.map((elem, index11, arr) => {
                if (index11 === index) {
                    return newItem;
                }
                else {
                    return elem;
                }
            });
            console.log(newItems);
            setItems([...newItems]);
            setItem("");
        }
        else {
            setError("Enter the value");
        }


    }

    return (
        <>
            <div className="container">
                {/* <h1>Item List</h1> */}
                <Header title="Item List"></Header>
                <div className="container1">
                    <h6 style={{ color: "red" }}>{error}</h6>
                    <textarea id="input1" type="text" value={item} onChange={getItem} style={{ height: "80px", width: "250px" }} />
                    <input type="text" id="" ref={refValue} hidden />
                    <button id="addBtn" className="btn-sm btn-blue" onClick={addItem} style={{ marginRight: "1rem" }}>Add</button>
                    <button id="saveBtn" className="btn-sm btn-blue" onClick={saveItem} style={{ display: "none" }}>Save</button>

                    {
                        items.map((elem, index) => <Item key={index} index={index} elem={elem} deleteItem={deleteItem} editItem={() => editItem(index)}></Item>)
                    }
                </div>
            </div>
        </>
    )
}

export default ItemList;