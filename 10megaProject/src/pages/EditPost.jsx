import React, {useState, useEffect} from 'react'
import { Container, PostForm } from '../components'
import appwriteService from '../appwrite/config'
import { useNavigate, useParams } from 'react-router-dom'


function EditPost() {
    const [post, setPosts] = useState(null) // eske andder aap empaty array bhi le sakte hai
    // mujhe yeha slug lagega jo url me available hoga
    // jo value url me hota hai to wha se value "useParam" ke trough nikalte hai
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect( (slug) => {
        if (slug) {
            appwriteService.getPost(slug).then( (post) => {
                if (post) {
                    setPosts(post)
                }
            })
        }else{
            navigate('/');
        }
    }, [slug, navigate])
    // agar yeha post available hai to conditional cheack karenge
  return post ? (
    <div className=' py-8'>
        <Container>
            <PostForm post={post}/>
        </Container>
    </div>
  ) : null
}

export default EditPost
