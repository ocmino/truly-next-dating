
import 'bootstrap/dist/css/bootstrap.min.css';
import { GiInfinity } from "react-icons/gi";
import { ImArrowRight } from "react-icons/im";
import { BsFlagFill } from "react-icons/bs";
import { RiBearSmileLine, RiSwordLine } from "react-icons/ri";
import { MdOutlineSubdirectoryArrowLeft } from "react-icons/md";
import { GiDynamite, GiBookmarklet } from "react-icons/gi";
import { AiOutlineBulb } from "react-icons/ai";
import Link from 'next/link';

export default function ReadMoreDropDown() {


    return (

        <div >
            
            <div className="DropDownMenu">
                <ul>
                    <GiInfinity/>
                    <Link href="/anknytningsteori" className="DropDownMenu">
                    <a>Anknytningsteori</a>
                    </Link>
                    <ImArrowRight/>
                </ul>
                <br></br>
                <ul>
                    <BsFlagFill/>
                    <Link href="/anknytningsteori" className="DropDownMenu">
                    <a>Fem kännetecken</a>
                    </Link>
                    <ImArrowRight/>
                </ul>
                <br></br>
                <ul>
                    <RiBearSmileLine/>
                    <Link href="/anknytningsteori" className="DropDownMenu">
                    <a>Barndomens påverkan</a>
                    </Link>
                    <ImArrowRight/>
                </ul>
                <br></br>
                <ul>
                    <MdOutlineSubdirectoryArrowLeft/>
                    <Link href="/anknytningsteori" className="DropDownMenu">
                    <a>Ändra anknytning</a>
                    </Link>
                    <ImArrowRight/>
                </ul>
                <br></br>
                <ul>
                    <GiDynamite/>
                    <Link href="/anknytningsteori" className="DropDownMenu">
                    <a>När triggas anknytning</a>
                    </Link>
                    <ImArrowRight/>
                </ul>
                 <br></br>
                <ul>
                    <GiBookmarklet/>
                    <Link href="/anknytningsteori" className="DropDownMenu">
                    <a>Böcker om anknytning</a>
                    </Link>
                    <ImArrowRight/>
                </ul>
                 <br></br>
                <ul>
                    <AiOutlineBulb/>
                    <Link href="/anknytningsteori" className="DropDownMenu">
                    <a>6 tips för den undvikande</a>
                    </Link>
                    <ImArrowRight/>
                </ul>
                 <br></br>
                <ul>
                    <RiSwordLine/>
                    <Link href="/anknytningsteori" className="DropDownMenu">
                    <a>Övningar som utmanar</a>
                    </Link>
                    <ImArrowRight/>
                </ul>
            </div>
     

           
            
           
        </div>

    
  )
}