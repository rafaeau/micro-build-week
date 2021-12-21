//Navbar/search feature -> Sefa
//Categories -> Sefa
//apikey = 87836ad8185b41b5bcf72d32081e2c63
import {Component} from 'react'
export default class Navbar extends Component{
        state={
            category:this.props.categories[0]
        }
         componentDidUpdate= async () => {
            try {
                let response = await fetch("https://newsapi.org/v2/everything?q=" + this.state.category + "&from=2021-11-21&sortBy=publishedAt&apiKey=87836ad8185b41b5bcf72d32081e2c63")
                let news = await response.json()
                console.log(news)
                
            }
            catch(err) {
                console.log(err)
            }
        }
       
    render(){
        return(
            <>
                <div className="container mt-3">
                    <div className ="row flex-nowrap pl-0  align-items-center">
                        <div className="col-4 pt-1 ">
                           <a className = 'text-muted' href='' style={{paddingLeft:'0px', alignItems:'flex-start'}}>Subscribe</a> 
                        </div>
                        <div className="col-4" id='blog-header' style={{'fontFamily':'"Playfair Display", Georgia, "Times New Roman",serif', 'fontSize':'2.25rem'}}>
                            The Strive Times
                        </div>
                        <div className="col-4">
                           <a href='#' className='text-muted'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" 
                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" 
                            stroke-linejoin="round" class="mx-3"><circle cx="10.5" cy="10.5" r="7.5"></circle>
                            <line x1="21" y1="21" x2="15.8" y2="15.8"></line>
                            </svg>
                           </a>
                           <button className='btn btn-sm btn-outline-secondary'>
                               Sign up
                           </button>
                        </div>
                    </div>
                    <hr />
                    <div className="container">
                        <div className="row flex-nowrap justify-content-between" id=''>
                        {
                            Object.values(this.props.categories).map((category)=>{
                                return (
                                    <ul style={{listStyleType:'none', cursor:'pointer'}}>
                                        <li onClick={()=>this.setState({category})} className='p-2 text-muted border-none'>{category}</li>
                                    </ul>
                                )
                            })
                        }
                        </div>
                    </div>
                    <hr />
                </div>
            </>
        )
    }}
