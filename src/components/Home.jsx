import Profile from './Profile'
import Posts from './Posts'

export default function Home(){
    return(
        <>
        <div className="container flex py-2">
          <div className="w-3/12 p-4">
            <Profile />
          </div>
          <div className="w-9/12 p-4">
            <Posts />
          </div>
        </div>
      </>
    )
}