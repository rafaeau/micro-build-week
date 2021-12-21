import SingleFeaturedPost from './SingleFeaturedPost'

const FeaturedPosts = () => {
    return (
        <div className="my-5 d-flex justify-content-around">
        <SingleFeaturedPost article="2"/>
        <SingleFeaturedPost article="4"/>
        </div>
    )
}

export default FeaturedPosts