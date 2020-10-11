const regularAPI = async () => {
  const data = await fetch('https://academy-award-oscar.herokuapp.com/actors/1');

  const result = await data.json()
  return result;
}

const graphqlAPI = async () => {
  const data = await fetch('https://academy-award-oscar.herokuapp.com/graphql', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
      mutation {createActor (input: {data: {name: "Ed Harris"}}){actor{name}}}
      `
    })
  });

  const result = await data.json()
  return result.data;
}

export default function Home(props) {
  console.log('regular API: ',props.regularAPI)
  console.log('GraphQL API: ',props.graphqlAPI)
  
  return (
    <div>
        <h1>Test</h1>
    </div>
  )
}

export const getServerSideProps = async () => {
  const myRegularAPI = await regularAPI();
  const myGraphqlAPI = await graphqlAPI();

  return { props: {regularAPI: myRegularAPI, graphqlAPI: myGraphqlAPI} };
}
