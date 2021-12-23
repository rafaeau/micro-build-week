import { Component } from "react";


class Header extends Component{

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
        )
    }
}
export default Header