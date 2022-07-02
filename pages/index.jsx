import { Post, Categories, Widget } from '../components';
import { getPosts } from '../services';
import { FeaturedPosts } from '../sections';

const Home = ({ posts }) => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <FeaturedPosts />
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          {posts.map((post, idx) => {
            return (<Post post={post.node} key={idx} />);
          })}
        </div>
        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8'>
            <Widget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home



export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts }
  }

}