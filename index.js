import sesssion from 'next-session'

export const getServerSideProps = async function(req, res) {
  const user = req.session;
  if(!user) {
    return {
      redirect: {
        destination: '/test',
        permanent: false
      }
    }
  }
  return {
    props: {user}
  }
}

const Home = ({user}) => {
  return( 
    <div className="index">
      <h1>Your Profile</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
} 

export default Home;