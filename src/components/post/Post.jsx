import { Button, Card, Image } from "antd"
import { useNavigate } from "react-router-dom"

const Post = ({image, title, id, category}) => {

    const navigate = useNavigate()
  return (
    <div>
        <Card title={title} style={{
        width: 300,
        margin: 10}}>
            <Image src={image} width={250}  height={250}/>
            <p>Category: {category}</p>
            <Button size='large'
             style={{
                width: 250,
                marginTop: 30
            }}  onClick={() => navigate(`/postDetails/${id}`)}>Read more</Button>
        </Card>
    </div>
  )
}

export default Post