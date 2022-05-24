import Link from "next/link";
import Image from 'next/image'
import logo from '../public/static/profilePic.png'
import React, { useState } from "react";


export default function swipePage() {

    return (
        <div>

            <header className="swipeHeader">
                <Link href="/profile">
                    <a>
                        <img id="profileLogo" 
                        src="https://pluspng.com/img-png/png-user-icon-customer-icon-1600.png" 
                        width={50} 
                        height={50}/>
                    </a>
                </Link>

                <div id="swipeLogo">
                   <p>truly</p> 
                </div>

                <Link href="/chatt">
                    <a>
                        <img id="chattLogo" 
                        src="https://th.bing.com/th/id/OIP.UitI6frb7Pw8CARGqq96vAHaHa?pid=ImgDet&rs=1" 
                        width={50} 
                        height={50}/>
                    </a>
                </Link>
            </header>
            
               
                    

              <img src="https://cdn.stocksnap.io/img-thumbs/960w/woman-portrait_EJ3DVIGPDX.jpg" width={376} height={426}/>
        

        </div>
    )
}