import SingleFeaturedPost from './SingleFeaturedPost'

const FeaturedPosts = () => {
    return (
        <div className="my-5 d-flex justify-content-around">
        <SingleFeaturedPost article="3" region="World" color="rgb(0,123,255)"/>
        <SingleFeaturedPost article="6" region="Australia" color="rgb(40,167,69)"/>
        </div>
    )
}

export default FeaturedPosts