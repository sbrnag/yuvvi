import Layout from '../components/MyLayout.js'
import Head from 'next/head'

const Content = (props) => (
    <div>
      <h1>{props.url.query.title}</h1>
      <p>This is the blog post content.</p>
    </div>
)

export default (props) => (
    <div>
        <Head>
            <title>{props.url.query.title}</title>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>
            <meta property="og:url" content="__OG_URL__" />
            <meta property="og:type" content="article" />
            <meta property="og:title" content={props.url.query.title} />
            <meta property="og:description" content="__OG_DESCRIPTION__" />
            <meta property="og:image" content="__OG_IMG__" />
        </Head>
        <Layout>
            <Content url={props.url} />
        </Layout>
    </div>
)