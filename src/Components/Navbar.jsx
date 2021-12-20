//Navbar/search feature -> Sefa
//Categories -> Sefa
//apikey = 87836ad8185b41b5bcf72d32081e2c63
import {Component} from 'react'

export default class Navbar extends Component{
    
    async componentDidMount(){
        const url  = 'https://newsapi.org/v2/everything?q='+ this.props.Categories + '&from=2021-12-20&sortBy=popularity&apiKey=87836ad8185b41b5bcf72d32081e2c63'
        try {
            const response = await fetch(url,{
                headers:{
                    'content-type':'application/json',
                }
            })
            if(response.ok){
                const data = await response.json()
                console.log(data)
            }
        } catch (error) {
            console.log(error)
        }
    } 


    render(){
        return(
            <>
                <div className="container mt-3">
                    <div className ="row flex-nowrap justify-content-between align-items-center">
                        <div className="col-4 pt-1 justify-content-start">
                           <a className = 'text-muted' href=''>Subscribe</a> 
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
                                return (<a class='p-2 text-muted ' >{category}</a>)
                            })
                        }
                        </div>
                    </div>
                   
                    <hr />
                </div>
            </>
        )
    }
}