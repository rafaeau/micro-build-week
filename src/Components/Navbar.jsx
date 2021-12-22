//Navbar/search feature -> Sefa
//Categories -> Sefa
//apikey = 87836ad8185b41b5bcf72d32081e2c63
import {Component} from 'react'
import Search from './Search'

class Navbar extends Component{
    render(){
        return(
            <>
                <div className="container-fluid mt-3">
                    <div className ="row flex-nowrap pl-0  align-items-center">
                        <div className="col-4 pt-1 ">
                           <a className = 'text-muted' href='' style={{paddingLeft:'0px', alignItems:'flex-start'}}>Subscribe</a> 
                        </div>
                        <div className="col-4" id='blog-header' style={{'fontFamily':'"Playfair Display", Georgia, "Times New Roman",serif', 'fontSize':'2.25rem'}}>
                            The Strive Times
                        </div>
                        <div className="col-4">
                           <div>{<Search />} </div>
                           <button className='btn btn-sm btn-outline-secondary ml-auto'>
                               Sign up
                           </button>
                        </div>
                    </div>
                </div>
            </>
        )
    }}
export default Navbar