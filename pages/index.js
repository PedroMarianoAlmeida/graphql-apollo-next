const regularAPI = async () => {
  const data = await fetch('http://localhost:1337/teams');

  const result = await data.json()
  return result;
}

export default function Home(props) {
  console.log('regular API: ',props.regularAPI)
  
  return (
    <div>
        <h1>Test</h1>
    </div>
  )
}

export const getServerSideProps = async () => {
  const myRegularAPI = await regularAPI();


  return { props: {regularAPI: myRegularAPI} };
}
