import PostAddForm from '@/entities/Post/components/PostAddForm';

const CreatePost = () => {
    return (
        <>
            <div className={'mb-2'}>Create a post with the following form: </div>
            <PostAddForm />
        </>
    )
}

export default CreatePost;
