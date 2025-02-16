import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "../../components/post/Post";
import { featchData } from "../../redux/actions/action";
import { List,  Tabs } from "antd";

const { TabPane } = Tabs;

const PostsPage = () => {
  const { posts } = useSelector((state) => state.PostsReducer);
  const dispatch = useDispatch();
  const [currentCategory, setCurrentCategory] = useState("All");

  const getPosts = () => {
    dispatch(featchData());
  };

  useEffect(() => {
    getPosts();
  }, []);

  const groupedPosts = posts.reduce((acc, post) => {
    const category = post.category || "Uncategorized";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(post);
    return acc;
  }, {});

  const categories = ["All", ...Object.keys(groupedPosts)];

  const filteredPosts =
    currentCategory === "All" ? posts : groupedPosts[currentCategory];

  return (
    <div>
      <Tabs
        defaultActiveKey="All"
        onChange={(key) => setCurrentCategory(key)}
        style={{ marginBottom: 20 }}
      >
        {categories.map((category) => (
          <TabPane tab={category} key={category} />
        ))}
      </Tabs>
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={filteredPosts}
        renderItem={(post) => (
          <List.Item>
            <Post
              id={post.id}
              title={post.title}
              image={post.image}
              category={post.category}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default PostsPage;