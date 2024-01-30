import React, {useState} from "react";

import img1 from "../images/flix.png";
import img2 from "../images/vector.svg";
import img4 from "../images/mark.svg";
import img5 from "../images/play.svg";
import img6 from "../images/picture.png";
import img7 from "../images/star.png";
import img8 from "../images/picture 1.png";
import img9 from "../images/picture3.png";
import img10 from "../images/picture4.png";
import img11 from "../images/picture10.png";
import img12 from "../images/picture6.png";
import img13 from "../images/picture7.png";
import img14 from "../images/picture8.png";
import img15 from "../images/picture9.png";
import img16 from "../images/flash.png";
import img17 from "../images/to me.png";
import img18 from "../images/killer moon.png";
import img19 from "../images/aquaman.png";
import img20 from "../images/lastofus.png";
import img21 from "../images/one piece.png";
import img22 from "../images/twisted.png";
import img23 from "../images/wilderness.png";
import img24 from "../images/vanish.png";
import img25 from "../images/projecticon.png";
import img26 from "../images/lala.png";
import img27 from "../images/seceret.png";
import img28 from "../images/twi.png";
import img29 from "../images/vector2.svg";
import img30 from "../images/vector3.svg";
import img31 from "../images/copy.svg";
import img32 from "../images/close.png";


