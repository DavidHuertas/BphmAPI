import Head from 'next/head'

const siteTitle = "Blasphemous API"

function Index() {
  return (
    <div className="container">
      <Head>
      <link rel="icon" href="/blasphemous-icon.png" />
        <title>Blasphemous API</title>
        <meta
          name="description"
          content="Blasphemous API Description"
        />
        <meta
          property="og:image"
          content={`/blasphemous-bg.jpg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main className='heroBanner'>
        <div className="container">
          <img className='apiLogo' src='/bphm-os-api.png'/>
          <div className='buttons'>
            <a className='myButton'
              href='https://docs.<project>.fanapis.com/docs'>
              Go to Documentation
            </a>
          </div>
        </div>
      </main>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
        .heroBanner {
          height: 100vh;
          background: url(blasphemous_bg.jpg) no-repeat top right;
          ///background: linear-gradient(to right, rgb(236, 0, 140), rgb(252, 103, 103));
          -webkit-background-size: cover;
          -moz-background-size: cover;
          -moz-background-size: cover;
          -moz-background-size: cover;
          background-size: cover;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        
        .apiLogo {
          margin-top: 10%;
          min-width: 350px;
          max-width: 25%;
          height: auto;
        }

        .buttons {
          margin-top: 32px;
        }

       a {
         color: #EDD075;
         text-decoration: none;
         letter-spacing: 2px;
         font-size: 22px;
         border: 2px solid #CC990055;
         text-align: center;
         padding: 24px 50px;
         transition: all .35s;
         border-radius: 15px;
       }

       a:hover {
        color: #4A2E00;
        font-size: 25px;
        border: 3px solid #755800;
        background: #CC990055
      }
        
      `}</style>
    </div>
  )
}

export default Index
