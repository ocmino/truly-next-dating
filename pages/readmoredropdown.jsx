import { useState } from "react";
import Link from "next/link";
import Dropdown from 'react-bootstrap/Dropdown';

export default function ReadMoreDropDown() {


    return(
        <div>
            <div className="logo">
                <h1>truly</h1>
            </div>
            <div>
                <h1 className="avoiding">UNDVIKANDE</h1>
            </div>


            <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
         </Dropdown.Toggle>

  <         Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
        </div>


    )
}