const Home = () =>{


    const [set, setSet] = useState(false);

    const jy = () => {
        setSet(!set);
    }
    

    return(
        <>
        <div classname=" ">
         
         <div className=" atura flex flex-col w-[100%]" >
        <div className="flex justify-between mt-[10px] p-[10px] max-md:px-[15px] px-[40px] align-center">
         <div className="my-[auto]">
         <img src={img1} className="w-[200px]"/>
         </div>
         <div className={set? "active clao": "clao"}>
           <div className=" my-[auto]">

            <ul className="decoration-none text-white align-center cursor-pointer flex gap-[20px]  text-center max-md:flex-col max-md:mt-[3px] max-md:gap-[30px]">
                <li>Home</li>
                <li>Discover</li>
                <li>New Realeases</li>
                <li>Forum</li>
            </ul>

            </div>
    
    

            <div className=" flex gap-[20px] my-[auto] max-md:flex-col">
                
            <div className="my-[auto] max-md:hidden">
            <img src={img2} />
            </div>

            <button className=" atu rounded-md w-[100px] p-[7px] text-center text-white">sign up</button>
            <button className=" bg-blue-800 rounded-md w-[100px] p-[7px]  text-center text-white">login</button>
           </div>
            </div>

            <div className="my-[auto] max-lg:hidden">
            <img src={img2} />
            </div>

            {set? <div className="w-[8%] bg-white my-[auto] cursor-pointer" onClick={jy}><img src={img32} className=" max-md:flex h-[auto] hidden "/></div> :
(<div  onClick={jy} className="flex flex-col gap-[3px]  my-[auto] hidden max-md:flex my-[auto] cursor-pointer" >
    <span  className="w-[30px] bg-white  h-[3px]"></span>
    <span  className="w-[30px] bg-white h-[3px]"></span>
    <span  className="w-[30px] bg-white h-[3px]"></span>
   </div>)
    }
            </div>

           



            <div className="marvel flex flex-col w-[47%] max-md:w-[95%] shadow-md text-white gap-[20px] max-md:pl-[20px]  pl-[50px] max-md:mt-[120px] mt-[150px] ">
                <h1 className="text-[40px] font-bold max-md:text-[17px]">The Marvels</h1>
                <p className="max-md:text-[15px]">Carol Danvers, aka Captain Marvel, has reclaimed her identity from the tyrannical kree and taken revenge on the supreme intelligence. However, unintended consequences see her shouldering the burden of a destabilised universe. When are duties send her to an anomalous wormhole linked to a kree revolutionary, her powers become entangled with two other superheroes to form the Marvels.</p>
              
                <div className="flex gap-[30px]">
              
              <div className="flex atu p-[11px] max-md:p-[8px] my-[auto] rounded-md gap-[5px] bg-none">
              <img src={img4}  className="w-[20px]"/>
              <p className="max-md:text-[14px]">Add to watch</p>
              </div>
             
             
              <div className="flex bg-blue-700 w-[150px] p-[11px] align-center my-[auto] rounded-md gap-[6px]">
              <img src={img5} className="w-[20px]"/>
              <p className="max-md:text-[14px]">Add to watch</p>
              </div>
             
             </div>
                </div>
         </div>





        <div className="mt-[30px]  max-md:pl-[0px] max-md:m-[auto] pl-[50px] max-md:w-[90%] my-[auto]  w-[100%] ">
        <p className="text-white font-bold text-[25px] max-md:text-[17px]">New Release</p>
        <div className="text-white mt-[30px] w-[100%] gap-[15px] flex   dud ">
                  
                   <div className="relative w-[200px] my-[auto] max-md:w-[150px]">
                        <div className="relative w-[200px] max-md:w-[150px]">
                        <img src={img6} />
                        </div>
                      

                        <div className="absolute p-[15px] flex flex-col font-bold w-[100%] bottom-[0px] ">
                        <p className="max-md:text-[14px]">Barbie</p>
                        <div className="flex gap-[5px] align-center w-[100%] text-[10px] ">
                            <img src={img7} className="my-[auto]"/>
                        <p>3.6 | Fantasy . Sci-fi</p>
                        </div>
                        </div>
                    </div>

                    <div className="relative w-[200px] my-[auto] max-md:w-[150px]">
                        <div className="relative w-[200px]  max-md:w-[150px]">
                        <img src={img8} />
                        </div>
                      

                        <div className="absolute p-[15px] flex flex-col font-bold w-[100%] bottom-[0px] ">
                        <p className="max-md:text-[14px]">Napoleon</p>
                        <div className="flex gap-[5px] align-center w-[100%] text-[10px] ">
                            <img src={img7} className="my-[auto]"/>
                        <p>4.6 | Fantasy . History . Action</p>
                        </div>
                        </div>
                    </div>


                    <div className="relative w-[200px] my-[auto] max-md:w-[150px]">
                        <div className="relative w-[200px] my-[auto] max-md:w-[150px]">
                        <img src={img9} />
                        </div>
                      

                        <div className="absolute p-[15px] flex w-[100%] flex-col font-bold  bottom-[0px] ">
                        <p className="max-md:text-[14px]">Oppenheimer</p>
                        <div className="flex gap-[5px] align-center w-[100%] text-[10px] ">
                            <img src={img7} className="my-[auto]"/>
                        <p>4.8 | Action . Sci-fi . IMAX</p>
                        </div>
                        </div>
                    </div>

                    <div className="relative w-[200px] my-[auto] max-md:w-[150px]">
                        <div className="relative w-[200px] my-[auto] max-md:w-[150px]">
                        <img src={img10} />
                        </div>
                      

                        <div className="absolute p-[15px] flex flex-col font-bold w-[100%] bottom-[0px] ">
                        <p className="max-md:text-[14px]">The Killer</p>
                        <div className="flex gap-[5px] align-center w-[100%] text-[10px]">
                            <img src={img7} className="my-[auto]"/>
                        <p>3.6 | Fantasy . Action</p>
                        </div>
                        </div>
                    </div>

                    <div className="relative w-[200px] my-[auto] max-md:w-[150px]">
                        <div className="relative w-[200px] my-[auto] max-md:w-[150px]">
                        <img src={img11} />
                        </div>
                      

                        <div className="absolute p-[15px] flex flex-col font-bold w-[100%] bottom-[0px] ">
                        <p className="max-md:text-[14px]">Thanksgiving </p>
                        <div className="flex gap-[5px] align-center w-[100%] text-[10px] ">
                            <img src={img7} className="my-[auto]"/>
                        <p>4.0 | Fantasy . Horror</p>
                        </div>
                        </div>
                    </div>


                     <div className="relative w-[200px] my-[auto] max-md:w-[150px]">
                        <div className="relative w-[200px] my-[auto] max-md:w-[150px]">
                        <img src={img10} />
                        </div>
                      

                        <div className="absolute p-[15px] flex flex-col font-bold w-[100%] bottom-[0px] ">
                        <p className="max-md:text-[14px]">Barbie</p>
                        <div className="flex gap-[5px] align-center w-[100%] text-[10px]">
                            <img src={img7} className="my-[auto]"/>
                        <p>3.6 | Fantasy . Sci-fi</p>
                        </div>
                        </div>
                    </div>

                    <div className="relative w-[200px] my-[auto] max-md:w-[150px]">
                        <div className="relative w-[200px] my-[auto] max-md:w-[150px]">
                        <img src={img6} />
                        </div>
                      

                        <div className="absolute p-[15px] flex flex-col font-bold w-[100%] bottom-[0px] ">
                        <p className="max-md:text-[14px]">Barbie</p>
                        <div className="flex gap-[5px] align-center w-[100%] text-[10px] ">
                            <img src={img7} className="my-[auto]"/>
                        <p>3.6 | Fantasy . Sci-fi</p>
                        </div>
                        </div>
                    </div>


                    

                    
                    

                </div>
           </div>







<div className="mt-[50px] max-md:mt-[30px] pl-[50px] max-md:pl-[0px] max-md:m-[auto] max-md:w-[85%] my-[auto]  w-[100%] ">
<p className="text-white font-bold text-[25px] max-md:text-[17px]">Top Picks This Week</p>
            
            
            <div className=" mt-[25px] flex w-[100%] justify-between max-md:gap-[20px] overflow-x-scroll " style={{}}>
               
                <div className="text-white flex align-center w-[auto] gap-[10px] ">
                    <h2 className="text-[30px] font-bold my-[auto]">1</h2>
                    
                    <div className="w-[100px]">
                     <img src={img12} className=""/>
                    </div>
                   
                    <div className=" flex flex-col text-[14px] max-md:text-[12px] gap-[2px] my-[auto]">
                        <p className="bg-black p-[3px] text-[10px] border rounded-md w-[40px] text-center" style={{color:"gray", borderColor:"gray"}}>PG  13</p>
                        <h2>The flash</h2>
                        <p className="text-grey" style={{color:"gray"}}>comedy action</p>
                        <div className="flex gap-[5px]">
                        <img src={img7} className="my-[auto]"/>
                            <p>3.6 </p>
                            <p>|</p>
                            <p>Movie</p>
                        </div>
                        </div>
                </div>
                



                
  <div className="text-white flex align-center gap-[10px] ">
                    <h2 className="text-[30px] font-bold my-[auto]">2</h2>
                    
                    <div className="w-[100px]">
                     <img src={img13} className=""/>
                    </div>
                   
                    <div className=" flex flex-col text-[14px] max-md:text-[12px] gap-[2px] my-[auto]">
                        <p className="bg-black p-[3px] text-[10px] border rounded-md w-[40px] text-center" style={{color:"gray", borderColor:"gray"}}>PG  13</p>
                        <h2>They Cloned Tyrone</h2>
                        <p className="text-grey" style={{color:"gray"}}>Comedy.Action.Sci.Fi</p>
                        <div className="flex gap-[5px]">
                        <img src={img7} className="my-[auto]"/>
                            <p>4.0 </p>
                            <p>|</p>
                            <p>Movie</p>
                        </div>
                        </div>
                </div>



  <div className="text-white flex align-center gap-[10px] ">
                    <h2 className="text-[30px] font-bold my-[auto]">3</h2>
                    
                    <div className="w-[100px]">
                     <img src={img14} className=""/>
                    </div>
                   
                    <div className=" flex flex-col text-[14px] max-md:text-[12px] gap-[2px] my-[auto]">
                        <p className="bg-black p-[3px] text-[10px] border rounded-md w-[40px] text-center" style={{color:"gray", borderColor:"gray"}}>PG  13</p>
                        <h2>Talk To Me</h2>
                        <p className="text-grey" style={{color:"gray"}}>Horror.Thriller</p>
                        <div className="flex gap-[5px]">
                        <img src={img7} className="my-[auto]"/>
                            <p>4.0 </p>
                            <p>|</p>
                            <p>Movie</p>
                        </div>
                        </div>
                </div>

              




                
            
  <div className="text-white flex align-center gap-[10px] ">
                    <h2 className="text-[30px] font-bold my-[auto]">4</h2>
                    
                    <div className="w-[100px]">
                     <img src={img15} className=""/>
                    </div>
                   
                    <div className=" flex flex-col text-[14px] max-md:text-[12px] gap-[2px] my-[auto]">
                        <p className="bg-black p-[3px] text-[10px] border rounded-md w-[40px] text-center" style={{color:"gray", borderColor:"gray"}}>PG  13</p>
                        <h2>Napoleon</h2>
                        <p className="text-grey" style={{color:"gray"}}>Fantasy.History.Action</p>
                        <div className="flex gap-[5px]">
                        <img src={img7} className="my-[auto]"/>
                            <p>4.5 </p>
                            <p>|</p>
                            <p>Movie</p>
                        </div>
                        </div>
                </div>


                  


      
              





            </div>


           </div>

           <div className="">
            <div className="oj">
                <div className="flex justify-evenly max-md:justify-center max-md:w-[95%] max-md:flex-col max-md:m-[auto]">
                <div className="marvel  flex flex-col w-[40%] max-md:w-[90%] max-md:m-[auto]  text-white gap-[20px]  max-md:pt-[10px] pt-[200px] ">
                <h1 className="text-[40px] font-bold max-md:text-[24px]">The Marvels</h1>
                <div className="flex align-center gap-[10px]">
                    <img src={img7}  className="my-[auto]"/>
                    <p>4.6 | 1h 37m . 2023 . Fantasy . Sci-fi . Action</p>
                </div>
                <p className="max-md:text-[15px]">Carol Danvers, aka Captain Marvel, has reclaimed her identity from the tyrannical kree and taken revenge on the supreme intelligence. However, unintended consequences see her shouldering the burden of a destabilised universe. When are duties send her to an anomalous wormhole linked to a kree revolutionary, her powers become entangled with two other superheroes to form the Marvels.</p>
              
               <div className="flex gap-[30px]">
              
                <div className="flex atu p-[11px] max-md:p-[8px] my-[auto] rounded-md gap-[5px] bg-none">
                <img src={img4}  className="w-[20px]"/>
                <p className="max-md:text-[14px]">Add to watch</p>
                </div>
               
               
                <div className="flex bg-blue-700 w-[150px] p-[11px] align-center my-[auto] rounded-md gap-[6px]">
                <img src={img5} className="w-[20px]"/>
                <p className="max-md:text-[14px]">Add to watch</p>
                </div>
               
               </div>
                </div>


                <div className="flex gap-[10px] max-md:w-[90%]  overflow-x-scroll w-[50%] max-md:overflow-x-scroll max-md:mt-[50px] max-md:m-[auto] mt-[200px]">

                
                <div className="relative w-[200px] my-[auto]  max-md:w-[150px]">
                        <div className="relative w-[200px] my-[auto] max-md:w-[150px]">
                        
                        <img src={img11} />
                        </div>
                      

                        <div className="absolute text-white p-[10px] flex flex-col font-bold w-[100%] bottom-[0px] ">
                        <p className="max-md:text-[13px]">Madame Web </p>
                        <div className="flex gap-[5px] align-center w-[100%] text-[10px] ">
                            
                            <img src={img7} className="my-[auto]"/>
                        <p>4.6 | Fantasy . History . Action</p>
                        </div>
                        </div>
                    </div>

                <div className="relative w-[200px] my-[auto] my-[auto] max-md:w-[150px]">
                        <div className="relative w-[200px] my-[auto] max-md:w-[150px]">
                        <img src={img8} />
                        </div>
                      

                        <div className="absolute text-white p-[10px] flex flex-col font-bold w-[100%] bottom-[0px] ">
                        <p className="max-md:text-[13px]">Napoleon</p>
                        <div className="flex gap-[5px] align-center w-[100%] text-[10px] ">
                        <img src={img7} className="my-[auto]"/>
                        <p>4.0 | Fantasy . Horror</p>
                        </div>
                        </div>
                    </div>



                    <div className="relative w-[200px] my-[auto] my-[auto] max-md:w-[150px]">
                        <div className="relative w-[200px] my-[auto] max-md:w-[150px]">
                        <img src={img10} />
                        </div>
                      

                        <div className="absolute text-white p-[10px] flex flex-col font-bold w-[100%] bottom-0 left-0 right-0  ">
                        <p className="max-md:text-[13px]">The killer</p>
                        <div className="flex gap-[5px] align-center w-[100%] text-[10px]">
                            <img src={img7} className="my-[auto]"/>
                        <p>3.6 | Fantasy . Sci-fi</p>
                        </div>
                        </div>
                    </div>




                    <div className="relative w-[200px] my-[auto] my-[auto] max-md:w-[150px]">
                        <div className="relative w-[200px] my-[auto] max-md:w-[150px]">
                        <img src={img10} />
                        </div>
                      

                        <div className="absolute text-white p-[10px] flex flex-col font-bold w-[100%] bottom-0 left-0 right-0  ">
                        <p className="max-md:text-[13px]">The killer</p>
                        <div className="flex gap-[5px] align-center w-[100%] text-[10px]">
                            <img src={img7} className="my-[auto]"/>
                        <p>3.6 | Fantasy . Sci-fi</p>
                        </div>
                        </div>
                    </div>

                    

                    
                    </div>



                
                </div>
       
            </div>
           </div>



        <div className="">
           
         <div className="mt-[30px] max-md:mt-[30px] pl-[50px] max-md:pl-[0px] max-md:m-[auto] max-md:w-[85%] my-[auto]  w-[100%] ">
          <p className="text-white font-bold text-[25px] max-md:text-[17px]">Movies</p>

           <div className=" mt-[30px] w-[100%] my-[auto] overflow-x-scroll flex  gap-[15px] ">

            <div className="flex w-[300px] max-md:w-[200px] flex-col text-white">

                <div className="w-[300px] max-md:w-[200px]">
                <img src={img16} className=""/>
                </div>
        
            <div className="flex flex-col w-[100%] mt-[10px]">
                <p className=" text-[14px] max-md:text-[13px]">The Flash</p>
                <div className="flex gap-[8px]">
                <img src={img7} className="my-[auto]"/>
                <p className=" text-[14px] max-md:text-[13px]">3.6 | Movie</p>
                </div>
               
            </div>

            </div>

              <div className="flex w-[300px] max-md:w-[200px] flex-col text-white">

                <div className="w-[300px] max-md:w-[200px]">
                <img src={img17}/>
                </div>
        
            <div className="flex flex-col w-[100%] mt-[10px]">
                <p className=" text-[14px] max-md:text-[13px]">Talk To Me</p>
                <div className="flex gap-[8px]">
                <img src={img7} className="my-[auto]"/>
                <p className=" text-[14px] max-md:text-[13px]">4.0 | Movie</p>
                </div>
               
            </div>
            </div>



              <div className="flex w-[300px] max-md:w-[200px] flex-col text-white">

                <div className="w-[300px] max-md:w-[200px]">
                <img src={img18}/>
                </div>
        
            <div className="flex flex-col w-[100%] mt-[10px]">
                <p className=" text-[14px] max-md:text-[13px]">Killers of the Flower Moon</p>
                <div className="flex gap-[8px]">
                <img src={img7} className="my-[auto]"/>
                <p className=" text-[14px] max-md:text-[13px]">4.6 | Movie</p>
                </div>
               
            </div>
            </div>


            
              <div className="flex w-[300px] max-md:w-[200px] flex-col text-white">

                <div className="w-[300px] max-md:w-[200px]">
                <img src={img19}/>
                </div>
        
            <div className="flex flex-col w-[100%] mt-[10px]">
                <p className=" text-[14px] max-md:text-[13px]">Aquaman</p>
                <div className="flex gap-[8px]">
                <img src={img7} className="my-[auto]"/>
                <p className=" text-[14px] max-md:text-[13px]">3.6 | Movie</p>
                </div>
               
            </div>
            </div>



            
              <div className="flex w-[300px] max-md:w-[200px] flex-col text-white">

                <div className="w-[300px] max-md:w-[200px]">
                <img src={img16} className=""/>
                </div>
        
            <div className="flex flex-col w-[100%] mt-[10px]">
                <p className=" text-[14px] max-md:text-[13px]">The Flash</p>
                <div className="flex gap-[8px]">
                <img src={img7} className="my-[auto]"/>
                <p className=" text-[14px] max-md:text-[13px]">3.6 | Movie</p>
                </div>
               
            </div>
            </div>

             </div>
            </div>
           </div>



           
<div className="mt-[30px] max-md:mt-[30px] pl-[50px] max-md:pl-[0px] max-md:m-[auto] max-md:w-[85%] my-[auto]  w-[100%] ">
<p className="text-white font-bold text-[25px] max-md:text-[17px]">Series</p>

           <div className=" mt-[30px] w-[100%] my-[auto] overflow-x-scroll flex  gap-[15px] ">

            <div className="flex w-[300px] max-md:w-[200px] flex-col text-white">

                <div className="w-[300px] max-md:w-[200px]">
                <img src={img20}/>
                </div>
        
            <div className="flex flex-col w-[100%] mt-[10px]">
                <p className=" text-[14px] max-md:text-[13px]">The Last of Us</p>
                <div className="flex gap-[8px]">
                <img src={img7} className="my-[auto]"/>
                <p className=" text-[14px] max-md:text-[13px]">4.6 | Movie</p>
                </div>
               
            </div>

            </div>

              <div className="flex w-[300px] max-md:w-[200px] flex-col text-white">

                <div className="w-[300px] max-md:w-[200px]">
                <img src={img21}/>
                </div>
        
            <div className="flex flex-col w-[100%] mt-[10px]">
                <p className=" text-[14px] max-md:text-[13px]">One Piece</p>
                <div className="flex gap-[8px]">
                <img src={img7} className="my-[auto]"/>
                <p className=" text-[14px] max-md:text-[13px]">4.0 | Movie</p>
                </div>
               
            </div>
            </div>



              <div className="flex w-[300px] max-md:w-[200px] flex-col text-white">

                <div className="w-[300px] max-md:w-[200px]">
                <img src={img22}/>
                </div>
        
            <div className="flex flex-col w-[100%] mt-[10px]">
                <p className=" text-[14px] max-md:text-[13px]">Twisted Metal</p>
                <div className="flex gap-[8px]">
                <img src={img7} className="my-[auto]"/>
                <p className=" text-[14px] max-md:text-[13px]">4.1 | Movie</p>
                </div>
               
            </div>
            </div>


            
              <div className="flex w-[300px] max-md:w-[200px] flex-col text-white">

                <div className="w-[300px] max-md:w-[200px]">
                <img src={img23}/>
                </div>
        
            <div className="flex flex-col w-[100%] mt-[10px]">
                <p className=" text-[14px] max-md:text-[13px]">Wilderness</p>
                <div className="flex gap-[8px]">
                <img src={img7} className="my-[auto]"/>
                <p className=" text-[14px] max-md:text-[13px]">3.6 | Movie</p>
                </div>
               
            </div>
            </div>



            
              <div className="flex w-[300px] max-md:w-[200px] flex-col text-white">

                <div className="w-[300px] max-md:w-[200px] ">
                <img src={img16} className=""/>
                </div>
        
            <div className="flex flex-col w-[100%] mt-[10px]">
                <p className=" text-[14px] max-md:text-[13px]">The Flash</p>
                <div className="flex gap-[8px]">
                <img src={img7} className="my-[auto]"/>
                <p className=" text-[14px] max-md:text-[13px]">3.6 | Movie</p>
                </div>
               
            </div>
            </div>

             </div>
            </div>







            
<div className="mt-[30px] max-md:mt-[30px] pl-[50px] max-md:pl-[0px] max-md:m-[auto] max-md:w-[85%] my-[auto]  w-[100%] ">
<p className="text-white font-bold text-[25px] max-md:text-[17px]">Comming Soon</p>

           <div className=" mt-[30px] w-[100%] my-[auto] overflow-x-scroll flex  gap-[15px] ">

            <div className="flex w-[300px] max-md:w-[200px] flex-col text-white">

                <div className="w-[300px] max-md:w-[200px] ">
                <img src={img24}/>
                </div>
        
            <div className="flex flex-col w-[100%] mt-[10px]">
                <p className="text-[14px] max-md:text-[13px]">Vanished the hunt for britians missing</p>
                <div className="flex gap-[8px]">
                <img src={img7} className="my-[auto]"/>
                <p className=" text-[14px] max-md:text-[13px]">4.6 | Movie</p>
                </div>
               
            </div>

            </div>

              <div className="flex w-[300px] max-md:w-[200px] flex-col text-white">

                <div className="w-[300px] max-md:w-[200px] ">
                <img src={img25}/>
                </div>
        
            <div className="flex flex-col w-[100%] mt-[10px]">
                <p className=" text-[14px] max-md:text-[13px]">Project Icon: The UK's Next Music Star</p>
                <div className="flex gap-[8px]">
                <img src={img7} className="my-[auto]"/>
                <p className=" text-[14px] max-md:text-[13px]">4.0 | Movie</p>
                </div>
               
            </div>
            </div>



              <div className="flex w-[300px] max-md:w-[200px] flex-col text-white">

                <div className="w-[300px] max-md:w-[200px] ">
                <img src={img26}/>
                </div>
        
            <div className="flex flex-col w-[100%] mt-[10px]">
                <p className=" text-[14px] max-md:text-[13px]">La La Land</p>
                <div className="flex gap-[8px]">
                <img src={img7} className="my-[auto]"/>
                <p className=" text-[14px] max-md:text-[13px]">4.1 | Movie</p>
                </div>
               
            </div>
            </div>


            
              <div className="flex w-[300px] max-md:w-[200px]  flex-col text-white">

                <div className="w-[300px] max-md:w-[200px] ">
                <img src={img27}/>
                </div>
        
            <div className="flex flex-col w-[100%] mt-[10px]">
                <p className=" text-[14px] max-md:text-[13px]">Secret Society of lies</p>
                <div className="flex gap-[8px]">
                <img src={img7} className="my-[auto]"/>
                <p className=" text-[14px] max-md:text-[13px]">3.6 | Movie</p>
                </div>
               
            </div>
            </div>



            
              <div className="flex w-[300px] max-md:w-[200px]  flex-col text-white">

                <div className="w-[300px] max-md:w-[200px] ">
                <img src={img16} className=""/>
                </div>
        
            <div className="flex flex-col w-[100%] mt-[10px]">
                <p className=" text-[14px] max-md:text-[13px]">The Flash</p>
                <div className="flex gap-[8px]">
                <img src={img7} className="my-[auto]"/>
                <p className=" text-[14px] max-md:text-[13px]">3.6 | Movie</p>
                </div>
               
            </div>
            </div>

             </div>
            </div>


            <div className="flex w-[90%] m-[auto] justify-between mt-[80px] max-md:gap-[30px] max-md:flex-col">
                <h1 className="text-white w-[40%] text-[35px] max-md:text-[25px] max-md:w-[90%] font-bold">Our Platform is trusted by many around the world, and its home to the best movies and series worldwide.</h1>
          <div className="flex flex-col justify-between max-md:gap-[20px]">
            <ul className="text-white flex gap-[10px]">
                <li>Home /</li>
                <li>Discover /</li>
                <li>Influence /</li>
                <li>Release /</li>
            </ul>

            <div className="flex gap-[30px]">
            <img src={img28}/>
            <img src={img29}/>
            <img src={img30}/>
            </div>
            </div>
        
        
        </div>


        <div className="flex w-[90%] m-[auto] max-md:flex-col  justify-between mt-[100px]">
        <ul className="text-white flex gap-[10px] max-md:m-[auto]">
                <li>Privacy policy</li>
                <li>Terms of service</li>
                <li>Language </li>
            </ul>
            <div className="flex max-md:m-[auto]">
            <img src={img31}/>
            <p className="text-white">2024</p>
            </div>
           
        </div>
          
        </div>
        </>
)
    
}

export default Home;