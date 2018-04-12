import Head from 'next/head'
import Header from './Header'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Layout = (props) => (
  <div>  
    <Head>
        <title>YUVVI</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>
        {/* <meta property="og:url" content="__OG_URL__" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="__OG_TITLE__" />
        <meta property="og:description" content="__OG_DESCRIPTION__" />
        <meta property="og:image" content="__OG_IMG__" /> */}
    </Head>  
    <div style={layoutStyle}>
        <Header />
        {props.children}
    </div>
  </div>
)

export default Layout