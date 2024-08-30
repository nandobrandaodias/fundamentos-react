import PropTypes from 'prop-types'

export default function CommentView({comment}){
    return(
        
        <div className='flex my-12 gap-x-4'>
            <div className='w-1/12'>
            <img src={comment.user.url} alt="" 
            className="rounded-lg"/>
            </div>
            <div className='bg-zinc-700 rounded-lg w-11/12 mt-2 p-6'>
                <div>
                    <strong className='block'>{comment.user.name}</strong>
                    <span className='block text-sm text-zinc-400'>Cerca de 2h</span>
                </div>

                <p className='my-4'>
                    {comment.comment}
                </p>
            </div>
        </div>
    )
}


CommentView.propTypes = {
    comment: PropTypes.object
}