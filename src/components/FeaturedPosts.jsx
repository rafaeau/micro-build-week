import SingleFeaturedPost from './SingleFeaturedPost'

const FeaturedPosts = () => {
    return (
        <div className="my-3 d-flex justify-content-around">
            <div className='mr-4'>
                <SingleFeaturedPost article="19" region="World" color="rgb(0,123,255)" />
            </div>
            <div>
                <SingleFeaturedPost article="6" region="Australia" color="rgb(40,167,69)" />
            </div>
        </div>
    )
}

export default FeaturedPosts