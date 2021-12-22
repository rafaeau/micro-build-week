//Navbar/search feature -> Sefa
//Categories -> Sefa
//apikey = 87836ad8185b41b5bcf72d32081e2c63
import {Component} from 'react'
import Search from './Search'
export default class Navbar extends Component{
        state={
            category:this.props.categories[0],
        }

        componentDidUpdate= async () => {
            try {
                let response = await fetch("https://newsapi.org/v2/everything?q=" + this.state.category + "&from=2021-11-22&sortBy=publishedAt&apiKey=87836ad8185b41b5bcf72d32081e2c63")
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
                            {<Search />}
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
