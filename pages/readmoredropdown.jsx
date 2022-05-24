
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

     
            
            <div  className="LinksDiv">

                <Link href="/loginpage"><a className="backArrow1">←</a></Link>

                <Link href="/swipePage"><a className="profileX">X</a></Link>

                <h1 className="logo">truly</h1>
                
                 <h1 className="avoiding">UNDVIKANDE</h1>
                
                <ul className="Links">
                    <GiInfinity className="Icons"/>
                    <Link href="/anknytningsteori" className="DropDownMenu">
                    <a className="DropDownMenu">Anknytningsteori</a>
                    </Link>
                    <p className="Line">______________________________________________</p>
                    <ImArrowRight className="Arrow"/>
              
                </ul>
                <br></br>
                <ul className="Links">
                    <BsFlagFill className="Icons"/>
                    <Link href="/femkannetecken" className="DropDownMenu">
                    <a className="DropDownMenu">Fem kännetecken</a>
                    </Link>
                    <p className="Line">______________________________________________</p>
                    <ImArrowRight className="Arrow"/>
                </ul>
                <br></br>
                <ul className="Links">
                    <RiBearSmileLine className="Icons"/>
                    <Link href="/barndomenspaverkan" className="DropDownMenu">
                    <a className="DropDownMenu">Barndomens påverkan</a>
                    </Link>
                    <p className="Line">______________________________________________</p>
                    <ImArrowRight className="Arrow"/>
                </ul>
                <br></br>
                <ul className="Links">
                    <MdOutlineSubdirectoryArrowLeft className="Icons"/>
                    <Link href="/andraanknytning" className="DropDownMenu">
                    <a className="DropDownMenu">Ändra anknytning</a>
                    </Link>
                    <p className="Line">______________________________________________</p>
                    <ImArrowRight className="Arrow"/>
                </ul>
                <br></br>
                <ul className="Links">
                    <GiDynamite className="Icons"/>
                    <Link href="/triggadanknytning" className="DropDownMenu">
                    <a className="DropDownMenu">När triggas anknytning</a>
                    </Link>
                    <p className="Line">______________________________________________</p>
                    <ImArrowRight className="Arrow"/>
                </ul>
                 <br></br>
                <ul className="Links">
                    <GiBookmarklet className="Icons"/>
                    <Link href="/bockeromanknytning" className="DropDownMenu">
                    <a className="DropDownMenu">Böcker om anknytning</a>
                    </Link>
                    <p className="Line">______________________________________________</p>
                    <ImArrowRight className="Arrow"/>
                </ul>
                 <br></br>
                <ul className="Links">
                    <AiOutlineBulb className="Icons"/>
                    <Link href="/tipsfordenundvikande" className="DropDownMenu">
                    <a className="DropDownMenu">6 tips för den undvikande</a>
                    </Link>
                    <p className="Line">______________________________________________</p>
                    <ImArrowRight className="Arrow"/>
                </ul>
                 <br></br>
                <ul className="Links">
                    <RiSwordLine className="Icons"/>
                    <Link href="/ovningar" className="DropDownMenu">
                    <a className="DropDownMenu">Övningar som utmanar</a>
                    </Link>
                    <p className="Line">______________________________________________</p>
                    <ImArrowRight className="Arrow"/>
                </ul>
                <br></br>
               
 
      

                
            </div>
     

           
            
           
     

    
  )
}