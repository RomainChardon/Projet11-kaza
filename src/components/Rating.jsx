import fullStar from '/src/assets/star-active.png'
import emptyStar from '/src/assets/star-inactive.png'

function Rating({rating}) {
    return (
        <div>
            {[...Array(5)].map((star, i) => {
                let rate = i + 1;
                <img key={i} src={rate <= rating ? fullStar : emptyStar} />
            })}
        </div>
    )

}

export default Rating
