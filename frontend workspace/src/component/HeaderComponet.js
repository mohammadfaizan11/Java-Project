function HeaderComponent()
{
    
    return(
            <nav className="navbar navbar-expand-lg navbar-dark  ">
              <div class="row">
                     <div class="col-sm-4 m-1" id="qt"><a href="" className="navbar-brand" style={{fontSize:"40px", color:"blue" }} >Bridge<span style={{textDecoration:"underline red", }}></span><span style={{color:"red"}}>Soft<span style={{textDecoration:"underline blue",  }}></span></span> </a></div>
                    <div class="col-sm-8  ">          
                    </div>
            </div>
               
                    {/* <div class="col col-sm-4"></div> */}
              <div id="link"className="col-sm-8 d-flex justify-content-end align-items-center float-end ">
              <a    href="" style={{ textDecoration: "none", fontSize: "30px", textAlign: "Right", color: "rgb(17, 17, 17)", }}>Home</a>
              <a   href="" style={{ textDecoration: "none", fontSize: "30px", textAlign: "Right", color: "rgb(0, 0, 0)" }}>About</a>
              <a  href="" style={{ textDecoration: "none", fontSize: "30px", textAlign: "Right", color: "rgb(0, 0, 0)" }}>Contect</a>
           
            </div>
            </nav>
    )

}
export default HeaderComponent