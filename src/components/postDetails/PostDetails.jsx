import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { featchDataDetails } from "../../redux/actions/action"
import { useEffect } from "react"
import { Button, Card, Image, List } from "antd"
import styles from './postDetails.module.scss'


const PostDetails = () => {
    const { id } = useParams()
    const {post} = useSelector(state => state.PostsReducer)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const getPostDetails = () => {
        dispatch(featchDataDetails(id))
    }
    
    useEffect(() => {
        getPostDetails()
    }, [])
  return (
    <div>
        <List
            style={{display: 'flex', justifyContent: 'center'}}
            dataSource={post}
            renderItem={(post) => (
                <List.Item>
                    <div className={styles.card}>
                        <div className={styles.image}>
                            <Image src={post.image} width={300} height={300}/>
                        </div>
                        <div className={styles.details}>
                            <p className={styles.description}><b>Description :</b> {post.description}</p>
                            <p className={styles.price}>Price: {post.price}$</p>
                            <Button onClick={() => navigate(-1)} style={{background: '#086CF9' , color:'white'}}>Back</Button>
                        </div>
                    </div>
                    
                </List.Item>
            )}
         />
    </div>
  )
}

export default PostDetails