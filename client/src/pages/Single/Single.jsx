import SinglePost from "../../Components/SinglePost/SinglePost"
import About from "../../Components/About/About"
import '../Single/Single.css'

export default function Single()
{

    

    return(
        <>
            <div className="single">
                <SinglePost/>
                <About/>
            </div>
        
        </>
    )
}