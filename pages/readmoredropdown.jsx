import { useState } from "react";
import Link from "next/link";
import Dropdown from 'react-bootstrap/Dropdown';
import { FaAngleRight, FaFontAwesomeFlag, FaInfinity } from "react-icons/fa";
import { RiBearSmileLine, RiArrowGoBackFill } from "react-icons/ri";
import { GiDynamite,GiOpenBook } from "react-icons/gi";


export default function ReadMoreDropDown() {


    return(
        <div>
            <div className="logo">
                <h1>truly</h1>
            </div>

            <div>
                <h1 className="avoiding">UNDVIKANDE</h1>
            </div>

            <div className="readMoreDropDown">    
                <Dropdown.Menu show>
                <a><FaInfinity className="testicon"/></a>    <Dropdown.Item eventKey="1" className="dropdown">Ankytningsteori</Dropdown.Item> <a className="dropdown" href="https://www.google.com/?client=safari"><FaAngleRight /></a>   
                <Dropdown.Divider />
                <a><FaFontAwesomeFlag/></a>    <Dropdown.Item eventKey="1" className="dropdown">Fem kännetecken</Dropdown.Item> <a className="dropdown" href="https://www.google.com/?client=safari"><FaAngleRight /></a> 
                <Dropdown.Divider />
                <a><RiBearSmileLine/></a>    <Dropdown.Item eventKey="1" className="dropdown">Barndomens påverkan</Dropdown.Item> <a className="dropdown" href="https://www.google.com/?client=safari"><FaAngleRight /></a> 
                <Dropdown.Divider />
                <a><RiArrowGoBackFill/></a>    <Dropdown.Item eventKey="1" className="dropdown">Ändra anknytning</Dropdown.Item> <a className="dropdown" href="https://www.google.com/?client=safari"><FaAngleRight /></a>
                <Dropdown.Divider />
                <a><GiDynamite/></a>    <Dropdown.Item eventKey="1" className="dropdown">Ändra anknytning</Dropdown.Item> <a className="dropdown" href="https://www.google.com/?client=safari"><FaAngleRight /></a>
                </Dropdown.Menu>
                <Dropdown.Divider />
                <a><GiOpenBook/></a>    <Dropdown.Item eventKey="1" className="dropdown">Böcker om anknytning</Dropdown.Item> <a className="dropdown" href="https://www.google.com/?client=safari"><FaAngleRight /></a>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">6 tips för den undvikande</Dropdown.Item>       <a href="https://www.google.com/?client=safari"><FaAngleRight /></a> 
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Övningar som utmanar</Dropdown.Item>        <a href="https://www.google.com/?client=safari"><FaAngleRight /></a> 
            </div>






         
        </div>


    )
}