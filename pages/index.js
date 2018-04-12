import Layout from '../components/MyLayout.js'
import Upload from '../components/Upload.js'
import Link from 'next/link'



const PostLink = (props) => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

export default () => (
    <div>
        <Layout>
            <h3>Share what you have brought</h3>
            <div className="container">
                <Upload />
            </div>
        </Layout>
    </div>
)


