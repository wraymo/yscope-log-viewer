import React, { useContext, useRef, useState } from "react";
import { Form } from 'react-bootstrap';
import STATE_CHANGE_TYPE from "../../services/STATE_CHANGE_TYPE";
import { Resizable } from "re-resizable";

export function SideBar({ changeStateCallback, searchResults, clickItemCallback }) {

    const handleInputChange = (e) => {
        changeStateCallback(STATE_CHANGE_TYPE.search, { searchString: e.target.value });
    };

    const listOfSearchResults = searchResults.map((result, index) => {
        return (
            <div key={index}>
                <h6 style={{ color: "white" }}>Page {result.page_num + 1}</h6>
                <ul style={{ whiteSpace: 'nowrap', listStyleType: 'none' }}>
                    {result.searchResults.map((line, index) => (
                        <li key={index} onClick= {()=>clickItemCallback(result.page_num + 1, line.lineNum)} style={{ color: "white", fontSize: "10pt", padding: "1pt", cursor: 'pointer',
                        color: '#007bff' }}>{line.content}</li>
                    ))}
                </ul>
            </div>
        )
    })

    return (
        <Resizable
            defaultSize={{
                width: 300,
                height: '100%',
            }}>
            <div className="side-bar" style={{ overflow: 'auto', height: '100%' }}>
                <div className="side-bar__header">
                    <div className="side-bar__header__title" style={{ color: "white" }}>
                        <h2>Search</h2>
                    </div>
                </div>
                <Form>
                    <Form.Group controlId="formSearchString">
                        {/* <Form.Label>Search String</Form.Label> */}
                        <Form.Control
                            type="text"
                            defaultValue=""
                            onChange={handleInputChange}
                            style={{ backgroundColor: 'white', color: 'black' }}
                        />
                    </Form.Group>
                </Form>
                <div >
                    {listOfSearchResults}
                </div>
            </div>
        </Resizable>
    );
}
